import { motion } from 'framer-motion'
import { 
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  PaintBrushIcon,
  CircleStackIcon,
  CloudIcon
} from '@heroicons/react/24/outline'
import { useTheme } from '../context/ThemeContext'

const skillCategories = [
  {
    title: "Frontend Development",
    icon: CodeBracketIcon,
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    description: "Building responsive and interactive user interfaces with modern web technologies"
  },
  {
    title: "Mobile Development",
    icon: DevicePhoneMobileIcon,
    skills: ["Java", "XML"],
    description: "Creating native mobile applications for Android platform"
  },
  {
    title: "Backend Development",
    icon: ServerIcon,
    skills: ["PHP"],
    description: "Developing robust server-side applications and APIs"
  },
  {
    title: "UI/UX Design",
    icon: PaintBrushIcon,
    skills: ["Figma", "User Research", "Wireframing", "Prototyping"],
    description: "Designing intuitive and engaging user experiences"
  },
  {
    title: "Database",
    icon: CircleStackIcon,
    skills: ["SQL"],
    description: "Managing and optimizing database systems"
  },
  {
    title: "Cloud & DevOps",
    icon: CloudIcon,
    skills: ["Docker", "Git"],
    description: "Implementing cloud solutions and managing development workflows"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function Skills() {
  const { getThemeColors } = useTheme()
  const themeColors = getThemeColors()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className={`text-5xl font-bold ${themeColors.text} mb-6`}>
            Technical Expertise
          </h1>
          <p className={`text-xl ${themeColors.secondary} max-w-2xl mx-auto`}>
            A comprehensive showcase of my technical skills and professional capabilities
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={`${themeColors.background} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${themeColors.border}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`${themeColors.accent} p-3 rounded-xl`}>
                  <category.icon className={`w-7 h-7 ${themeColors.primary}`} />
                </div>
                <h3 className={`text-2xl font-bold ${themeColors.text}`}>
                  {category.title}
                </h3>
              </div>
              
              <p className={`${themeColors.secondary} mb-6`}>
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 ${themeColors.accent} ${themeColors.text} rounded-full text-sm font-medium`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className={`text-3xl font-bold ${themeColors.text} mb-4`}>
            Years of Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              { number: "4+", label: "Years of Experience" },
              { number: "3+", label: "Projects Completed" },
              { number: "10+", label: "Happy Clients" }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className={`${themeColors.background} p-6 rounded-xl shadow-lg ${themeColors.border} border`}
              >
                <h3 className={`text-4xl font-bold ${themeColors.primary} mb-2`}>
                  {stat.number}
                </h3>
                <p className={`${themeColors.secondary}`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
} 