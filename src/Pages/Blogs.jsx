import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { formatDistanceToNow } from 'date-fns';
import AbhayaLanguageIntro from '../blog/AbhayaLanguageIntro';
import AbhayaCssFramework from '../blog/AbhayaCssFramework';
import Abhaya1Release from '../blog/Abhaya1Release';

// Dummy blog data
const blogData = [
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
    title: "Digital Marketing Strategies and SEO Tips",
    description: "Discover comprehensive digital marketing strategies and SEO tips for 2025, featuring in-depth case studies, expert interviews, and original research.",
    date: new Date("2025-06-08T10:00:00"),
    author: "Abhaya Shahi",
    slug: "abhaya-1-release"
  },
];

function Blogs() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">🧠 Abhaya Blog</h1>
        <p className='text-md mb-8 text-gray-700'>Welcome to the official Abhaya Blog! Here you'll find stories about Abhaya Language, the Abhaya CSS Framework, and insights into technology, innovation, and web development from Abhaya Shahi and the team.</p>
        <div className="space-y-6 mt-5">
          {blogData.map((blog) => (
            <Link
              to={`/${blog.slug}`}
              key={blog.id}
              className="block group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-[#087EA4] transition-colors">
                  {blog.title}
                </h2>
                <FaArrowRight className="text-[#087EA4] group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="mt-2 text-gray-600">{blog.description}</p>
              <div className="mt-3 text-sm text-gray-400 flex flex-wrap gap-2">
                <span>By {blog.author}</span>
                <span>•</span>
                <span>{formatDistanceToNow(blog.date, { addSuffix: true })}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;