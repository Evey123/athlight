"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { num: "01", title: "Lid interlock sensor", desc: "A dual-contact magnetic sensor confirms the lid is fully sealed before any UV-C emission begins. Opening mid-cycle halts the lamp within 50 milliseconds." },
  { num: "02", title: "Ozone-free lamp technology", desc: "Low-ozone UV-C lamps with a quartz envelope block wavelengths below 230nm — responsible for ozone generation — while passing full germicidal output at 254nm." },
  { num: "03", title: "Dose monitoring", desc: "An internal UV-C sensor measures delivered dose each cycle and confirms efficacy before marking the run complete. If output drops below threshold, the device flags a lamp replacement." },
  { num: "04", title: "Material compatibility", desc: "Cycle duration is calibrated to deliver a lethal microbial dose without degrading EVA foam, polycarbonate, nylon webbing, or ABS plastic over thousands of cycles." },
];

export default function Safety() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ padding: "72px 56px", borderBottom: "1px solid var(--border)", width: "100%" }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dim)", marginBottom: 20 }}>Safety systems</p>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, fontWeight: 400, color: "var(--text)", marginBottom: 16, lineHeight: 1.15 }}>Safe by design.</h2>
        <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.8, fontWeight: 300, maxWidth: 560 }}>
          UV-C is harmful to eyes and skin. Athlight is engineered so that exposure is physically impossible during normal operation.
        </p>
      </motion.div>

      <div style={{ marginTop: 40 }}>
        {items.map((item, i) => (
          <motion.div
            key={item.num}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            style={{
              display: "flex",
              gap: 32,
              alignItems: "flex-start",
              padding: "24px 0",
              borderTop: "1px solid var(--border)",
              borderBottom: i === items.length - 1 ? "1px solid var(--border)" : "none",
            }}
          >
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: "var(--faint)", minWidth: 28 }}>{item.num}</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text)", marginBottom: 6 }}>{item.title}</div>
              <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65 }}>{item.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
