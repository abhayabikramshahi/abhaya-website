import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="h-screen bg-white flex flex-col items-center justify-center text-center px-6 mt-16 md:mt-0">
      {/* Title with animation */}
      <motion.h1
        className="text-5xl font-bold text-black mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hello, I'm Abhaya (Abbazzy)
      </motion.h1>

      {/* Description paragraph with animation */}
      <motion.p
        className="text-xl text-gray-800 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        I'm a passionate Web Developer, App Developer, and AI Pythonist.
      </motion.p>

      {/* Additional paragraph with animation */}
      <motion.p
        className="text-lg text-gray-600 mb-8 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        I specialize in building high-quality, efficient, and scalable web and mobile applications. I am constantly learning and evolving in the fast-paced tech industry, with a focus on creating solutions that make a difference.
      </motion.p>

      {/* CTA Button with animation */}
      <motion.a
        href="#projects"
        className="bg-red-600 text-white py-3 px-6 rounded-lg text-lg transition-all hover:bg-red-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Home;
