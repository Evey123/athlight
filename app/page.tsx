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
      <Features />
      <div className="divider" style={{ height: 1, background: "var(--border)", margin: "0 56px" }} />
      <Waitlist />
      <Footer />
    </main>
  );
}
