"use client";
import { motion } from "framer-motion";

export default function ScienceHero() {
  return (
    <section style={{
      padding: "96px 56px 80px",
      borderBottom: "1px solid var(--border)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      width: "100%",
    }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: 640 }}
      >
        <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dim)", marginBottom: 28 }}>The Science</p>
        <h1 style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(48px, 6vw, 72px)",
          fontWeight: 400,
          lineHeight: 1.08,
          letterSpacing: "-0.025em",
          color: "var(--text)",
          marginBottom: 24,
        }}>
          How UV-C <em style={{ fontStyle: "italic", color: "#999" }}>actually</em><br />destroys bacteria.
        </h1>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.75, fontWeight: 300 }}>
          UV-C germicidal light has been validated in clinical, municipal, and industrial settings for decades. Athlight engineers this proven technology specifically for the demands of athletic equipment.
        </p>
      </motion.div>
    </section>
  );
}
