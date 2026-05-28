"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface WaitlistProps {
  heading?: string;
  subheading?: string;
}

export default function Waitlist({ heading = "Be first.", subheading = "We're building for the next generation of athletes and teams. Join the waitlist for founding member pricing and priority access to Athlight S1." }: WaitlistProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const submit = () => {
    if (email && email.includes("@")) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  };

  return (
    <section
      id="waitlist"
      ref={ref}
      style={{
        padding: "96px 56px 100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dim)", marginBottom: 24 }}>Early access</p>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 40, fontWeight: 400, color: "var(--text)", marginBottom: 12, lineHeight: 1.1 }}>
          {heading}
        </h2>
        <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 36, lineHeight: 1.65, maxWidth: 420 }}>
          {subheading}
        </p>
        <div style={{ display: "flex", gap: 10, width: "100%", maxWidth: 460 }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder="your@email.com"
            style={{
              flex: 1,
              border: "1px solid #222",
              background: "#111",
              borderRadius: 100,
              padding: "13px 22px",
              fontSize: 14,
              color: "var(--text)",
              fontFamily: "'DM Sans', sans-serif",
              outline: "none",
            }}
          />
          <button
            onClick={submit}
            style={{
              background: "var(--text)",
              color: "var(--bg)",
              border: "none",
              padding: "13px 26px",
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.04em",
              cursor: "pointer",
              whiteSpace: "nowrap",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Reserve spot
          </button>
        </div>
        <p style={{
          fontSize: 13,
          marginTop: 16,
          minHeight: 18,
          color: status === "error" ? "#a04040" : "var(--muted)",
          opacity: status === "idle" ? 0 : 1,
          transition: "opacity 0.3s",
        }}>
          {status === "success" ? "You're on the list — we'll be in touch." : status === "error" ? "Please enter a valid email." : ""}
        </p>
      </motion.div>
    </section>
  );
}
