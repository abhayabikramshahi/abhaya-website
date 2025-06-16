import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const tools = [
	{
		name: 'CSS Code Generator',
		description: 'Instantly generate beautiful CSS styles',
		to: '/css-code-generator',
		bgColor: 'bg-blue-600 hover:bg-blue-700',
		tags: ['Tailwind', 'Design', 'Custom CSS'],
	},
	{
		name: 'Password Strength Checker',
		description: 'Check how strong your password is',
		to: '/password-strength-checker',
		bgColor: 'bg-green-600 hover:bg-green-700',
		tags: ['Security', 'Auth', 'Live Feedback'],
	},
	{
		name: 'Flirting Line Generator',
		description: 'You can generate flirting lines with this tool',
		to: '/flirting-line-generator',
		bgColor: 'bg-red-600 hover:bg-red-700',
		tags: ['couples', 'fun', 'romance'],
	},
];

function TryAI() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
		>
			<h1 className="text-3xl font-extrabold text-center text-black mb-4 tracking-tight">
				Abhaya AI Tools
			</h1>
			<p className="text-center text-base text-gray-700 max-w-2xl mx-auto mb-10">
				Explore simple, innovative tools to enhance your workflow.
			</p>

			<div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
				{tools.map((tool, idx) => (
					<motion.div
						key={idx}
						whileHover={{ y: -4, scale: 1.02 }}
						className="rounded-xl border border-gray-200 shadow-md p-6 bg-white flex flex-col items-start transition duration-200 hover:shadow-lg group relative"
					>
						<div className="mb-3 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-black text-2xl font-bold">
							{idx === 0 && '🎨'}
							{idx === 1 && '🔒'}
							{idx === 2 && '💌'}
						</div>
						<h2 className="text-lg font-bold mb-1 text-black group-hover:text-blue-600 transition">
							{tool.name}
						</h2>
						<p className="text-gray-700 mb-3 min-h-[40px]">
							{tool.description}
						</p>
						<div className="flex flex-wrap gap-2 mb-4">
							{tool.tags.map((tag, tagIdx) => (
								<span
									key={tagIdx}
									className="px-2 py-1 text-xs font-medium bg-gray-200 text-black rounded-full"
								>
									#{tag}
								</span>
							))}
						</div>
						<Link
							to={tool.to}
							className="bg-black text-white font-semibold px-5 py-2 rounded-lg inline-block text-sm mt-auto transition hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
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
