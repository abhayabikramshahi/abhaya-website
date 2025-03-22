import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import illustration from "../upload/illustration.cf4b7a67f23b684549c4f797c62b527a.svg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <section className="relative container mx-auto px-6 pt-32 pb-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-left z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm md:text-base text-purple-600 font-semibold mb-4">
              Welcome to my portfolio
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Abhaya (Abbazzy)
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              I'm a passionate Web Developer, App Developer, and AI Pythonist.
            </p>
            <p className="text-gray-600 mb-8 max-w-xl">
              I specialize in building high-quality, efficient, and scalable web and mobile applications. 
              I am constantly learning and evolving in the fast-paced tech industry, with a focus on creating solutions that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                onClick={() => navigate('/projects')}
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-purple-600 text-purple-600 font-medium hover:bg-purple-50 transform hover:scale-105 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/abhayabikramshahi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-300 hover:border-purple-600 hover:text-purple-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/abhaya-bikram-shahi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-300 hover:border-purple-600 hover:text-purple-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Content - SVG Illustration */}
        <motion.div
          className="flex-1 relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            
            {/* SVG Image */}
            <motion.img
              src={illustration}
              alt="Developer Illustration"
              className="w-full h-auto max-w-lg mx-auto transform hover:scale-105 transition-transform duration-700"
              whileHover={{ scale: 1.05 }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.1}
            />
          </div>
        </motion.div>
      </section>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-purple-600 rounded-full p-1">
          <div className="w-1.5 h-3 bg-purple-600 rounded-full animate-bounce mx-auto"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
