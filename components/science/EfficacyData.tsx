"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pathogens = [
  { name: "Staphylococcus aureus", sub: "Most common athletic skin pathogen", pct: 99.9 },
  { name: "MRSA", sub: "Methicillin-resistant staph", pct: 99.8 },
  { name: "E. coli", sub: "Common locker room contaminant", pct: 99.9 },
  { name: "Trichophyton", sub: "Athlete's foot fungus", pct: 98.5 },
  { name: "Pseudomonas", sub: "Linked to skin & ear infections", pct: 99.7 },
  { name: "Rhinovirus", sub: "Common cold — shared equipment", pct: 97.2 },
];

export default function EfficacyData() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ padding: "72px 56px", borderBottom: "1px solid var(--border)", width: "100%" }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dim)", marginBottom: 20 }}>Efficacy data</p>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, fontWeight: 400, color: "var(--text)", lineHeight: 1.15 }}>What gets eliminated.</h2>
      </motion.div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 1,
        background: "var(--border)",
        marginTop: 48,
        border: "1px solid var(--border)",
      }}>
        {pathogens.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{ background: "var(--bg)", padding: "28px 24px" }}
          >
            <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text)", marginBottom: 6 }}>{p.name}</div>
            <div style={{ fontSize: 12, color: "var(--dim)", marginBottom: 16 }}>{p.sub}</div>
            <div style={{ height: 2, background: "#1e1e1e", borderRadius: 1, marginBottom: 8, overflow: "hidden" }}>
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${p.pct}%` } : {}}
                transition={{ duration: 1, delay: 0.3 + i * 0.05, ease: [0.4, 0, 0.2, 1] }}
                style={{ height: "100%", background: "var(--text)", borderRadius: 1 }}
              />
            </div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>{p.pct}% reduction</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
