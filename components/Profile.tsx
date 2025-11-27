
import React from 'react';
import { PROFILE } from '../constants';
import { Icon } from './Icon';

const PROFILE_IMAGE_URL = "1750021863489.jpg"; 

export const Profile: React.FC = () => {
  return (
    <div className="w-full">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-zinc-700/60 pb-8 mb-8">
            <div className="flex gap-6 items-end">
                <img 
                    src={PROFILE_IMAGE_URL} 
                    alt={PROFILE.name} 
                    className="w-24 h-24 rounded-lg object-cover grayscale border border-zinc-700 hover:grayscale-0 transition-all duration-500"
                />
                <div className="flex flex-col gap-1 mb-1">
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tighter">
                        {PROFILE.name}
                    </h1>
                    <div className="flex items-center gap-3 text-zinc-400">
                        <span className="text-base font-medium text-accent">{PROFILE.handle}</span>
                        <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                        <span className="text-sm">{PROFILE.location}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-end gap-3 mt-6 md:mt-0">
                <div className="flex gap-4">
                    {PROFILE.socials.map((social) => (
                        <a
                            key={social.platform}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-zinc-800/50 border border-zinc-700 rounded-md text-zinc-400 hover:text-accent hover:border-accent/50 transition-all group"
                        >
                            <Icon name={social.icon} className="w-4 h-4" />
                        </a>
                    ))}
                </div>
                <a 
                    href={PROFILE.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-accent transition-colors py-2"
                >
                    <span>view full resume</span>
                    <Icon name="ExternalLink" className="w-3 h-3" />
                </a>
            </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Left: Bio */}
            <div className="md:col-span-7 flex flex-col gap-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                    <Icon name="Terminal" className="w-3 h-3" />
                    about
                </h3>
                <p className="text-zinc-300 text-sm leading-7">
                    {PROFILE.bio}
                </p>
            </div>

            {/* Right: Stats */}
            <div className="md:col-span-5 grid grid-cols-1 gap-6">
                
                {/* Education Unit */}
                <div className="border-l-2 border-zinc-700/50 pl-4 flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Education</span>
                    <div className="text-zinc-200 font-bold">{PROFILE.education.degree}</div>
                    <div className="flex justify-between items-baseline text-zinc-400 text-xs">
                        <span>{PROFILE.education.institution}</span>
                        <span>{PROFILE.education.year}</span>
                    </div>
                     <div className="text-zinc-500 text-xs mt-1">
                        gpa: <span className="text-zinc-300">{PROFILE.education.gpa}</span>
                    </div>
                </div>

                 {/* Focus Unit */}
                 <div className="border-l-2 border-zinc-700/50 pl-4 flex flex-col gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Focus Areas</span>
                    <div className="flex flex-wrap gap-2">
                        {PROFILE.focus.map(f => (
                            <span key={f} className="text-xs text-zinc-300 bg-zinc-800/50 px-2 py-1 rounded border border-zinc-700/50">
                                {f}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};
