import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { formatDistanceToNow } from 'date-fns';

const blogData = [
  {
    id: 5,
    title: "Gen Z Protest: How the Youth Are Shaping the Future of Activism",
    description: "Explore how Gen Z is leading modern protests, using digital activism, and demanding change. Discover the youth-driven movements shaping our world today.",
    date: new Date("2025-06-06T18:00:00"),
    author: "Abhaya Bikram Shahi",
    slug: "gen-z-protest-activism"
  },
  {
    id: 1,
    title: "Introducing Abhaya Language: The Next-Gen Programming Language",
    description: "Learn about Abhaya Language, a modern, innovative programming language designed for simplicity, power, and accessibility. Discover its features, philosophy, and how it empowers developers.",
    date: new Date("2025-06-10T10:00:00"),
    author: "Abhaya Shahi",
    slug: "abhaya-language-intro"
  },
  {
    id: 2,
    title: "Abhaya CSS Framework: Effortless Styling for Modern Web Apps",
    description: "Explore Abhaya CSS Framework, a lightweight and flexible CSS toolkit that helps you build beautiful, responsive websites with ease. See how it compares to other frameworks and why you should try it.",
    date: new Date("2025-06-09T12:00:00"),
    author: "Abhaya Shahi",
    slug: "abhaya-css-framework"
  },
  {
    id: 3,
    title: "Nepal's cybersecurity is so weak, it can be breached in seconds—it’s basically begging to be slapped.",
    description: "An in-depth analysis of Nepal's cybersecurity landscape, highlighting vulnerabilities, challenges, and the urgent need for robust security measures to protect digital assets.",
    date: new Date("2025-06-08T14:00:00"),
    author: "Abhaya Shahi",
    slug: "nepal-cybersecurity-weakness"
  },
  {
    id: 4,
    title: "CMD Nepal Cyber Threats: Dark Reality of Hacking in South Asia",
    description: "CMD Nepal has recently emerged in the Nepali cyber community, targeting .com.np, .gov.np, and .gov.bd domains with anonymous hacking. This article exposes the cyber threats, risks, and urgent need for cybersecurity action in Nepal and South Asia.",
    date: new Date("2025-06-07T16:00:00"),
    author: "Rubin Sharma",
    slug: "cmd-nepal-cyber-threats-hacking"
  },
];

function Blogs() {
  const [now, setNow] = useState(new Date());

  // Update current time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 60 * 1000); // 1 minute

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">🧠 Abhaya Blog</h1>
        <p className='text-md mb-8 text-gray-700'>
          Welcome to the official Abhaya Blog! Here you'll find stories about Abhaya Language, the Abhaya CSS Framework,
          and insights into technology, innovation, and web development from Abhaya Shahi and the team.
        </p>
        <div className="space-y-6 mt-5">
          {blogData.map((blog) => {
            const isGenZ = blog.slug === "gen-z-protest-activism"; // highlight condition

            return (
              <Link
                to={`/${blog.slug}`}
                key={blog.id}
                className={`relative block group p-6 rounded-xl transition-all border 
                  ${isGenZ 
                    ? "bg-[#fff]  shadow-lg hover:shadow-xl" 
                    : "bg-white border-gray-200 shadow-sm hover:shadow-md"
                  }`}
              >
                {/* Trending Badge */}
                {isGenZ && (
                  <span className="absolute top-3 right-3 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                    🔥 Trending
                  </span>
                )}

                <div className="flex items-center justify-between">
                  <h2 className={`text-xl font-semibold group-hover:text-[#000] transition-colors
                    ${isGenZ ? "text-[#D97706]" : "text-gray-900"}`}>
                    {blog.title}
                  </h2>
                  <FaArrowRight className={`group-hover:translate-x-1 transition-transform 
                    ${isGenZ ? "text-[#D97706]" : "text-[#087EA4]"}`} />
                </div>
                <p className="mt-2 text-gray-600">{blog.description}</p>
                <div className="mt-3 text-sm text-gray-400 flex flex-wrap gap-2">
                  <span>By {blog.author}</span>
                  <span>•</span>
                  <span>{formatDistanceToNow(blog.date, { addSuffix: true })}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
