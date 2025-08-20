import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, Code2, Mail, Trophy, 
  Star, Heart, Coffee, Users, Globe, Database, 
  Smartphone, Monitor, Palette, Brain, Shield
} from 'lucide-react';
import { PixelCard } from '@/components/ui/PixelCard';
import { PixelButton } from '@/components/ui/PixelButton';
import { pageVariants, pixelVariants, staggerContainer, typingVariants, letterVariants } from '@/lib/animations';

const heroText = "UI like Apple, Logic like Tesla ⚡, Intelligence like AI";
const subtitle = "Passionate Full-Stack Developer and Machine Learning Enthusiast who loves crafting responsive UIs, building intelligent applications, and exploring data science.";

const techStack = [
  { name: "React.js", icon: Code2, color: "text-violet-2", bg: "bg-violet/20" },
  { name: "JavaScript", icon: Code2, color: "text-yellow-400", bg: "bg-yellow-400/20" },
  { name: "Python", icon: Brain, color: "text-green-400", bg: "bg-green-400/20" },
  { name: "Flask", icon: Database, color: "text-blue-400", bg: "bg-blue-400/20" },
  { name: "TensorFlow", icon: Shield, color: "text-purple-400", bg: "bg-purple-400/20" },
  { name: "OpenCV", icon: Monitor, color: "text-cyan", bg: "bg-cyan/20" },
];

const achievements = [
  { icon: Trophy, label: "7+ Projects", color: "text-yellow-400" },
  { icon: Brain, label: "ML & AI", color: "text-purple-400" },
  { icon: Coffee, label: "Coffee → Code", color: "text-amber-400" },
  { icon: Heart, label: "Always Learning", color: "text-red-400" },
];

const services = [
  {
    icon: Monitor,
    title: "Frontend Development",
    desc: "React.js applications with responsive design and modern animations",
    color: "violet",
    features: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    icon: Database,
    title: "Backend Development", 
    desc: "Python-based APIs and server applications with Flask",
    color: "green",
    features: ["Python", "Flask", "FastAPI", "REST APIs"]
  },
  {
    icon: Brain,
    title: "Machine Learning & AI",
    desc: "Computer Vision and AI applications with TensorFlow and OpenCV",
    color: "purple",
    features: ["TensorFlow", "Scikit-learn", "OpenCV", "YOLO", "ArcFace"]
  },
  {
    icon: Globe,
    title: "Data Science & Analytics",
    desc: "Data analysis, visualization and model training",
    color: "cyan",
    features: ["Pandas", "NumPy", "Matplotlib", "Plotly"]
  },
];

