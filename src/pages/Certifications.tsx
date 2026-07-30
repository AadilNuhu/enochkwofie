import React, { useState } from 'react';
import { Award, ExternalLink, ShieldCheck, Clock } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <Award className="w-4 h-4" /> Industry Credentials
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100">
            Certifications & Accreditation Badges
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Verified professional certificates & badges from Cisco Systems, Google, CompTIA, AWS, and Microsoft.
          </p>
        </div>

        {/* Certificate Image Badge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="group relative flex flex-col rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 backdrop-blur-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-cyan-500/10 p-6 text-center justify-between"
            >
              <div>
                {/* Badge Image Display */}
                <div 
                  className="relative w-36 h-36 mx-auto mb-6 flex items-center justify-center p-3 rounded-2xl bg-slate-950/80 border border-slate-800/80 group-hover:border-cyan-500/40 transition-colors shadow-lg cursor-pointer"
                  onClick={() => setSelectedImage(cert.badge)}
                >
                  <img
                    src={cert.badge}
                    alt={cert.name}
                    className="max-w-full max-h-full object-contain filter drop-shadow-[0_0_10px_rgba(0,240,255,0.3)] group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback visual icon if external image fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 rounded-2xl flex items-center justify-center bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-mono text-cyan-300 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4" /> Expand
                    </span>
                  </div>
                </div>

                {/* Status Pill */}
                <div className="mb-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wide uppercase ${
                      cert.status === 'Completed'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                        : cert.status === 'In Progress'
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                    }`}
                  >
                    {cert.status === 'Completed' ? '✓ ' : cert.status === 'In Progress' ? '⌛ ' : '📘 '}
                    {cert.status}
                  </span>
                </div>

                {/* Name & Issuer */}
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors leading-snug">
                  {cert.name}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-1">{cert.issuer}</p>

                {/* Skills Badges */}
                <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                  {cert.skillsCovered.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verification Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" /> {cert.date}
                </span>
                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors font-medium"
                  >
                    Verify <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-md w-full p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center shadow-2xl space-y-4">
              <img src={selectedImage} alt="Certificate Badge" className="w-64 h-64 mx-auto object-contain" />
              <p className="text-xs font-mono text-slate-400">Click anywhere to close</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
