import React, { useState } from 'react';
import { ExternalLink, Eye, Terminal } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onOpenDetails?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group relative flex flex-col rounded-2xl bg-slate-900/60 dark:bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 backdrop-blur-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-cyan-500/10">
      {/* Top Image Container */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
            <Terminal className="w-8 h-8 text-slate-600 animate-spin" />
          </div>
        )}
        <img
          src={project.image}
          alt={project.title}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
            imageLoaded ? 'opacity-90 group-hover:opacity-100' : 'opacity-0'
          }`}
        />
        {/* Category Overlay Pill */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-950/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
          {project.category}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/40 backdrop-blur-md">
            ★ Featured
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-cyan-300 transition-all border border-slate-700"
            >
              <FaGithub className="w-3.5 h-3.5" /> Code
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View live demo for ${project.title}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Demo
              </a>
            )}
          </div>

          {onOpenDetails && (
            <button
              onClick={() => onOpenDetails(project)}
              className="p-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
              title="View full project details"
            >
              <Eye className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
