import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Zap } from 'lucide-react';
import { PixelCard } from '@/components/ui/PixelCard';
import { PixelButton } from '@/components/ui/PixelButton';
import { pageVariants, pixelVariants, staggerContainer } from '@/lib/animations';

const experiments = [
  {
    id: 1,
    title: 'Particle Physics',
    description: 'Interactive particle system with gravity, collision detection, and mouse interaction.',
    component: 'ParticleDemo',
    tags: ['Canvas', 'Physics', 'Animation'],
  },
  {
    id: 2,
    title: 'Pixel Shader',
    description: 'Real-time pixel art filter that converts any image into retro pixel art.',
    component: 'PixelShader',
    tags: ['WebGL', 'Shaders', 'Image Processing'],
  },
  {
    id: 3,
    title: 'Wave Generator',
    description: 'Sine wave visualization with frequency, amplitude, and phase controls.',
    component: 'WaveDemo',
    tags: ['Math', 'Visualization', 'Audio'],
  },
  {
    id: 4,
    title: 'Magnetic Cursor',
    description: 'Elements that are attracted to the cursor with spring physics.',
    component: 'MagneticDemo',
    tags: ['Physics', 'Interaction', 'Spring'],
  },
];

// Simple demo components
const ParticleDemo: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <div className="w-full h-48 bg-surface/30 rounded relative overflow-hidden">
    {isActive && [...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-violet-2 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 100 - 50],
          y: [0, Math.random() * 100 - 50],
        }}
        transition={{
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    ))}
    <div className="absolute inset-0 flex items-center justify-center text-muted">
      {isActive ? 'Particles in motion!' : 'Click play to start'}
    </div>
  </div>
);

const PixelShader: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <div className="w-full h-48 bg-surface/30 rounded relative overflow-hidden">
    <motion.div
      className="absolute inset-4 bg-gradient-to-br from-violet to-cyan rounded"
      style={{
        imageRendering: isActive ? 'pixelated' : 'auto',
        filter: isActive ? 'blur(0px) contrast(150%)' : 'blur(2px)',
      }}
      animate={isActive ? {
        scale: [1, 1.05, 1],
        rotate: [0, 1, 0],
      } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <div className="absolute bottom-2 right-2 text-xs text-muted">
      {isActive ? 'Pixelated' : 'Original'}
    </div>
  </div>
);

const WaveDemo: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <div className="w-full h-48 bg-surface/30 rounded relative overflow-hidden">
    <svg className="w-full h-full">
      <motion.path
        d={isActive ? 
          "M0,96 Q50,50 100,96 T200,96 T300,96 T400,96" :
          "M0,96 L400,96"
        }
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-cyan"
        animate={isActive ? {
          d: [
            "M0,96 Q50,50 100,96 T200,96 T300,96 T400,96",
            "M0,96 Q50,140 100,96 T200,96 T300,96 T400,96",
            "M0,96 Q50,50 100,96 T200,96 T300,96 T400,96",
          ],
        } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
    <div className="absolute bottom-2 left-2 text-xs text-muted">
      {isActive ? 'Wave active' : 'Wave paused'}
    </div>
  </div>
);

const MagneticDemo: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <div 
      className="w-full h-48 bg-surface/30 rounded relative overflow-hidden cursor-none"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
    >
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-lime rounded-full"
          style={{
            left: `${20 + i * 12}%`,
            top: `${30 + i * 8}%`,
          }}
          animate={isActive ? {
            x: (mousePos.x - (20 + i * 12) * 4) * 0.1,
            y: (mousePos.y - (30 + i * 8) * 2) * 0.1,
          } : { x: 0, y: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        />
      ))}
      <div className="absolute bottom-2 right-2 text-xs text-muted">
        {isActive ? 'Move cursor around' : 'Click play'}
      </div>
    </div>
  );
};

const demoComponents = {
  ParticleDemo,
  PixelShader,
  WaveDemo,
  MagneticDemo,
};

export const LabPage: React.FC = () => {
  const [activeExperiments, setActiveExperiments] = useState<Set<number>>(new Set());

  const toggleExperiment = (id: number) => {
    const newActive = new Set(activeExperiments);
    if (newActive.has(id)) {
      newActive.delete(id);
    } else {
      newActive.add(id);
    }
    setActiveExperiments(newActive);
  };

  const resetAll = () => {
    setActiveExperiments(new Set());
  };

  return (
    <motion.div
      className="min-h-screen pixel-grid crt py-20"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto space-y-12"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Header */}
          <motion.div className="text-center space-y-4" variants={pixelVariants}>
            <h1 className="font-pixel text-3xl md:text-5xl text-violet-2">
              Lab Experiments
            </h1>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Interactive demos and creative coding experiments. Click play to bring them to life!
            </p>
          </motion.div>

          {/* Controls */}
          <motion.div className="flex justify-center gap-4" variants={pixelVariants}>
            <PixelButton
              variant="secondary"
              onClick={resetAll}
              className="flex items-center gap-2"
            >
              <RotateCcw size={16} />
              Reset All
            </PixelButton>
            
            <div className="text-muted text-sm flex items-center">
              <Zap size={16} className="mr-1" />
              {activeExperiments.size} active
            </div>
          </motion.div>

          {/* Experiments grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
          >
            {experiments.map((experiment) => {
              const isActive = activeExperiments.has(experiment.id);
              const DemoComponent = demoComponents[experiment.component as keyof typeof demoComponents];

              return (
                <motion.div key={experiment.id} variants={pixelVariants}>
                  <PixelCard className="group">
                    {/* Demo area */}
                    <div className="mb-4">
                      <DemoComponent isActive={isActive} />
                    </div>

                    {/* Info and controls */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-display text-lg text-text mb-1">
                            {experiment.title}
                          </h3>
                          <p className="text-muted text-sm">
                            {experiment.description}
                          </p>
                        </div>
                        
                        <PixelButton
                          size="sm"
                          onClick={() => toggleExperiment(experiment.id)}
                          className={`flex items-center gap-2 ml-4 ${
                            isActive ? 'bg-rose hover:bg-rose/90' : ''
                          }`}
                        >
                          {isActive ? (
                            <>
                              <Pause size={14} />
                              Stop
                            </>
                          ) : (
                            <>
                              <Play size={14} />
                              Play
                            </>
                          )}
                        </PixelButton>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {experiment.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-surface text-violet-2 text-xs font-display rounded border border-violet-2/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </PixelCard>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom note */}
          <motion.div 
            className="text-center text-muted text-sm"
            variants={pixelVariants}
          >
            <p>
              These are simplified demos. Each represents larger experiments with 
              physics engines, WebGL shaders, and interactive algorithms.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
