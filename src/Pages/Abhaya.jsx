import { motion } from 'framer-motion'
import { 
  CodeBracketIcon,
  RocketLaunchIcon,
  SparklesIcon,
  CommandLineIcon,
  BookOpenIcon,
  ArrowRightIcon,
  PlayIcon,
  ClipboardDocumentIcon,
  CheckIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import SEO from '../components/SEO'
import { Link } from 'react-router-dom'

export default function Abhaya() {
  const [code, setCode] = useState('chpade("hello")')
  const [output, setOutput] = useState('')
  const [hasRun, setHasRun] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const runCode = () => {
    try {
      setHasRun(true)
      // Strict validation for chpade syntax
      const chpadeRegex = /^chpade\("([^"]*)"\)$/
      if (chpadeRegex.test(code)) {
        const result = code.match(chpadeRegex)[1]
        setOutput(result)
      } else {
        setOutput('Error: Invalid syntax. Use chpade("text") with double quotes')
      }
    } catch (error) {
      setOutput('Error: Invalid syntax')
    }
  }

  return (
    <>
      <SEO 
        title="Abhaya Language"
        description="Learn about Abhaya - A modern programming language designed for simplicity and efficiency. Get started with Hello World and explore its features."
        keywords="Abhaya language, programming language, Hello World, modern programming, language features"
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
              The Abhaya Language
            </h1>
            <p className="text-xl text-black dark:text-white mb-8">
              A modern programming language designed for simplicity, efficiency, and developer happiness
            </p>
          </motion.div>
        </div>
      </section>

      {/* Code Playground Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
              Try Abhaya Online
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  Code Playground
                </h3>
                <div className="flex gap-2">
                  <button 
                    className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 flex items-center gap-2"
                    onClick={handleCopy}
                  >
                    {copied ? (
                      <>
                        <CheckIcon className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <ClipboardDocumentIcon className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>
                  <button 
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 flex items-center gap-2"
                    onClick={runCode}
                  >
                    <PlayIcon className="w-4 h-4" />
                    Run
                  </button>
                </div>
              </div>
              <textarea
                value={code}
                onChange={(e) => {
                  setCode(e.target.value)
                  setHasRun(false)
                  setOutput('')
                }}
                className="w-full h-32 bg-gray-900 text-white p-4 rounded-lg font-mono resize-none focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              />
              <div className="mt-4 p-4 bg-gray-200 dark:bg-gray-700 rounded-lg">
                <h4 className="text-sm font-semibold text-black dark:text-white mb-2">Output:</h4>
                <p className="text-black dark:text-white font-mono min-h-[1.5rem]">
                  {hasRun ? output : ''}
                </p>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-black dark:text-white">
                  Try: chpade("hello")
                </p>
                <div className="flex items-center gap-2 text-sm text-black dark:text-white">
                  <MagnifyingGlassIcon className="w-4 h-4" />
                  <p>Search online for more examples and documentation</p>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <p>• Use double quotes for strings</p>
                  <p>• Make sure to include parentheses</p>
                  <p>• Check the documentation for more commands</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-black dark:text-white mb-12 text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: SparklesIcon,
                  title: "Modern Syntax",
                  description: "Clean and intuitive syntax that's easy to learn and maintain"
                },
                {
                  icon: CodeBracketIcon,
                  title: "Modern Features",
                  description: "Combination of modern programming concepts and language features"
                },
                {
                  icon: BookOpenIcon,
                  title: "Easy Learning",
                  description: "Simple and straightforward learning process for beginners"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg"
                >
                  <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-black dark:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-black dark:text-white">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
              Ready to Start Coding?
            </h2>
            <p className="text-xl text-black dark:text-white mb-8">
              Join our community and start building amazing things with Abhaya
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://github.com/yourusername/abhaya"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-black px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-black hover:bg-gray-100 inline-flex items-center"
              >
                Get Started
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
              <Link
                to="/documentation"
                className="bg-black text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-800"
              >
                View Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}