import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { NavbarDemo } from "@/components/Navbar";
import { ProfessionalExperience } from "@/components/ProfessionalExperience";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { GitHubActivity } from "@/components/GitHubActivity";
import { GITHUB_USERNAME } from "@/constants";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProfessionalExperience />
      <TechStack />
      <GitHubActivity username={GITHUB_USERNAME} />
      <Projects />
      <Footer />
    </>
  );
}
