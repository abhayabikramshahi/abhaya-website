'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import hero from './img/image.png'

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function HomePage() {
  // We don't need isMenuOpen state here as it's now handled in the Navbar component
  
  return (
    <>

      <div className="scroll-smooth bg-white font-sans">

        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col md:flex-row justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 bg-gradient-to-b from-blue-50 to-white"
          aria-labelledby="home-heading"
        >
          <motion.div
            className="flex-1 text-center md:text-left px-4 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h1
              id="home-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              variants={fadeIn}
            >
              Welcome to <span className="text-blue-600">Abhaya's</span> Portfolio 👋
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0"
              variants={fadeIn}
            >
              A passionate full-stack developer from Nepal crafting innovative web, mobile, and AI solutions.
            </motion.p>
            <motion.div variants={fadeIn}>
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Contact Abhaya"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex-1 flex justify-center items-center px-4 mt-8 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <img
              src={hero.src}
              alt="Full-stack developer portfolio illustration"
              className="w-3/4 sm:w-2/3 lg:w-full max-w-md"
              loading="eager"
            />
          </motion.div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 bg-white"
          aria-labelledby="about-heading"
        >
          <motion.h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            About <span className="text-blue-600">Me</span>
          </motion.h2>
          <motion.div
            className="max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-4">
              I'm <span className="font-semibold text-blue-600">Abhaya</span>, a full-stack developer from Nepal with expertise in web development, mobile apps, and AI-driven solutions. 
            </p>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
              My passion lies in creating seamless UI/UX and solving real-world challenges using technologies like Next.js, TailwindCSS, and Node.js.
            </p>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 bg-gray-50"
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            My Projects
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:-translate-y-2"
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Portfolio Website</h3>
              <p className="text-gray-600 text-base">
                A responsive portfolio built with Next.js, TailwindCSS, and Framer Motion to showcase my professional work.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:-translate-y-2"
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">School Management System</h3>
              <p className="text-gray-600 text-base">
                A full-stack platform for managing school operations, including attendance, grades, and communication.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:-translate-y-2"
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Omegle Clone</h3>
              <p className="text-gray-600 text-base">
                A real-time chat and video platform using WebRTC, Node.js, and Socket.IO for seamless communication.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-t from-blue-50 to-white"
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Let’s Connect
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center max-w-2xl mb-8 text-base sm:text-lg lg:text-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Have a project in mind or want to collaborate? Reach out to me at{' '}
            <span className="font-semibold text-blue-600">abhaya@example.com</span>.
          </motion.p>
          <motion.a
            href="mailto:abhaya@example.com"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-base font-medium"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Say Hello 👋
          </motion.a>
        </section>

       
      </div>
    </>
  );
}