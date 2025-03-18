import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-black mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>

        {/* Contact Info */}
        <motion.div
          className="text-center md:text-left max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 mb-6">
            I would love to hear from you! Whether you have a project in mind, or simply want to connect, feel free to reach out. I'm open to new opportunities and collaborations.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            You can contact me via the following platforms:
          </p>

          <ul className="text-lg text-gray-700 mb-6 list-disc list-inside">
            <li>Email: <span className="font-semibold">abhaya@example.com</span></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/abhaya-bikram-shahi" className="text-red-600 hover:underline">linkedin.com/in/abhaya-bikram-shahi</a></li>
            <li>GitHub: <a href="https://github.com/abhayabikramshahi" className="text-red-600 hover:underline">github.com/abhayabikramshahi</a></li>
          </ul>

          <p className="text-lg text-gray-700">
            I am constantly looking for ways to improve and expand my skills, so feel free to send me a message if you have any questions or ideas. I look forward to connecting with you!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
