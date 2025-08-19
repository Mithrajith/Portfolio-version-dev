import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Code2, Mail } from 'lucide-react';
import { PixelCard } from '@/components/ui/PixelCard';
import { PixelButton } from '@/components/ui/PixelButton';
import { pageVariants, pixelVariants, staggerContainer, typingVariants, letterVariants } from '@/lib/animations';

const heroText = "Full Stack Developer";
const subtitle = "Crafted with pixels, polish, and a pinch of magic.";

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Mithun.dev - Pixel Violet Portfolio";
  }, []);

  return (
    <motion.div
      className="min-h-screen pixel-grid crt relative overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-violet-2/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          className="text-center space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Logo/Title with scanline effect */}
          <motion.div className="relative" variants={pixelVariants}>
            <motion.h1 
              className="font-pixel text-4xl md:text-6xl lg:text-7xl text-violet-2 relative z-10"
              initial={{ filter: 'blur(8px)', opacity: 0 }}
              animate={{ filter: 'blur(0px)', opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.5 }}
            >
              Mithun.dev
            </motion.h1>
            
            {/* Scanline shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan to-transparent h-full opacity-30"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 2,
                delay: 1.5,
                ease: 'linear',
              }}
            />
          </motion.div>

          {/* Typing subtitle */}
          <motion.div
            variants={typingVariants}
            initial="hidden"
            animate="visible"
            className="font-display text-xl md:text-2xl text-text"
          >
            {heroText.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-muted max-w-lg mx-auto text-lg font-body"
            variants={pixelVariants}
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-12"
            variants={staggerContainer}
          >
            <motion.div variants={pixelVariants}>
              <Link to="/about">
                <PixelButton className="group">
                  <span className="flex items-center gap-2">
                    <Sparkles size={18} />
                    About Me
                    <ArrowRight 
                      size={16} 
                      className="group-hover:translate-x-1 transition-transform duration-200" 
                    />
                  </span>
                </PixelButton>
              </Link>
            </motion.div>

            <motion.div variants={pixelVariants}>
              <Link to="/projects">
                <PixelButton variant="secondary" className="group">
                  <span className="flex items-center gap-2">
                    <Code2 size={18} />
                    View Projects
                    <ArrowRight 
                      size={16} 
                      className="group-hover:translate-x-1 transition-transform duration-200" 
                    />
                  </span>
                </PixelButton>
              </Link>
            </motion.div>

            <motion.div variants={pixelVariants}>
              <Link to="/contact">
                <PixelButton variant="ghost" className="group">
                  <span className="flex items-center gap-2">
                    <Mail size={18} />
                    Get in Touch
                    <ArrowRight 
                      size={16} 
                      className="group-hover:translate-x-1 transition-transform duration-200" 
                    />
                  </span>
                </PixelButton>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-20"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <PixelCard 
            variants={pixelVariants}
            interactive
            className="text-center p-6 group hover:bg-violet/5 transition-colors duration-300"
          >
            <div className="w-12 h-12 bg-violet/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code2 className="text-violet-2" size={24} />
            </div>
            <h3 className="font-display text-lg text-violet-2 mb-2">Frontend</h3>
            <p className="text-muted text-sm">
              React, TypeScript, Next.js with pixel-perfect animations
            </p>
          </PixelCard>

          <PixelCard 
            variants={pixelVariants}
            interactive
            className="text-center p-6 group hover:bg-violet/5 transition-colors duration-300"
          >
            <div className="w-12 h-12 bg-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="text-cyan" size={24} />
            </div>
            <h3 className="font-display text-lg text-cyan mb-2">Backend</h3>
            <p className="text-muted text-sm">
              Node.js, Python, databases with robust architecture
            </p>
          </PixelCard>

          <PixelCard 
            variants={pixelVariants}
            interactive
            className="text-center p-6 group hover:bg-violet/5 transition-colors duration-300"
          >
            <div className="w-12 h-12 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-lime" size={24} />
            </div>
            <h3 className="font-display text-lg text-lime mb-2">Design</h3>
            <p className="text-muted text-sm">
              UI/UX with retro aesthetics and modern usability
            </p>
          </PixelCard>
        </motion.div>
      </div>
    </motion.div>
  );
};
