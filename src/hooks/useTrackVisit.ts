"use client";

import { useEffect } from "react";

const SESSION_FLAG = "visit_tracked_session";

/**
 * Fires a single POST to /api/track-visit per browser session
 * (sessionStorage-gated so refreshes/navigations don't double-count).
 */
export function useTrackVisit() {
  useEffect(() => {
    // Check if we're running locally
    const isLocal = typeof window !== "undefined" && 
      (window.location.hostname === "localhost" || 
       window.location.hostname === "127.0.0.1");

    if (isLocal) return; // Skip tracking entirely on local dev!

    // Check session storage first
    let hasTracked = false;
    try {
      hasTracked = !!sessionStorage.getItem(SESSION_FLAG);
    } catch {
      // Ignore session storage errors
    }

    if (hasTracked) return;

    // Use a try/catch around everything, including fetch, to suppress all errors
    (async () => {
      try {
        // Create an AbortController so we can abort if needed (optional but safe)
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
        
        const response = await fetch("/api/track-visit", { 
          method: "POST",
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);

        if (!response.ok) return;
        
        const data = (await response.json().catch(() => null)) as { ok?: boolean } | null;
        if (!data?.ok) return;

        try {
          sessionStorage.setItem(SESSION_FLAG, "1");
        } catch {
          // Ignore storage failures
        }
      } catch {
        // Fail completely silently - no console errors allowed!
      }
    })();
  }, []);
}
