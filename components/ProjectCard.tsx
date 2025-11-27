
import React from 'react';
import { Project } from '../types';
import { Icon } from './Icon';

interface ProjectCardProps {
  project: Project;
  variant?: 'experience' | 'project';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, variant = 'project' }) => {
  const isWip = project.status === 'wip';
  const statusColor = isWip ? 'bg-orange-500' : 'bg-emerald-500';

  // --- COMPONENT: EXPERIENCE ROW (Resume Style) ---
  if (variant === 'experience') {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 group p-4 -mx-4 rounded-lg hover:bg-zinc-800/30 transition-colors">
            {/* Left: Date & Org */}
            <div className="md:col-span-3 flex flex-col justify-start pt-1">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wide group-hover:text-zinc-200 transition-colors">
                    {project.date}
                </span>
            </div>

            {/* Right: Content */}
            <div className="md:col-span-9 flex flex-col gap-2 relative">
                {/* Connector Line (Decorative) */}
                <div className="hidden md:block absolute -left-4 top-2.5 w-2 h-[1px] bg-zinc-700 group-hover:bg-accent transition-colors"></div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-zinc-100 font-bold text-base group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                    <span className="text-zinc-400 text-sm font-medium">@ {project.org}</span>
                </div>
                
                <div className="text-zinc-300 text-sm leading-relaxed whitespace-pre-line">
                    {project.description}
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map(t => (
                        <span key={t} className="text-[10px] uppercase font-bold text-zinc-500 group-hover:text-zinc-400 transition-colors">
                            #{t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
  }

  // --- COMPONENT: PROJECT CARD (Visual Showcase) ---
  return (
    <div className="group relative grid grid-cols-1 md:grid-cols-2 gap-0 border border-zinc-700/50 bg-zinc-800/10 hover:border-zinc-600 transition-all duration-300 overflow-hidden rounded-lg">
        
        {/* Image Side (Left or Top) */}
        <div className="relative h-48 md:h-auto overflow-hidden bg-zinc-900 border-b md:border-b-0 md:border-r border-zinc-700/50">
            {project.image ? (
                <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center bg-zinc-800/50 text-zinc-600">
                    <Icon name="Code" className="w-8 h-8 opacity-20" />
                </div>
            )}
            
            {/* Status Overlay */}
            {project.status && (
                 <div className="absolute top-3 left-3 flex items-center gap-2 bg-zinc-900/90 backdrop-blur-md px-2 py-1 rounded border border-zinc-700/50 z-10">
                    <div className={`w-1.5 h-1.5 rounded-full ${statusColor}`}></div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-300 group-hover:block hidden animate-fade-in">
                        {isWip ? 'WIP' : 'Complete'}
                    </span>
                 </div>
            )}
        </div>

        {/* Content Side */}
        <div className="flex flex-col p-6 h-full justify-between gap-6">
            <div className="flex flex-col gap-3">
                 <div className="flex justify-between items-start">
                     <h3 className="text-zinc-100 font-bold text-lg leading-tight group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-3">
                        {project.repo && (
                            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-100 transition-colors">
                                <Icon name="Github" className="w-4 h-4" />
                            </a>
                        )}
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-100 transition-colors">
                                <Icon name="ExternalLink" className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                 </div>

                 <p className="text-zinc-400 text-sm leading-relaxed">
                    {project.description}
                 </p>
            </div>

            {/* Tags Bottom */}
            <div className="flex flex-wrap gap-2">
                {project.techStack.map(t => (
                    <span key={t} className="px-2 py-1 bg-zinc-800/50 border border-zinc-700/50 rounded text-[10px] text-zinc-300 font-mono">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    </div>
  );
};
