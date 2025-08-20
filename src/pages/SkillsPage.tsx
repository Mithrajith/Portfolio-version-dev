import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PixelCard } from '@/components/ui/PixelCard';
import { PixelButton } from '@/components/ui/PixelButton';
import { pageVariants, pixelVariants, staggerContainer } from '@/lib/animations';

const skillCategories = [
  {
    name: 'Frontend',
    color: 'violet',
    skills: [
      { name: 'React.js', level: 85, years: 3 },
      { name: 'JavaScript (ES6+)', level: 90, years: 4 },
      { name: 'HTML5', level: 95, years: 4 },
      { name: 'CSS3', level: 90, years: 4 },
      { name: 'Tailwind CSS', level: 85, years: 2 },
      { name: 'Framer Motion', level: 80, years: 2 },
    ],
  },
  {
    name: 'Backend',
    color: 'cyan',
    skills: [
      { name: 'Python', level: 90, years: 4 },
      { name: 'Flask', level: 85, years: 3 },
      { name: 'FastAPI', level: 75, years: 2 },
      { name: 'REST APIs', level: 80, years: 3 },
      { name: 'MongoDB', level: 75, years: 2 },
      { name: 'SQL/SQLite', level: 80, years: 3 },
    ],
  },
  {
    name: 'ML & AI',
    color: 'purple',
    skills: [
      { name: 'TensorFlow', level: 80, years: 2 },
      { name: 'Scikit-learn', level: 85, years: 3 },
      { name: 'OpenCV', level: 85, years: 2 },
      { name: 'YOLO', level: 75, years: 1 },
      { name: 'ArcFace', level: 70, years: 1 },
      { name: 'Computer Vision', level: 80, years: 2 },
    ],
  },
  {
    name: 'Data Science',
    color: 'lime',
    skills: [
      { name: 'Pandas', level: 85, years: 3 },
      { name: 'NumPy', level: 90, years: 3 },
      { name: 'Matplotlib', level: 80, years: 2 },
      { name: 'Plotly', level: 75, years: 2 },
      { name: 'Jupyter Notebook', level: 90, years: 3 },
      { name: 'Data Visualization', level: 80, years: 2 },
    ],
  },
  {
    name: 'Tools',
    color: 'cyan',
    skills: [
      { name: 'Git & GitHub', level: 90, years: 4 },
      { name: 'VS Code', level: 95, years: 4 },
      { name: 'Linux (Arch)', level: 85, years: 3 },
      { name: 'Netlify', level: 80, years: 2 },
      { name: 'GitHub Actions', level: 70, years: 1 },
      { name: 'Responsive Design', level: 90, years: 3 },
    ],
  },
];

export const SkillsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Frontend');

  const currentSkills = skillCategories.find(cat => cat.name === selectedCategory)?.skills || [];

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
              Skills & Expertise
            </h1>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              From web development to machine learning - the technologies I use to build intelligent applications.
            </p>
          </motion.div>

          {/* Category filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={staggerContainer}
          >
            {skillCategories.map((category) => (
              <motion.div key={category.name} variants={pixelVariants}>
                <PixelButton
                  variant={selectedCategory === category.name ? 'primary' : 'ghost'}
                  onClick={() => setSelectedCategory(category.name)}
                  className="transition-all duration-200"
                >
                  {category.name}
                </PixelButton>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            key={selectedCategory}
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            {currentSkills.map((skill) => (
              <motion.div key={skill.name} variants={pixelVariants}>
                <PixelCard 
                  interactive
                  className="p-4 group hover:bg-violet/5 transition-colors duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display text-lg text-text group-hover:text-violet-2 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-sm text-muted">
                      {skill.years}y
                    </span>
                  </div>
                  
                  {/* Skill level bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Proficiency</span>
                      <span className="text-violet-2 font-display">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-surface/50 rounded-full overflow-hidden relative">
                      <motion.div
                        className="h-full bg-gradient-to-r from-violet to-violet-2 rounded-full relative"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: 0.2,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                      >
                        {/* Pixel blocks effect */}
                        <div className="absolute inset-0 flex">
                          {[...Array(Math.floor(skill.level / 10))].map((_, i) => (
                            <motion.div
                              key={i}
                              className="flex-1 border-r border-bg/20 last:border-r-0"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: i * 0.05 }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover effect particles */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-violet-2/50 rounded-full opacity-0 group-hover:opacity-100"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${20 + i * 20}%`,
                        }}
                        animate={{
                          y: [0, -4, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </PixelCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Summary stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={staggerContainer}
          >
            <motion.div variants={pixelVariants}>
              <PixelCard className="text-center p-4">
                <div className="font-display text-2xl text-violet-2 mb-1">
                  {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}
                </div>
                <div className="text-muted text-sm">Total Skills</div>
              </PixelCard>
            </motion.div>

            <motion.div variants={pixelVariants}>
              <PixelCard className="text-center p-4">
                <div className="font-display text-2xl text-cyan mb-1">4+</div>
                <div className="text-muted text-sm">Years Coding</div>
              </PixelCard>
            </motion.div>

            <motion.div variants={pixelVariants}>
              <PixelCard className="text-center p-4">
                <div className="font-display text-2xl text-lime mb-1">7+</div>
                <div className="text-muted text-sm">Projects Built</div>
              </PixelCard>
            </motion.div>

            <motion.div variants={pixelVariants}>
              <PixelCard className="text-center p-4">
                <div className="font-display text-2xl text-rose mb-1">∞</div>
                <div className="text-muted text-sm">Learning</div>
              </PixelCard>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
