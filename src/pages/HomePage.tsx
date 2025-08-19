import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Code2, Mail } from 'lucide-react';
import { PixelCard } from '../components/ui/PixelCard';
import { PixelButton } from '../components/ui/PixelButton';
import { 
  ScrollAnimate,
  TypewriterAnimation,
  ParticleField,
  GlitchEffect,
  StaggerWrapper,
  HoverCard3D,
  MagneticDiv
} from '../components/animations/AnimationComponents';
import { pageVariants, pixelVariants, staggerContainer } from '../lib/animations';

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
      <ParticleField count={30} className="z-0" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          className="text-center space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Logo/Title with scanline effect */}
          <ScrollAnimate direction="scale" delay={0.2}>
            <GlitchEffect trigger="constant" intensity="low">
              <motion.h1 
                className="font-pixel text-4xl md:text-6xl lg:text-7xl text-violet-2 relative z-10"
                initial={{ filter: 'blur(8px)', opacity: 0 }}
                animate={{ filter: 'blur(0px)', opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.5 }}
              >
                Mithun.dev
              </motion.h1>
            </GlitchEffect>
            
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
          </ScrollAnimate>

          {/* Typing subtitle */}
          <ScrollAnimate direction="up" delay={0.5}>
            <TypewriterAnimation
              text={heroText}
              speed={100}
              delay={2000}
              className="font-display text-xl md:text-2xl text-text block"
            />
          </ScrollAnimate>

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
        <StaggerWrapper className="grid md:grid-cols-3 gap-6 mt-20">
          <HoverCard3D>
            <MagneticDiv strength={0.1}>
              <PixelCard 
                interactive
                className="text-center p-6 group hover:bg-violet/5 transition-colors duration-300 h-full"
              >
                <ParticleField count={5} size={1} className="opacity-30" />
                <div className="w-12 h-12 bg-violet/20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Code2 className="text-violet-2" size={24} />
                </div>
                <h3 className="font-display text-lg text-violet-2 mb-2">Frontend</h3>
                <p className="text-muted text-sm">
                  React, TypeScript, Next.js with pixel-perfect animations
                </p>
              </PixelCard>
            </MagneticDiv>
          </HoverCard3D>

          <HoverCard3D>
            <MagneticDiv strength={0.1}>
              <PixelCard 
                interactive
                className="text-center p-6 group hover:bg-violet/5 transition-colors duration-300 h-full"
              >
                <ParticleField count={5} size={1} color="#22D3EE" className="opacity-30" />
                <div className="w-12 h-12 bg-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Sparkles className="text-cyan" size={24} />
                </div>
                <h3 className="font-display text-lg text-cyan mb-2">Backend</h3>
                <p className="text-muted text-sm">
                  Node.js, Python, databases with robust architecture
                </p>
              </PixelCard>
            </MagneticDiv>
          </HoverCard3D>

          <HoverCard3D>
            <MagneticDiv strength={0.1}>
              <PixelCard 
                interactive
                className="text-center p-6 group hover:bg-violet/5 transition-colors duration-300 h-full"
              >
                <ParticleField count={5} size={1} color="#A3E635" className="opacity-30" />
                <div className="w-12 h-12 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Mail className="text-lime" size={24} />
                </div>
                <h3 className="font-display text-lg text-lime mb-2">Design</h3>
                <p className="text-muted text-sm">
                  UI/UX with retro aesthetics and modern usability
                </p>
              </PixelCard>
            </MagneticDiv>
          </HoverCard3D>
        </StaggerWrapper>
      </div>
    </motion.div>
  );
};
