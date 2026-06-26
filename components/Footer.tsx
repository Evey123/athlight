"use client";
import Link from "next/link";
import { useIsMobile } from "@/lib/useIsMobile";

export default function Footer() {
  const isMobile = useIsMobile();
  return (
    <footer style={{
      padding: isMobile ? "28px 24px" : "28px 56px",
      borderTop: "1px solid var(--border)",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: isMobile ? "flex-start" : "center",
      gap: isMobile ? 20 : 0,
    }}>
      <span style={{ fontSize: 12, color: "var(--faint)", letterSpacing: "0.04em" }}>© 2025 Athlight</span>
      <div style={{ display: "flex", gap: 28 }}>
        {["Privacy", "Contact", "Investors"].map((l) => (
          <Link key={l} href="#" style={{ fontSize: 12, color: "var(--faint)", textDecoration: "none" }}>{l}</Link>
        ))}
      </div>
    </footer>
  );
}
