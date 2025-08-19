import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { PixelCard } from '@/components/ui/PixelCard';
import { PixelButton } from '@/components/ui/PixelButton';
import { pageVariants, pixelVariants, staggerContainer } from '@/lib/animations';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/Mithrajith/ecommerce',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
    tech: ['Next.js', 'TypeScript', 'Socket.io', 'MongoDB'],
    liveUrl: 'https://example-tasks.com',
    githubUrl: 'https://github.com/Mithrajith/tasks',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with interactive charts, forecasts, and location-based weather data visualization.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop',
    tech: ['Vue.js', 'Chart.js', 'OpenWeather API'],
    liveUrl: 'https://example-weather.com',
    githubUrl: 'https://github.com/Mithrajith/weather',
    featured: false,
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'This very portfolio website built with React, Framer Motion, and Tailwind CSS. Features pixel-perfect animations and responsive design.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    tech: ['React', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://Mithrajith.dev',
    githubUrl: 'https://github.com/Mithrajith/portfolio',
    featured: true,
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'Modern blog platform with markdown support, SEO optimization, and content management system.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
    tech: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://example-blog.com',
    githubUrl: 'https://github.com/Mithrajith/blog',
    featured: false,
  },
  {
    id: 6,
    title: 'Real-time Chat App',
    description: 'Real-time messaging application with rooms, file sharing, and emoji reactions.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=300&fit=crop',
    tech: ['React', 'Socket.io', 'Node.js', 'Redis'],
    liveUrl: 'https://example-chat.com',
    githubUrl: 'https://github.com/Mithrajith/chat',
    featured: false,
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
              A showcase of my work, from concept to deployment.
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
