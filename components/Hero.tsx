"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const lowerContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frameCount = 181;

    // Pick folder based on orientation
    const isPortrait = window.innerHeight > window.innerWidth;
    const currentFrame = (index: number) =>
      isPortrait
        ? `/AthlightPortrait/AthlightImage.17.${index + 1}.webp`
        : `/AthlightLandscape/AthlightImage.16.${index + 1}.webp`;

    const images: HTMLImageElement[] = [];
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const state = { frame: 0 };

    function render() {
      const img = images[Math.floor(state.frame)];
      if (!img?.complete || !canvas || !ctx) return;

      const width = window.innerWidth;
      const height = window.innerHeight;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      //ctx.clearRect(0, 0, width, height);

      const scale = Math.min(width / img.width, height / img.height);
      const drawWidth = img.width * scale;
      const drawHeight = img.height * scale;

      
      // draw current frame at 85% opacity, leaving 15% of previous = motion blur
      ctx.globalAlpha = 0.85;
      ctx.drawImage(
        img,
        (width - drawWidth) / 2,
        (height - drawHeight) / 2,
        drawWidth,
        drawHeight
      );
      ctx.globalAlpha = 1;
    }

    images[0].onload = render;

    const TEXT_REVEAL_FRAME = 139;
    const TEXT_REVEAL_DURATION_FRAMES = 6;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3620",
        scrub: 5,
        pin: true,
      },
    });

    tl.to(state, {
      frame: frameCount - 1,
      duration: 10,
      ease: "none",
      onUpdate: function () {
        render();

        const f = Math.floor(state.frame);
        const hero = heroContentRef.current;
        if (!hero) return;

        if (f >= TEXT_REVEAL_FRAME) {
          const enterProgress = Math.min(
            1,
            (f - TEXT_REVEAL_FRAME) / TEXT_REVEAL_DURATION_FRAMES
          );
          hero.style.opacity = String(enterProgress);
          hero.style.transform = `translateY(${(1 - enterProgress) * 60}px)`;
        } else {
          hero.style.opacity = "0";
          hero.style.transform = "translateY(60px)";
        }
      },
    });

    const lowerTween = gsap.fromTo(
      lowerContentRef.current,
      { y: "100vh" },
      {
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      }
    );

    // On orientation change, reload images for new mode and re-render
    function handleOrientationChange() {
      const nowPortrait = window.innerHeight > window.innerWidth;
      const newFrame = (index: number) =>
        nowPortrait
          ? `/AthlightPortrait/AthlightImage.16.${index + 1}.webp`
          : `/AthlightLandscape/AthlightImage.16.${index + 1}.webp`;

      images.length = 0;
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = newFrame(i);
        images.push(img);
      }
      images[0].onload = render;
    }

    window.addEventListener("resize", render);
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", render);
      window.removeEventListener("orientationchange", handleOrientationChange);
      lowerTween.scrollTrigger?.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          display: "block",
        }}
      />

      {/* Hero content */}
      <div
        ref={heroContentRef}
        style={{
          position: "relative",
          zIndex: 10,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 56px",
          opacity: 0,
          transform: "translateY(60px)",
        }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--dim)",
            marginBottom: 28,
          }}
        >
          UV-C Athletic Sanitization
        </p>

        <h1
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(40px, 9vw, 110px)", // smaller floor for portrait
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            marginBottom: 28,
          }}
        >
          Clean gear.
          <br />
          <em style={{ fontStyle: "italic", color: "var(--muted)" }}>
            Peak performance.
          </em>
        </h1>

        <p
          style={{
            fontSize: 16,
            color: "var(--muted)",
            lineHeight: 1.75,
            maxWidth: 480,
            fontWeight: 300,
            marginBottom: 44,
          }}
        >
          Advanced UV-C technology engineered for athletes. Eliminate 99.9% of
          bacteria from your chinstrap in under ten minutes — no chemicals, no
          residue, no compromise.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column", // stack buttons on portrait
            gap: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            href="#waitlist"
            style={{
              background: "var(--text)",
              color: "var(--bg)",
              padding: "14px 32px",
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.05em",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Join the waitlist
          </a>

          <Link
            href="/science"
            style={{
              color: "var(--text)",
              fontSize: 13,
              letterSpacing: "0.04em",
              textDecoration: "none",
              padding: "14px 0",
              fontFamily: "'DM Sans', sans-serif",
              borderBottom: "1px solid rgba(240, 237, 232, 0.4)",
              textShadow: "0 0 20px rgba(240, 237, 232, 0.6)",
            }}
          >
            See the science →
          </Link>
        </div>
      </div>

      {/* Lower content */}
      <div
        ref={lowerContentRef}
        style={{
          position: "absolute",
          top: "100vh",
          left: 0,
          width: "100%",
          zIndex: 20,
          background: "#000",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {[
            { value: "99%", label: "Bacteria eliminated" },
            { value: "10 min", label: "Full cycle" },
            { value: "0×", label: "Chemicals used" },
          ].map(({ value, label }, i) => (
            <div
              key={i}
              style={{
                padding: "40px 24px",
                borderRight:
                  i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "clamp(32px, 6vw, 80px)",
                  fontWeight: 400,
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                {value}
              </span>
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Technology section */}
        <div
          style={{
            padding: "80px 32px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: 32,
            }}
          >
            Technology
          </p>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(28px, 5vw, 72px)",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 32,
            }}
          >
            UV-C light at 265 nm — the exact wavelength that destroys microbial DNA.
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.8,
            }}
          >
            Our chamber delivers a precise, calibrated dose directly to every
            surface of your chinstrap. No heat. No moisture. No degradation of
            materials — just clean.
          </p>
        </div>

        {/* Science section */}
        <div
          style={{
            padding: "80px 32px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: 32,
            }}
          >
            Science
          </p>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(28px, 5vw, 72px)",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 32,
            }}
          >
            Peer-reviewed. Clinically validated.
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            UV-C germicidal irradiation has been validated in sports medicine and
            infection-control research. We engineered around the exact parameters
            that work — not marketing claims.
          </p>
          <Link
            href="/science"
            style={{
              color: "#fff",
              fontSize: 14,
              letterSpacing: "0.05em",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.3)",
              paddingBottom: 4,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Read the science →
          </Link>
        </div>

        {/* Waitlist section */}
        <div
          id="waitlist"
          style={{
            padding: "80px 32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: 32,
            }}
          >
            Early Access
          </p>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(28px, 5vw, 72px)",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Be first to experience it.
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.75,
              maxWidth: 420,
              marginBottom: 48,
            }}
          >
            We&apos;re opening access to a limited number of athletes. Join the
            waitlist to be notified when Athlight ships.
          </p>
          <div style={{ display: "flex", width: "100%", maxWidth: 400 }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1,
                padding: "14px 16px",
                borderRadius: "100px 0 0 100px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.05)",
                color: "#fff",
                fontSize: 14,
                outline: "none",
                fontFamily: "'DM Sans', sans-serif",
              }}
            />
            <button
              style={{
                background: "#fff",
                color: "#000",
                border: "none",
                padding: "14px 20px",
                borderRadius: "0 100px 100px 0",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
              }}
            >
              Join waitlist
            </button>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "32px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 20,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            Athlight
          </span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Athlight. All rights reserved.
          </span>
        </div>
      </div>
    </section>
  );
}
