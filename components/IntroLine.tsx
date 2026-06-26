"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function IntroLine() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        fontSize: 16,
        color: "#fff",
        lineHeight: 1.75,
        fontWeight: 300,
        padding: "96px 56px 0",
        textAlign: "center",
      }}
    >
      Advanced UV-C technology engineered for athletes. Eliminate 99.9% of
      bacteria from your chinstrap in under ten minutes — no chemicals, no
      residue, no compromise.
    </motion.p>
  );
}
