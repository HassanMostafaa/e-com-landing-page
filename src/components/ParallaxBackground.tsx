import { motion, useScroll, useTransform } from 'framer-motion';

export function ParallaxBackground() {

  
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0"
      >
        <svg className="w-full h-full opacity-[0.07]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="url(#gradient1)" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      <motion.div 
        style={{ y: y2 }}
        className="absolute inset-0"
      >
        <svg className="w-full h-full opacity-[0.07] rotate-180" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="url(#gradient2)" />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      <motion.div 
        style={{ y: y3 }}
        className="absolute inset-0"
      >
        <svg className="w-full h-full opacity-[0.07]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 C25,50 75,50 100,0 L100,100 L0,100 Z" fill="url(#gradient3)" />
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      <div className="absolute inset-0 bg-black/60" /> */}
    </div>
  );
}