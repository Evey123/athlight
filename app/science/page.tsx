import Nav from "@/components/Nav";
import ScienceHero from "@/components/science/ScienceHero";
import Mechanism from "@/components/science/Mechanism";
import EfficacyData from "@/components/science/EfficacyData";
import Chamber from "@/components/science/Chamber";
import Safety from "@/components/science/Safety";
import Studies from "@/components/science/Studies";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Science() {
  return (
    <main>
      <Nav />
      <ScienceHero />
      <Mechanism />
      <EfficacyData />
      <Chamber />
      <Safety />
      <Studies />
      <div style={{ height: 1, background: "var(--border)", margin: "0 56px" }} />
      <Waitlist heading="Built on evidence." subheading="Built for athletes." />
      <Footer />
    </main>
  );
}
