"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Defer chat widget hydration until after the first paint to keep LCP
// off the critical path. The widget is non-essential for SEO/E-E-A-T
// signals and should not block initial rendering.
const AIChatWidget = dynamic(() => import("./AIChatWidget"), {
  ssr: false,
  loading: () => null,
});

export default function AIChatLazy() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Wait for next paint + idle to mount the widget. Falls back to
    // setTimeout for browsers without requestIdleCallback (Safari).
    const idle =
      typeof window !== "undefined" &&
      "requestIdleCallback" in window
        ? (cb: () => void) =>
            (window as unknown as {
              requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number;
            }).requestIdleCallback(cb, { timeout: 2000 })
        : (cb: () => void) => setTimeout(cb, 1500);

    const handle = idle(() => setReady(true));

    return () => {
      if (
        typeof window !== "undefined" &&
        "cancelIdleCallback" in window &&
        typeof handle === "number"
      ) {
        (window as unknown as {
          cancelIdleCallback: (id: number) => void;
        }).cancelIdleCallback(handle);
      }
    };
  }, []);

  if (!ready) return null;
  return <AIChatWidget />;
}
