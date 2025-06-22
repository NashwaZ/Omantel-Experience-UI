import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Documentation', 'API'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Resources: ['Help Center', 'Community', 'Tutorials', 'Updates'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies']
  };

  return (
    <footer className="py-16 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 mb-6"
            >
              <Zap className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold text-gradient">ModernUI</span>
            </motion.div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Creating beautiful, modern web experiences with cutting-edge technology and thoughtful design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <motion.li key={linkIndex}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-white/60 mb-4 md:mb-0">
            © 2025 ModernUI. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;