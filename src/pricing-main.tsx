import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {ThemeProvider} from './context/ThemeContext';
import {Navbar} from './components/Navbar';
import {PricingSection} from './components/PricingSection';
import {Footer} from './components/Footer';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <div className="min-h-screen bg-[#0a0d0c] text-[#e7edf3] font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
        <Navbar
          onOpenSubmitModal={() => {}}
          onOpenDiscordModal={() => {}}
        />
        <main>
          <PricingSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  </StrictMode>,
);
