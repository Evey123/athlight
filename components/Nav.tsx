"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useIsMobile } from "@/lib/useIsMobile";

export default function Nav() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <Link href="/" onClick={() => setOpen(false)} style={{
        fontSize: 13,
        color: pathname === "/" ? "var(--text)" : "var(--muted)",
        textDecoration: "none",
        letterSpacing: "0.04em",
        transition: "color 0.2s",
      }}>
        Technology
      </Link>
      <Link href="/science" onClick={() => setOpen(false)} style={{
        fontSize: 13,
        color: pathname === "/science" ? "var(--text)" : "var(--muted)",
        textDecoration: "none",
        letterSpacing: "0.04em",
        transition: "color 0.2s",
      }}>
        Science
      </Link>
      {pathname !== "/science" && (
        <Link href="/#waitlist" onClick={() => setOpen(false)} style={{
          fontSize: 13,
          color: "var(--text)",
          background: "none",
          border: "1px solid var(--faint)",
          padding: "9px 22px",
          borderRadius: 100,
          textDecoration: "none",
          letterSpacing: "0.04em",
          transition: "border-color 0.2s",
        }}>
          Join waitlist
        </Link>
      )}
    </>
  );

  return (
    <nav style={{
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: isMobile ? "24px 24px" : "32px 56px",
      borderBottom: "1px solid var(--border)",
    }}>
      <Link href="/" style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 500,
        fontSize: 15,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--text)",
        textDecoration: "none",
      }}>
        Athlight
      </Link>

      {isMobile ? (
        <>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 5,
              width: 28,
              height: 28,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <span style={{ display: "block", height: 1.5, width: 22, background: "var(--text)", borderRadius: 2, transition: "transform 0.25s, opacity 0.25s", transform: open ? "translateY(6.5px) rotate(45deg)" : "none" }} />
            <span style={{ display: "block", height: 1.5, width: 22, background: "var(--text)", borderRadius: 2, transition: "opacity 0.2s", opacity: open ? 0 : 1 }} />
            <span style={{ display: "block", height: 1.5, width: 22, background: "var(--text)", borderRadius: 2, transition: "transform 0.25s, opacity 0.25s", transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none" }} />
          </button>

          {open && (
            <div style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 24,
              padding: "28px 24px 32px",
              background: "var(--bg)",
              borderBottom: "1px solid var(--border)",
              zIndex: 50,
            }}>
              {links}
            </div>
          )}
        </>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          {links}
        </div>
      )}
    </nav>
  );
}
