"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Code2, 
  Layers, 
  Server, 
  Database 
} from "lucide-react";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { skillsData } from "@/data/skills";

export const Skills: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "languages":
        return <Code2 className="w-5 h-5 text-indigo-500" />;
      case "frontend":
        return <Layers className="w-5 h-5 text-cyan-500" />;
      case "backend-cloud":
        return <Server className="w-5 h-5 text-emerald-500" />;
      case "databases":
        return <Database className="w-5 h-5 text-amber-500" />;
      default:
        return <Code2 className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <Badge variant="indigo" size="md" className="mb-3">
            <Sparkles className="w-3 h-3 mr-1" />
            Core Technical Stack
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Skills, toolchains &{" "}
            <span className="text-indigo-600 dark:text-indigo-400">core competencies.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            A comprehensive overview of programming languages, full-stack frameworks, cloud tools, and database architectures.
          </p>
        </div>

        {/* 2x2 Clean Grouped Grid — All Skills Visible at a Glance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="h-full flex"
            >
              <Card className="p-6 sm:p-7 flex flex-col justify-between h-full w-full">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700/60 flex items-center justify-center shrink-0">
                      {getCategoryIcon(category.id)}
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-zinc-900 dark:text-zinc-100">
                        {category.name}
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skill Badges with subtle border glow on hover */}
                  <div className="flex flex-wrap gap-2.5 mt-5">
                    {category.skills.map((skill) => {
                      const isExpert = skill.level === "Expert";
                      return (
                        <div
                          key={skill.name}
                          className={`group/badge inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all duration-200 ${
                            skill.featured
                              ? "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30 font-medium"
                              : "bg-zinc-100 dark:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/60"
                          } hover:border-indigo-400/80 hover:shadow-md hover:shadow-indigo-500/10 hover:-translate-y-0.5`}
                        >
                          <span>{skill.name}</span>
                          {isExpert && (
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                              title="Core competency"
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Category Footer Indicator */}
                <div className="mt-6 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>{category.skills.length} competencies</span>
                  <span className="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                    Production Ready
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
