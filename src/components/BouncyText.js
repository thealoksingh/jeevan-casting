import React from 'react';
import { motion } from 'framer-motion';

const BouncyText = ({ text, className }) => {
  const lines = text.split('\n');

  return (
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 2 * 0.2, // Adjust delay based on the index of the card instead of hardcoding 2 put index here
          }}
          viewport={{ once: true }} className={`${className} whitespace-pre-line`}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="mb-1">
          {line.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-2">
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="inline-block cursor-alias"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </div>
      ))}
   </motion.div>
  );
};

export default BouncyText;
