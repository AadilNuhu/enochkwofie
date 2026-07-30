import React from 'react';
import { Briefcase, Terminal, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA, ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <Briefcase className="w-4 h-4" /> Practical Experience & Competitions
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100">
            Hands-On Experience & Achievements
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            University lab supervision, network simulations, community IT support, hackathons, and technical Cisco challenges.
          </p>
        </div>

        {/* Experience Cards Section */}
        <div className="space-y-8 mb-20">
          <h2 className="text-2xl font-bold font-mono text-slate-100 flex items-center gap-3">
            <Terminal className="w-6 h-6 text-cyan-400" /> Experience & Practical Labs
          </h2>

          <div className="grid grid-cols-1 gap-8">
            {EXPERIENCE_DATA.map((exp) => (
              <div
                key={exp.id}
                className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 backdrop-blur-md transition-all duration-300 shadow-xl group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6 mb-6">
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-2 inline-block">
                      {exp.type}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-base text-slate-300 font-medium">{exp.organization}</p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950 px-3.5 py-2 rounded-xl border border-slate-800 shrink-0">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-6 text-sm text-slate-300 leading-relaxed">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 text-cyan-300 border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements & Competitions */}
        <div className="pt-12 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">Recognition</h2>
            <h3 className="text-3xl font-extrabold text-slate-100">Achievements & Hackathons</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACHIEVEMENTS_DATA.map((ach) => (
              <div
                key={ach.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 backdrop-blur-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/40">
                      {ach.badgeText}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{ach.date}</span>
                  </div>

                  <h4 className="text-xl font-bold text-slate-100 group-hover:text-purple-300 transition-colors mb-2">
                    {ach.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{ach.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 text-xs font-mono text-slate-500">
                  Category: {ach.category}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
