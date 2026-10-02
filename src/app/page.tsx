import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-400">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Experience & Timeline Section */}
        <Experience />

        {/* Projects Showcase Section */}
        <Projects />

        {/* Skills & Technical Competencies Section */}
        <Skills />

        {/* Contact & Availability Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll to Top Button (appears on scroll down at bottom-right) */}
      <ScrollToTop />
    </div>
  );
}
