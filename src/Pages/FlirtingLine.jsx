import React, { useState } from 'react';
import { motion } from 'framer-motion';

const flirtyLines = {
  cute: [
    "You must be tired, {name}, because you've been running through my mind all day.",
    "Every time I see you, {name}, my heart does a little dance.",
    "You’re my favorite notification, {name}.",
    "You make my heart skip a beat, {name}.",
    "Hey {name}, even my playlist feels empty without you.",
    "You + Me = ❤️",
    "I must be dreaming, because I just saw an angel named {name}.",
    "You're a walking reason to smile, {name}.",
    "My phone says I’m out of storage... must be all those pictures of you, {name}.",
    "Your laugh is my favorite sound, {name}.",
    "You make butterflies jealous, {name}.",
    "You glow more than my screen, {name}.",
    "I hope your day is as cute as you, {name}.",
    "I wasn't even looking for someone, but then I found you, {name}.",
    "You stole my hoodie and my heart, {name}.",
    "Your smile should be illegal, {name}.",
    "How are you real, {name}?",
    "You're like my homework, I can't stop thinking about you, {name}.",
    "You’re like the sun – you brighten everything, {name}.",
    "Life’s better with you in it, {name} 💖.",
  ],
  bold: [
    "Let’s skip the small talk and go straight to ‘us’, {name}.",
    "I was blinded by your beauty… I’m gonna need your name and number for insurance purposes, {name}.",
    "You’re not my type. You’re my obsession, {name}.",
    "I don’t chase, but for you, I might jog a little, {name}.",
    "I dare you to say you’re not attracted to me, {name}.",
    "You look like trouble… good thing I like trouble, {name}.",
    "You just activated my flirt mode, {name}.",
    "I don't need GPS – I’m already lost in your eyes, {name}.",
    "Let's make this night unforgettable, {name}.",
    "Your lips look lonely, {name}. Want to introduce them to mine?",
    "What’s it like being the hottest person in the room, {name}?",
    "You walked in and my standards skyrocketed, {name}.",
    "I was gonna flirt with someone else, but you stole the show, {name}.",
    "You're fire, and I’m not afraid to burn, {name}.",
    "What’s the deal with you being so irresistible, {name}?",
    "Are you always this attractive, or is today special, {name}?",
    "Wanna skip to the part where we cuddle, {name}?",
    "My friends bet I wouldn’t talk to the hottest person here… so here I am, {name}.",
    "Let’s get lost in each other, {name}.",
    "I bet you look even better in person, {name} 😉.",
  ],
  funny: [
    "Are you a loan? Because you got my interest, {name}!",
    "You must be a keyboard, {name}, because you're just my type.",
    "Is your name Chapstick? Because you’re da balm, {name}.",
    "Are you French? Because Eiffel for you, {name}.",
    "Do you like raisins? How about a date with me, {name}?",
    "Are you a magician? Because whenever you're around, everything disappears – except you, {name}.",
    "Can I follow you home? Cause my parents always told me to follow my dreams, {name}.",
    "You must be Wi-Fi because I’m feeling the connection, {name}.",
    "Do you believe in love at first sight – or should I walk by again, {name}?",
    "Are you Google? Because you have everything I’ve been searching for, {name}.",
    "You're like a broken pencil, {name} – pointless without me.",
    "You're cuter than a puppy in a hoodie, {name}.",
    "I’m not a photographer, but I can picture us together, {name}.",
    "Are you a time traveler? Because I can see you in my future, {name}.",
    "Can you lend me a kiss? I promise I’ll give it back, {name}.",
    "Are you cake? Because I want a piece of you, {name}.",
    "You're like math – I don't get you, but I still try, {name}.",
    "I’m learning about important dates in history… Wanna be one, {name}?",
    "Do you have a Band-Aid? I just scraped my knee falling for you, {name}.",
    "You must be a parking ticket, because you’ve got FINE written all over you, {name}.",
  ],
  compliment: [
    "You light up every room you walk into, {name}.",
    "If beauty had a face, it would be yours, {name}.",
    "You’re the reason love songs exist, {name}.",
    "You’re effortlessly stunning, {name}.",
    "Your presence is magic, {name}.",
    "You have the kind of smile that cures sadness, {name}.",
    "You radiate confidence, {name}.",
    "You’re everything I never knew I needed, {name}.",
    "The world’s a better place with you in it, {name}.",
    "You're smart, gorgeous, and genuinely amazing, {name}.",
    "You’re sunshine mixed with a little bit of hurricane, {name}.",
    "You inspire me to be better, {name}.",
    "Your eyes tell stories I want to read forever, {name}.",
    "You're a masterpiece, {name}.",
    "You have a heart of gold, {name}.",
    "Even the stars are jealous of your shine, {name}.",
    "You're more than enough, {name}.",
    "You’ve got that rare energy that makes people feel special, {name}.",
    "You're my daily dose of motivation, {name}.",
    "You're more than a crush, you're a compliment to my soul, {name}.",
  ],
  naughty: [
    "Let’s just say my thoughts about you, {name}, aren’t exactly PG.",
    "You and me? Let’s redefine ‘late night texting’, {name}.",
    "I hope you're good at math… because we're adding my bed and subtracting clothes, {name}.",
    "Every time I think of you, {name}, my mind goes wild.",
    "Let’s turn that innocent smile into something dangerous, {name}.",
    "What happens if I kiss you right now, {name}?",
    "You bring out the sinful side of me, {name}.",
    "Do you want to come over and break some furniture, {name}?",
    "You're hotter than my charger at 3%, {name}.",
    "I should warn you: I bite when I like someone, {name}.",
    "If kisses were snowflakes, I’d send you a blizzard, {name}.",
    "Let's make a movie… but not the kind that gets shown in theaters, {name}.",
    "Your name should be ‘caution’ – because you’re dangerously tempting, {name}.",
    "Stop being so hot, {name}, I’m running out of excuses to text you.",
    "I don't need caffeine. Just one thought of you, {name}, and I'm energized.",
    "My bed misses you, {name}. Just thought you should know.",
    "The way you say my name drives me crazy, {name}.",
    "You’re so sweet I’m getting cavities, but also some very bad ideas, {name}.",
    "That smirk of yours, {name}? Illegal.",
    "Tonight, my favorite color is your skin tone, {name}.",
  ]
};

function FlirtingLine() {
  const [category, setCategory] = useState('cute');
  const [line, setLine] = useState('');
  const [name, setName] = useState('');

  const generateLine = () => {
    const lines = [...flirtyLines[category]];
    const random = lines[Math.floor(Math.random() * lines.length)];
    const personalized = random.replace(/{name}/g, name || "cutie");
    setLine(personalized);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-start py-16 px-6 sm:px-10">
      <div className="text-center max-w-screen-sm mb-12">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">💘 Flirting Line Generator</h1>
        <p className="text-lg text-gray-600">
          Whether you’re being cute, bold, funny or even naughty – we got you. Add their name and vibe it up!
        </p>
      </div>

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
          <option value="naughty">Naughty 😈</option>
        </select>
      </div>

      <div className="w-full max-w-md mb-8">
        <label className="block mb-2 text-red-600 font-semibold">🧡 Add Name:</label>
        <input
          type="text"
          placeholder="Enter name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
        />
      </div>

      <button
        onClick={generateLine}
        className="bg-red-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-700 transition duration-300 text-lg mb-10"
      >
        Generate Line ❤️
      </button>

      {line && (
        <motion.div
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
