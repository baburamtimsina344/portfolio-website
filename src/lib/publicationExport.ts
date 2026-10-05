/**
 * Client-side export helpers for scholarly publications.
 *
 * Downloads, in order of preference:
 *   1. The publisher PDF, when the record carries a direct file URL.
 *   2. A standards-compliant citation file (BibTeX / RIS / plain text) generated
 *      from the record metadata — always available, even for paywalled items.
 *
 * No external dependencies: everything is built from the Blob + anchor APIs.
 */

export type PublicationRecord = {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  open_access?: boolean | null;
  citations?: number | null;
  doi?: string | null;
  abstract?: string | null;
  keywords?: string | string[] | null;
  publisher?: string | null;
  volume?: string | number | null;
  issue?: string | number | null;
  pages?: string | null;
  isbn?: string | null;
  pdf_url?: string | null;
  file_url?: string | null;
  document_url?: string | null;
  download_url?: string | null;
  url?: string | null;
  link?: string | null;
  google_scholar_url?: string | null;
  researchgate_url?: string | null;
  citation?: string | null;
  related_research?: string | null;
};

export type CitationFormat = "bibtex" | "ris" | "text";

export type DownloadOutcome = {
  ok: boolean;
  message: string;
  kind: "document" | "citation" | "link";
};

const DOI_PREFIXES = [
  "https://doi.org/",
  "http://doi.org/",
  "https://dx.doi.org/",
  "http://dx.doi.org/",
  "doi:",
];

const FILE_URL_KEYS = [
  "pdf_url",
  "file_url",
  "document_url",
  "download_url",
  "url",
  "link",
] as const;

// ─── Helpers ──────────────────────────────────────────────────────────────

function text(value: unknown): string {
  if (value === null || value === undefined) return "";
  if (Array.isArray(value)) return value.filter(Boolean).join(", ");
  return String(value);
}

export function slugify(value: string, maxLength = 60): string {
  return (
    value
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, maxLength)
      .replace(/-+$/g, "") || "publication"
  );
}

function stripBraces(value: string): string {
  return value.replace(/[{}]/g, "").replace(/\s+/g, " ").trim();
}

export function cleanDoi(value: string | null | undefined): string {
  if (!value) return "";
  let doi = value.trim();
  for (const prefix of DOI_PREFIXES) {
    if (doi.toLowerCase().startsWith(prefix)) {
      doi = doi.slice(prefix.length).trim();
      break;
    }
  }
  return doi.replace(/^doi:\s*/i, "").trim();
}

