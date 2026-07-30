import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Download, 
  Terminal, 
  ArrowRight, 
  Network, 
  Server, 
  Lock, 
  Activity, 
  Mail 
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypingAnimation } from '../components/TypingAnimation';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Hero Container */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 pt-8 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Available for Network Engineering & Security Roles</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-100 tracking-tight font-sans">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">{PERSONAL_INFO.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-mono text-slate-300 font-semibold flex items-center gap-2">
                <span className="text-cyan-400">$</span>
                <TypingAnimation
                  sequence={[
                    "Networking & Cybersecurity Student",
                    "Cisco CCNA Candidate",
                    "Network Security & Firewall Analyst",
                    "Python & Bash Network Automator"
                  ]}
                  className="text-cyan-300"
                />
              </h2>
            </div>

            {/* Tagline Paragraph */}
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              {PERSONAL_INFO.tagline} Focused on architecting zero-trust networks, automating Cisco IOS devices, and performing packet analysis.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <NavLink
                to="/resume"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:scale-105"
              >
                <Download className="w-4 h-4" /> Download Resume
              </NavLink>

              <NavLink
                to="/projects"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 transition-all hover:scale-105"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </NavLink>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 text-slate-400 text-sm">
              <span>Connect:</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Visual Graphic: Futuristic Interactive Terminal Node Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden group hover:border-cyan-500/50 transition-all duration-500">
              
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">topology-status.sh</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">LIVE MONITOR</span>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs text-slate-300 space-y-3 bg-slate-950/90 leading-relaxed">
                <div className="flex items-center gap-2 text-slate-400">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>systemctl status network-security.service</span>
                </div>
                <div className="pl-4 text-emerald-400 space-y-1">
                  <p>● Active: running (high-availability)</p>
                  <p className="text-slate-400">Since: Thu 2026-07-30 21:34:00 UTC</p>
                </div>
                
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5"><Network className="w-3.5 h-3.5 text-cyan-400" /> Core Router (OSPF Area 0)</span>
                    <span className="text-xs text-emerald-400 font-bold">100% UP</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-purple-400" /> IPsec Tunnel (Branch HQ)</span>
                    <span className="text-xs text-emerald-400 font-bold">ESTABLISHED</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5"><Server className="w-3.5 h-3.5 text-blue-400" /> Wireshark Capture Buffer</span>
                    <span className="text-xs text-cyan-400">0 drops</span>
                  </div>
                </div>

                {/* Packet Counter Visual */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-slate-400">
                  <span>Subnet Mask: /24 CIDR</span>
                  <span className="text-cyan-400 font-bold">Packets: 1,420,982</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Statistics Banner */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md transition-all text-center group">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-cyan-400 group-hover:scale-105 transition-transform">
              {PERSONAL_INFO.stats.yearsLearning}+
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-mono uppercase tracking-wider">Years Learning</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md transition-all text-center group">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-blue-400 group-hover:scale-105 transition-transform">
              {PERSONAL_INFO.stats.projectsCompleted}+
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-mono uppercase tracking-wider">Projects Built</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md transition-all text-center group">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-purple-400 group-hover:scale-105 transition-transform">
              {PERSONAL_INFO.stats.certificatesEarned}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-mono uppercase tracking-wider">Certifications</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md transition-all text-center group">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400 group-hover:scale-105 transition-transform">
              {PERSONAL_INFO.stats.labsCompleted}+
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-mono uppercase tracking-wider">Labs Completed</div>
          </div>

        </div>
      </section>

      {/* Featured Focus Cards */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">Core Expertise</h2>
          <h3 className="text-3xl font-extrabold text-slate-100">Specialized Focus Areas</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <Network className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-100 mb-3">Enterprise Routing & Switching</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Designing scalable multi-area OSPF topologies, VLAN 802.1Q trunking, RSTP loop prevention, and high-availability gateway redundancy with HSRP.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 group shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
              <Lock className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-100 mb-3">Cyber Security & Forensics</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Analyzing raw PCAP network captures with Wireshark, configuring Zone-Based Policy Firewalls, IPsec VPN tunnels, and deploying Snort IDS rules.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              <Activity className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-100 mb-3">Network Automation & DevNet</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Streamlining router deployment with Python Netmiko/Paramiko, automated SSH backup scripts, Scapy packet generator toolsets, and Linux Bash scripts.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};
