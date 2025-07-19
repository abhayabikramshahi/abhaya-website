import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const tools = [
  {
    name: 'CSS Code Generator',
    description: 'Instantly generate beautiful CSS styles.',
    to: '/css-code-generator',
    bgColor: 'bg-blue-600 hover:bg-blue-700',
    tags: ['Tailwind', 'Design', 'Custom CSS'],
    icon: '🎨',
  },
  {
    name: 'Password Strength Checker',
    description: 'Check how strong your password is.',
    to: '/password-strength-checker',
    bgColor: 'bg-green-600 hover:bg-green-700',
    tags: ['Security', 'Auth', 'Live Feedback'],
    icon: '🔒',
  },
  {
    name: 'Flirting Line Generator',
    description: 'Generate creative flirting lines instantly.',
    to: '/flirting-line-generator',
    bgColor: 'bg-red-600 hover:bg-red-700',
    tags: ['Couples', 'Fun', 'Romance'],
    icon: '💌',
  },
];

function TryAI() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          🚀 Abhaya AI Tools
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          Supercharge your workflow with smart, minimal, and powerful AI tools designed for speed and simplicity.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6, scale: 1.03 }}
            className="transition-all duration-200"
          >
            <Link
              to={tool.to}
              className="group block bg-white border border-gray-200 shadow-sm rounded-2xl p-6 h-full transition hover:shadow-lg focus:outline-none"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 text-2xl mb-4">
                {tool.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
                {tool.name}
              </h3>

              <p className="text-gray-600 mb-4 text-sm min-h-[48px]">
                {tool.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default TryAI;
