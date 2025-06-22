import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const finalValues = [50000, 99, 150, 24];
  const labels = ['Happy Users', 'Satisfaction Rate', 'Projects Completed', 'Countries Served'];
  const suffixes = ['+', '%', '+', '+'];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = finalValues.map((finalValue, index) => {
      let currentValue = 0;
      const increment = finalValue / steps;

      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
          clearInterval(intervals[index]);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(currentValue);
          return newCounters;
        });
      }, stepDuration);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {counters.map((count, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-gradient mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {count.toLocaleString()}{suffixes[index]}
                </motion.div>
                <div className="text-white/70 font-medium">
                  {labels[index]}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;