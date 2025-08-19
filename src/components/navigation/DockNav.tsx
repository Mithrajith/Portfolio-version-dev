import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Code, Briefcase, TestTube, Mail, Volume2, VolumeX, Gauge } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUIStore } from '@/store/ui';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/about', icon: User, label: 'About' },
  { path: '/skills', icon: Code, label: 'Skills' },
  { path: '/projects', icon: Briefcase, label: 'Projects' },
  { path: '/lab', icon: TestTube, label: 'Lab' },
  { path: '/contact', icon: Mail, label: 'Contact' },
];

export const DockNav: React.FC = () => {
  const location = useLocation();
  const { soundEnabled, motionReduced, toggleSound, toggleMotion } = useUIStore();

  const handleNavClick = (path: string) => {
    // Laser swipe animation trigger would go here
    console.log(`Navigating to ${path}`);
  };

  return (
    <motion.nav
      className="fixed bottom-6 left-1/2 z-50 flex items-center gap-2 px-4 py-3"
      style={{ x: '-50%' }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Dock background */}
      <div className="absolute inset-0 pixel-surface rounded-lg backdrop-blur-md opacity-90" />
      
      {/* Navigation items */}
      <div className="relative flex items-center gap-1">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <motion.div
              key={item.path}
              className="relative"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={cn(
                  'flex items-center justify-center w-10 h-10 rounded-md',
                  'transition-all duration-200 focus-ring group relative',
                  {
                    'text-violet-2 bg-violet/20': isActive,
                    'text-muted hover:text-text hover:bg-surface/50': !isActive,
                  }
                )}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} />
                </motion.div>
                
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 w-1 h-1 bg-violet-2 rounded-full glow"
                    layoutId="activeIndicator"
                    style={{ x: '-50%' }}
                  />
                )}
                
                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="pixel-surface px-2 py-1 text-xs font-display text-text whitespace-nowrap">
                    {item.label}
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
        
        {/* Separator */}
        <div className="w-px h-6 bg-violet-2/30 mx-1" />
        
        {/* Controls */}
        <motion.button
          onClick={toggleSound}
          className={cn(
            'flex items-center justify-center w-8 h-8 rounded-md',
            'transition-all duration-200 focus-ring',
            {
              'text-violet-2': soundEnabled,
              'text-muted hover:text-text': !soundEnabled,
            }
          )}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </motion.button>
        
        <motion.button
          onClick={toggleMotion}
          className={cn(
            'flex items-center justify-center w-8 h-8 rounded-md',
            'transition-all duration-200 focus-ring',
            {
              'text-rose': motionReduced,
              'text-muted hover:text-text': !motionReduced,
            }
          )}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Gauge size={16} />
        </motion.button>
      </div>
    </motion.nav>
  );
};
