"use client";
import { useEffect, useState } from "react";

/**
 * Returns true when the viewport is at or below the given breakpoint.
 * Defaults to false on the server / first render to avoid hydration
 * mismatch, then updates on mount and on resize.
 */
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}
