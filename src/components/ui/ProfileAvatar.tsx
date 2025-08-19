import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProfileAvatarProps {
  className?: string;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/profile.jpeg',
    '/profile2.jpeg'
  ];

  const handleClick = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div className={`relative w-full max-w-sm mx-auto ${className}`}>
      <motion.div
        className="relative aspect-square cursor-pointer"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-violet/50 via-violet-2/50 to-violet/50 rounded-full blur-lg -z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 0.6 : 0,
            scale: isHovered ? 1.1 : 0.8
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Main container */}
        <div className="relative w-full h-full rounded-full border-4 border-violet-2/40 bg-surface shadow-xl overflow-hidden">
          
          {/* Animated border */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-80"
            style={{
              background: 'conic-gradient(from 0deg, #7C3AED, #A78BFA, #7C3AED)',
              padding: '3px',
            }}
            animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
            transition={{ 
              duration: 2, 
              repeat: isHovered ? Infinity : 0, 
              ease: 'linear' 
            }}
          >
            <div className="w-full h-full rounded-full bg-surface" />
          </motion.div>

          {/* Image container */}
          <div className="absolute inset-3 rounded-full overflow-hidden bg-gradient-to-br from-violet/10 to-violet-2/10">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt="Profile"
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </AnimatePresence>
          </div>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-3 bg-gradient-to-t from-violet/20 via-transparent to-violet-2/10 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Scanline */}
          {isHovered && (
            <div className="absolute inset-3 rounded-full overflow-hidden">
              <motion.div
                className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-violet-2/80 to-transparent"
                animate={{
                  y: ['0%', '100%']
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>
          )}

          {/* Particles */}
          {isHovered && [...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-violet-2 rounded-full"
              style={{
                left: `${40 + i * 10}%`,
                bottom: '10%',
              }}
              animate={{
                y: [0, -20, -40],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}

          {/* Status dot */}
          <motion.div
            className="absolute top-3 right-3 w-3 h-3 bg-lime rounded-full border-2 border-surface"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          {/* Click hint */}
          <AnimatePresence>
            {isHovered && images.length > 1 && (
              <motion.div
                className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-violet-2 font-pixel bg-surface/95 px-2 py-1 rounded border border-violet-2/30"
                initial={{ opacity: 0, y: 5, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                Click
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Outer ring */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-full border border-violet-2/30"
            animate={{
              scale: [1, 1.2],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          />
        )}
      </motion.div>
    </div>
  );
};
