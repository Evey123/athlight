import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <p
        style={{
          fontSize: 16,
          color: "#fff",
          lineHeight: 1.75,
          maxWidth: 480,
          fontWeight: 300,
          padding: "96px 56px 0",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        Advanced UV-C technology engineered for athletes. Eliminate 99.9% of
        bacteria from your chinstrap in under ten minutes — no chemicals, no
        residue, no compromise.
      </p>
      <Features />
      <div style={{ height: 1, background: "var(--border)", margin: "0 56px" }} />
      <Waitlist />
      <Footer />
    </main>
  );
}
