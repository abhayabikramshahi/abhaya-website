import React, { useState } from 'react';
import { motion } from 'framer-motion';

const flirtyLines = {
  cute: [
    "You must be tired, because you've been running through my mind all day.",
    "Every time I see you, my heart does a little dance.",
    "You’re my favorite notification.",
  ],
  bold: [
    "Let’s skip the small talk and go straight to ‘us’.",
    "I was blinded by your beauty… I’m gonna need your name and number for insurance purposes.",
    "You’re not my type. You’re my obsession.",
  ],
  funny: [
    "Are you a loan? Because you got my interest!",
    "You must be a keyboard, because you're just my type.",
    "Is your name Chapstick? Because you’re da balm.",
  ],
  compliment: [
    "You light up every room you walk into.",
    "If beauty had a face, it would be yours.",
    "You’re the reason love songs exist.",
  ]
};

function FlirtingLine() {
  const [category, setCategory] = useState('cute');
  const [line, setLine] = useState('');
  const [customLine, setCustomLine] = useState('');

  const generateLine = () => {
    const lines = [...flirtyLines[category]];
    if (customLine.trim()) lines.push(customLine);
    const random = lines[Math.floor(Math.random() * lines.length)];
    setLine(random);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white flex flex-col items-center justify-start py-16 px-6 sm:px-10">
      
      {/* 💌 Overview Section */}
      <div className="text-center max-w-screen-sm mb-12">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">💘 Flirting Line Generator</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Whether you’re being cute, bold, or funny – we got you. Choose a vibe and get your pickup line on point.
        </p>
      </div>

      {/* 🎯 Category Picker */}
      <div className="w-full max-w-md mb-6">
        <label className="block mb-2 text-red-600 font-semibold">✨ Choose Your Vibe:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
        >
          <option value="cute">Cute 💕</option>
          <option value="bold">Bold 🔥</option>
          <option value="funny">Funny 😄</option>
          <option value="compliment">Compliment 🌹</option>
        </select>
      </div>

      {/* 📝 Custom Line Input */}
      <div className="w-full max-w-md mb-8">
        <label className="block mb-2 text-red-600 font-semibold">✍️ Add Your Own Line (optional):</label>
        <input
          type="text"
          placeholder="Type something flirty..."
          value={customLine}
          onChange={(e) => setCustomLine(e.target.value)}
          className="w-full p-3 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
        />
      </div>

      {/* 🔘 Generate Button */}
      <button
        onClick={generateLine}
        className="bg-red-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-700 transition duration-300 text-lg mb-10"
      >
        Generate Line ❤️
      </button>

      {/* 🎁 Generated Line Output */}
      {line && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 p-6 rounded-xl border border-red-300 shadow-lg max-w-lg text-center"
        >
          <p className="text-xl italic font-medium">{line}</p>
        </motion.div>
      )}
    </div>
  );
}

export default FlirtingLine;
