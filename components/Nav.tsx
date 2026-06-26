"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "32px 56px",
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

      <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
        <Link href="/" style={{
          fontSize: 13,
          color: pathname === "/" ? "var(--text)" : "var(--muted)",
          textDecoration: "none",
          letterSpacing: "0.04em",
          transition: "color 0.2s",
        }}>
          Technology
        </Link>
        <Link href="/science" style={{
          fontSize: 13,
          color: pathname === "/science" ? "var(--text)" : "var(--muted)",
          textDecoration: "none",
          letterSpacing: "0.04em",
          transition: "color 0.2s",
        }}>
          Science
        </Link>
        {pathname !== "/science" && (
          <Link href="/#waitlist" style={{
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
      </div>
    </nav>
  );
}
