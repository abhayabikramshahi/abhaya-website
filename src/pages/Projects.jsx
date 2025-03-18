import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-black mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Project 1 - Portfolio Site */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-black mb-4">Portfolio Website</h3>
            <p className="text-lg text-gray-700 mb-4">
              This is my personal portfolio website where I showcase my skills, projects, and experience in web development.
            </p>
            <a
              href="https://abhayabikramshahi.vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 font-medium text-lg"
            >
              Visit Portfolio
            </a>
          </motion.div>

          {/* Project 2 - School Website */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-black mb-4">School Website</h3>
            <p className="text-lg text-gray-700 mb-4">
              I developed a website for Badimalika Secondary School, providing essential information and resources for students and parents.
            </p>
            <a
              href="https://badimalikasecschool.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 font-medium text-lg"
            >
              Visit School Website
            </a>
          </motion.div>

          {/* Project 3 - Clothing Brand Website */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-black mb-4">Clothing Brand Website</h3>
            <p className="text-lg text-gray-700 mb-4">
              This website was created for my clothing brand, where customers can view and purchase products online.
            </p>
            <a
              href="https://yubikclothingstore.vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 font-medium text-lg"
            >
              Visit Clothing Brand Site
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
