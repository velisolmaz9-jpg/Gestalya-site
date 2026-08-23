import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import HowItWorks from "../components/sections/HowItWorks";
import WhyGestalya from "../components/sections/WhyGestalya";
import Pricing from "../components/sections/Pricing";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import FinalCTA from "../components/sections/FinalCTA";
import { useDocumentHead } from "../hooks/useDocumentHead";

export default function Home() {
  useDocumentHead({
    title: "Gestalya | Assistance administrative simple et personnalisée",
    description:
      "Gestalya vous accompagne dans vos démarches administratives, dossiers, formulaires et démarches en ligne. Gagnez du temps et simplifiez votre quotidien.",
  });

  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <WhyGestalya />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
