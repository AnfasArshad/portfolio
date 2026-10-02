"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  ShieldCheck, 
  MapPin, 
  Sparkles,
  Award,
  Users2
} from "lucide-react";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { profileData } from "@/data/profile";

export const About: React.FC = () => {
  const philosophies = [
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Full-Stack Craftsmanship",
      description: "Building responsive frontends in React & Next.js integrated with secure, high-throughput Spring Boot backends.",
    },
    {
      icon: <Users2 className="w-5 h-5 text-indigo-500" />,
      title: "Agile Team Player",
      description: "Thriving in iterative sprint workflows, clean code reviews, and cross-functional team problem solving.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      title: "Security & Clean Data",
      description: "Dedicated to reliable authentication with JWT/Keycloak and normalized, transactional SQL database schemas.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto lg:mx-0 mb-16 text-center lg:text-left">
          <Badge variant="indigo" size="md" className="mb-3">
            <Sparkles className="w-3 h-3 mr-1" />
            Background & Mindset
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Dedicated to software excellence, <br className="hidden sm:inline" />
            <span className="text-indigo-600 dark:text-indigo-400">crafted for real-world impact.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            A background on my engineering philosophy, technical journey, and hands-on approach to building modern web applications.
          </p>
        </div>

        {/* Narrative & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Narrative Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <Card className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold text-sm">
                  AA
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {profileData.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                    <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{profileData.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {profileData.bioParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Card>

            {/* Core Values / Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {philosophies.map((p, idx) => (
                <Card key={idx} className="p-4 sm:p-5">
                  <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-3">
                    {p.icon}
                  </div>
                  <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">
                    {p.title}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {p.description}
                  </p>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Right Stats & Highlights Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {profileData.stats.map((stat, idx) => (
                <Card key={idx} className="p-6 relative group overflow-hidden">
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    <Badge variant="outline" size="sm">
                      Verified
                    </Badge>
                  </div>
                  <h4 className="mt-2 font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100">
                    {stat.label}
                  </h4>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {stat.description}
                  </p>
                </Card>
              ))}
            </div>

            {/* Current Status Card */}
            <Card className="p-6 border-indigo-500/30 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <Award className="w-4 h-4" />
                <span>Opportunity Status</span>
              </div>
              <h4 className="font-bold text-base text-zinc-900 dark:text-zinc-100 mb-1">
                {profileData.availability}
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                Open to Software Engineer, Full-Stack, Backend (Java/Spring Boot), and Frontend (React) roles.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                <span>Active & Ready to Interview</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
