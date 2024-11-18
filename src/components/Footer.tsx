import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About Us</h3>
            <p className="text-gray-400">Revolutionizing e-commerce with cutting-edge technology and seamless user experiences.</p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Products', 'Features', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {['Help Center', 'Terms of Service', 'Legal', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              {[Github, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">&copy; 2024 NeoMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}