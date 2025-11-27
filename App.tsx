
import React from 'react';
import { Profile } from './components/Profile';
import { ProjectCard } from './components/ProjectCard';
import { EXPERIENCE, PROJECTS } from './constants';
import { Icon } from './components/Icon';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent selection:text-background font-mono lowercase relative overflow-x-hidden">
      
      {/* Technical Grid Background */}
      <div className="fixed inset-0 pointer-events-none bg-tech-grid opacity-20" />

      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        
        {/* Header / Dossier Top */}
        <section className="mb-24 animate-fade-in">
            <Profile />
        </section>

        {/* Main Content Grid */}
        <div className="flex flex-col gap-24">
            
            {/* Experience Section (Resume Style) */}
            <section className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-2 bg-zinc-800/50 rounded text-accent border border-zinc-700/50">
                        <Icon name="Briefcase" className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-100">Experience</h2>
                    <div className="h-[1px] flex-grow bg-zinc-800"></div>
                </div>

                <div className="flex flex-col gap-2">
                    {EXPERIENCE.map((item) => (
                        <div key={item.id} className="border-b border-zinc-800/50 last:border-0 pb-2 last:pb-0">
                             <ProjectCard project={item} variant="experience" />
                        </div>
                    ))}
                </div>
            </section>

             {/* Projects Section (Visual Grid) */}
             <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-2 bg-zinc-800/50 rounded text-accent border border-zinc-700/50">
                        <Icon name="Code" className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-100">Selected Works</h2>
                    <div className="h-[1px] flex-grow bg-zinc-800"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.id} project={project} variant="project" />
                    ))}
                </div>
            </section>
        </div>

        {/* Footer */}
        <section className="mt-32 pt-10 border-t border-zinc-800 flex justify-between items-center opacity-60 text-sm">
            <p className="text-zinc-500">
                &copy; 2025 willow hughes
            </p>
            <div className="flex gap-4 text-zinc-600">
                <span>built with react</span>
            </div>
        </section>

      </div>
    </div>
  );
};

export default App;
