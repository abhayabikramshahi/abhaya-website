import { motion } from 'framer-motion'
import { 
  UserIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO 
        title="About Abhaya"
        description="Learn about Abhaya - A modern programming language designed for simplicity and efficiency."
        keywords="Abhaya language, programming language, about, creator"
        type="website"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">
              About Abhaya
            </h1>
            <p className="text-xl text-black dark:text-white mb-8">
              A modern programming language designed with simplicity and efficiency in mind
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Creator Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <UserIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold text-black dark:text-white">The Creator</h2>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <p className="text-black dark:text-white mb-4">
                  Abhaya was created with a vision to make programming more accessible and enjoyable. 
                  The language combines modern programming concepts with a simple, intuitive syntax.
                </p>
              </div>
            </motion.div>

            {/* Mission Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <HeartIcon className="w-8 h-8 text-red-600 dark:text-red-400" />
                <h2 className="text-2xl font-bold text-black dark:text-white">Our Mission</h2>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <p className="text-black dark:text-white mb-4">
                  Our mission is to empower developers with a language that's both powerful and easy to learn. 
                  We believe in creating tools that make programming more accessible to everyone.
                </p>
              </div>
            </motion.div>

            {/* Features Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <CodeBracketIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
                <h2 className="text-2xl font-bold text-black dark:text-white">Key Features</h2>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <ul className="space-y-3 text-black dark:text-white">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Simple and intuitive syntax
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Modern programming features
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Excellent documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Active community support
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Future Plans */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <AcademicCapIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                <h2 className="text-2xl font-bold text-black dark:text-white">Future Plans</h2>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <p className="text-black dark:text-white mb-4">
                  We're constantly working to improve Abhaya and add new features. 
                  Our roadmap includes enhanced tooling, more libraries, and better IDE support.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
