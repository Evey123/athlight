import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      padding: "28px 56px",
      borderTop: "1px solid var(--border)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
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
