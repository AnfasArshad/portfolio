"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  ChevronDown,
  Download
} from "lucide-react";
import { Icons } from "./Icons";
import { Button } from "./ui/Button";
import { profileData } from "@/data/profile";

export const Hero: React.FC = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <Icons.github className="w-5 h-5" />;
      case "linkedin":
        return <Icons.linkedin className="w-5 h-5" />;
      case "whatsapp":
        return <Icons.whatsapp className="w-5 h-5" />;
      case "twitter":
        return <Icons.twitter className="w-5 h-5" />;
      case "mail":
        return <Mail className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Background radial glow accents */}
      <div 
        className="pointer-events-none absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full blur-[140px] opacity-35 dark:opacity-25"
        style={{
          background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.45), rgba(168, 85, 247, 0.25), transparent 70%)"
        }}
      />
      <div 
        className="pointer-events-none absolute bottom-10 right-10 w-[350px] h-[350px] rounded-full blur-[120px] opacity-25 dark:opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.35), transparent 70%)"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
          >
            {/* Status Badge */}
            <div className="mb-5 inline-flex">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-medium tracking-wide">
                  {profileData.statusText}
                </span>
              </div>
            </div>

            {/* Main Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.12]">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                {profileData.name}
              </span>
            </h1>

            <p className="mt-3 text-lg sm:text-xl font-medium text-indigo-600 dark:text-indigo-400">
              {profileData.role}
            </p>

            {/* Tagline / Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              {profileData.tagline}
            </p>

            {/* Location & Quick Meta */}
            <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>{profileData.location}</span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto">
              <Button
                href="#projects"
                variant="glow"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto min-h-[48px]"
              >
                View Projects
              </Button>

              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                rightIcon={<Mail className="w-4 h-4" />}
                className="w-full sm:w-auto min-h-[48px]"
              >
                Get in Touch
              </Button>

              <Button
                href={profileData.resumeUrl}
                variant="outline"
                size="lg"
                rightIcon={<Download className="w-4 h-4" />}
                className="w-full sm:w-auto min-h-[48px]"
              >
                Download CV
              </Button>
            </div>

            {/* Direct Social Links */}
            <div className="mt-9 flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mr-1">
                Connect:
              </span>
              {profileData.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 min-h-[44px] min-w-[44px] rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-label={social.name}
                  title={social.name}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Profile Photo with Glowing Ring & Subtle Hover Tilt (5 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02, rotate: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          >
            <div className="relative group cursor-pointer">
              {/* Outer decorative ambient gradient glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-50 group-hover:opacity-80 blur-xl transition duration-500" />

              {/* Inner card frame */}
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-950 p-2 shadow-2xl transition-transform duration-300">
                <div className="relative w-[270px] sm:w-[320px] md:w-[360px] aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900">
                  <Image
                    src={profileData.image}
                    alt={profileData.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 270px, (max-width: 768px) 320px, 360px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating pill badge on photo */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 p-3 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800 flex items-center justify-between text-xs font-mono shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-zinc-200 font-semibold">{profileData.name}</span>
                  </div>
                  <span className="text-indigo-400">Full-Stack Dev</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll prompt */}
        <div className="mt-14 text-center hidden sm:block">
          <a
            href="#about"
            className="inline-flex flex-col items-center text-xs font-mono text-zinc-400 dark:text-zinc-500 hover:text-indigo-500 transition-colors"
            aria-label="Scroll to About section"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5 text-current" />
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
};
