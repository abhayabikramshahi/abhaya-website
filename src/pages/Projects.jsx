import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code, Sparkles } from "lucide-react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio website showcasing my skills, projects, and experience in web development.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion"],
      live: "https://abhayabikramshahi.vercel.com",
      github: "#",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "School Website",
      description: "A comprehensive website for Badimalika Secondary School with essential information and resources.",
      tech: ["React.js", "Tailwind CSS"],
      live: "https://badimalikasecschool.netlify.app",
      github: "#",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Clothing Brand Website",
      description: "E-commerce website for my clothing brand with product showcase and online purchasing capabilities.",
      tech: ["React.js", "Tailwind CSS"],
      live: "https://yubikclothingstore.vercel.com",
      github: "#",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto relative">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -360],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl"
          />
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center relative mb-20"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my latest works and creative endeavors
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
              onHoverStart={() => setHoveredProject(project.title)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Project Header */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-10 rounded-lg`} />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 relative z-10">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${project.color} text-white`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 mb-6">{project.description}</p>

                {/* Project Links */}
                <div className="flex items-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.color} text-white`}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                </div>

                {/* Hover Effect */}
                <AnimatePresence>
                  {hoveredProject === project.title && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl -z-10"
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-20 text-center">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Code className="w-8 h-8 text-gray-400" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
