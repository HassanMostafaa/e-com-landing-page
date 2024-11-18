import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Electronics',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800',
    items: '2,345'
  },
  {
    title: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800',
    items: '3,456'
  },
  {
    title: 'Digital Art',
    image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80&w=800',
    items: '1,234'
  }
];

export function Categories() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Explore Categories</h2>
          <p className="text-gray-400">Discover products across various categories</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-300">{category.items} items</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}