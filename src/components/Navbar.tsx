import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Home, 
  User, 
  Cpu, 
  FolderGit2, 
  Award, 
  FileText, 
  Mail, 
  Menu, 
  X, 
  Shield 
} from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export const Navbar: React.FC = () => {
  const scrollProgress = useScrollProgress();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Skills', path: '/skills', icon: Cpu },
    { name: 'Projects', path: '/projects', icon: FolderGit2 },
    { name: 'Certifications', path: '/certifications', icon: Award },
    { name: 'Resume', path: '/resume', icon: FileText },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Scroll Progress Bar */}
      <div 
        className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-150 ease-out" 
        style={{ width: `${scrollProgress}%` }} 
      />

      <nav className={`px-4 lg:px-8 py-3 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/80 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-cyan-950/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
              <Shield className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wider font-mono text-slate-100 group-hover:text-cyan-400 transition-colors">
                ENOCH<span className="text-cyan-400 font-extrabold">.NET</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Cyber & Networks</span>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }: { isActive: boolean }) =>
                    `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,240,255,0.15)] font-semibold'
                        : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50'
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Mobile Toggle Button (Dark/Light toggle removed) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-cyan-400 transition-all"
            >
              {isOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-slate-900/95 border border-slate-800 backdrop-blur-2xl shadow-2xl flex flex-col gap-2 animate-fadeIn">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }: { isActive: boolean }) =>
                    `flex items-center gap-3 px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/40 font-bold'
                        : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60'
                    }`
                  }
                >
                  <Icon className="w-5 h-5 text-cyan-400" />
                  <span>{link.name}</span>
                </NavLink>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};
