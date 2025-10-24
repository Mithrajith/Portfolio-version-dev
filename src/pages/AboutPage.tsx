import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Coffee, Zap } from 'lucide-react';
import { PixelCard } from '@/components/ui/PixelCard';
import { ProfileAvatar } from '@/components/ui/ProfileAvatar';
import { JourneyTimeline } from '@/components/timeline/JourneyTimeline';
import { pageVariants, pixelVariants, staggerContainer } from '@/lib/animations';

const timeline = [
  {
    year: 'Sep 2023 – Dec 2023',
    title: 'Project Hub',
    company: 'Independent Project',
    description:
      'Developed a centralized platform to manage and showcase projects efficiently. Implemented full-stack features using React.js, Node.js, and MongoDB with responsive UI and CRUD functionalities.',
  },
  {
    year: 'Jan 2024 – Mar 2024',
    title: 'SLAP (Student Leave Application Portal)',
    company: 'Academic Project',
    description:
      'Built a digital leave management system for students and faculty. Focused on authentication, database management, and workflow automation using Flask, PostgreSQL, and RESTful APIs.',
  },
  {
    year: 'Mar 2024 – Jun 2024',
    title: 'AI Music Player',
    company: 'Personal AI Project',
    description:
      'Created an AI-powered music player that recommends songs using machine learning models trained on user listening patterns. Integrated Python ML backend with a React frontend.',
  },
  {
    year: 'Jun 2024 – Aug 2024',
    title: 'Campus Compass',
    company: 'Team Collaboration',
    description:
      'Developed a campus navigation and information system featuring geolocation, map-based UI, and smart search. Used React, Leaflet.js, and Node.js APIs.',
  },
  {
    year: 'Sep 2024 – Present',
    title: 'MARLIN (AI-Driven Unified Platform for CMLRE)',
    company: 'Smart India Hackathon 2025',
    description:
      'Leading AI/ML module for MARLIN—an ocean data lakehouse integrating Delta Lake architecture, AI-based quality control, and intelligent species identification using CNN and Isolation Forest models.',
  },
  {
    year: 'Oct 2024 – Present',
    title: 'Smart Digital Twin for Predictive Maintenance',
    company: 'SIH 2025 Project',
    description:
      'Developing ML models for reduced-order modeling and predictive maintenance using Python, TensorFlow, and MATLAB-based simulation data, integrated with visualization dashboards.',
  },
];

const stats = [
  { label: 'Projects Built', value: '7+', icon: Coffee },
  { label: 'Technologies', value: '15+', icon: Zap },
  { label: 'ML Models', value: '5+', icon: Calendar },
  { label: 'Coffee Cups', value: '∞', icon: MapPin },
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
              Enthusiastic about Web Development, ML, and AI. Mixing creativity + logic to build the future, one algorithm at a time.
            </p>
          </motion.div>

          {/* Avatar and Bio */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center"
            variants={staggerContainer}
          >
            <motion.div variants={pixelVariants}>
              <ProfileAvatar className="max-w-sm mx-auto" />
            </motion.div>

            <motion.div className="space-y-4" variants={pixelVariants}>
              <h2 className="font-display text-2xl text-text">Hi, I'm MITHRAJITH!</h2>
              <div className="space-y-3 text-muted">
                <p>
                  Passionate Full-Stack Developer and Machine Learning Enthusiast who loves 
                  crafting responsive UIs, building intelligent applications, and exploring data science. 
                  Always learning, always innovating.
                </p>
                <p>
                  My daily routine: ☕ coffee + code, learning ML algorithms, building cool projects, 
                  analyzing data, and crafting beautiful UIs. Dreams in Python and turns coffee into code!
                </p>
                <p>
                  Philosophy: "Building the future, one algorithm at a time." 
                  I mix creativity + logic → love both design and algorithms.
                </p>
                <p className="text-cyan">
                  🐧 Arch Linux power user who believes in open source and continuous learning!
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
