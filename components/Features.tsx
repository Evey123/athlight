"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    num: "99", unit: "%", label: "Bacteria eliminated",
    name: "UV-C Sanitization",
    desc: "254nm germicidal light destroys bacteria, viruses, and fungi at the DNA level — the same technology used in hospitals and water treatment.",
  },
  {
    num: "10", unit: "min", label: "Full cycle",
    name: "Fits Your Routine",
    desc: "A complete sanitization cycle between practices. No sprays, no wipes, no wait time. Open the device, insert the chinstrap, close it. Done.",
  },
  {
    num: "0", unit: "×", label: "Chemicals",
    name: "Chemical-Free",
    desc: "No residue on the gear touching your face. Smart safety sensors halt UV-C the moment the lid opens — safe, automatic, every time.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "0 56px 96px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        borderTop: "1px solid var(--border)",
        width: "100%",
      }}
    >
      {features.map((f, i) => (
        <motion.div
          key={f.name}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          style={{
            padding: "48px 48px 48px 0",
            borderRight: i < 2 ? "1px solid var(--border)" : "none",
            paddingLeft: i > 0 ? 48 : 0,
          }}
        >
          <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 42, fontWeight: 400, color: "var(--text)", lineHeight: 1, marginBottom: 4 }}>
            {f.num}<span style={{ fontSize: 18, color: "var(--dim)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>{f.unit}</span>
          </div>
          <div style={{ fontSize: 13, color: "var(--dim)", letterSpacing: "0.04em", marginBottom: 20, marginTop: 2 }}>{f.label}</div>
          <div style={{ fontSize: 15, fontWeight: 500, color: "var(--text)", marginBottom: 10 }}>{f.name}</div>
          <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65, fontWeight: 300 }}>{f.desc}</div>
        </motion.div>
      ))}
    </section>
  );
}
