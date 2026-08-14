import React from 'react';
import { ExternalLink, ArrowUpRight, MessageSquare, BookOpen, Music, Sliders } from 'lucide-react';
import { VektraLogo } from './VektraLogo';
import { useTheme } from '../context/ThemeContext';

export function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className="border-t border-[#1f2730] bg-[#0a0d0c] text-[#9aa6b2] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <a href="#" className="flex items-center gap-2.5 group">
                <VektraLogo className="w-6 h-6" isDark={true} />
                <span className="font-bold text-base tracking-tight text-[#e7edf3] font-mono group-hover:text-emerald-400 transition-colors">
                  Vektra
                </span>
              </a>
            </div>
            <p className="text-xs text-[#9aa6b2] max-w-sm leading-relaxed">
              The demo intake, A&amp;R, support ticketing, and release delivery workspace for music labels, collectives, and artists.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#11161a] border border-[#1f2730] text-[11px] font-mono text-emerald-400">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>vektra.games Ecosystem Live</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#e7edf3] text-xs font-mono uppercase tracking-wider mb-3">
              Platforms
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="https://artists.vektra.games" target="_blank" rel="noopener noreferrer" className="hover:text-[#e7edf3] transition-colors flex items-center gap-1">
                  Artist Portal <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <a href="https://dashboard.vektra.games" target="_blank" rel="noopener noreferrer" className="hover:text-[#e7edf3] transition-colors flex items-center gap-1">
                  Staff Dashboard <ArrowUpRight className="w-3 h-3 text-[#9aa6b2]" />
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#e7edf3] transition-colors">Discord Bot Integration</a>
              </li>
              <li>
                <a href="#for-artists" className="hover:text-[#e7edf3] transition-colors">For Artists</a>
              </li>
              <li>
                <a href="#for-labels" className="hover:text-[#e7edf3] transition-colors">For Labels</a>
              </li>
            </ul>
          </div>

          {/* Resources & Support */}
          <div>
            <h4 className="font-semibold text-[#e7edf3] text-xs font-mono uppercase tracking-wider mb-3">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="https://docs.vektra.games" target="_blank" rel="noopener noreferrer" className="hover:text-[#e7edf3] transition-colors flex items-center gap-1">
                  Documentation <ExternalLink className="w-3 h-3 text-[#9aa6b2]" />
                </a>
              </li>
              <li>
                <a href="https://discord.gg/Hysd3GSQxQ" target="_blank" rel="noopener noreferrer" className="hover:text-[#e7edf3] transition-colors flex items-center gap-1">
                  Support Discord <MessageSquare className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <a href="#for-labels" className="hover:text-[#e7edf3] transition-colors">Per-Guild Storage Setup</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#e7edf3] transition-colors">Release QC Guidelines</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-[#1f2730] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#9aa6b2]">
          <div>
            © {new Date().getFullYear()} Vektra. Demo submission &amp; release delivery for labels.
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <a href="https://artists.vektra.games" className="hover:text-[#e7edf3]">artists.vektra.games</a>
            <span>•</span>
            <a href="https://dashboard.vektra.games" className="hover:text-[#e7edf3]">dashboard.vektra.games</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
