import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { GallerySection } from "@/components/GallerySection";
import { Footer } from "@/components/Footer";
import { BackgroundDots, BackgroundGradient } from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <>
      <BackgroundDots />
      <BackgroundGradient />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}
