import { motion } from 'framer-motion'
import { 
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  PaintBrushIcon,
  CircleStackIcon,
  CloudIcon
} from '@heroicons/react/24/outline'

const skillCategories = [
  {
    title: "Frontend Development",
    icon: CodeBracketIcon,
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Mobile Development",
    icon: DevicePhoneMobileIcon,
    skills: ["Java", "XML"]
  },
  {
    title: "Backend Development",
    icon: ServerIcon,
    skills: ["PHP"]
  },
  {
    title: "UI/UX Design",
    icon: PaintBrushIcon,
    skills: ["Figma",  "User Research", "Wireframing", "Prototyping"]
  },
  {
    title: "Database",
    icon: CircleStackIcon,
    skills: ["SQL"]
  },
  {
    title: "Cloud & DevOps",
    icon: CloudIcon,
    skills: ["Docker", "Git"]
  }
]

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-4">Skills & Expertise</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and areas of expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                <category.icon className="w-6 h-6 text-black dark:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
} 