export function resolveDoiUrl(value: string | null | undefined): string | null {
  const doi = cleanDoi(value);
  if (!doi) return null;
  if (/^https?:\/\//i.test(value ?? "")) return String(value);
  return `https://doi.org/${doi}`;
}

/** First usable landing/document URL stored on the record. */
export function resolveDocumentUrl(pub: PublicationRecord): string | null {
  for (const key of FILE_URL_KEYS) {
    const candidate = text(pub[key]).trim();
    if (/^https?:\/\//i.test(candidate)) return candidate;
  }
  return resolveDoiUrl(pub.doi);
}

export function isDirectFileUrl(url: string | null | undefined): boolean {
  if (!url) return false;
  return /\.pdf(\?|#|$)/i.test(url) || /\/pdf(\/|$|\?)/i.test(url);
}

function splitAuthors(authors: string): string[] {
  return stripBraces(authors)
    .split(/\s*(?:;|\band\b)\s*|,\s*(?=[A-Z])/i)
    .map((author) => author.trim())
    .filter((author) => author.length > 1 && author !== "et al");
}

function surnameOf(author: string): string {
  const parts = author.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  const last = parts[parts.length - 1];
  return last.replace(/[^A-Za-z'-]/g, "") || last;
}

/** "P. Koirala, B. Timsina" -> "Koirala, P." */
function invertedName(author: string): string {
  const parts = author.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return author;
  if (parts.length === 1) return parts[0];
  const surname = parts[parts.length - 1];
  const initials = parts.slice(0, -1).map((part) => `${part.charAt(0).toUpperCase()}.`);
  return `${surname}, ${initials.join(" ")}`.trim();
}

function bibtexType(pub: PublicationRecord): string {
  const venue = text(pub.journal).toLowerCase();
  if (cleanDoi(pub.doi).startsWith("978-") || text(pub.isbn)) return "book";
  if (/conference|proceedings|symposium|congress|workshop|meeting/.test(venue)) {
    return "inproceedings";
  }
  if (/monograph|book series|volume/.test(venue)) return "book";
  return "article";
}

function risType(pub: PublicationRecord): string {
  const type = bibtexType(pub);
  if (type === "book") return "BOOK";
  if (type === "inproceedings") return "CPAPER";
  return "JOUR";
}

export function citationKey(pub: PublicationRecord): string {
  const authors = splitAuthors(text(pub.authors));
  const surname = authors.length > 0 ? surnameOf(authors[0]) : "publication";
  const firstWord = stripBraces(text(pub.title))
    .split(/\s+/)
    .find((word) => word.length > 3 && /^[A-Za-z]/.test(word));
  const topic = firstWord ? firstWord.charAt(0).toUpperCase() + firstWord.slice(1) : "";
  const year = Number.isFinite(pub.year) ? pub.year : "";
  return `${slugify(surname, 24)}${year}${slugify(topic, 16).replace(/-/g, "")}`;
}

function bibtexFileBase(pub: PublicationRecord): string {
  const authors = splitAuthors(text(pub.authors));
  const surname = authors.length > 0 ? surnameOf(authors[0]) : "publication";
  const shortTitle = stripBraces(text(pub.title)).split(/\s+/).slice(0, 4).join(" ");
  return `${slugify(surname, 24)}-${pub.year}-${slugify(shortTitle, 40)}`;
}

export function publicationFileBase(pub: PublicationRecord): string {
  return bibtexFileBase(pub);
}

// ─── Citation builders ────────────────────────────────────────────────────

export function buildBibTeX(pub: PublicationRecord): string {
  const type = bibtexType(pub);
  // For books and monographs the `journal` column carries the imprint.
  const imprint = stripBraces(text(pub.publisher) || text(pub.journal));
  const fields: string[] = [
    `  title        = {{${stripBraces(text(pub.title))}}}`,
    `  author       = {${splitAuthors(text(pub.authors)).join(" and ")}}`,
  ];

  if (type === "book") {
    fields.push(`  publisher    = {${imprint}}`);
  } else {
    fields.push(`  journal      = {${stripBraces(text(pub.journal))}}`);
  }

  fields.push(`  year         = {${pub.year}}`);

  if (text(pub.volume)) fields.push(`  volume       = {${text(pub.volume)}}`);
  if (text(pub.issue)) fields.push(`  number       = {${text(pub.issue)}}`);
  if (text(pub.pages)) fields.push(`  pages        = {${text(pub.pages)}}`);
  if (text(pub.isbn)) fields.push(`  isbn         = {${text(pub.isbn)}}`);
  if (text(pub.publisher) && type !== "book") {
    fields.push(`  publisher    = {${stripBraces(text(pub.publisher))}}`);
  }
  if (cleanDoi(pub.doi)) fields.push(`  doi          = {${cleanDoi(pub.doi)}}`);

  const url = resolveDocumentUrl(pub);
  if (url) fields.push(`  url          = {${url}}`);

  if (text(pub.abstract)) {
    fields.push(`  abstract     = {${stripBraces(text(pub.abstract))}}`);
  }
  if (text(pub.keywords)) {
    fields.push(`  keywords     = {${stripBraces(text(pub.keywords))}}`);
  }
  if (pub.open_access) fields.push(`  note         = {Open Access}`);

  return `@${type}{${citationKey(pub)},\n${fields.join(",\n")}\n}`;
}

export function buildRis(pub: PublicationRecord): string {
  const lines: string[] = [`TY  - ${risType(pub)}`, `TI  - ${stripBraces(text(pub.title))}`];

  for (const author of splitAuthors(text(pub.authors))) {
    lines.push(`AU  - ${invertedName(author)}`);
  }

  lines.push(`PY  - ${pub.year}`);

  if (bibtexType(pub) === "book") {
    lines.push(`PB  - ${stripBraces(text(pub.publisher) || text(pub.journal))}`);
  } else {
    lines.push(`JO  - ${stripBraces(text(pub.journal))}`);
  }

  if (text(pub.volume)) lines.push(`VL  - ${text(pub.volume)}`);
  if (text(pub.issue)) lines.push(`IS  - ${text(pub.issue)}`);
  if (text(pub.pages)) {
    const [start, end] = text(pub.pages).split(/[-–—]+/);
    if (start) lines.push(`SP  - ${start.trim()}`);
    if (end) lines.push(`EP  - ${end.trim()}`);
  }
  if (text(pub.abstract)) lines.push(`AB  - ${stripBraces(text(pub.abstract))}`);
  if (text(pub.keywords)) lines.push(`KW  - ${stripBraces(text(pub.keywords))}`);
  if (cleanDoi(pub.doi)) lines.push(`DO  - ${cleanDoi(pub.doi)}`);

  const url = resolveDocumentUrl(pub);
  if (url) lines.push(`UR  - ${url}`);
  lines.push("ER  - ", "");

  return lines.join("\n");
}

export function buildFormattedCitation(pub: PublicationRecord): string {
  const authors = splitAuthors(text(pub.authors));
  const surname = authors.length > 0 ? surnameOf(authors[0]) : "";
  const rest = authors.length > 1 ? ", et al." : "";
  const doiUrl = resolveDoiUrl(pub.doi);

  const lines = [
    `${surname}${rest} (${pub.year}). ${stripBraces(text(pub.title))}. ${stripBraces(text(pub.journal))}.`,
  ];

  if (pub.citations !== null && pub.citations !== undefined) {
    lines.push(`Citations: ${pub.citations}`);
  }
  if (doiUrl) lines.push(`DOI: ${doiUrl}`);
  if (pub.open_access) lines.push("License: Open Access");

  return lines.join("\n");
}

export function buildBibTeXLibrary(publications: PublicationRecord[]): string {
  const header = [
    "% Scholarly Publications",
    `% Exported ${new Date().toISOString().slice(0, 10)}`,
    `% ${publications.length} records`,
    "",
    "",
  ].join("\n");

  return header + publications.map((pub) => buildBibTeX(pub)).join("\n\n") + "\n";
}

// ─── File plumbing ────────────────────────────────────────────────────────

export function downloadBlob(content: BlobPart, filename: string, mimeType: string): void {
  const blob = content instanceof Blob ? content : new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.rel = "noopener";
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 4000);
}

export function openExternal(url: string): void {
  window.open(url, "_blank", "noopener,noreferrer");
}

async function fetchAndSaveRemoteFile(url: string, filename: string): Promise<boolean> {
  try {
    const response = await fetch(url, { mode: "cors", credentials: "omit" });
    if (!response.ok) return false;

    const contentType = response.headers.get("content-type") ?? "";
    if (/text\/html/i.test(contentType)) return false;

    const blob = await response.blob();
    if (blob.size === 0) return false;

    downloadBlob(blob, filename, contentType || "application/octet-stream");
    return true;
  } catch {
    return false;
  }
}

export function citationExtension(format: CitationFormat): string {
  if (format === "ris") return "ris";
  if (format === "text") return "txt";
  return "bib";
}

export function downloadCitation(pub: PublicationRecord, format: CitationFormat = "bibtex"): DownloadOutcome {
  const base = publicationFileBase(pub);
  const extension = citationExtension(format);

  if (format === "ris") {
    downloadBlob(buildRis(pub), `${base}.${extension}`, "application/x-research-info-systems");
  } else if (format === "text") {
    downloadBlob(buildFormattedCitation(pub), `${base}.${extension}`, "text/plain;charset=utf-8");
  } else {
    downloadBlob(buildBibTeX(pub), `${base}.${extension}`, "application/x-bibtex;charset=utf-8");
  }

  const label = format === "ris" ? "RIS" : format === "text" ? "citation" : "BibTeX";
  return { ok: true, kind: "citation", message: `${label} citation downloaded` };
}

export function downloadPublicationLibrary(publications: PublicationRecord[]): DownloadOutcome {
  if (publications.length === 0) {
    return { ok: false, kind: "citation", message: "No publications to export yet" };
  }

  downloadBlob(
    buildBibTeXLibrary(publications),
    `scholarly-publications-${new Date().toISOString().slice(0, 10)}.bib`,
    "application/x-bibtex;charset=utf-8",
  );

  return {
    ok: true,
    kind: "citation",
    message: `${publications.length} publications exported to BibTeX`,
  };
}

/**
 * Primary "Download PDF" action for a single publication.
 * Saves the file directly when the record carries a direct PDF link, otherwise
 * hands the visitor to the publisher landing page (DOI), and only falls back to
 * the generated citation when the record has no resolvable link at all.
 */
export async function downloadPublication(pub: PublicationRecord): Promise<DownloadOutcome> {
  const base = publicationFileBase(pub);
  const url = resolveDocumentUrl(pub);

  if (url && isDirectFileUrl(url)) {
    const saved = await fetchAndSaveRemoteFile(url, `${base}.pdf`);
    if (saved) {
      return { ok: true, kind: "document", message: "Document downloaded" };
    }
  }

  const landingPage = resolveDoiUrl(pub.doi);
  if (landingPage) {
    openExternal(landingPage);
    return {
      ok: true,
      kind: "link",
      message: "Opened the publisher page — save the PDF from there",
    };
  }

  const outcome = downloadCitation(pub, "bibtex");
  return {
    ...outcome,
    message: "No document link available — BibTeX citation downloaded",
  };
}