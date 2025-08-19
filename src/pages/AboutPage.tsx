import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Coffee, Zap } from 'lucide-react';
import { PixelCard } from '../components/ui/PixelCard';
import { pageVariants, staggerContainer } from '../lib/animations';
import { 
  ScrollAnimate,
  TypewriterAnimation,
  ParticleField,
  StaggerWrapper,
  HoverCard3D,
  MagneticDiv,
  NumberCounter,
  GlitchEffect
} from '../components/animations/AnimationComponents';

const timeline = [
  {
    year: '2024',
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovators Inc.',
    description: 'Leading development of scalable web applications with modern tech stack.',
  },
  {
    year: '2022',
    title: 'Full Stack Developer',
    company: 'Digital Solutions Co.',
    description: 'Built responsive web applications and APIs serving thousands of users.',
  },
  {
    year: '2020',
    title: 'Frontend Developer',
    company: 'Creative Agency',
    description: 'Specialized in creating interactive user interfaces with attention to detail.',
  },
  {
    year: '2019',
    title: 'Started Coding Journey',
    company: 'Self-taught',
    description: 'Began learning programming with passion for creating digital experiences.',
  },
];

const stats = [
  { label: 'Lines of Code', value: '500K+', icon: Coffee },
  { label: 'Projects Completed', value: '50+', icon: Zap },
  { label: 'Happy Clients', value: '30+', icon: Calendar },
  { label: 'Years Experience', value: '5+', icon: MapPin },
];

export const AboutPage: React.FC = () => {
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
          className="max-w-4xl mx-auto space-y-16"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Header */}
          <ScrollAnimate>
            <div className="text-center space-y-4 relative">
              <ParticleField count={20} size={2} className="absolute inset-0 opacity-20" />
              <GlitchEffect>
                <h1 className="font-pixel text-3xl md:text-5xl text-violet-2 relative z-10">
                  About Me
                </h1>
              </GlitchEffect>
              <TypewriterAnimation
                text="A passionate developer who loves crafting digital experiences with attention to detail and a pixel-perfect approach."
                className="text-muted max-w-2xl mx-auto text-lg relative z-10"
                speed={30}
              />
            </div>
          </ScrollAnimate>

          {/* Avatar and Bio */}
          <StaggerWrapper className="grid md:grid-cols-2 gap-8 items-center">
            <HoverCard3D>
              <MagneticDiv strength={0.15}>
                <PixelCard className="aspect-square flex items-center justify-center bg-violet/5 relative overflow-hidden">
                  <ParticleField count={10} size={1} className="absolute inset-0 opacity-30" />
                  <div className="w-32 h-32 bg-gradient-to-br from-violet to-violet-2 rounded-full flex items-center justify-center relative z-10">
                    <span className="font-pixel text-4xl text-text">M</span>
                  </div>
                </PixelCard>
              </MagneticDiv>
            </HoverCard3D>

            <ScrollAnimate direction="right">
              <div className="space-y-4">
                <GlitchEffect>
                  <h2 className="font-display text-2xl text-text">Hi, I'm Mithun!</h2>
                </GlitchEffect>
                <div className="space-y-3 text-muted">
                  <p>
                    I'm a full-stack developer with a passion for creating beautiful, 
                    functional web applications. My journey started with curiosity about 
                    how websites work, and it evolved into a deep love for coding and problem-solving.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, 
                    contributing to open source projects, or experimenting with pixel art and retro aesthetics.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and creating user experiences 
                    that are both delightful and accessible.
                  </p>
                </div>
              </div>
            </ScrollAnimate>
          </StaggerWrapper>

          {/* Stats */}
          <ScrollAnimate>
            <StaggerWrapper className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <HoverCard3D key={stat.label}>
                    <MagneticDiv strength={0.1}>
                      <PixelCard className="text-center p-4 h-full relative overflow-hidden">
                        <ParticleField count={3} size={0.5} className="absolute inset-0 opacity-20" />
                        <div className="relative z-10">
                          <Icon className="text-violet-2 mx-auto mb-2" size={24} />
                          <NumberCounter 
                            value={parseInt(stat.value.replace(/\D/g, '') || '0')}
                            suffix={stat.value.replace(/\d/g, '')}
                            className="font-display text-2xl text-text mb-1"
                            duration={2}
                          />
                          <div className="text-muted text-sm">{stat.label}</div>
                        </div>
                      </PixelCard>
                    </MagneticDiv>
                  </HoverCard3D>
                );
              })}
            </StaggerWrapper>
          </ScrollAnimate>

          {/* Timeline */}
          <ScrollAnimate>
            <div className="space-y-8">
              <GlitchEffect>
                <h2 className="font-pixel text-2xl text-violet-2 text-center">
                  Journey Timeline
                </h2>
              </GlitchEffect>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-violet-2/30 transform md:-translate-x-1/2" />
                
                <StaggerWrapper className="space-y-8">
                  {timeline.map((item, index) => (
                    <div
                      key={item.year}
                      className="relative flex flex-col md:flex-row items-start md:items-center"
                    >
                      {/* Year indicator */}
                      <MagneticDiv strength={0.2} className="absolute left-0 md:left-1/2 w-8 h-8 bg-violet rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10">
                        <div className="w-3 h-3 bg-text rounded-full" />
                      </MagneticDiv>
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right md:mr-auto' : 'md:pl-8 md:ml-auto'} md:w-1/2`}>
                      <HoverCard3D>
                        <PixelCard className="p-4 relative overflow-hidden">
                          <ParticleField count={3} size={0.5} className="absolute inset-0 opacity-10" />
                          <div className="relative z-10">
                            <div className="font-display text-violet-2 text-lg mb-1">
                              {item.year}
                            </div>
                            <h3 className="font-medium text-text mb-1">{item.title}</h3>
                            <div className="text-muted text-sm mb-2">{item.company}</div>
                            <p className="text-muted text-sm">{item.description}</p>
                          </div>
                        </PixelCard>
                      </HoverCard3D>
                    </div>
                  </div>
                ))}
              </StaggerWrapper>
            </div>
          </div>
          </ScrollAnimate>
        </motion.div>
      </div>
    </motion.div>
  );
};
