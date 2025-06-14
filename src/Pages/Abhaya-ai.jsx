import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const tools = [
  {
    name: "CSS Code Generator",
    description: "Instantly generate beautiful CSS styles",
    to: "/css-code-generator",
    bgColor: "bg-blue-600 hover:bg-blue-700",
    tags: ["Tailwind", "Design", "Custom CSS"],
  },
  {
    name: "Password Strength Checker",
    description: "Check how strong your password is",
    to: "/password-strength-checker",
    bgColor: "bg-green-600 hover:bg-green-700",
    tags: ["Security", "Auth", "Live Feedback"],
  },
  {
    name: "Flirting Line Generator",
    description: "You can generate flirting lines with this tool",
    to: "/flirting-line-generator",
    bgColor: "bg-red-600 hover:bg-red-700",
    tags: ["couples", "fun", "romance"],
  }
];

function TryAI() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-6">
        Abhaya AI
      </h1>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
        Welcome to Abhaya AI tools! Explore and try our interactive utilities below to boost your dev workflow.
      </p>

      <div className="grid gap-8 sm:grid-cols-2">
        {tools.map((tool, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-6 bg-white dark:bg-[#1a1a1a] transition duration-300"
          >
            <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              {tool.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {tool.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {tool.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              to={tool.to}
              className={`${tool.bgColor} text-white font-semibold px-5 py-2 rounded-lg inline-block text-sm transition duration-300`}
            >
              Try Now
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default TryAI;
