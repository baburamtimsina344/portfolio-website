export const BRAND_GRADIENT =
  "linear-gradient(135deg, #0B2545 0%, #1A3A6B 55%, #0B2545 100%)";

export const BRAND_COLORS = {
  navyDark: "#0B2545",
  navyMid: "#1A3A6B",
  accent: "#00B894",
};

export const TYPOGRAPHY = {
  fontFamily: "var(--font-app)",
  sizes: {
    display: "var(--text-display)",
    sectionTitle: "var(--text-section-title)",
    cardTitle: "var(--text-card-title)",
    body: "var(--text-body)",
    bodySmall: "var(--text-body-sm)",
    caption: "var(--text-caption)",
    kicker: "var(--text-kicker)",
    micro: "var(--text-micro)",
  },
  lineHeights: {
    display: "var(--leading-display)",
    heading: "var(--leading-heading)",
    body: "var(--leading-body)",
    ui: "var(--leading-ui)",
  },
  tracking: {
    normal: "var(--tracking-normal)",
    label: "var(--tracking-label)",
    kicker: "var(--tracking-kicker)",
  },
  weights: {
    normal: "var(--font-normal)",
    medium: "var(--font-medium)",
    semibold: "var(--font-semibold)",
    bold: "var(--font-bold)",
    extraBold: "var(--font-extrabold)",
  },
} as const;
