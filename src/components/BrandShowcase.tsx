{/* Previous imports */}
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Award, Star, Zap, TrendingUp } from 'lucide-react';

{/* Rest of the code remains the same until the SVG part */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
            fill="url(#gradient1)"
            style={{ y }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

{/* Rest of the component remains the same */}