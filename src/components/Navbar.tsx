"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Code2, Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/Button";
import { profileData } from "@/data/profile";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll detection for glassmorphic elevation & active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-white/80 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800 py-3.5 shadow-md shadow-black/10"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* Logo / Brand */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 text-zinc-900 dark:text-zinc-100 font-semibold tracking-tight text-lg min-h-[44px] min-w-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg py-1 px-1"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-indigo-600/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30 group-hover:scale-105 transition-transform duration-200">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="flex items-center gap-1 font-mono text-sm sm:text-base">
                <span>anfas</span>
                <span className="text-indigo-600 dark:text-indigo-400">.dev</span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/60 dark:bg-zinc-900/60 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavLinkClick(link.href)}
                    className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors min-h-[44px] inline-flex items-center ${
                      isActive
                        ? "text-indigo-600 dark:text-indigo-300 font-semibold"
                        : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/30"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Actions: Theme Toggle & Download CV */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <Button
                variant="glow"
                size="sm"
                href={profileData.resumeUrl}
                rightIcon={<Download className="w-3.5 h-3.5" />}
              >
                Download CV
              </Button>
            </div>

            {/* Mobile Controls: Theme Toggle & Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center w-11 h-11 min-h-[44px] min-w-[44px] rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-current" />
                ) : (
                  <Menu className="w-5 h-5 text-current" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Slide-over panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-2 font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    <Code2 className="w-5 h-5 text-indigo-500" />
                    <span>Navigation</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center w-11 h-11 min-h-[44px] min-w-[44px] rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-6 flex flex-col space-y-1">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <button
                        key={link.name}
                        onClick={() => handleNavLinkClick(link.href)}
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-left text-base font-medium min-h-[44px] transition-colors ${
                          isActive
                            ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold"
                            : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-50" />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
                <Button
                  variant="glow"
                  className="w-full justify-center min-h-[48px]"
                  href={profileData.resumeUrl}
                  onClick={() => setMobileMenuOpen(false)}
                  rightIcon={<Download className="w-4 h-4" />}
                >
                  Download CV
                </Button>
                <div className="text-center text-xs text-zinc-500 dark:text-zinc-400">
                  {profileData.availability}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
