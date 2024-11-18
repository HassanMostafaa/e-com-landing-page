import { motion } from 'framer-motion';
import { Users, Shield, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'P2P Trading',
    description: 'Trade directly with other users globally with our secure P2P platform'
  },
  {
    icon: Shield,
    title: 'Secure Transactions',
    description: 'Advanced encryption and security measures to protect your trades'
  },
  {
    icon: Zap,
    title: 'Instant Settlements',
    description: 'Lightning-fast transaction processing and settlement'
  },
  {
    icon: Globe,
    title: 'Global Access',
    description: 'Connect with traders and merchants worldwide'
  }
];

export function MarketplaceFeatures() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">P2P Marketplace Features</h2>
          <p className="text-gray-400">Experience the future of peer-to-peer trading</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/10 hover:border-purple-500/30 transition-all group"
            >
              <feature.icon className="w-12 h-12 text-purple-400 mb-4 group-hover:text-purple-300 transition-colors" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}