import { motion } from 'framer-motion'
import { 
  CodeBracketIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  CommandLineIcon,
  DocumentTextIcon,
  BeakerIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline'
import { useTheme } from '../context/ThemeContext'

const projects = [
  {
    title: 'Abhaya Language',
    description: 'A custom programming language designed for simplicity and efficiency, combining JavaScript and Python system capabilities.',
    icon: CommandLineIcon,
    technologies: ['JavaScript', 'Python', 'Language Design', 'Compiler Design'],
    category: 'Language Development'
  },
  {
    title: 'AI-Powered Automation',
    description: 'Automated system using Python, MediaPipe, and PyAutoGUI for intelligent task automation and computer vision applications.',
    icon: CpuChipIcon,
    technologies: ['Python', 'MediaPipe', 'PyAutoGUI', 'Computer Vision'],
    category: 'AI & Automation'
  },
  {
    title: 'Data Analysis Platform',
    description: 'Comprehensive data analysis and visualization platform built with Python and Pandas for efficient data processing.',
    icon: BeakerIcon,
    technologies: ['Python', 'Pandas', 'Data Analysis', 'Visualization'],
    category: 'Data Science'
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
  },
  {
    title: 'Facemash - Nepali Version',
    description: 'Social media platform inspired by Facemash, allowing users to compare and vote on profiles.',
    icon: GlobeAltIcon,
    technologies: ['PHP', 'MYSQL', 'HTML', 'TAILWINDCSS'],
    category: 'Web Development'
  },
  {
    title: 'Facebook Clone',
    description: 'A clone of Facebook with features like user profiles, posts, and comments.',
    icon: GlobeAltIcon,
    technologies: ['PHP', 'Html', 'MYSQL'],
    category: 'Web Development'
  }
]

export default function Projects() {
  const { getThemeColors } = useTheme()
  const themeColors = getThemeColors()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className={`text-4xl font-bold ${themeColors.text} mb-4`}>My Projects</h1>
        <p className={`text-xl ${themeColors.secondary} max-w-2xl mx-auto`}>
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
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className={`${themeColors.background} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${themeColors.border} relative overflow-hidden group`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
              <project.icon className="w-32 h-32 absolute -right-8 -bottom-8 transform rotate-12" />
            </div>

            <div className="flex items-center gap-4 mb-6 relative">
              <div className={`${themeColors.accent} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className={`w-7 h-7 ${themeColors.primary}`} />
              </div>
              <div>
                <h2 className={`text-xl font-semibold ${themeColors.text}`}>{project.title}</h2>
                <p className={`text-sm ${themeColors.secondary}`}>{project.category}</p>
              </div>
            </div>
            
            <p className={`${themeColors.secondary} mb-6 relative`}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 relative border rounded-lg p-4">
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-2 ${themeColors.accent} ${themeColors.text} rounded-full text-sm font-medium`}
                >
                  {tech}
                </motion.span>
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
        className={`mt-16 ${themeColors.background} rounded-2xl p-8 shadow-lg border ${themeColors.border}`}
      >
        <h2 className={`text-2xl font-semibold ${themeColors.text} mb-4`}>Technical Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'Frontend Development',
            'Backend Development',
            'AI & Automation',
            'Data Science',
            'Database Management',
            'UI/UX Design',
            'E-commerce Solutions',
            'Web Applications'
          ].map((skill) => (
            <div
              key={skill}
              className={`flex items-center gap-2 ${themeColors.secondary}`}
            >
              <div className={`w-2 h-2 ${themeColors.accent} rounded-full`}></div>
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
