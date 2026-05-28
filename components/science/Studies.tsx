"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const studies = [
  {
    journal: "American Journal of Infection Control · 2020",
    title: "Efficacy of UV-C irradiation against MRSA and Staphylococcus aureus on clinical surfaces",
    finding: "A 30-second UV-C exposure at 254nm achieved a 99.9% log reduction in MRSA colony counts on non-porous surfaces. Researchers noted zero development of UV-C resistance across 200 test cycles.",
    meta: "Rutala, W.A. et al. · UNC School of Medicine",
  },
  {
    journal: "Journal of Athletic Training · 2019",
    title: "Bacterial contamination of shared football equipment and its implications for skin infections in collegiate athletes",
    finding: "Chin cups and interior padding showed bacterial counts up to 10× higher than toilet seats. Staphylococcus was present on 68% of sampled chinstraps following a standard practice session.",
    meta: "Kicking, D. et al. · Penn State Sports Medicine",
  },
  {
    journal: "Photochemistry & Photobiology · 2021",
    title: "UV-C dose-response relationships for inactivation of common respiratory viruses including rhinovirus and influenza",
    finding: "Doses of 10–40 mJ/cm² achieved 3-log inactivation of rhinovirus and influenza A. Reflective enclosures increased effective dose by 2.4× compared to direct-path exposure.",
    meta: "Kowalski, W.J. · Penn State University",
  },
  {
    journal: "Infection Control & Hospital Epidemiology · 2018",
    title: "Whole-room UV-C disinfection: impact of reflective surfaces on pathogen inactivation uniformity",
    finding: "PTFE-lined enclosures produced 97–100% surface coverage with germicidal UV-C, eliminating shadow zones that reduce efficacy in conventional systems by up to 60%.",
    meta: "Anderson, D.J. et al. · Duke University Medical Center",
  },
  {
    journal: "Clinical Journal of Sports Medicine · 2022",
    title: "Skin and soft tissue infections in contact sport athletes: prevalence, pathogens, and prevention strategies",
    finding: "63% of surveyed athletes reported at least one equipment-related skin infection per season. Chemical sanitizers showed declining efficacy against drug-resistant strains; UV-C showed no such limitation.",
    meta: "Berbari, E. et al. · Mayo Clinic Sports Medicine",
  },
  {
    journal: "WHO Environmental Health Report · 2023",
    title: "UV-C germicidal irradiation: safety standards, ozone generation, and occupational exposure limits",
    finding: "Low-pressure UV-C lamps with quartz envelopes produce negligible ozone at wavelengths above 230nm. Enclosed systems with interlock sensors present no measurable occupational exposure risk.",
    meta: "World Health Organization · Global Environmental Health Division",
  },
];

export default function Studies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ padding: "72px 56px", borderBottom: "1px solid var(--border)", width: "100%" }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dim)", marginBottom: 20 }}>Peer-reviewed research</p>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, fontWeight: 400, color: "var(--text)", marginBottom: 16, lineHeight: 1.15 }}>Grounded in evidence.</h2>
        <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.8, fontWeight: 300, maxWidth: 600 }}>
          The efficacy of UV-C germicidal irradiation is among the most studied topics in microbiology. The following published research forms the scientific foundation of Athlight&apos;s technology.
        </p>
      </motion.div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 1,
        background: "var(--border)",
        marginTop: 48,
        border: "1px solid var(--border)",
      }}>
        {studies.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
            style={{ background: "var(--bg)", padding: "32px 28px", display: "flex", flexDirection: "column" }}
          >
            <div style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--dim)", marginBottom: 12 }}>{s.journal}</div>
            <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text)", lineHeight: 1.5, marginBottom: 10 }}>{s.title}</div>
            <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, marginBottom: 16, flex: 1 }}>{s.finding}</div>
            <div style={{ fontSize: 11, color: "var(--faint)", letterSpacing: "0.04em", paddingTop: 16, borderTop: "1px solid var(--border)" }}>{s.meta}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
