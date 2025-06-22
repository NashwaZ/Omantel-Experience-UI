import React from 'react';
import { motion } from 'framer-motion';

const Cursor = ({ mousePosition }) => {
  return (
    <>
      <motion.div
        className="fixed w-4 h-4 bg-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      <motion.div
        className="fixed w-8 h-8 border-2 border-purple-400/50 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      />
    </>
  );
};

export default Cursor;