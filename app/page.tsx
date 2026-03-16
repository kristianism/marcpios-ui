import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { GallerySection } from "@/components/GallerySection";
import { Footer } from "@/components/Footer";

const BackgroundDots = dynamic(
  () => import("@/components/BackgroundEffects").then(mod => mod.BackgroundDots),
);

const BackgroundGradient = dynamic(
  () => import("@/components/BackgroundEffects").then(mod => mod.BackgroundGradient),
);

const ScrollingCodeBackground = dynamic(
  () => import("@/components/ScrollingCodeBackground").then(mod => mod.ScrollingCodeBackground),
);

export default function Home() {
  return (
    <>
      <BackgroundDots />
      <BackgroundGradient />
      <ScrollingCodeBackground />
      <Header />
      <main className="relative z-10 select-none">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}
