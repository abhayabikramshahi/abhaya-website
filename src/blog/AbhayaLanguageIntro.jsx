import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AbhayaLanguageIntro() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 bg-white  mt-8 mb-12">
      <Helmet>
        <title>Abhaya Language: Project-Based Fun Programming Language | Abhaya Blog</title>
        <meta name="description" content="Abhaya Language is a simple, project-based, non-useable programming language made just for fun and learning. See playful code examples and the philosophy behind it." />
        <meta name="keywords" content="Abhaya Language, fun programming language, project-based, toy language, code examples, Abhaya Shahi" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Abhaya Language: Project-Based Fun Programming Language",
            "author": {
              "@type": "Person",
              "name": "Abhaya Shahi"
            },
            "datePublished": "2025-06-10",
            "description": "Abhaya Language is a simple, project-based, non-useable programming language made just for fun and learning. See playful code examples and the philosophy behind it.",
            "keywords": "Abhaya Language, fun programming language, project-based, toy language, code examples, Abhaya Shahi"
          }
        `}</script>
      </Helmet>
      <h1 className="text-3xl font-extrabold mb-4 text-black leading-tight text-left">Abhaya Language: A Project-Based, Just-for-Fun Programming Language</h1>
      <p className="mb-6 text-lg text-gray-800 text-left">Abhaya Language is a playful, project-based programming language created for fun and learning. It’s not meant for real-world use, but to inspire creativity and experimentation—perfect for coding games, silly projects, or just showing off your imagination!</p>
      <h2 className="text-2xl font-bold mt-8 mb-2 text-black text-left">What Makes It Unique?</h2>
      <ul className="list-disc ml-6 mb-6 text-gray-800">
        <li>Project-based: Every script is a mini project</li>
        <li>Simple, readable syntax for all ages</li>
        <li>Not for production—just for fun and learning</li>
        <li>Great for demos, jokes, and creative coding</li>
      </ul>
      <h2 className="text-2xl font-bold mt-8 mb-2 text-black text-left">Example Code (Just for Fun!)</h2>
      <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
        <pre className="text-green-200 text-sm text-left">
{` // Abhaya Language Example: A Fun Project
chapde("Hello world!")

// For Loops

herda(&){
chapde("Counting to 5:")
}

`}
        </pre>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-2 text-black text-left">Why Make a Toy Language?</h2>
      <p className="mb-4 text-gray-800 text-left">Sometimes, programming is about having fun, learning, and being creative. Abhaya Language is a reminder that not every language needs to be serious—sometimes, it’s about the joy of making something new, even if it’s just for laughs!</p>
    </div>
  );
}
