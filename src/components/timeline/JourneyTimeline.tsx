import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { PixelCard } from '@/components/ui/PixelCard';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  delay: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ item, index, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px 0px -50px 0px" 
  });

  const isEven = index % 2 === 0;

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isEven ? -100 : 100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const dotVariants = {
    hidden: {
      scale: 0,
      backgroundColor: 'rgba(124, 58, 237, 0.3)',
    },
    visible: {
      scale: 1,
      backgroundColor: '#7C3AED',
      transition: {
        duration: 0.6,
        delay: delay + 0.3,
        ease: 'backOut',
      },
    },
  };

  const lineVariants = {
    hidden: {
      scaleY: 0,
    },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        delay: delay + 0.5,
        ease: 'easeOut',
      },
    },
  };

  const hoverCardVariants = {
    rest: {
      scale: 1,
      rotateY: 0,
      boxShadow: '0 4px 12px rgba(124, 58, 237, 0.1)',
    },
    hover: {
      scale: 1.02,
      rotateY: 2,
      boxShadow: '0 8px 25px rgba(124, 58, 237, 0.25)',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const glowVariants = {
    rest: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col md:flex-row items-start md:items-center"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {/* Year indicator with enhanced animations */}
      <motion.div 
        className="absolute left-0 md:left-1/2 w-10 h-10 bg-violet rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-20"
        variants={dotVariants}
        whileHover={{ 
          scale: 1.2,
          boxShadow: '0 0 20px rgba(124, 58, 237, 0.6)',
          transition: { duration: 0.2 }
        }}
      >
        <motion.div 
          className="w-4 h-4 bg-text rounded-full relative overflow-hidden"
          whileHover={{
            boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.3)',
          }}
        >
          {/* Pulsing inner glow */}
          <motion.div
            className="absolute inset-0 bg-violet-2 rounded-full"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </motion.div>
      
      {/* Connecting line segment */}
      {index < 3 && (
        <motion.div 
          className="absolute left-4 md:left-1/2 top-10 w-px h-20 bg-gradient-to-b from-violet-2 to-violet-2/30 transform md:-translate-x-1/2 z-10"
          variants={lineVariants}
          style={{ originY: 0 }}
        />
      )}
      
      {/* Content card */}
      <motion.div 
        className={`ml-16 md:ml-0 ${isEven ? 'md:pr-8 md:text-right md:mr-auto' : 'md:pl-8 md:ml-auto'} md:w-1/2 relative`}
        variants={hoverCardVariants}
        initial="rest"
        whileHover="hover"
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-violet/20 to-violet-2/20 rounded-lg blur-sm"
          variants={glowVariants}
        />
        
        <PixelCard className="p-6 relative bg-surface/80 backdrop-blur-sm border-violet-2/30 hover:border-violet-2/60 transition-colors duration-300">
          {/* Animated year badge */}
          <motion.div 
            className="inline-block font-display text-xl text-violet-2 mb-2 px-3 py-1 bg-violet/10 rounded border border-violet-2/30"
            whileHover={{
              backgroundColor: 'rgba(124, 58, 237, 0.2)',
              scale: 1.05,
            }}
          >
            {item.year}
          </motion.div>
          
          {/* Title with hover effect */}
          <motion.h3 
            className="font-semibold text-text mb-2 text-lg"
            whileHover={{
              color: '#A78BFA',
              x: isEven ? -5 : 5,
              transition: { duration: 0.2 },
            }}
          >
            {item.title}
          </motion.h3>
          
          {/* Company with subtle animation */}
          <motion.div 
            className="text-muted text-sm mb-3 font-medium"
            whileHover={{
              color: '#7C3AED',
              transition: { duration: 0.2 },
            }}
          >
            {item.company}
          </motion.div>
          
          {/* Description */}
          <p className="text-muted text-sm leading-relaxed">
            {item.description}
          </p>

          {/* Floating particles on hover */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-violet-2/60 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 3) * 20}%`,
                }}
                variants={{
                  rest: { opacity: 0, y: 0 },
                  hover: { 
                    opacity: [0, 1, 0],
                    y: [-10, -20, -30],
                    transition: {
                      duration: 2,
                      delay: i * 0.1,
                      repeat: Infinity,
                    }
                  },
                }}
              />
            ))}
          </div>

          {/* Corner accent */}
          <motion.div
            className="absolute top-2 right-2 w-2 h-2 bg-violet-2 rounded-full opacity-30"
            whileHover={{
              opacity: 1,
              scale: [1, 1.5, 1],
              transition: { duration: 0.5 }
            }}
          />
        </PixelCard>
      </motion.div>
    </motion.div>
  );
};

interface JourneyTimelineProps {
  items: TimelineItem[];
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Transform scroll progress to fill the timeline line
  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  // Update scroll progress state
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      setScrollProgress(Math.round(value * 100));
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);
  
  // Sort items in ascending order by year
  const sortedItems = [...items].sort((a, b) => parseInt(a.year) - parseInt(b.year));

  return (
    <motion.div className="space-y-8" ref={containerRef}>
      <motion.h2 
        className="font-pixel text-2xl text-violet-2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Journey Timeline
      </motion.h2>
      
      <div className="relative">
        {/* Background timeline line */}
        <div 
          className="absolute left-4 md:left-1/2 top-0 w-px bg-violet-2/20 transform md:-translate-x-1/2 z-0"
          style={{ height: `${sortedItems.length * 140}px` }}
        />
        
        {/* Animated progress line */}
        <motion.div 
          className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-violet-2 via-violet to-violet-2/60 transform md:-translate-x-1/2 z-0 origin-top"
          style={{ 
            height: `${sortedItems.length * 140}px`,
            scaleY: timelineProgress
          }}
        />
        
        {/* Animated traveling glow */}
        <motion.div
          className="absolute left-4 md:left-1/2 top-0 w-px transform md:-translate-x-1/2 z-0"
          style={{ height: `${sortedItems.length * 140}px` }}
        >
          <motion.div
            className="w-3 h-20 bg-gradient-to-b from-transparent via-violet-2 to-transparent rounded-full blur-sm -translate-x-1"
            style={{
              y: useTransform(timelineProgress, [0, 1], [0, sortedItems.length * 140 - 80])
            }}
          />
        </motion.div>
        
        <div className="space-y-8 relative z-10">
          {sortedItems.map((item, index) => (
            <TimelineCard
              key={`${item.year}-${item.title}`}
              item={item}
              index={index}
              delay={index * 0.2}
            />
          ))}
        </div>
        
        {/* Progress indicator */}
        <div className="absolute right-0 top-0 hidden md:block">
          <div className="flex flex-col items-center space-y-2 bg-surface/80 backdrop-blur-sm border border-violet-2/20 rounded-lg p-3">
            <span className="text-xs text-muted font-pixel">Progress</span>
            <div className="w-2 h-32 bg-surface border border-violet-2/30 rounded-full relative overflow-hidden">
              <motion.div
                className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-violet to-violet-2 rounded-full"
                style={{
                  height: useTransform(timelineProgress, [0, 1], ["0%", "100%"])
                }}
              />
            </div>
            <span className="text-xs text-violet-2 font-mono">
              {scrollProgress}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
