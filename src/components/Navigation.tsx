import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Search, ShoppingBag, User, Bell } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home' },
  { icon: Search, label: 'Search' },
  { icon: ShoppingBag, label: 'Shop' },
  { icon: Bell, label: 'Notifications' },
  { icon: User, label: 'Profile' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <motion.div 
          className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-xl border border-purple-500/20 rounded-full px-8 py-3 shadow-lg shadow-purple-500/10"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item) => (
              <motion.a
                key={item.label}
                whileHover={{ scale: 1.05, color: '#fff' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-purple-200/80 hover:text-white transition-all group"
                href="#"
              >
                <item.icon className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                <span className="font-medium">{item.label}</span>
              </motion.a>
            ))}
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-purple-200 p-2"
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.div className="absolute left-0 top-0 bottom-0 w-64 bg-gradient-to-b from-purple-900/90 to-gray-900/90 backdrop-blur-xl p-6">
              <div className="flex justify-end mb-8">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="text-purple-200"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
              <div className="space-y-6">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.label}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-purple-200/80 hover:text-white transition-colors group"
                    href="#"
                  >
                    <item.icon className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                    <span className="font-medium">{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}