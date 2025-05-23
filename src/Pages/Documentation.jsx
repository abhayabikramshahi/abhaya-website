import { motion } from 'framer-motion'
import { 
  BookOpenIcon,
  CodeBracketIcon,
  CommandLineIcon,
  ArrowLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Documentation() {
  const sections = [
    {
      title: "Getting Started",
      content: [
        {
          title: "Installation",
          description: "Learn how to install and set up Abhaya on your system.",
          code: "git clone https://github.com/abhayabikramshahi/Interpreter-language"
        },
        {
          title: "First Program",
          description: "Write your first program using the chpade command.",
          code: 'chpade("Hello, World!")'
        }
      ]
    },
    {
      title: "Basic Syntax",
      content: [
        {
          title: "Output Commands",
          description: "Learn about different ways to output text in Abhaya.",
          code: 'chpade("Your message here")'
        },
        {
          title: "Comments",
          description: "How to add comments to your code.",
          code: "// This is a comment"
        }
      ]
    },
    {
      title: "Advanced Features",
      content: [
        {
          title: "Variables",
          description: "Working with variables in Abhaya.",
          code: 'karya Name = Name'
        },
        {
          title: "Functions",
          description: "Creating and using functions.",
          code: 'karan-gar greet(name) {\n  chpade("Hello, " + name)\n}'
        }
      ]
    }
  ]

  return (
    <>
      <SEO 
        title="Abhaya Documentation"
        description="Comprehensive documentation for the Abhaya programming language. Learn about syntax, features, and best practices."
        keywords="Abhaya documentation, programming guide, language reference, coding tutorial"
        type="website"
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Header */}
        <header className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                <ArrowLeftIcon className="w-5 h-5" />
                Back to Home
              </Link>
              <h1 className="text-2xl font-bold text-black dark:text-white">Documentation</h1>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
                Welcome to Abhaya Documentation
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Learn everything you need to know about the Abhaya programming language.
                From basic syntax to advanced features, this documentation will guide you
                through your journey with Abhaya.
              </p>
            </motion.div>

            {/* Documentation Sections */}
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center gap-2">
                  <BookOpenIcon className="w-6 h-6" />
                  {section.title}
                </h3>
                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div
                      key={item.title}
                      className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm"
                    >
                      <h4 className="text-xl font-semibold text-black dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {item.description}
                      </p>
                      <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm">
                        {item.code}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mt-12"
            >
              <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                Quick Links
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://github.com/yourusername/abhaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <CodeBracketIcon className="w-5 h-5" />
                  GitHub Repository
                  <ChevronRightIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://abhaya.dev/examples"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <CommandLineIcon className="w-5 h-5" />
                  Code Examples
                  <ChevronRightIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  )
} 