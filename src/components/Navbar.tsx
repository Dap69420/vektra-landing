import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Laptop, 
  ArrowUpRight, 
  ExternalLink,
  Disc,
  Headphones,
  Sliders,
  Shield,
  BookOpen,
  MessageSquare
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { VektraLogo } from './VektraLogo';

interface NavbarProps {
  onOpenSubmitModal: () => void;
  onOpenDiscordModal: () => void;
}

export function Navbar({ onOpenSubmitModal, onOpenDiscordModal }: NavbarProps) {
  const { theme, setTheme, isDark } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHome = typeof window !== 'undefined' ? ['/', '/index.html'].includes(window.location.pathname) : true;
  const anchor = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0a0d0c]/85 dark:bg-[#0a0d0c]/90 border-b border-[#1f2730] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2.5 group">
            <VektraLogo className="w-7 h-7" isDark={isDark} />
            <span className="font-bold text-lg tracking-tight text-[#e7edf3] font-mono group-hover:text-emerald-400 transition-colors">
              Vektra
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-6 text-sm text-[#9aa6b2]">
            <a href={anchor('features')} className="hover:text-[#e7edf3] transition-colors">Features</a>
            <a href={anchor('for-artists')} className="hover:text-[#e7edf3] transition-colors">For Artists</a>
            <a href={anchor('for-labels')} className="hover:text-[#e7edf3] transition-colors">For Labels</a>
            <a
              href="/pricing"
              className={`hover:text-[#e7edf3] transition-colors ${isHome ? '' : 'text-emerald-400 font-semibold'}`}
            >
              Pricing
            </a>
            <a href={anchor('faq')} className="hover:text-[#e7edf3] transition-colors">FAQ</a>
            <a 
              href="https://docs.vektra.games" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#e7edf3] transition-colors flex items-center gap-1"
            >
              Docs <ExternalLink className="w-3 h-3 text-zinc-500" />
            </a>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Discord Community Link */}
          <a
            href="https://discord.gg/AMUaEFxTDE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#9aa6b2] hover:text-[#e7edf3] bg-[#11161a] hover:bg-[#161c22] border border-[#1f2730] rounded-lg transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Support Discord</span>
          </a>

          {/* Staff Login Dashboard Link */}
          <a
            href="https://dashboard.vektra.games"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 text-xs font-semibold text-[#e7edf3] hover:text-white bg-[#161c22] hover:bg-[#1f2730] border border-[#1f2730] rounded-lg transition-all"
          >
            Staff Login
          </a>

          {/* Green Primary Artist Portal Button */}
          <a
            href="https://artists.vektra.games"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm shadow-emerald-900/40 active:scale-[0.98] transition-all"
          >
            <span>Artist Portal</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#9aa6b2] hover:text-[#e7edf3] rounded-lg border border-[#1f2730] bg-[#11161a]"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[#1f2730] bg-[#0a0d0c] px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            <a
              href={anchor('features')}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-[#e7edf3] hover:bg-[#11161a] rounded-md"
            >
              Features
            </a>
            <a
              href={anchor('for-artists')}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-[#e7edf3] hover:bg-[#11161a] rounded-md"
            >
              For Artists
            </a>
            <a
              href={anchor('for-labels')}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-[#e7edf3] hover:bg-[#11161a] rounded-md"
            >
              For Labels & Collectives
            </a>
            <a
              href="/pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-[#e7edf3] hover:bg-[#11161a] rounded-md"
            >
              Pricing
            </a>
            <a
              href={anchor('faq')}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-[#e7edf3] hover:bg-[#11161a] rounded-md"
            >
              FAQ
            </a>
            <a
              href="https://docs.vektra.games"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-sm text-[#9aa6b2] hover:text-white"
            >
              Documentation
            </a>
            <a
              href="https://discord.gg/AMUaEFxTDE"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-sm text-[#9aa6b2] hover:text-white"
            >
              Discord Support Community
            </a>
          </div>

          <div className="pt-3 flex flex-col gap-2">
            <a
              href="https://artists.vektra.games"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-xs font-semibold rounded-lg bg-emerald-600 text-white"
            >
              Open Artist Portal (artists.vektra.games)
            </a>
            <a
              href="https://dashboard.vektra.games"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-xs font-semibold rounded-lg bg-[#161c22] border border-[#1f2730] text-[#e7edf3]"
            >
              Staff Dashboard (dashboard.vektra.games)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
