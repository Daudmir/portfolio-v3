import { motion } from "framer-motion";
import React from "react";

const quote = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const AnimatedText = ({ textParts, className = "" }) => {
  if (!Array.isArray(textParts)) {
    return null; 
  }

  return (
    <div className="py-2 w-full mx-auto flex flex-col items-center justify-center text-center overflow-hidden sm:py-0">
      <motion.h1
        className={`inline-block text-dark dark:text-light text-8xl font-bold w-full capitalize ${className} xl:text-6xl`}
        variants={quote}
        initial="hidden"
        animate="visible"
      >
        {textParts.map((part, partIndex) => (
          <div key={partIndex} className={`block ${part.className || ""}`}>
            {part.text.split(" ").map((char, index) => {
              return (
                <motion.span
                  className="inline-block"
                  key={char + "-" + index}
                  variants={singleWord}
                >
                  {char}&nbsp;
                </motion.span>
              );
            })}
          </div>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
