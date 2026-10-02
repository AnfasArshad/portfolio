"use client";

import React from "react";
import { Project } from "@/types";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Icons } from "./Icons";
import { 
  ArrowUpRight, 
  Sparkles, 
  BarChart2, 
  Check 
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="flex flex-col h-full p-6 sm:p-7 justify-between">
      <div>
        {/* Top Badges Header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <Badge variant="indigo" size="sm">
            {project.category}
          </Badge>
          {project.featured && (
            <Badge variant="emerald" size="sm" className="gap-1">
              <Sparkles className="w-3 h-3 text-emerald-500" />
              Featured
            </Badge>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="mt-1 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          {project.tagline}
        </p>

        {/* Metrics Banner if present */}
        {project.metrics && (
          <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/20 text-xs font-medium text-indigo-700 dark:text-indigo-300">
            <BarChart2 className="w-3.5 h-3.5 shrink-0 text-indigo-500" />
            <span className="truncate">{project.metrics}</span>
          </div>
        )}

        {/* Description */}
        <p className="mt-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-4 space-y-1.5 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                <Check className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer: Tech Stack Badges & Action Links */}
      <div className="mt-6 pt-5 border-t border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-100 dark:bg-zinc-800/90 text-zinc-600 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3 pt-1">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white min-h-[44px] transition-all shadow-sm shadow-indigo-600/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label={`View live demo for ${project.title}`}
            >
              <span>Live Preview</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 min-h-[44px] px-4 transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label={`View source code on GitHub for ${project.title}`}
            >
              <Icons.github className="w-4 h-4" />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};
