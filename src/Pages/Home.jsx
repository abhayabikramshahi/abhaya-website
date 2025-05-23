import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowDownIcon, 
  CodeBracketIcon, 
  LanguageIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  SparklesIcon,
  CommandLineIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <>
      <SEO 
        title="Home"
        description="Welcome to Abhaya Language - A modern programming language designed for simplicity and efficiency. Learn about our features, documentation, and community."
        keywords="programming language, Abhaya, modern programming, efficient coding, programming language features"
        type="website"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold text-black dark:text-white"
              >
                Welcome to{' '}
                <span className="text-black dark:text-white">
                  Abhaya
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-black dark:text-white max-w-2xl mx-auto"
              >
                A modern programming language designed for simplicity, efficiency, and developer happiness.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link
                  to="/abhaya"
                  className="bg-white border-2 border-black px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-black hover:bg-gray-100"
                >
                  Get Started
                </Link>
                <Link
                  to="/projects"
                  className="btn-outline px-8 py-4 text-lg font-semibold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 text-black dark:text-white"
                >
                  View Projects
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
              Why Choose Abhaya?
            </h2>
            <p className="text-xl text-black dark:text-white max-w-2xl mx-auto">
              Experience the power of modern programming with our innovative features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: RocketLaunchIcon,
                title: "High Performance",
                description: "Optimized for speed and efficiency in every operation"
              },
              {
                icon: SparklesIcon,
                title: "Modern Syntax",
                description: "Clean and intuitive syntax that's easy to learn and use"
              },
              {
                icon: CommandLineIcon,
                title: "Powerful Tools",
                description: "Comprehensive tooling and development environment"
              },
              {
                icon: BookOpenIcon,
                title: "Great Documentation",
                description: "Extensive documentation and learning resources"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-black dark:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-black dark:text-white">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-black dark:text-white mb-8">
              Join our community and start building amazing things with Abhaya
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/abhaya"
                className="bg-white border-2 border-black px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-black hover:bg-gray-100"
              >
                Get Started Now
              </Link>
              <Link
                to="/about"
                className="btn-outline px-8 py-4 text-lg font-semibold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 text-black dark:text-white"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
