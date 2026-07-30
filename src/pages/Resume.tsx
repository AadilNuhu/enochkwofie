import React, { useState } from 'react';
import { Download, FileText, ExternalLink, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Resume: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    // Generate simple text alert/download trigger mock
    const element = document.createElement("a");
    const file = new Blob([
      `==================================================\nENOCK ALEX - NETWORKING & CYBERSECURITY SPECIALIST\n==================================================\nEmail: ${PERSONAL_INFO.email}\nGitHub: ${PERSONAL_INFO.github}\nLinkedIn: ${PERSONAL_INFO.linkedin}\n\nSUMMARY:\n${PERSONAL_INFO.bio}\n\nEDUCATION:\nB.Sc in Computer Networks & Cyber Security (Expected 2027)\nGPA: 3.8/4.0\n\nCORE SKILLS:\n- Cisco IOS, Packet Tracer, GNS3, OSPF, BGP, HSRP, VLANs, ACLs\n- Wireshark, Snort IDS/IPS, IPsec VPN, Firewall Hardening\n- Python Netmiko/Scapy Automation, Linux Bash Scripting\n- AWS Cloud VPC, Subnetting, Security Groups\n`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Enock_Alex_Networking_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <FileText className="w-4 h-4" /> Curriculum Vitae
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100">
            Professional Resume Preview
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Review my complete qualifications or download a copy for offline evaluation.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
            >
              {copied ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
              {copied ? 'Downloaded Resume!' : 'Download Resume (TXT/PDF)'}
            </button>
          </div>
        </div>

        {/* Live Resume Card Preview Container */}
        <div id="resume-preview" className="max-w-4xl mx-auto p-6 sm:p-12 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-10 text-slate-300">
          
          {/* Header section */}
          <div className="border-b border-slate-800 pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-100 font-mono text-cyan-400">{PERSONAL_INFO.name}</h2>
              <p className="text-lg text-slate-300 font-medium mt-1">{PERSONAL_INFO.role}</p>
              <p className="text-xs font-mono text-slate-400 mt-2 flex items-center gap-2">
                <span>{PERSONAL_INFO.location}</span> • <span>{PERSONAL_INFO.email}</span>
              </p>
            </div>
            <div className="flex flex-col gap-1 text-xs font-mono text-cyan-400">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <ExternalLink className="w-3.5 h-3.5" /> GitHub Profile
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <ExternalLink className="w-3.5 h-3.5" /> LinkedIn Network
              </a>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800/80 pb-2">
              Professional Summary
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Technical Competencies */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800/80 pb-2">
              Technical Skill Matrix
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span className="text-slate-400">Networking & IOS:</span>
                <p className="text-slate-200 mt-0.5">TCP/IP, Multi-Area OSPF, BGP, HSRP, 802.1Q VLANs, RSTP, ACLs, Subnetting/VLSM</p>
              </div>
              <div>
                <span className="text-slate-400">Security & Analysis:</span>
                <p className="text-slate-200 mt-0.5">Wireshark PCAP Analysis, IPsec IKEv2 VPN, Snort IDS/IPS, UFW/iptables, AAA/RADIUS</p>
              </div>
              <div>
                <span className="text-slate-400">Automation & OS:</span>
                <p className="text-slate-200 mt-0.5">Python (Netmiko, Scapy, Socket), Bash, Linux (Ubuntu/Kali), Windows Server AD</p>
              </div>
              <div>
                <span className="text-slate-400">Cloud & Tools:</span>
                <p className="text-slate-200 mt-0.5">AWS VPC, Security Groups, Cisco Packet Tracer, GNS3, Nmap, Git/GitHub</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800/80 pb-2">
              Education
            </h3>
            <div className="flex justify-between items-start text-sm">
              <div>
                <h4 className="font-bold text-slate-100">B.Sc. in Computer Networks & Cyber Security</h4>
                <p className="text-xs text-slate-400">Kirinyaga University / Partner Technical University • GPA: 3.8 / 4.0</p>
              </div>
              <span className="text-xs font-mono text-cyan-400">Expected 2027</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
