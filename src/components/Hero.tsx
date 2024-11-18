import { motion } from 'framer-motion';
import { ShoppingBag, Rocket } from 'lucide-react';
import { ProductDisplay } from './ProductDisplay';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 container mx-auto px-4 pt-32"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
            >
              Future of Digital Commerce
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl"
            >
              Experience the next evolution of e-commerce with our global marketplace powered by cutting-edge technology and peer-to-peer trading.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold flex items-center justify-center gap-2 hover:from-purple-700 hover:to-cyan-700 transition-all">
                <ShoppingBag className="w-5 h-5" />
                Start Shopping
              </button>
              <button className="px-8 py-4 border border-purple-500/30 rounded-full text-white font-semibold flex items-center justify-center gap-2 hover:bg-purple-500/10 transition-all">
                <Rocket className="w-5 h-5" />
                Learn More
              </button>
            </motion.div>
          </div>
          
          <div className="flex-1 h-[600px] w-full">
            <ProductDisplay />
          </div>
        </div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}