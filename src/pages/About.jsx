import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "PHP", "React.js", "HTML", "CSS", "JavaScript",
    "Python", "Android Development"
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Hey, I'm Abhaya! 👋
          </h1>
          <p className="text-2xl text-gray-600">
            A young tech enthusiast from Nepal, turning ideas into reality
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12"
        >
          {/* About Section */}
          <div className="text-lg text-gray-600 space-y-6">
            <p>
              I'm <span className="font-semibold text-gray-800">Abhaya Bikram Shahi</span>, a passionate 
              full-stack developer specializing in PHP and React.js. My journey in tech is driven by creating 
              robust web applications and innovative solutions.
            </p>
            <p>
              With expertise in both front-end (HTML, CSS, JavaScript) and back-end (PHP, Python) development, 
              I also venture into Android development. I love building seamless user experiences and powerful 
              server-side solutions.
            </p>
            
            {/* New sections */}
            <div className="space-y-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">My Journey 🚀</h3>
                <p className="text-gray-600">
                  Started my programming journey at a young age, fascinated by how technology can transform ideas into reality. 
                  Self-taught and constantly learning, I've grown from building simple websites to developing full-fledged 
                  applications that solve real-world problems.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What I Do 💻</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Develop responsive and dynamic web applications using React.js</li>
                  <li>Create robust backend systems with PHP and Python</li>
                  <li>Build native Android applications</li>
                  <li>Design and implement user-friendly interfaces</li>
                  <li>Work on personal projects to explore new technologies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Beyond Coding 🌟</h3>
                <p className="text-gray-600">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or helping other young developers learn programming. I believe in continuous learning and sharing 
                  knowledge with the community.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Cloud */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="py-8"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">What I Work With</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center py-8"
          >
            <p className="text-xl text-gray-600 mb-6">
              Let's create something amazing together! ✨
            </p>
            <a
              href="mailto:abhayabikramshahiofficial@gmail.com"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
