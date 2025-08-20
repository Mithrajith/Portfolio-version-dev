import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Coffee, Zap } from 'lucide-react';
import { PixelCard } from '@/components/ui/PixelCard';
import { ProfileAvatar } from '@/components/ui/ProfileAvatar';
import { JourneyTimeline } from '@/components/timeline/JourneyTimeline';
import { pageVariants, pixelVariants, staggerContainer } from '@/lib/animations';

const timeline = [
  {
    year: '2019',
    title: 'Started Programming Journey',
    company: 'Self-taught',
    description: 'Began learning Python and web development with passion for creating digital solutions.',
  },
  {
    year: '2020',
    title: 'Frontend Development',
    company: 'Learning Phase',
    description: 'Mastered React.js, JavaScript ES6+, HTML5, CSS3 and responsive design principles.',
  },
  {
    year: '2021',
    title: 'Backend Development',
    company: 'Skill Expansion',
    description: 'Learned Python Flask, FastAPI, and REST API development for full-stack capabilities.',
  },
  {
    year: '2022',
    title: 'Machine Learning & AI',
    company: 'Tech Innovation',
    description: 'Dove into TensorFlow, OpenCV, YOLO, ArcFace for computer vision and AI applications.',
  },
  {
    year: '2023',
    title: 'Data Science Focus',
    company: 'Advanced Learning',
    description: 'Specialized in Pandas, NumPy, data visualization and model training techniques.',
  },
  {
    year: '2024-2025',
    title: 'Project Implementation',
    company: 'Active Development',
    description: 'Building real-world projects including facial recognition, ID recognition, and AI applications.',
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
