import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import ProfileIcon from "../assets/icon.jpg";

function Footer() {
  return (
    <footer className="bg-white text-black py-16 px-4 border-t border-gray-200">
      <div className="max-w-3xl mx-auto text-center">

        {/* HR with profile image */}
        <div className="relative flex items-center justify-center">
          <hr className="w-full border-t border-gray-300" />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute bg-white rounded-full p-1 shadow-lg"
          >
            <img
              src={ProfileIcon}
              alt="Profile Icon"
              className="w-24 h-24 rounded-full object-cover"
            />
          </motion.div>
        </div>

        {/* Name & Bio */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-[80px] space-y-3"
        >
          <h2 className="text-2xl font-bold text-gray-900">Abhaya Bikram Shahi</h2>
          <p className="text-gray-600 max-w-md mx-auto text-base leading-relaxed">
            I'm passionate about technology and coding. I've been into computers since I was a kid. 
            My favorite programming languages are Python and JavaScript.
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center space-x-6 mt-6"
        >
          <a
            href="https://facebook.com/theabhayabikramshahi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-transform transform hover:scale-110"
          >
            <FaFacebook size={22} />
          </a>
          <a
            href="https://twitter.com/abhayabikramshahi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaTwitter size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/abhaya-bikram-shahi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-700 transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/abhayabikramshahi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition-transform transform hover:scale-110"
          >
            <FaGithub size={22} />
          </a>
        </motion.div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-10">
          &copy; {new Date().getFullYear()} Abhaya Bikram Shahi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
