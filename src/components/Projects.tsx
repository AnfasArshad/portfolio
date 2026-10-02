"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { Badge } from "./ui/Badge";
import { projectsData } from "@/data/projects";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <Badge variant="indigo" size="md" className="mb-3">
              <Sparkles className="w-3 h-3 mr-1" />
              Featured Engineering
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Selected projects &{" "}
              <span className="text-indigo-600 dark:text-indigo-400">core systems.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
              A curated showcase of scalable microservices, secure RESTful backends, and full-stack software architectures.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400 self-start md:self-auto">
            <Terminal className="w-3.5 h-3.5 text-indigo-500" />
            <span>3 Production-Grade Projects</span>
          </div>
        </div>

        {/* Responsive Grid: 1-col mobile, 2-col tablet, 3-col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full flex"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
