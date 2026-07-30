import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Terminal, 
  Target, 
  Shield, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <Shield className="w-4 h-4" /> About Me
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100">
            Passionate About Secure Networks & Digital Infrastructure
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Discover my background, core values, learning journey, and technical aspirations in the world of computer networking and cybersecurity.
          </p>
        </div>

        {/* Main Grid: Bio + Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Bio text column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md space-y-4">
              <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" /> Professional Biography
              </h2>
              <p>
                Hello! I'm <strong className="text-cyan-300">{PERSONAL_INFO.name}</strong>, a Computer Networks & Cyber Security student based in {PERSONAL_INFO.location}. My fascination with how data travels seamlessly across global fiber optics and wireless spectrums started during my first encounter with TCP/IP protocol stack analysis.
              </p>
              <p>
                Ever since, I have dedicated myself to mastering the inner mechanics of routing, switching, perimeter firewalling, and automated infrastructure management.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2">
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <Target className="w-4 h-4 text-cyan-400" /> Career Goals
                </h3>
                <p className="text-sm text-slate-400">
                  To become a Certified Cisco Enterprise & Security Architect, designing zero-trust networks for critical enterprise infrastructure.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2">
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-400" /> Cybersecurity Passion
                </h3>
                <p className="text-sm text-slate-400">
                  Proactive defense, deep packet inspection, IPsec encryption, Snort rule generation, and Linux server hardening.
                </p>
              </div>
            </div>

            {/* Learning Journey Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 space-y-3">
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-400" /> Learning Journey & Technologies
              </h3>
              <p className="text-sm text-slate-400">
                Currently diving deep into CCNA topics, multi-area OSPF routing, AWS Virtual Private Clouds, and automating Cisco IOS devices with Python Netmiko and Scapy.
              </p>
            </div>

          </div>

          {/* Right column: Stats cards & Quick Facts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center shadow-lg hover:border-cyan-500/40 transition-all">
                <div className="text-3xl font-bold font-mono text-cyan-400">{PERSONAL_INFO.stats.yearsLearning}+</div>
                <div className="text-xs text-slate-400 font-mono mt-1 uppercase">Years Learning</div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center shadow-lg hover:border-blue-500/40 transition-all">
                <div className="text-3xl font-bold font-mono text-blue-400">{PERSONAL_INFO.stats.projectsCompleted}+</div>
                <div className="text-xs text-slate-400 font-mono mt-1 uppercase">Projects Done</div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center shadow-lg hover:border-purple-500/40 transition-all">
                <div className="text-3xl font-bold font-mono text-purple-400">{PERSONAL_INFO.stats.certificatesEarned}</div>
                <div className="text-xs text-slate-400 font-mono mt-1 uppercase">Certificates</div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center shadow-lg hover:border-emerald-500/40 transition-all">
                <div className="text-3xl font-bold font-mono text-emerald-400">{PERSONAL_INFO.stats.labsCompleted}+</div>
                <div className="text-xs text-slate-400 font-mono mt-1 uppercase">Labs Built</div>
              </div>
            </div>

            {/* Highlights List */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Technical Highlights
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {[
                  "Hands-on experience with Cisco 2960 Switches & 2911 Routers",
                  "Proficient in Wireshark deep packet analysis & PCAP forensics",
                  "Solid foundation in Linux (Ubuntu/Kali) CLI & Bash automation",
                  "Familiar with AWS VPC, Security Groups & Azure VNets",
                  "Active contributor in student cybersecurity CTF competitions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA */}
            <NavLink
              to="/skills"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-all shadow-md"
            >
              Explore Skill Matrix <ArrowRight className="w-4 h-4" />
            </NavLink>

          </div>

        </div>

      </div>
    </div>
  );
};
