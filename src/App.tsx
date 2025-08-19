import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { DockNav } from '@/components/navigation/DockNav';
import { MagneticCursor } from '@/components/ui/MagneticCursor';
import { CommandPalette } from '@/components/ui/CommandPalette';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { SkillsPage } from '@/pages/SkillsPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { LabPage } from '@/pages/LabPage';
import { ContactPage } from '@/pages/ContactPage';
import { AnimationShowcase } from '@/components/AnimationShowcase';
import { useUIStore } from '@/store/ui';

function App() {
  const location = useLocation();
  const { openCommandPalette, setCurrentRoute } = useUIStore();

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location.pathname, setCurrentRoute]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Command/Ctrl + K to open command palette
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openCommandPalette();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openCommandPalette]);

  // Add konami code listener
  useEffect(() => {
    const konamiCode = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'KeyB', 'KeyA'
    ];
    let konamiIndex = 0;

    const handleKonamiCode = (e: KeyboardEvent) => {
      if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          // Trigger secret theme
          document.body.classList.add('konami-activated');
          console.log('🎮 Konami code activated! Secret neon theme unlocked!');
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKonamiCode);
    return () => window.removeEventListener('keydown', handleKonamiCode);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text">
      {/* Magnetic cursor */}
      <MagneticCursor />

      {/* Command palette */}
      <CommandPalette />

      {/* Main content */}
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/lab" element={<LabPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/animations" element={<AnimationShowcase />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Navigation dock */}
      <DockNav />

      {/* Global background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(124, 58, 237, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(124, 58, 237, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
            }}
          />
        </div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-violet-2/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
