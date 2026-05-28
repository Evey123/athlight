"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Hero() {
  return (
    <section style={{
      minHeight: "88vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "80px 56px",
      width: "100%",
    }}>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dim)", marginBottom: 28 }}
      >
        UV-C Athletic Sanitization
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(64px, 9vw, 110px)",
          fontWeight: 400,
          lineHeight: 1.0,
          letterSpacing: "-0.03em",
          color: "var(--text)",
          marginBottom: 28,
        }}
      >
        Clean gear.<br />
        <em style={{ fontStyle: "italic", color: "var(--muted)" }}>Peak performance.</em>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.75, maxWidth: 480, fontWeight: 300, marginBottom: 44 }}
      >
        Advanced UV-C technology engineered for athletes. Eliminate 99.9% of bacteria from your chinstrap in under ten minutes — no chemicals, no residue, no compromise.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{ display: "flex", gap: 24, alignItems: "center", justifyContent: "center" }}
      >
        <a href="#waitlist" style={{
          background: "var(--text)",
          color: "var(--bg)",
          border: "none",
          padding: "14px 32px",
          borderRadius: 100,
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: "0.05em",
          cursor: "pointer",
          textDecoration: "none",
          fontFamily: "'DM Sans', sans-serif",
        }}>
          Join the waitlist
        </a>
        <Link href="/science" style={{
          background: "none",
          color: "var(--text)",
          border: "none",
          fontSize: 13,
          cursor: "pointer",
          letterSpacing: "0.04em",
          textDecoration: "none",
          padding: "14px 0",
          fontFamily: "'DM Sans', sans-serif",
          borderBottom: "1px solid rgba(240, 237, 232, 0.4)",
          textShadow: "0 0 20px rgba(240, 237, 232, 0.6)",
        }}>
          See the science →
        </Link>
      </motion.div>
    </section>
  );
}
