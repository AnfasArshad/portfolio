"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ArrowUpRight, 
  CheckCircle2, 
  TrendingUp,
  Sparkles
} from "lucide-react";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { experienceData } from "@/data/experience";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <Badge variant="indigo" size="md" className="mb-3">
            <Sparkles className="w-3 h-3 mr-1" />
            Career History
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Work experience &{" "}
            <span className="text-indigo-600 dark:text-indigo-400">proven execution.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            A chronology of hands-on software development, production deliverables, and technical problem solving in enterprise teams.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full border-2 border-white dark:border-zinc-950 bg-indigo-600 text-white shadow-md shadow-indigo-600/30 group-hover:scale-110 transition-transform">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Experience Card */}
              <Card className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                        {item.role}
                      </h3>
                      <Badge variant="indigo" size="sm">
                        Work
                      </Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {item.companyUrl ? (
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 min-h-[44px] py-1"
                        >
                          <span>{item.company}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="font-medium text-zinc-900 dark:text-zinc-200">
                          {item.company}
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-xs text-zinc-500">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700/60 self-start lg:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Metric Highlight Callout */}
                {item.metrics && (
                  <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 text-xs sm:text-sm font-medium">
                    <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Key Impact: {item.metrics}</span>
                  </div>
                )}

                {/* Role Description */}
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Bullet Achievements */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="space-y-2 mb-6">
                    {item.achievements.map((ach, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
                  <span className="text-xs font-mono text-zinc-400 mr-1.5">Stack:</span>
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-md bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/60 text-zinc-700 dark:text-zinc-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
