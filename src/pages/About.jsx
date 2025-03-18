import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-left text-black mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        {/* Bio */}
        <motion.div
          className="text-left md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-xl sm:text-2xl text-gray-800 mb-6">
            Hello! I'm <span className="font-semibold text-red-600">Abhaya Bikram Shahi</span>, a passionate
            Web Developer, App Developer, and AI Pythonist based in Nepal. I specialize in creating innovative
            and responsive web and mobile applications that enhance user experiences and solve real-world problems.
          </p>

          <p className="text-xl sm:text-2xl text-gray-800 mb-6">
            With a background in software development and a constant desire to learn and grow, I have worked on
            numerous projects in React.js, Android development, and Python. I am currently pursuing my studies and
            expanding my knowledge in machine learning and artificial intelligence.
          </p>

          <p className="text-xl sm:text-2xl text-gray-800 mb-6">
            I am a student of Computer Science in class 9, eager to build my career and explore new technologies.
            I am constantly pushing my limits by taking on challenging projects and collaborating with like-minded
            individuals to learn and grow.
          </p>

          <p className="text-xl sm:text-2xl text-gray-800 mb-6">
            In addition to my work as a developer, I am actively involved in the tech community and enjoy collaborating
            on open-source projects. I am always looking for new challenges that push my limits and allow me to continue
            improving my skills.
          </p>

          <p className="text-xl sm:text-2xl text-gray-800">
            Feel free to reach out if you are interested in collaborating or if you'd like to know more about my work!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
