import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Coffee, Zap } from 'lucide-react';
import { PixelCard } from '@/components/ui/PixelCard';
import { JourneyTimeline } from '@/components/timeline/JourneyTimeline';
import { pageVariants, pixelVariants, staggerContainer } from '@/lib/animations';

const timeline = [
  {
    year: '2019',
    title: 'Started Coding Journey',
    company: 'Self-taught',
    description: 'Began learning programming with passion for creating digital experiences.',
  },
  {
    year: '2020',
    title: 'Frontend Developer',
    company: 'Creative Agency',
    description: 'Specialized in creating interactive user interfaces with attention to detail.',
  },
  {
    year: '2022',
    title: 'Full Stack Developer',
    company: 'Digital Solutions Co.',
    description: 'Built responsive web applications and APIs serving thousands of users.',
  },
  {
    year: '2024',
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovators Inc.',
    description: 'Leading development of scalable web applications with modern tech stack.',
  },
  {
    year: '2025',
    title: 'Open to New Opportunities',
    company: 'Freelance & Remote',
    description: 'Exploring exciting projects and collaborations in cutting-edge technologies.',
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
          <motion.div className="text-center space-y-4" variants={pixelVariants}>
            <h1 className="font-pixel text-3xl md:text-5xl text-violet-2">
              About Me
            </h1>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              A passionate developer who loves crafting digital experiences with attention to detail and a pixel-perfect approach.
            </p>
          </motion.div>

          {/* Avatar and Bio */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center"
            variants={staggerContainer}
          >
            <motion.div variants={pixelVariants}>
              <PixelCard className="aspect-square flex items-center justify-center bg-violet/5">
                <div className="w-32 h-32 bg-gradient-to-br from-violet to-violet-2 rounded-full flex items-center justify-center">
                  <span className="font-pixel text-4xl text-text">M</span>
                </div>
              </PixelCard>
            </motion.div>

            <motion.div className="space-y-4" variants={pixelVariants}>
              <h2 className="font-display text-2xl text-text">Hi, I'm Mithun!</h2>
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
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={staggerContainer}
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div key={stat.label} variants={pixelVariants}>
                  <PixelCard className="text-center p-4">
                    <Icon className="text-violet-2 mx-auto mb-2" size={24} />
                    <div className="font-display text-2xl text-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-muted text-sm">{stat.label}</div>
                  </PixelCard>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Timeline */}
          <motion.div variants={staggerContainer}>
            <JourneyTimeline items={timeline} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