export const HomePage: React.FC = () => {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, -100]);

  useEffect(() => {
    document.title = "MITHRAJITH - Full Stack Developer & ML Enthusiast";
  }, []);

  return (
    <motion.div
      className="min-h-screen pixel-grid crt relative overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      {/* Continuous animated gradient background */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0"
        animate={{
          background: [
            "radial-gradient(600px circle at 20% 30%, rgba(139, 92, 246, 0.15), transparent 40%)",
            "radial-gradient(600px circle at 80% 70%, rgba(139, 92, 246, 0.15), transparent 40%)",
            "radial-gradient(600px circle at 50% 50%, rgba(139, 92, 246, 0.15), transparent 40%)",
            "radial-gradient(600px circle at 20% 30%, rgba(139, 92, 246, 0.15), transparent 40%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Enhanced background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'][Math.floor(Math.random() * 5)],
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: parallaxY }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-violet-2/20"
            style={{
              width: 60 + Math.random() * 40,
              height: 60 + Math.random() * 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: Math.random() > 0.5 ? '50%' : '0%',
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 20 + Math.random() * 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4 + Math.random() * 4, repeat: Infinity },
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <motion.div
          className="text-center space-y-8 mb-24"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Logo/Title with multiple effects */}
          <motion.div className="relative" variants={pixelVariants}>
            <motion.h1 
              className="font-pixel text-4xl md:text-6xl lg:text-8xl text-violet-2 relative z-10"
              initial={{ filter: 'blur(8px)', opacity: 0, scale: 0.8 }}
              animate={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.5 }}
              whileHover={{ scale: 1.05, textShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}
            >
              MITHRAJITH
            </motion.h1>
            
            {/* Linux Arch subtitle */}
            <motion.div 
              className="text-cyan text-sm md:text-base font-mono opacity-80 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 2 }}
            >
              🐧 Arch Linux Power User
            </motion.div>
            
            {/* Multiple scanline effects */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-2/30 to-transparent h-full"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 2,
                  delay: 1.5 + i * 0.5,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatDelay: 8,
                }}
              />
            ))}

            {/* Glitch effect overlay */}
            <motion.div
              className="absolute inset-0 text-4xl md:text-6xl lg:text-8xl font-pixel text-cyan opacity-20 mix-blend-screen"
              style={{ textShadow: "2px 0 0 #06b6d4" }}
              animate={{
                x: [0, 2, -2, 0],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                repeatDelay: 5,
                times: [0, 0.1, 0.9, 1],
              }}
            >
              MITHRAJITH
            </motion.div>
          </motion.div>

          {/* Enhanced typing subtitle */}
          <motion.div
            variants={typingVariants}
            initial="hidden"
            animate="visible"
            className="font-display text-xl md:text-3xl text-text relative"
          >
            <motion.span className="inline-block mr-2">✨</motion.span>
            {heroText.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
                whileHover={{ scale: 1.2, color: "#8b5cf6" }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
            <motion.span className="inline-block ml-2">✨</motion.span>
          </motion.div>

          {/* Animated description */}
          <motion.p
            className="text-muted max-w-2xl mx-auto text-lg md:text-xl font-body leading-relaxed"
            variants={pixelVariants}
          >
            {subtitle}
          </motion.p>

          {/* Stats/Achievements Row */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-12 p-6 bg-black/20 rounded-lg backdrop-blur-sm border border-violet/20"
            variants={staggerContainer}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 group"
                variants={pixelVariants}
                whileHover={{ scale: 1.1 }}
              >
                <achievement.icon 
                  size={24} 
                  className={`${achievement.color} group-hover:animate-pulse`} 
                />
                <span className="font-display text-text group-hover:text-violet-2 transition-colors">
                  {achievement.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-12"
            variants={staggerContainer}
          >
            <motion.div 
              variants={pixelVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/about">
                <PixelButton className="group bg-gradient-to-r from-violet to-violet-2 hover:from-violet-2 hover:to-violet">
                  <span className="flex items-center gap-2">
                    <Sparkles size={18} className="animate-pulse" />
                    About Me
                    <ArrowRight 
                      size={16} 
                      className="group-hover:translate-x-1 transition-transform duration-200" 
                    />
                  </span>
                </PixelButton>
              </Link>
            </motion.div>

            <motion.div 
              variants={pixelVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/projects">
                <PixelButton variant="secondary" className="group">
                  <span className="flex items-center gap-2">
                    <Code2 size={18} className="group-hover:animate-spin" />
                    View Projects
                    <ArrowRight 
                      size={16} 
                      className="group-hover:translate-x-1 transition-transform duration-200" 
                    />
                  </span>
                </PixelButton>
              </Link>
            </motion.div>

            <motion.div 
              variants={pixelVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact">
                <PixelButton variant="ghost" className="group">
                  <span className="flex items-center gap-2">
                    <Mail size={18} className="group-hover:animate-bounce" />
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

        {/* Tech Stack Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-display text-center text-violet-2 mb-12"
            whileHover={{ scale: 1.05, textShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}
          >
            Tech Arsenal
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className={`${tech.bg} ${tech.color} px-6 py-4 rounded-lg backdrop-blur-sm border border-white/10 flex items-center gap-3 group hover:border-violet/50 transition-all duration-300`}
                variants={pixelVariants}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: Math.random() * 6 - 3,
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <tech.icon size={24} className="group-hover:animate-pulse" />
                <span className="font-display font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Services Grid */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-display text-center text-violet-2 mb-12"
            whileHover={{ scale: 1.05, textShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}
          >
            What I Create
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={pixelVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
                }}
              >
                <PixelCard 
                  interactive
                  className="p-6 h-full group hover:bg-violet/5 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Animated background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-violet/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 bg-${service.color}/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`text-${service.color === 'violet' ? 'violet-2' : service.color === 'cyan' ? 'cyan' : service.color === 'pink' ? 'pink-400' : 'green-400'} group-hover:animate-pulse`} size={28} />
                    </div>
                    
                    <h3 className="font-display text-lg text-violet-2 mb-3 text-center group-hover:text-violet transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted text-sm text-center mb-4 leading-relaxed">
                      {service.desc}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="text-xs text-muted flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                        >
                          <Star size={10} className="text-violet-2" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </PixelCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Enhanced Feature cards with more variety */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-20"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={pixelVariants}
            whileHover={{ scale: 1.05, rotateX: 5 }}
          >
            <PixelCard 
              interactive
              className="text-center p-8 group hover:bg-gradient-to-br hover:from-violet/5 hover:to-purple/5 transition-all duration-500 relative overflow-hidden"
            >
              {/* Floating particles inside card */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-violet-2/50 rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      y: [-5, -15, -5],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>

              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-violet/30 to-violet-2/30 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-violet/30"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Code2 className="text-violet-2" size={32} />
              </motion.div>
              
              <h3 className="font-display text-xl text-violet-2 mb-4 group-hover:text-violet transition-colors">
                Frontend Mastery
              </h3>
              
              <p className="text-muted text-sm leading-relaxed mb-4">
                React.js, JavaScript ES6+, HTML5, CSS3, Tailwind CSS with pixel-perfect animations
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['React.js', 'JavaScript', 'HTML5', 'CSS3'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-violet/20 text-violet-2 text-xs rounded border border-violet/30">
                    {skill}
                  </span>
                ))}
              </div>
            </PixelCard>
          </motion.div>

          <motion.div
            variants={pixelVariants}
            whileHover={{ scale: 1.05, rotateX: 5 }}
          >
            <PixelCard 
              interactive
              className="text-center p-8 group hover:bg-gradient-to-br hover:from-cyan/5 hover:to-blue/5 transition-all duration-500 relative overflow-hidden"
            >
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 border-2 border-cyan/20 rounded-lg opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />

              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-cyan/30 to-blue/30 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-cyan/30"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Database className="text-cyan" size={32} />
              </motion.div>
              
              <h3 className="font-display text-xl text-cyan mb-4 group-hover:text-blue-400 transition-colors">
                ML & AI Power
              </h3>
              
              <p className="text-muted text-sm leading-relaxed mb-4">
                TensorFlow, OpenCV, YOLO, ArcFace with computer vision and intelligent applications
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['TensorFlow', 'OpenCV', 'YOLO', 'ArcFace'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-cyan/20 text-cyan text-xs rounded border border-cyan/30">
                    {skill}
                  </span>
                ))}
              </div>
            </PixelCard>
          </motion.div>

          <motion.div
            variants={pixelVariants}
            whileHover={{ scale: 1.05, rotateX: 5 }}
          >
            <PixelCard 
              interactive
              className="text-center p-8 group hover:bg-gradient-to-br hover:from-pink/5 hover:to-rose/5 transition-all duration-500 relative overflow-hidden"
            >
              {/* Sparkle effects */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-pink-400"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    ✨
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-pink/30 to-rose/30 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-pink/30"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Palette className="text-pink-400" size={32} />
              </motion.div>
              
              <h3 className="font-display text-xl text-pink-400 mb-4 group-hover:text-rose-400 transition-colors">
                Data Science
              </h3>
              
              <p className="text-muted text-sm leading-relaxed mb-4">
                Pandas, NumPy, data visualization with intelligent insights and model training
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['Pandas', 'NumPy', 'Matplotlib', 'Plotly'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-pink/20 text-pink-400 text-xs rounded border border-pink/30">
                    {skill}
                  </span>
                ))}
              </div>
            </PixelCard>
          </motion.div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.section
          className="text-center mt-32 mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <motion.div
            className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-violet/10 via-purple/10 to-violet/10 rounded-2xl border border-violet/20 backdrop-blur-sm relative overflow-hidden"
            whileHover={{ scale: 1.02, boxShadow: "0 20px 60px rgba(139, 92, 246, 0.3)" }}
          >
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(90deg, transparent, #8b5cf6, transparent)",
                backgroundSize: "200% 2px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 0, 0 100%",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 0%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.h3 
              className="text-3xl md:text-4xl font-display text-violet-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              "Building the future, one algorithm at a time."
            </motion.h3>
            
            <p className="text-muted text-lg mb-8 leading-relaxed">
              Always learning, always innovating. Let's turn coffee into code and create intelligent applications together! ☕💻
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact">
                <PixelButton className="group bg-gradient-to-r from-violet via-violet-2 to-violet hover:from-violet-2 hover:via-violet hover:to-violet-2 text-lg px-8 py-4">
                  <span className="flex items-center gap-3">
                    <Brain size={20} className="group-hover:animate-bounce" />
                    Let's Build Intelligence
                    <ArrowRight 
                      size={18} 
                      className="group-hover:translate-x-1 transition-transform duration-200" 
                    />
                  </span>
                </PixelButton>
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
};
