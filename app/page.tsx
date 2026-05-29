import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import DeviceAnimation from "@/components/DeviceAnimation";
import Features from "@/components/Features";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <DeviceAnimation />
      <Features />
      <div style={{ height: 1, background: "var(--border)", margin: "0 56px" }} />
      <Waitlist />
      <Footer />
    </main>
  );
}
