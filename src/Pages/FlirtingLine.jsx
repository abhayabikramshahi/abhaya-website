import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react"; // optional icon for vibe

function FlirtingLine() {
  const [line, setLine] = useState("");
  const [loading, setLoading] = useState(false);

  const generateLine = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://rizzapi.vercel.app/random");
      const data = await res.json();
      setLine(data.text || "No line available 😅");
    } catch (err) {
      console.error(err);
      setLine("Oops, couldn’t fetch a line. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-red-50 text-gray-900 flex flex-col items-center px-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl mx-auto mb-8"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black flex items-center justify-center gap-2">
          <Heart className="w-7 h-7 text-red-600" /> Flirting Line Generator
        </h1>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600">
          Get a fresh line of rizz every time you click the button below.
        </p>
      </motion.div>

      {/* Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={generateLine}
        disabled={loading}
        className="bg-red-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl shadow-md hover:shadow-lg hover:bg-red-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Generating..." : "Generate Line"}
      </motion.button>

      {/* Output Card */}
      {line && (
        <motion.div
          key={line}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-8 bg-white text-gray-900 p-6 sm:p-8 rounded-2xl border border-red-200 shadow-xl max-w-lg w-full"
        >
          <p className="text-base sm:text-lg md:text-xl text-center italic font-medium text-red-700">
            “{line}”
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default FlirtingLine;
