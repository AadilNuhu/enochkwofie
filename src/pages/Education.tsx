import React from 'react';
import { GraduationCap, BookOpen, Award, CheckCircle2, Building2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <GraduationCap className="w-4 h-4" /> Academic Background
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100">
            Education & Coursework
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Formal university education, academic honors, specialized networking coursework, and leadership roles.
          </p>
        </div>

        {/* Education Details */}
        <div className="max-w-4xl mx-auto space-y-8">
          {EDUCATION_DATA.map((edu) => (
            <div
              key={edu.id}
              className="p-8 sm:p-10 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 backdrop-blur-md transition-all duration-300 shadow-2xl space-y-8"
            >
              
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 text-cyan-300">
                    {edu.degree}
                  </h2>
                  <p className="text-base text-slate-300 font-medium flex items-center gap-2 mt-1">
                    <Building2 className="w-4 h-4 text-cyan-400" /> {edu.institution}
                  </p>
                </div>

                <div className="flex flex-col items-start md:items-end gap-1 font-mono text-xs text-slate-400">
                  <span className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-cyan-400 font-bold">
                    Expected: {edu.expectedGraduation}
                  </span>
                  {edu.gpa && <span className="text-slate-300 font-semibold mt-1">GPA: {edu.gpa}</span>}
                </div>
              </div>

              {/* Coursework Grid */}
              <div className="space-y-4">
                <h3 className="text-base font-bold font-mono text-slate-100 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-cyan-400" /> Core Relevant Coursework
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {edu.coursework.map((course) => (
                    <div
                      key={course}
                      className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-center gap-2.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="space-y-3 pt-4 border-t border-slate-800/80">
                <h3 className="text-base font-bold font-mono text-slate-100 flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-400" /> Academic Achievements & Honors
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
