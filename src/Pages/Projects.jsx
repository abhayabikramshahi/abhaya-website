import { motion } from 'framer-motion'
import { 
  CodeBracketIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  CommandLineIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'Abhaya Language',
    description: 'A custom programming language designed for simplicity and efficiency, combining JavaScript and Python system capabilities.',
    icon: CommandLineIcon,
    technologies: ['JavaScript', 'Python', 'Language Design', 'Compiler Design'],
    category: 'Language Development'
  },
  {
    title: 'Badimalika School Website',
    description: 'Comprehensive school management system with digital results and class progress tracking.',
    icon: GlobeAltIcon,
    technologies: ['React.js', 'PHP', 'SQL', 'JSON'],
    category: 'Web Development'
  },
  {
    title: 'Portfolio Website',
    description: 'Modern and responsive personal portfolio showcasing projects and skills.',
    icon: CodeBracketIcon,
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    category: 'Web Development'
  },
  {
    title: 'Yubik Clothing Store',
    description: 'E-commerce platform for a local clothing brand with modern UI and seamless shopping experience.',
    icon: DevicePhoneMobileIcon,
    technologies: ['React.js', 'Tailwind CSS', 'E-commerce'],
    category: 'Web Development'
  },
  {
    title: 'FIT PRESS Printing',
    description: 'Printing service website with dynamic content management and service booking system.',
    icon: DocumentTextIcon,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development'
  },
  {
    title: 'Raskot Municipality Voting System',
    description: 'Digital voting system for local municipality with secure authentication and real-time results.',
    icon: ServerIcon,
    technologies: ['Express.js', 'Node.js', 'Database Management'],
    category: 'Backend Development'
  }
]

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-4">My Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A collection of my work showcasing various technologies and solutions
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                <project.icon className="w-6 h-6 text-black dark:text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-black dark:text-white">{project.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{project.category}</p>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">Technical Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'Frontend Development',
            'Backend Development',
            'Database Management',
            'UI/UX Design',
            'E-commerce Solutions',
            'Web Applications'
          ].map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
            >
              <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
