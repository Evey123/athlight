"use client";
import { useRef, useState } from "react";
import { useScroll, useTransform, useSpring, useMotionValueEvent, motion } from "framer-motion";

export default function DeviceAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("Scroll to explore");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  useMotionValueEvent(smooth, "change", (v) => {
    if (v < 0.05) setLabel("Scroll to explore");
    else if (v < 0.55) setLabel("Athlight S1");
    else if (v < 0.75) setLabel("Opening chamber");
    else setLabel("UV-C active");
  });

  const rotateY = useTransform(smooth, [0, 0.6], [0, 360]);
  const lidAngle = useTransform(smooth, [0.6, 1], [0, -115]);
  const teOpacity = useTransform(smooth, [0.6, 0.9], [0, 1]);
  const lampShadow = useTransform(smooth, [0.65, 1],
    ["0 0 0px rgba(168,85,247,0)", "0 0 30px rgba(168,85,247,1), 0 0 60px rgba(168,85,247,0.5)"]
  );
  const innerGlowOpacity = useTransform(smooth, [0.65, 1], [0, 0.25]);
  const shadowWidth = useTransform(smooth, [0.6, 1], [200, 160]);

  return (
    <div ref={ref} style={{ height: "400vh", position: "relative" }}>
      <div style={{
        position: "sticky", top: 0, height: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", overflow: "hidden",
      }}>
        <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#444", marginBottom: 32 }}>
          {label}
        </p>

        <div style={{ position: "relative", width: 320, height: 300 }}>
          <motion.div style={{
            position: "absolute", bottom: -20, left: "50%", translateX: "-50%",
            width: shadowWidth, height: 16,
            background: "rgba(0,0,0,0.5)", borderRadius: "50%", filter: "blur(8px)",
          }} />

          <motion.div style={{
            position: "absolute", left: "50%", top: "50%",
            translateX: "-50%", translateY: "-50%",
            width: 260, height: 240,
            rotateY, transformStyle: "preserve-3d",
          }}>
            {/* BASE */}
            <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 240, height: 110 }}>
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: 100,
                background: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 40%, #222 100%)",
                clipPath: "polygon(8% 0%,92% 0%,100% 8%,100% 92%,92% 100%,8% 100%,0% 92%,0% 8%)",
                border: "1px solid #333",
              }}>
                <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", fontSize: 10, letterSpacing: "0.25em", color: "#333", textTransform: "uppercase", fontWeight: 500, whiteSpace: "nowrap" }}>ATHLIGHT</div>
                <div style={{ position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)", width: 28, height: 8, background: "#111", borderRadius: 2, border: "1px solid #2a2a2a" }} />
              </div>
              <motion.div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "#a855f7", boxShadow: "0 0 8px rgba(168,85,247,0.6)", opacity: teOpacity, borderRadius: "0 0 2px 2px" }} />
            </div>

            {/* HINGE */}
            <div style={{ position: "absolute", bottom: 105, left: "50%", transform: "translateX(-50%)", width: 60, height: 8, background: "#111", borderRadius: 4, zIndex: 10 }} />

            {/* LID */}
            <motion.div style={{
              position: "absolute", bottom: 105, left: "50%",
              translateX: "-50%", width: 240, height: 140,
              transformOrigin: "center bottom",
              rotateX: lidAngle, transformStyle: "preserve-3d",
            }}>
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(135deg, #333 0%, #222 30%, #1a1a1a 60%, #2a2a2a 100%)",
                clipPath: "polygon(8% 0%,92% 0%,100% 8%,100% 92%,92% 100%,8% 100%,0% 92%,0% 8%)",
                border: "1px solid #3a3a3a",
              }}>
                <div style={{
                  position: "absolute", top: 0, left: "10%", right: "10%", height: "55%",
                  background: "linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 50%, #222 100%)",
                  clipPath: "polygon(5% 0%,95% 0%,100% 5%,100% 95%,95% 100%,5% 100%,0% 95%,0% 5%)",
                }} />
                <motion.div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "#a855f7", boxShadow: "0 0 8px rgba(168,85,247,0.6)", opacity: teOpacity }} />
                <motion.div style={{ position: "absolute", top: "10%", bottom: "10%", left: 0, width: 3, background: "#a855f7", boxShadow: "0 0 6px rgba(168,85,247,0.5)", opacity: teOpacity }} />
                <motion.div style={{ position: "absolute", top: "10%", bottom: "10%", right: 0, width: 3, background: "#a855f7", boxShadow: "0 0 6px rgba(168,85,247,0.5)", opacity: teOpacity }} />
              </div>
              <div style={{
                position: "absolute", bottom: 4, left: 4, right: 4, top: "50%",
                background: "linear-gradient(135deg, #1a1f1a 0%, #111 50%, #0d1a16 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <motion.div style={{
                  position: "absolute", top: 12, left: "50%", translateX: "-50%",
                  width: 8, height: 8, background: "#a855f7", borderRadius: "50%",
                  boxShadow: lampShadow,
                }} />
                <motion.div style={{
                  position: "absolute", inset: 0,
                  background: "radial-gradient(ellipse at center, rgba(168,85,247,0.25) 0%, rgba(168,85,247,0.08) 50%, rgba(168,85,247,0) 100%)",
                  opacity: innerGlowOpacity, pointerEvents: "none",
                }} />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.p
          style={{ position: "absolute", bottom: 80, fontSize: 12, color: "#444", letterSpacing: "0.1em" }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          ↓ scroll
        </motion.p>
      </div>
    </div>
  );
}
