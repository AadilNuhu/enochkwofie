import React, { useState } from 'react';
import { Cpu, Network, Shield, Server, Cloud, Code, Wrench } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { CircularProgress } from '../components/CircularProgress';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Networking',
    'Cisco',
    'Security',
    'Operating Systems',
    'Cloud',
    'Programming',
    'Tools'
  ];

  const filteredSkills = activeCategory === 'All' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Networking': return <Network className="w-4 h-4 text-cyan-400" />;
      case 'Cisco': return <Server className="w-4 h-4 text-blue-400" />;
      case 'Security': return <Shield className="w-4 h-4 text-purple-400" />;
      case 'Operating Systems': return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-amber-400" />;
      case 'Programming': return <Code className="w-4 h-4 text-rose-400" />;
      case 'Tools': return <Wrench className="w-4 h-4 text-teal-400" />;
      default: return <Cpu className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <Cpu className="w-4 h-4" /> Technical Skills Matrix
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100">
            Skills & Competencies
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Detailed breakdown of my technical proficiency across networking protocols, security mechanisms, Cisco IOS, cloud platforms, and automation tools.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              {cat !== 'All' && getCategoryIcon(cat)}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Circular Progress Top Overview */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2 font-mono">
            <span className="text-cyan-400">#</span> Top Competencies (Circular View)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {SKILLS_DATA.slice(0, 6).map((skill) => (
              <CircularProgress
                key={skill.name}
                percentage={skill.level}
                label={skill.name}
                category={skill.category}
                description={skill.description}
              />
            ))}
          </div>
        </div>

        {/* Main Animated Progress Bar Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 shadow-lg group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 group-hover:text-cyan-400 transition-colors">
                    {getCategoryIcon(skill.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">{skill.category}</span>
                  </div>
                </div>
                <span className="text-sm font-mono font-bold text-cyan-400">{skill.level}%</span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden my-3">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {skill.description && (
                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                  {skill.description}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
