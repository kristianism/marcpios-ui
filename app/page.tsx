import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { GallerySection } from "@/components/GallerySection";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";
import { BackgroundDots, BackgroundGradient } from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <>
      <BackgroundDots />
      <BackgroundGradient />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}
