import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, Command } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUIStore } from '@/store/ui';
import { modalVariants } from '@/lib/animations';

const commands = [
  { id: 'home', label: 'Go to Home', action: '/' },
  { id: 'about', label: 'Go to About', action: '/about' },
  { id: 'skills', label: 'Go to Skills', action: '/skills' },
  { id: 'projects', label: 'Go to Projects', action: '/projects' },
  { id: 'lab', label: 'Go to Lab', action: '/lab' },
  { id: 'contact', label: 'Go to Contact', action: '/contact' },
  { id: 'toggle-sound', label: 'Toggle Sound', action: 'toggle-sound' },
  { id: 'toggle-motion', label: 'Toggle Motion', action: 'toggle-motion' },
  { id: 'konami', label: 'Activate Secret Theme', action: 'konami' },
];

export const CommandPalette: React.FC = () => {
  const navigate = useNavigate();
  const { 
    commandPaletteOpen, 
    closeCommandPalette, 
    toggleSound, 
    toggleMotion, 
    activateKonami 
  } = useUIStore();
  
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredCommands = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (commandPaletteOpen) {
          closeCommandPalette();
        } else {
          // Open command palette action would be in the parent component
        }
      }

      if (!commandPaletteOpen) return;

      switch (e.key) {
        case 'Escape':
          closeCommandPalette();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < filteredCommands.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev > 0 ? prev - 1 : filteredCommands.length - 1
          );
          break;
        case 'Enter':
          e.preventDefault();
          handleCommand(filteredCommands[selectedIndex]);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [commandPaletteOpen, closeCommandPalette, filteredCommands, selectedIndex]);

  const handleCommand = (command: typeof commands[0]) => {
    switch (command.action) {
      case 'toggle-sound':
        toggleSound();
        break;
      case 'toggle-motion':
        toggleMotion();
        break;
      case 'konami':
        activateKonami();
        break;
      default:
        if (command.action.startsWith('/')) {
          navigate(command.action);
        }
    }
    closeCommandPalette();
    setQuery('');
  };

  return (
    <AnimatePresence>
      {commandPaletteOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-bg/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCommandPalette}
          />

          {/* Command palette */}
          <motion.div
            className="fixed top-1/2 left-1/2 w-full max-w-md z-50"
            style={{ x: '-50%', y: '-50%' }}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="pixel-surface crt rounded-lg overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-violet-2/20">
                <Search className="text-violet-2" size={18} />
                <input
                  type="text"
                  placeholder="Type a command or search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent text-text placeholder-muted outline-none font-body"
                  autoFocus
                />
                <div className="flex items-center gap-1 text-xs text-muted">
                  <Command size={12} />
                  <span>K</span>
                </div>
              </div>

              {/* Commands list */}
              <div className="max-h-64 overflow-y-auto">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((command, index) => (
                    <motion.div
                      key={command.id}
                      className={cn(
                        'px-4 py-2 cursor-pointer flex items-center justify-between',
                        'transition-colors duration-120',
                        {
                          'bg-violet/20 text-violet-2': index === selectedIndex,
                          'hover:bg-surface/50': index !== selectedIndex,
                        }
                      )}
                      onClick={() => handleCommand(command)}
                      whileHover={{ x: 2 }}
                    >
                      <span className="font-body">{command.label}</span>
                    </motion.div>
                  ))
                ) : (
                  <div className="px-4 py-8 text-center text-muted">
                    No commands found
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2 border-t border-violet-2/20 text-xs text-muted">
                Use ↑↓ to navigate, Enter to select, Esc to close
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
