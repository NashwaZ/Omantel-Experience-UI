import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Palette, Code, Smartphone, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with modern build tools and techniques for instant loading.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Secure by Default',
      description: 'Built-in security features and best practices to protect your applications.',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Stunning visual components with smooth animations and modern aesthetics.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Code,
      title: 'Developer Friendly',
      description: 'Clean, maintainable code with excellent documentation and TypeScript support.',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Responsive design that works perfectly on all devices and screen sizes.',
      color: 'from-pink-400 to-red-500'
    },
    {
      icon: Globe,
      title: 'Global Ready',
      description: 'Internationalization support with accessibility features built-in.',
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Everything you need to build modern, scalable, and beautiful web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect rounded-2xl p-8 group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all">
                {feature.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed">
                {feature.description}
              </p>

              <motion.div
                className="mt-6 w-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;