import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { formatDistanceToNow } from 'date-fns';

// Dummy blog data
const blogData = [
  {
    id: 1,
    title: "Digital Marketing Strategies and SEO Tips",
    description: "Discover comprehensive digital marketing strategies and SEO tips for 2025, featuring in-depth case studies, expert interviews, and original research. ",
    date: new Date("2025-06-08T10:00:00"),
    author: "Abhaya Shahi",
    slug: "abhaya-1-release"
  },
  {
    id: 2,
    title: "Understanding Function Components",
    description: "A deep dive into how Server Components work, why they matter, and how you can start using them today.",
    date: new Date("2025-06-07T15:30:00"),
    author: "Ravi Thapa",
    slug: "react-server-components"
  },
];

function Blogs() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Blogssssss 🧠✨</h1>
        <p className='text-md '>Introducing the Blog section in my portfolio. In this page i will share my journey from blogss pages. This will be my another skill which is Writing and i will make sure to write without ai..</p>

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