import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Textarea } from "../components/ui/textarea";

interface AcademicStats {
  id: number;
  google_scholar_citations: number;
  google_scholar_h_index: number;
  google_scholar_i10_index: number;
  researchgate_publications: number;
  researchgate_reads: number;
  researchgate_citations: number;
  semantic_scholar_publications: number;
  semantic_scholar_h_index: number;
  semantic_scholar_citations: number;
  semantic_scholar_highly_influential_citations: number;
}

interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  open_access: boolean;
  citations: number;
  doi: string;
  abstract?: string;
  keywords?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  publisher?: string;
  citation?: string;
  download_url?: string;
  google_scholar_url?: string;
  researchgate_url?: string;
  related_research?: string;
}

interface HeroStats {
  id: number;
  years_experience: string;
  publications_count: string;
  awards_honors: string;
}

export function Admin() {
  const [user, setUser] = useState<any>(null);
  const [stats, setStats] = useState<AcademicStats | null>({
    id: 1,
    google_scholar_citations: 0,
    google_scholar_h_index: 0,
    google_scholar_i10_index: 0,
    researchgate_publications: 0,
    researchgate_reads: 0,
    researchgate_citations: 0,
    semantic_scholar_publications: 0,
    semantic_scholar_h_index: 0,
    semantic_scholar_citations: 0,
    semantic_scholar_highly_influential_citations: 0,
  });
  const [heroStats, setHeroStats] = useState<HeroStats | null>({
    id: 1,
    years_experience: "20+",
    publications_count: "50+",
    awards_honors: "15+",
  });
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [fetchingSemantic, setFetchingSemantic] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [editingPublication, setEditingPublication] =
    useState<Publication | null>(null);
  const [newPublication, setNewPublication] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    fetchData();
  }, []);

  const checkAuth = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      navigate("/login");
    } else {
      setUser(user);
    }
  };

  const fetchData = async () => {
    try {
      // Fetch academic stats
      const { data: statsData, error: statsError } = await supabase
        .from("academic_stats")
        .select("*")
        .single();

      if (statsError) {
        console.error("Error fetching academic stats:", statsError);
      }

      if (statsData) {
        setStats({
          id: 1,
          google_scholar_citations: statsData.google_scholar_citations ?? 0,
          google_scholar_h_index: statsData.google_scholar_h_index ?? 0,
          google_scholar_i10_index: statsData.google_scholar_i10_index ?? 0,
          researchgate_publications: statsData.researchgate_publications ?? 0,
          researchgate_reads: statsData.researchgate_reads ?? 0,
          researchgate_citations: statsData.researchgate_citations ?? 0,
          semantic_scholar_publications:
            statsData.semantic_scholar_publications ?? 0,
          semantic_scholar_h_index: statsData.semantic_scholar_h_index ?? 0,
          semantic_scholar_citations: statsData.semantic_scholar_citations ?? 0,
          semantic_scholar_highly_influential_citations:
            statsData.semantic_scholar_highly_influential_citations ?? 0,
        });
      }

      // Fetch hero stats
      try {
        const { data: heroData, error: heroError } = await supabase
          .from("hero_stats")
          .select("*")
          .single();

        if (heroError) {
          console.error("Error fetching hero stats:", heroError);
        }

        if (heroData) {
          setHeroStats({
            id: 1,
            years_experience: heroData.years_experience ?? "20+",
            publications_count: heroData.publications_count ?? "50+",
            awards_honors: heroData.awards_honors ?? "15+",
          });
        }
      } catch (error) {
        console.error("Error fetching hero stats:", error);
      }

      // Fetch publications
      const { data: pubsData } = await supabase
        .from("publications")
        .select("*")
        .order("year", { ascending: false });
      if (pubsData) setPublications(pubsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSemanticScholarStats = async () => {
    setFetchingSemantic(true);
    setMessage(null);

    try {
      const response = await fetch("/api/semantic-scholar");
      const data = await response.json();

      if (stats) {
        setStats({
          ...stats,
          semantic_scholar_publications: data.publications || 0,
          semantic_scholar_h_index: data.hIndex || 0,
          semantic_scholar_citations: data.citations || 0,
          semantic_scholar_highly_influential_citations:
            data.highlyInfluentialCitations || 0,
        });

        // Auto-save after fetching
        const updateData = {
          semantic_scholar_publications: data.publications || 0,
          semantic_scholar_h_index: data.hIndex || 0,
          semantic_scholar_citations: data.citations || 0,
          semantic_scholar_highly_influential_citations:
            data.highlyInfluentialCitations || 0,
          updated_at: new Date().toISOString(),
        };

        const { error } = await supabase
          .from("academic_stats")
          .update(updateData)
          .eq("id", stats.id);

        if (error) throw error;

        setMessage({
          type: "success",
          text: "Semantic Scholar stats fetched and saved successfully!",
        });
      }
    } catch (error: any) {
      console.error("Error fetching Semantic Scholar stats:", error);
      setMessage({
        type: "error",
        text:
          "Error fetching Semantic Scholar stats: " +
          (error?.message || "Unknown error"),
      });
    } finally {
      setFetchingSemantic(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const handleHeroStatsSave = async () => {
    if (!heroStats) return;

    setSaving(true);
    setMessage(null);

    try {
      const updateData = {
        years_experience: heroStats.years_experience,
        publications_count: heroStats.publications_count,
        awards_honors: heroStats.awards_honors,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from("hero_stats")
        .upsert({ id: 1, ...updateData });

      if (error) throw error;

      setMessage({
        type: "success",
        text: "Hero stats updated successfully!",
      });
    } catch (error: any) {
      setMessage({
        type: "error",
        text: "Error updating hero stats: " + error.message,
      });
    } finally {
      setSaving(false);
    }
  };

  const handleStatsSave = async () => {
    if (!stats) return;
    setSaving(true);
    setMessage(null);

    try {
      // Prepare the data to send to Supabase
      const updateData = {
        google_scholar_citations: Number(stats.google_scholar_citations),
        google_scholar_h_index: Number(stats.google_scholar_h_index),
        google_scholar_i10_index: Number(stats.google_scholar_i10_index),
        researchgate_publications: Number(stats.researchgate_publications),
        researchgate_reads: Number(stats.researchgate_reads),
        researchgate_citations: Number(stats.researchgate_citations),
        semantic_scholar_publications: Number(
          stats.semantic_scholar_publications,
        ),
        semantic_scholar_h_index: Number(stats.semantic_scholar_h_index),
        semantic_scholar_citations: Number(stats.semantic_scholar_citations),
        semantic_scholar_highly_influential_citations: Number(
          stats.semantic_scholar_highly_influential_citations,
        ),
        updated_at: new Date().toISOString(),
      };
      console.log("Data being sent to Supabase:", updateData);

      // Update all fields in single call
      const { data, error } = await supabase
        .from("academic_stats")
        .update(updateData)
        .eq("id", stats.id)
        .select();

      if (error) {
        console.error("Supabase Error Object:", error);
        throw error;
      }
      console.log("Supabase Update Successful:", data);

      setMessage({
        type: "success",
        text: "Stats saved successfully!",
      });
    } catch (error: any) {
      console.error("Full Error Saving Stats:", error);
      setMessage({
        type: "error",
        text: "Error saving stats: " + (error?.message || "Unknown error"),
      });
    }
    setSaving(false);
  };

  const setPubField = <K extends keyof Publication>(
    field: K,
    value: Publication[K],
  ) => {
    setEditingPublication((prev) =>
      prev ? { ...prev, [field]: value } : prev,
    );
  };

  const closePublicationDialog = () => {
    setEditingPublication(null);
    setNewPublication(false);
  };

  const handlePublicationSave = async (pub: Publication) => {
    setSaving(true);
    setMessage(null);

    const trimmed = {
      ...pub,
      title: pub.title.trim(),
      authors: pub.authors.trim(),
      journal: pub.journal.trim(),
      doi: pub.doi.trim(),
    };

    let saveError: { message: string } | null = null;

    if (newPublication) {
      const { error } = await supabase.from("publications").insert(trimmed);
      if (error) {
        saveError = error;
        setMessage({
          type: "error",
          text: "Error adding publication: " + error.message,
        });
      } else {
        setMessage({
          type: "success",
          text: "Publication added successfully!",
        });
      }
    } else {
      const { error } = await supabase
        .from("publications")
        .update(trimmed)
        .eq("id", pub.id);
      if (error) {
        saveError = error;
        setMessage({
          type: "error",
          text: "Error updating publication: " + error.message,
        });
      } else {
        setMessage({
          type: "success",
          text: "Publication updated successfully!",
        });
      }
    }

    setSaving(false);
    fetchData();

    if (!saveError) closePublicationDialog();
  };

  const handlePublicationDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this publication?")) return;
    setSaving(true);

    const { error } = await supabase.from("publications").delete().eq("id", id);
    if (error) {
      setMessage({
        type: "error",
        text: "Error deleting publication: " + error.message,
      });
    } else {
      setMessage({
        type: "success",
        text: "Publication deleted successfully!",
      });
    }
    setSaving(false);
    fetchData();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold sm:text-3xl">Admin Dashboard</h1>
        <div className="flex flex-wrap items-center gap-3">
          <span className="truncate text-sm text-muted-foreground">
            Welcome, {user?.email}
          </span>
          <Button onClick={handleLogout} variant="destructive">
            Logout
          </Button>
        </div>
      </div>

      {message && (
        <Alert
          variant={message.type === "success" ? "default" : "destructive"}
          className="mb-6"
        >
          <AlertDescription>{message.text}</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="stats" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="hero-stats">Hero Stats</TabsTrigger>
          <TabsTrigger value="stats">Academic Stats</TabsTrigger>
          <TabsTrigger value="publications">Publications</TabsTrigger>
        </TabsList>

        <TabsContent value="hero-stats">
          <Card>
            <CardHeader>
              <CardTitle>Edit Hero Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {heroStats && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label>Years Experience</Label>
                    <Input
                      value={heroStats.years_experience}
                      onChange={(e) =>
                        setHeroStats({
                          ...heroStats,
                          years_experience: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Publications Count</Label>
                    <Input
                      value={heroStats.publications_count}
                      onChange={(e) =>
                        setHeroStats({
                          ...heroStats,
                          publications_count: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Awards & Honors</Label>
                    <Input
                      value={heroStats.awards_honors}
                      onChange={(e) =>
                        setHeroStats({
                          ...heroStats,
                          awards_honors: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              )}
              <Button onClick={handleHeroStatsSave} disabled={saving}>
                {saving ? "Saving..." : "Save Hero Stats"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats">
          <Card>
            <CardHeader>
              <CardTitle>Edit Academic Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4 mb-4">
                <Button
                  onClick={fetchSemanticScholarStats}
                  disabled={fetchingSemantic}
                  variant="outline"
                >
                  {fetchingSemantic
                    ? "Fetching..."
                    : "Fetch from Semantic Scholar"}
                </Button>
                <span className="text-sm text-black self-center">
                  Auto-fetches and saves Semantic Scholar stats
                </span>
              </div>

              {stats && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Google Scholar</h3>
                    <div className="space-y-2">
                      <Label>Total Citations</Label>
                      <Input
                        type="number"
                        value={stats.google_scholar_citations}
                        onChange={(e) =>
                          setStats({
                            ...stats,
                            google_scholar_citations:
                              parseInt(e.target.value) || 0,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>h-index</Label>
                      <Input
                        type="number"
                        value={stats.google_scholar_h_index}
                        onChange={(e) =>
                          setStats({
                            ...stats,
                            google_scholar_h_index:
                              parseInt(e.target.value) || 0,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>i10-index</Label>
                      <Input
                        type="number"
                        value={stats.google_scholar_i10_index}
                        onChange={(e) =>
                          setStats({
                            ...stats,
                            google_scholar_i10_index:
                              parseInt(e.target.value) || 0,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">ResearchGate</h3>
                    <div className="space-y-2">
                      <Label>RI Score</Label>
                      {/* <Input
                        type="number"
                        value={stats.researchgate_publications}
                        onChange={(e) =>
                          setStats({
                            ...stats,
                            researchgate_publications:
                              parseInt(e.target.value) || 0,
                          })
                        }
                      /> */}
                       <Input
      type="number"
      value={stats.researchgate_publications}
      onChange={(e) =>
        setStats({
          ...stats,
          researchgate_publications:
            parseFloat(e.target.value) || 0,  // parseFloat allows decimals
        })
      }
      step="0.01"  // Optional: allows incrementing by 0.01 when using arrow buttons
    />
                    </div>
                    <div className="space-y-2">
                      <Label>Reads</Label>
                      <Input
                        type="number"
                        value={stats.researchgate_reads}
                        onChange={(e) =>
                          setStats({
                            ...stats,
                            researchgate_reads: parseInt(e.target.value) || 0,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Citations</Label>
                      <Input
                        type="number"
                        value={stats.researchgate_citations}
                        onChange={(e) =>
                          setStats({
                            ...stats,
                            researchgate_citations:
                              parseInt(e.target.value) || 0,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Semantic Scholar</h3>
                    <div className="space-y-2">
                      <Label>Publications</Label>
                      <Input
                        type="number"
                        value={stats.semantic_scholar_publications}
                        onChange={(e) =>
                          setStats({
                            ...stats,
                            semantic_scholar_publications:
                              parseInt(e.target.value) || 0,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>h-index</Label>
                      <Input
                        type="number"
                        value={stats.semantic_scholar_h_index}
                        onChange={(e) =>
                          setStats({
                            ...stats,
                            semantic_scholar_h_index:
                              parseInt(e.target.value) || 0,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Citations</Label>
                      <Input
                        type="number"
                        value={stats.semantic_scholar_citations}
                        onChange={(e) =>
                          setStats({
                            ...stats,
                            semantic_scholar_citations:
                              parseInt(e.target.value) || 0,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Highly Influential Citations</Label>
                      <Input
                        type="number"
                        value={
                          stats.semantic_scholar_highly_influential_citations
                        }
                        onChange={(e) =>
                          setStats({
                            ...stats,
                            semantic_scholar_highly_influential_citations:
                              parseInt(e.target.value) || 0,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              )}
              <Button onClick={handleStatsSave} disabled={saving}>
                {saving ? "Saving..." : "Save Stats"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="publications">
          <Card>
            <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <CardTitle>Manage Publications</CardTitle>
              <Button
                className="w-full sm:w-auto"
                onClick={() => {
                  setNewPublication(true);
                  setEditingPublication({
                    id: `pub-${Date.now()}`,
                    title: "",
                    authors: "",
                    journal: "",
                    year: new Date().getFullYear(),
                    open_access: false,
                    citations: 0,
                    doi: "",
                  });
                }}
              >
                Add Publication
              </Button>
            </CardHeader>
            <CardContent>
              <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
                <table className="w-full min-w-[560px] border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left py-3 px-4 border-b">Title</th>
                      <th className="text-left py-3 px-4 border-b">Authors</th>
                      <th className="text-left py-3 px-4 border-b">Year</th>
                      <th className="text-right py-3 px-4 border-b">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {publications.length === 0 ? (
                      <tr>
                        <td
                          colSpan={4}
                          className="py-8 text-center text-sm text-muted-foreground"
                        >
                          No publications yet. Use "Add Publication" to create
                          the first one.
                        </td>
                      </tr>
                    ) : (
                      publications.map((pub) => (
                        <tr key={pub.id}>
                          <td className="py-3 px-4 border-b font-medium">
                            {pub.title}
                          </td>
                          <td className="py-3 px-4 border-b">{pub.authors}</td>
                          <td className="py-3 px-4 border-b">{pub.year}</td>
                          <td className="py-3 px-4 border-b">
                            <div className="flex justify-end gap-2">
                              <Button
                                variant="secondary"
                                size="sm"
                                onClick={() => {
                                  setNewPublication(false);
                                  setEditingPublication(pub);
                                }}
                              >
                                Edit
                              </Button>
                              <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => handlePublicationDelete(pub.id)}
                                disabled={saving}
                              >
                                Delete
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Single Dialog for Add/Edit */}
          <Dialog open={!!editingPublication} onOpenChange={(open) => {
            if (!open) closePublicationDialog();
          }}>
            <DialogContent className="flex max-h-[85vh] max-h-[calc(100dvh-1.5rem)] w-[calc(100vw-1.5rem)] max-w-2xl flex-col gap-0 overflow-hidden p-0 sm:w-full">
              <DialogHeader className="shrink-0 gap-1 border-b px-4 py-3 sm:px-6 sm:py-4">
                <DialogTitle className="pr-8 text-base sm:text-lg">
                  {newPublication ? "Add Publication" : "Edit Publication"}
                </DialogTitle>
                <DialogDescription className="text-xs sm:text-sm">
                  Only title, authors, journal and year are required.
                </DialogDescription>
              </DialogHeader>

              {editingPublication && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handlePublicationSave(editingPublication);
                  }}
                  className="flex min-h-0 flex-1 flex-col"
                >
                  <div className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6">
                    <div className="space-y-2">
                      <Label htmlFor="pub-title">Title *</Label>
                      <Input
                        id="pub-title"
                        value={editingPublication.title}
                        onChange={(e) => setPubField("title", e.target.value)}
                        placeholder="Full title of the publication"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pub-authors">Authors *</Label>
                      <Input
                        id="pub-authors"
                        value={editingPublication.authors}
                        onChange={(e) => setPubField("authors", e.target.value)}
                        placeholder="Surname, Initials (comma separated)"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pub-abstract">Abstract</Label>
                      <Textarea
                        id="pub-abstract"
                        className="min-h-[90px]"
                        value={editingPublication.abstract || ""}
                        onChange={(e) => setPubField("abstract", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pub-keywords">Keywords</Label>
                      <Input
                        id="pub-keywords"
                        value={editingPublication.keywords || ""}
                        onChange={(e) => setPubField("keywords", e.target.value)}
                        placeholder="Comma separated"
                      />
                    </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="pub-journal">Journal *</Label>
                      <Input
                        id="pub-journal"
                        value={editingPublication.journal}
                        onChange={(e) => setPubField("journal", e.target.value)}
                        placeholder="Journal or conference name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pub-publisher">Publisher</Label>
                      <Input
                        id="pub-publisher"
                        value={editingPublication.publisher || ""}
                        onChange={(e) =>
                          setPubField("publisher", e.target.value)
                        }
                        placeholder="Publishing house"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="space-y-2">
                      <Label htmlFor="pub-volume">Volume</Label>
                      <Input
                        id="pub-volume"
                        value={editingPublication.volume || ""}
                        onChange={(e) => setPubField("volume", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pub-issue">Issue</Label>
                      <Input
                        id="pub-issue"
                        value={editingPublication.issue || ""}
                        onChange={(e) => setPubField("issue", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pub-pages">Pages</Label>
                      <Input
                        id="pub-pages"
                        value={editingPublication.pages || ""}
                        onChange={(e) => setPubField("pages", e.target.value)}
                        placeholder="e.g. 12-24"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pub-year">Year *</Label>
                      <Input
                        id="pub-year"
                        type="number"
                        inputMode="numeric"
                        value={editingPublication.year}
                        onChange={(e) =>
                          setPubField(
                            "year",
                            parseInt(e.target.value) ||
                              new Date().getFullYear(),
                          )
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="pub-citations">Citations</Label>
                      <Input
                        id="pub-citations"
                        type="number"
                        inputMode="numeric"
                        min={0}
                        value={editingPublication.citations}
                        onChange={(e) =>
                          setPubField("citations", parseInt(e.target.value) || 0)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pub-doi">DOI</Label>
                      <Input
                        id="pub-doi"
                        value={editingPublication.doi || ""}
                        onChange={(e) => setPubField("doi", e.target.value)}
                        placeholder="10.xxxx/xxxxx"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pub-citation">Citation (Formatted)</Label>
                    <Textarea
                      id="pub-citation"
                      className="min-h-[80px]"
                      value={editingPublication.citation || ""}
                      onChange={(e) => setPubField("citation", e.target.value)}
                      placeholder="Timšina, B. (2025). Title. Journal, 12(3), 45-67."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pub-download-url">Download / PDF URL</Label>
                    <Input
                      id="pub-download-url"
                      type="url"
                      inputMode="url"
                      value={editingPublication.download_url || ""}
                      onChange={(e) =>
                        setPubField("download_url", e.target.value)
                      }
                      placeholder="https://..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pub-scholar-url">
                      Google Scholar URL
                    </Label>
                    <Input
                      id="pub-scholar-url"
                      type="url"
                      inputMode="url"
                      value={editingPublication.google_scholar_url || ""}
                      onChange={(e) =>
                        setPubField("google_scholar_url", e.target.value)
                      }
                      placeholder="https://scholar.google.com/..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pub-rg-url">ResearchGate URL</Label>
                    <Input
                      id="pub-rg-url"
                      type="url"
                      inputMode="url"
                      value={editingPublication.researchgate_url || ""}
                      onChange={(e) =>
                        setPubField("researchgate_url", e.target.value)
                      }
                      placeholder="https://www.researchgate.net/..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pub-related">Related Research</Label>
                    <Textarea
                      id="pub-related"
                      className="min-h-[80px]"
                      value={editingPublication.related_research || ""}
                      onChange={(e) =>
                        setPubField("related_research", e.target.value)
                      }
                      placeholder="Notes or related research info"
                    />
                  </div>
                  <label
                    htmlFor="pub-open-access"
                    className="flex cursor-pointer items-center gap-3 rounded-lg border p-3 hover:bg-muted/50"
                  >
                    <input
                      id="pub-open-access"
                      type="checkbox"
                      checked={editingPublication.open_access}
                      onChange={(e) =>
                        setPubField("open_access", e.target.checked)
                      }
                      className="h-4 w-4 shrink-0 accent-primary"
                    />
                    <span className="space-y-0.5">
                      <span className="type-label block cursor-pointer">
                        Open Access
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        Marks this publication as freely available to read.
                      </span>
                    </span>
                  </label>
                  </div>

                  <div className="flex shrink-0 flex-col-reverse gap-2 border-t bg-muted/40 px-4 py-3 sm:flex-row sm:justify-end sm:px-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={closePublicationDialog}
                      disabled={saving}
                      className="w-full sm:w-auto"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={saving}
                      className="w-full sm:w-auto"
                    >
                      {saving
                        ? "Saving..."
                        : newPublication
                          ? "Add Publication"
                          : "Save Changes"}
                    </Button>
                  </div>
                </form>
              )}
            </DialogContent>
          </Dialog>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Admin;
