import { BrandOrb } from "@/components/BrandOrb";
import { Contact } from "@/components/Contact";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { GradientBackground } from "@/components/GradientBackground";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { SeekingBanner } from "@/components/SeekingBanner";
import { WorkExperience } from "@/components/WorkExperience";
import { personal } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <GradientBackground />
      <Navbar />
      <main className="relative z-[2]">
        <Hero />
        <WorkExperience />
        <SeekingBanner />
        <BrandOrb />
        <FeaturedProjects />
        <Contact />
      </main>
      <footer className="relative z-[2] border-t border-accent-purple/10 px-4 py-8 text-center text-xs text-text-muted">
        © {new Date().getFullYear()} {personal.name} · Built with Next.js
      </footer>
    </>
  );
}
