import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PageTransitionWrapper,
  ParallaxScrollElement,
  DraggableElement,
  SwipeGestureElement,
  InfiniteMarquee,
  FlipCardElement,
  ElasticSearch,
  CounterAnimation,
  WaveButton,
  BreathingElement,
  RevealOnScroll,
  InteractiveCard,
  TypewriterText,
  GlitchText,
  FloatingParticles,
  PixelLoader,
  MagneticElement,
  StaggeredGrid,
  PulseRing,
} from '@/components/animations';
import { PixelButton } from '@/components/ui/PixelButton';

export const AnimationShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const showcaseItems = [
    'Advanced Animations', 
    'React Spring Physics', 
    'Framer Motion Magic', 
    'Pixel Perfect Design',
    'Interactive Components'
  ];

  return (
    <PageTransitionWrapper variant="cyberWipe">
      <div className="min-h-screen bg-background text-text overflow-hidden">
        {/* Hero Section with Floating Particles */}
        <section className="relative h-screen flex items-center justify-center">
          <FloatingParticles count={50} className="absolute inset-0" />
          
          <div className="text-center z-10">
            <BreathingElement className="mb-8">
              <h1 className="text-6xl font-bold mb-4">
                <GlitchText 
                  text="Animation Showcase" 
                  trigger="auto"
                  className="bg-gradient-to-r from-violet to-violet-2 bg-clip-text text-transparent"
                />
              </h1>
            </BreathingElement>
            
            <TypewriterText 
              text="Experience the power of comprehensive React animations"
              className="text-xl mb-8 text-muted"
            />
            
            <div className="flex gap-4 justify-center">
              <WaveButton onClick={() => console.log('Wave clicked!')}>
                Explore Animations
              </WaveButton>
              
              <MagneticElement strength={0.3}>
                <PixelButton variant="secondary">
                  Magnetic Button
                </PixelButton>
              </MagneticElement>
            </div>
          </div>
          
          <PulseRing className="absolute top-1/4 right-1/4" size={200} />
        </section>

        {/* Parallax Section */}
        <section className="relative min-h-screen bg-surface/30">
          <ParallaxScrollElement speed={0.3} className="absolute inset-0">
            <div className="h-full bg-gradient-to-br from-violet/10 to-violet-2/10" />
          </ParallaxScrollElement>
          
          <div className="relative z-10 p-20">
            <RevealOnScroll variant="slideUp">
              <h2 className="text-4xl font-bold mb-12 text-center">
                Interactive Components
              </h2>
            </RevealOnScroll>

            {/* Search Component */}
            <div className="max-w-md mx-auto mb-16">
              <ElasticSearch 
                placeholder="Search animations..."
                onSearch={setSearchQuery}
                className="w-full"
              />
              {searchQuery && (
                <motion.p 
                  className="mt-4 text-center text-muted"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Searching for: {searchQuery}
                </motion.p>
              )}
            </div>

            {/* Interactive Cards */}
            <StaggeredGrid className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[1, 2, 3].map(i => (
                <InteractiveCard key={i} className="p-6 bg-surface border border-violet/20 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Card {i}</h3>
                  <p className="text-muted mb-4">
                    This card has hover and focus animations built-in.
                  </p>
                  <CounterAnimation 
                    from={0} 
                    to={i * 1000} 
                    suffix=" points"
                    className="text-violet font-bold"
                  />
                </InteractiveCard>
              ))}
            </StaggeredGrid>
          </div>
        </section>

        {/* Flip Cards Section */}
        <section className="py-20 bg-background">
          <RevealOnScroll variant="pixelDissolve">
            <div className="max-w-6xl mx-auto px-8">
              <h2 className="text-4xl font-bold mb-12 text-center">
                3D Interactions
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FlipCardElement
                  frontContent={
                    <div className="h-48 bg-violet/20 border border-violet/30 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-semibold">Front Side</span>
                    </div>
                  }
                  backContent={
                    <div className="h-48 bg-violet-2/20 border border-violet-2/30 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-semibold">Back Side</span>
                    </div>
                  }
                />
                
                <DraggableElement 
                  className="h-48 bg-surface border border-violet/20 rounded-lg flex items-center justify-center"
                  constraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
                >
                  <span className="text-xl font-semibold">Drag Me!</span>
                </DraggableElement>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* Swipe Gesture Section */}
        <section className="py-20 bg-surface/30">
          <div className="max-w-4xl mx-auto px-8">
            <RevealOnScroll variant="zoomIn">
              <h2 className="text-4xl font-bold mb-12 text-center">
                Gesture Controls
              </h2>
              
              <SwipeGestureElement
                onSwipeLeft={() => alert('Swiped Left!')}
                onSwipeRight={() => alert('Swiped Right!')}
                className="h-32 bg-violet/20 border border-violet/30 rounded-lg flex items-center justify-center mb-8"
              >
                <span className="text-xl font-semibold">Swipe Left or Right</span>
              </SwipeGestureElement>
            </RevealOnScroll>
          </div>
        </section>

        {/* Marquee Section */}
        <section className="py-20 bg-background">
          <RevealOnScroll variant="slideLeft">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Infinite Animations
            </h2>
            
            <InfiniteMarquee speed={20} className="mb-8">
              <div className="flex items-center gap-8 px-4">
                {showcaseItems.map((item, i) => (
                  <span key={i} className="text-2xl font-bold text-violet whitespace-nowrap">
                    {item} •
                  </span>
                ))}
              </div>
            </InfiniteMarquee>
            
            <InfiniteMarquee speed={15} direction="right">
              <div className="flex items-center gap-8 px-4">
                {showcaseItems.reverse().map((item, i) => (
                  <span key={i} className="text-xl text-muted whitespace-nowrap">
                    {item} •
                  </span>
                ))}
              </div>
            </InfiniteMarquee>
          </RevealOnScroll>
        </section>

        {/* Loading States */}
        <section className="py-20 bg-surface/30">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <RevealOnScroll variant="fadeIn">
              <h2 className="text-4xl font-bold mb-12">
                Loading & Morphing
              </h2>
              
              <div className="flex justify-center items-center gap-8 mb-12">
                <PixelLoader isLoading={true} progress={75} className="w-24" />
                <div className="text-4xl">
                  🚀
                </div>
              </div>
              
              <p className="text-muted text-lg">
                All animations are GPU-accelerated and respect user preferences
              </p>
            </RevealOnScroll>
          </div>
        </section>
      </div>
    </PageTransitionWrapper>
  );
};
