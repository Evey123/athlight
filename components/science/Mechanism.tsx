"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Mechanism() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ padding: "72px 56px", borderBottom: "1px solid var(--border)", width: "100%" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dim)", marginBottom: 20 }}>The mechanism</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, fontWeight: 400, color: "var(--text)", marginBottom: 16, lineHeight: 1.15 }}>
            DNA disruption<br />at 254nm
          </h2>
          <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.8, fontWeight: 300 }}>
            UV-C light at 254 nanometers is absorbed directly by the nucleic acids in microbial DNA. This causes adjacent thymine bases to bond together — forming a thymine dimer — which jams the bacteria&apos;s replication machinery. The organism can no longer reproduce and dies.
          </p>
          <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.8, fontWeight: 300, marginTop: 16 }}>
            Unlike antibiotics, UV-C works on all bacteria regardless of resistance status. MRSA, Staph aureus, E. coli — none can evolve around physics.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
          <div style={{ marginTop: 48, padding: 40, border: "1px solid var(--border)", borderRadius: 4 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--dim)", marginBottom: 28 }}>UV-C spectrum — germicidal range</p>
            <div style={{ position: "relative", marginBottom: 8 }}>
              <div style={{ position: "absolute", top: -20, left: "calc(35% - 1px)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: 11, color: "var(--text)", whiteSpace: "nowrap", letterSpacing: "0.06em" }}>254nm</span>
                <div style={{ width: 1, height: 36, background: "var(--text)", marginTop: 4 }} />
              </div>
            </div>
            <div style={{ height: 28 }} />
            <div style={{
              height: 8,
              background: "linear-gradient(to right, #7b00ff, #4400ff, #0033ff, #0099ff, #00ccff, #00ffcc, #ccff00, #ffcc00, #ff6600, #ff0000)",
              borderRadius: 4,
            }} />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
              {["100nm", "200nm", "300nm", "400nm", "700nm"].map((l) => (
                <span key={l} style={{ fontSize: 11, color: "var(--faint)" }}>{l}</span>
              ))}
            </div>
            <p style={{ fontSize: 12, color: "var(--dim)", marginTop: 20, lineHeight: 1.6 }}>
              Athlight operates at the peak germicidal wavelength — where UV-C absorption by DNA is highest.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
