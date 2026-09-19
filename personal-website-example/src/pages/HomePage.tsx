import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import MyService from "../components/MyService";
import AboutUs from "../components/AboutUs";
import Projects from "../components/Projects";
import FAQ from "../components/FAQ";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import { PricingSection } from "../components/ui/pricing-section";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TechStack />
      <MyService />
      <AboutUs />
      <Projects />
      <PricingSection />
      <FAQ />
      <GetInTouch />
      <Footer />
    </main>
  );
}
