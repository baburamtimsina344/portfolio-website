"use client";

import { useEffect } from "react";

const SESSION_FLAG = "visit_tracked_session";

/**
 * Fires a single POST to /api/track-visit per browser session
 * (sessionStorage-gated so refreshes/navigations don't double-count).
 */
export function useTrackVisit() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_FLAG)) return;
      sessionStorage.setItem(SESSION_FLAG, "1");
    } catch {
      // sessionStorage unavailable (e.g. private browsing) — track anyway
    }

    fetch("/api/track-visit", { method: "POST" }).catch(() => {
      // fail silently — visitor tracking should never break the page
    });
  }, []);
}
