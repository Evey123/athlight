"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/lib/useIsMobile";

const bars = [
  { label: "Outer shell", val: "100%", pct: 100 },
  { label: "Interior foam padding", val: "97%", pct: 97 },
  { label: "Chin cup surface", val: "99%", pct: 99 },
  { label: "Strap & buckle assembly", val: "94%", pct: 94 },
];

export default function Chamber() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isMobile = useIsMobile();

  return (
    <section ref={ref} style={{ padding: isMobile ? "56px 24px" : "72px 56px", borderBottom: "1px solid var(--border)", width: "100%" }}>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 80, alignItems: "start" }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dim)", marginBottom: 20 }}>Reflective chamber engineering</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, fontWeight: 400, color: "var(--text)", marginBottom: 16, lineHeight: 1.15 }}>No shadow zones.</h2>
          <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.8, fontWeight: 300 }}>
            Athlight&apos;s interior is lined with high-reflectivity PTFE, which bounces UV-C light around the chamber until every exposed surface receives a lethal dose — including interior padding, straps, and buckles where bacteria typically accumulate.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dim)", marginBottom: 20 }}>Coverage by surface</p>
          {bars.map((b, i) => (
            <div key={b.label} style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 13, color: "var(--muted)" }}>{b.label}</span>
                <span style={{ fontSize: 13, color: "var(--text)", fontWeight: 500 }}>{b.val}</span>
              </div>
              <div style={{ height: 1, background: "var(--border-mid)", position: "relative" }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${b.pct}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                  style={{ height: 1, background: "var(--text)", position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
