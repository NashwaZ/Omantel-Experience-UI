import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to start your next project? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/80 mb-2 font-medium">Name</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors text-white placeholder-white/50"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2 font-medium">Email</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors text-white placeholder-white/50"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2 font-medium">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors text-white placeholder-white/50 resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold flex items-center justify-center space-x-2 glow-effect"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Let's Connect</h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                We're here to help bring your vision to life. Whether you have a question about our services or want to discuss your next project, we'd love to hear from you.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'hello@modernui.com' },
                  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                  { icon: MapPin, label: 'Location', value: 'San Francisco, CA' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-2xl p-8 text-center"
            >
              <h4 className="text-xl font-bold mb-4">Quick Response</h4>
              <p className="text-white/80">
                We typically respond within 24 hours. For urgent inquiries, please call us directly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;