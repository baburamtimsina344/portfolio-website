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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Alert, AlertDescription } from "../components/ui/alert";

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

      console.log("Academic stats data from Supabase:", statsData);

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

  const handlePublicationSave = async (pub: Publication) => {
    setSaving(true);
    setMessage(null);

    if (newPublication) {
      const { error } = await supabase.from("publications").insert(pub);
      if (error) {
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
        .update(pub)
        .eq("id", pub.id);
      if (error) {
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
    setEditingPublication(null);
    setNewPublication(false);
    fetchData();
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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <span>Welcome, {user?.email}</span>
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
        <TabsList>
          <TabsTrigger value="stats">Academic Stats</TabsTrigger>
          <TabsTrigger value="publications">Publications</TabsTrigger>
        </TabsList>

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
                <span className="text-sm text-gray-500 self-center">
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
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Manage Publications</CardTitle>
              <Button
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
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-3 px-4 border-b">Title</th>
                    <th className="text-left py-3 px-4 border-b">Authors</th>
                    <th className="text-left py-3 px-4 border-b">Year</th>
                    <th className="text-left py-3 px-4 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {publications.map((pub) => (
                    <tr key={pub.id}>
                      <td className="py-3 px-4 border-b font-medium">
                        {pub.title}
                      </td>
                      <td className="py-3 px-4 border-b">{pub.authors}</td>
                      <td className="py-3 px-4 border-b">{pub.year}</td>
                      <td className="py-3 px-4 border-b">
                        <div className="flex gap-2">
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
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Single Dialog for Add/Edit */}
          <Dialog
            open={!!editingPublication}
            onOpenChange={(open) => {
              if (!open) {
                setEditingPublication(null);
                setNewPublication(false);
              }
            }}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {newPublication ? "Add" : "Edit"} Publication
                </DialogTitle>
              </DialogHeader>
              {editingPublication && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handlePublicationSave(editingPublication);
                  }}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label>Title</Label>
                    <Input
                      value={editingPublication.title}
                      onChange={(e) =>
                        setEditingPublication({
                          ...editingPublication,
                          title: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Authors</Label>
                    <Input
                      value={editingPublication.authors}
                      onChange={(e) =>
                        setEditingPublication({
                          ...editingPublication,
                          authors: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Journal</Label>
                    <Input
                      value={editingPublication.journal}
                      onChange={(e) =>
                        setEditingPublication({
                          ...editingPublication,
                          journal: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Year</Label>
                    <Input
                      type="number"
                      value={editingPublication.year}
                      onChange={(e) =>
                        setEditingPublication({
                          ...editingPublication,
                          year:
                            parseInt(e.target.value) ||
                            new Date().getFullYear(),
                        })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Citations</Label>
                    <Input
                      type="number"
                      value={editingPublication.citations}
                      onChange={(e) =>
                        setEditingPublication({
                          ...editingPublication,
                          citations: parseInt(e.target.value) || 0,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>DOI</Label>
                    <Input
                      value={editingPublication.doi}
                      onChange={(e) =>
                        setEditingPublication({
                          ...editingPublication,
                          doi: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={editingPublication.open_access}
                      onChange={(e) =>
                        setEditingPublication({
                          ...editingPublication,
                          open_access: e.target.checked,
                        })
                      }
                      className="h-4 w-4"
                    />
                    <Label>Open Access</Label>
                  </div>
                  <Button type="submit" disabled={saving}>
                    {saving ? "Saving..." : "Save"}
                  </Button>
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
