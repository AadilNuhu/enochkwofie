import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, ShieldAlert } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-4">
      <div className="text-center max-w-lg mx-auto p-8 sm:p-12 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md shadow-2xl space-y-6">
        
        {/* Glowing 404 Badge */}
        <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(239,68,68,0.3)] animate-pulse">
          <ShieldAlert className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-red-400 font-bold uppercase tracking-widest">
            ERROR 404 - PACKET DROPPED
          </span>
          <h1 className="text-4xl font-extrabold text-slate-100">
            Route Not Found
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            The destination URL path you requested does not exist on this gateway router or has been relocated to another subnet.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-xs text-slate-400 text-left space-y-1">
          <p className="text-slate-500">ICMP Destination Unreachable:</p>
          <p className="text-cyan-400">$ ping {window.location.pathname}</p>
          <p className="text-red-400">Request timed out (TTL expired in transit)</p>
        </div>

        <div className="pt-2">
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 transition-all shadow-md"
          >
            <Home className="w-4 h-4" /> Return to Core Gateway (Home)
          </NavLink>
        </div>

      </div>
    </div>
  );
};
