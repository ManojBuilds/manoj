import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { NavbarDemo } from "@/components/Navbar";
import { ProfessionalExperience } from "@/components/ProfessionalExperience";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProfessionalExperience />
      <TechStack />
      <Projects />
      <Footer/>
    </>
  );
}
