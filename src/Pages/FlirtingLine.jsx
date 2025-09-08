import React, { useState } from "react";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-start py-16 px-6 sm:px-10">
      <div className="text-center max-w-screen-sm mb-12">
        <h1 className="text-5xl font-extrabold text-black mb-4">
          💘 Flirting Line Generator
        </h1>
        <p className="text-lg text-gray-600">
          Straight from the API – every click gives you a fresh line of rizz.
        </p>
      </div>

      <button
        onClick={generateLine}
        disabled={loading}
        className="bg-red-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-700 transition duration-300 text-lg mb-10 disabled:opacity-50"
      >
        {loading ? "Loading..." : "Generate Line ❤️"}
      </button>

      {line && (
        <motion.div
          key={line}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 bg-red-100 text-red-800 p-6 rounded-xl border border-red-300 shadow-lg max-w-lg text-center"
        >
          <p className="text-xl italic font-medium">{line}</p>
        </motion.div>
      )}
    </div>
  );
}

export default FlirtingLine;
