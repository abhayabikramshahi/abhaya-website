import { motion } from 'framer-motion'
import { 
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  PaintBrushIcon,
  CircleStackIcon,
  CloudIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  CpuChipIcon,
  BeakerIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'
import { useTheme } from '../context/ThemeContext'

const skillCategories = [
  {
    title: "Frontend Development",
    icon: CodeBracketIcon,
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "JavaScript", icon: "📜" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "Tailwind CSS", icon: "🎯" },
      { name: "Bootstrap", icon: "🎪" }
    ],
    description: "Building responsive and interactive user interfaces with modern web technologies"
  },
  {
    title: "Mobile Development",
    icon: DevicePhoneMobileIcon,
    skills: [
      { name: "Java", icon: "☕" },
      { name: "XML", icon: "📱" },
      { name: "Android", icon: "🤖" }
    ],
    description: "Creating native mobile applications for Android platform"
  },
  {
    title: "Backend Development",
    icon: ServerIcon,
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "MediaPipe", icon: "👁️" },
      { name: "PyAutoGUI", icon: "🤖" },
      { name: "Pandas", icon: "📊" },
      { name: "PHP", icon: "🐘" },
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚂" }
    ],
    description: "Developing robust server-side applications, automation scripts, and data processing solutions"
  },
  {
    title: "UI/UX Design",
    icon: PaintBrushIcon,
    skills: [
      { name: "Figma", icon: "🎨" },
      { name: "User Research", icon: "🔍" },
      { name: "Wireframing", icon: "📝" },
      { name: "Prototyping", icon: "🎯" }
    ],
    description: "Designing intuitive and engaging user experiences"
  },
  {
    title: "Database",
    icon: CircleStackIcon,
    skills: [
      { name: "SQL", icon: "🗄️" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Firebase", icon: "🔥" }
    ],
    description: "Managing and optimizing database systems"
  },
  {
    title: "Cloud & DevOps",
    icon: CloudIcon,
    skills: [
      { name: "Docker", icon: "🐳" },
      { name: "Git", icon: "📦" },
      { name: "AWS", icon: "☁️" }
    ],
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
              className={`${themeColors.background} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${themeColors.border} relative overflow-hidden group`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <category.icon className="w-32 h-32 absolute -right-8 -bottom-8 transform rotate-12" />
              </div>

              <div className="flex items-center gap-4 mb-6 relative">
                <div className={`${themeColors.accent} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`w-7 h-7 ${themeColors.primary}`} />
                </div>
                <h3 className={`text-2xl font-bold ${themeColors.text}`}>
                  {category.title}
                </h3>
              </div>
              
              <p className={`${themeColors.secondary} mb-6 relative`}>
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2 relative">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 ${themeColors.accent} ${themeColors.text} rounded-full text-sm font-medium flex items-center gap-2`}
                  >
                    <span>{skill.icon}</span>
                    {skill.name}
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
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "4+", label: "Years of Experience", icon: RocketLaunchIcon },
              { number: "3+", label: "Projects Completed", icon: CommandLineIcon },
              { number: "10+", label: "Happy Clients", icon: BeakerIcon }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className={`${themeColors.background} p-8 rounded-2xl shadow-lg ${themeColors.border} border relative overflow-hidden group`}
              >
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <stat.icon className="w-24 h-24 absolute -right-6 -bottom-6 transform rotate-12" />
                </div>
                <div className="relative">
                  <h3 className={`text-5xl font-bold ${themeColors.primary} mb-2`}>
                    {stat.number}
                  </h3>
                  <p className={`${themeColors.secondary} text-lg`}>
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
} 