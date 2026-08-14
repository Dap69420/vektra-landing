import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoFeatures } from './components/BentoFeatures';
import { ForArtistsSection } from './components/ForArtistsSection';
import { ForLabelsSection } from './components/ForLabelsSection';
import { ArchitectureSteps } from './components/ArchitectureSteps';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#0a0d0c] text-[#e7edf3] font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
        
        {/* Navigation */}
        <Navbar
          onOpenSubmitModal={() => {}}
          onOpenDiscordModal={() => {}}
        />

        {/* Main Content */}
        <main>
          <Hero />
          <BentoFeatures />
          <ForArtistsSection />
          <ForLabelsSection />
          <ArchitectureSteps />
          <FAQ />
          <CTASection />
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </ThemeProvider>
  );
}
