import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { PixelCard } from '@/components/ui/PixelCard';
import { PixelButton } from '@/components/ui/PixelButton';
import { pageVariants, pixelVariants, staggerContainer } from '@/lib/animations';

const projects = [
  {
    id: 1,
    title: 'Campus Compass',
    description: 'College recommendation web application built with CSS-based styling and responsive design for helping students find the right college.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Mithrajith/campus-compass',
    featured: true,
  },
  {
    id: 2,
    title: 'Facial Recognition System',
    description: 'Python-based facial recognition system using OpenCV and machine learning algorithms for accurate face detection and recognition.',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&h=300&fit=crop',
    tech: ['Python', 'OpenCV', 'TensorFlow'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Mithrajith/facial-recognition',
    featured: true,
  },
  {
    id: 3,
    title: 'Team Maker',
    description: 'Utility application for creating and managing student teams with CSS-based interface and team management features.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Mithrajith/team-maker',
    featured: false,
  },
  {
    id: 4,
    title: 'SLAP - Student Leave Approval Portal',
    description: 'Web portal for student leave and OD approval system with HTML frontend and Flask backend architecture.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    tech: ['HTML5', 'Flask', 'Python'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Mithrajith/slap-portal',
    featured: true,
  },
  {
    id: 5,
    title: 'Image Captioning AI',
    description: 'AI-powered tool that generates descriptive captions for images using machine learning and computer vision techniques.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    tech: ['Python', 'TensorFlow', 'OpenCV'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Mithrajith/image-captioning',
    featured: true,
  },
  {
    id: 6,
    title: 'AI Music Player',
    description: 'Mood-based music player powered by machine learning algorithms, developed in Jupyter Notebook environment.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    tech: ['Python', 'Scikit-learn', 'Jupyter'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Mithrajith/ai-music-player',
    featured: false,
  },
  {
    id: 7,
    title: 'College ID Recognition (Ongoing)',
    description: 'Advanced computer vision project using YOLO and ArcFace algorithms for college ID recognition with low-quality camera support.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    tech: ['Python', 'YOLO', 'ArcFace', 'OpenCV'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Mithrajith/college-id-recognition',
    featured: true,
  },
];

const allTech = Array.from(new Set(projects.flatMap(p => p.tech)));

export const ProjectsPage: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = selectedTech
    ? projects.filter(p => p.tech.includes(selectedTech))
    : projects;

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

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
          className="max-w-6xl mx-auto space-y-12"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Header */}
          <motion.div className="text-center space-y-4" variants={pixelVariants}>
            <h1 className="font-pixel text-3xl md:text-5xl text-violet-2">
              Projects
            </h1>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              My journey through web development, machine learning, and AI - from college tools to intelligent applications.
            </p>
          </motion.div>

          {/* Tech filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-2"
            variants={staggerContainer}
          >
            <motion.div variants={pixelVariants}>
              <PixelButton
                size="sm"
                variant={selectedTech === null ? 'primary' : 'ghost'}
                onClick={() => setSelectedTech(null)}
              >
                All
              </PixelButton>
            </motion.div>
            {allTech.map((tech) => (
              <motion.div key={tech} variants={pixelVariants}>
                <PixelButton
                  size="sm"
                  variant={selectedTech === tech ? 'primary' : 'ghost'}
                  onClick={() => setSelectedTech(tech)}
                >
                  {tech}
                </PixelButton>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
          >
            {displayedProjects.map((project) => (
              <motion.div key={project.id} variants={pixelVariants}>
                <PixelCard 
                  interactive
                  className={`group overflow-hidden ${project.featured ? 'ring-2 ring-violet/30' : ''}`}
                >
                  {/* Project image */}
                  <div className="relative overflow-hidden rounded-sm mb-4">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      initial={{ filter: 'blur(4px) grayscale(50%)' }}
                      whileInView={{ filter: 'blur(0px) grayscale(0%)' }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-violet/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="flex gap-3">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-text/20 backdrop-blur-sm rounded-full hover:bg-text/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Eye size={20} className="text-text" />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-text/20 backdrop-blur-sm rounded-full hover:bg-text/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={20} className="text-text" />
                        </motion.a>
                      </div>
                    </motion.div>

                    {project.featured && (
                      <div className="absolute top-2 right-2 px-2 py-1 bg-violet text-text text-xs font-display rounded">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project details */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-display text-xl text-text mb-2 group-hover:text-violet-2 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-surface text-violet-2 text-xs font-display rounded border border-violet-2/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-violet-2 hover:text-violet transition-colors text-sm"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted hover:text-text transition-colors text-sm"
                      >
                        <Github size={16} />
                        Source
                      </a>
                    </div>
                  </div>
                </PixelCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Show more button */}
          {filteredProjects.length > 4 && (
            <motion.div className="text-center" variants={pixelVariants}>
              <PixelButton
                variant="secondary"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? 'Show Less' : `Show All (${filteredProjects.length - 4} more)`}
              </PixelButton>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
