import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 glass-effect rounded-full px-4 py-2 mb-8"
          >
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">Rated #1 Modern Interface</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Create
            <span className="text-gradient"> Amazing </span>
            Digital Experiences
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto"
          >
            Transform your ideas into stunning, interactive web experiences with our cutting-edge design system and modern components.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg flex items-center space-x-2 glow-effect"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect rounded-full font-semibold text-lg flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto"
          >
            {[
              { number: '50K+', label: 'Users' },
              { number: '99%', label: 'Satisfaction' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.number}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl floating-animation"
          style={{ animationDelay: '0s' }}
        />
        <motion.div
          className="absolute top-1/3 right-10 w-16 h-16 bg-pink-500/20 rounded-full blur-xl floating-animation"
          style={{ animationDelay: '2s' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-blue-500/20 rounded-full blur-xl floating-animation"
          style={{ animationDelay: '4s' }}
        />
      </div>
    </section>
  );
};

export default Hero;