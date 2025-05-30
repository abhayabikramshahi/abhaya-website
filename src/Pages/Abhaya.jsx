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

// Custom chapde function that accepts any syntax
const chapde = (content) => {
  try {
    // Convert content to string if it's not already
    const contentStr = String(content);
    
    // Return the content wrapped in a styled div
    return (
      <div className="chapde-container p-4 my-4 bg-gray-100 rounded-lg border border-gray-300">
        <pre className="whitespace-pre-wrap break-words">
          {contentStr}
        </pre>
      </div>
    );
  } catch (error) {
    console.error('Error in chapde:', error);
    return null;
  }
};

export default function Abhaya() {
  const [code, setCode] = useState('// Write your code here\nchapde("Hello, World!")')
  const [output, setOutput] = useState('')
  const [hasRun, setHasRun] = useState(false)
  const [copied, setCopied] = useState(false)
  const [variables, setVariables] = useState({})

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const runCode = () => {
    try {
      setHasRun(true)
      let result = ''
      let currentVariables = { ...variables }

      // Split code into lines and process each line
      const lines = code.split('\n')
      
      for (let line of lines) {
        // Skip comments
        if (line.trim().startsWith('//')) continue

        // Handle variable declaration
        if (line.includes('karya')) {
          const [_, varName, value] = line.match(/karya\s+(\w+)\s*=\s*(.+)/) || []
          if (varName && value) {
            // Remove quotes from the value
            const cleanValue = value.trim().replace(/^["']|["']$/g, '')
            currentVariables[varName] = cleanValue
            // Add variable declaration to output in the format "Name: value"
            result += `${varName}: ${cleanValue}\n`
          }
          continue
        }

        // Handle function declaration
        if (line.includes('karan-gar')) {
          // Store function definition for later use
          continue
        }

        // Handle chapde command
        if (line.includes('chapde(')) {
          const match = line.match(/chapde\((.*)\)/)
          if (match) {
            let content = match[1]
            
            // Replace variables in the content
            Object.keys(currentVariables).forEach(varName => {
              const regex = new RegExp(varName, 'g')
              content = content.replace(regex, currentVariables[varName])
            })

            // Remove quotes and add to result
            content = content.replace(/^["']|["']$/g, '')
            result += content + '\n'
          }
        }
      }

      // Update variables state
      setVariables(currentVariables)

      // Display the result
      setOutput(
        <div className="chapde-output p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          {result.trim()}
        </div>
      )
    } catch (error) {
      setOutput(
        <div className="text-red-500 dark:text-red-400 font-mono">
          Error: {error.message}
        </div>
      )
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
            <div className="relative mb-8">
              <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-blue-500 to-purple-500 rounded-l-xl" />
              <div className="pl-6">
                <h2 className="text-3xl font-heading font-bold text-black dark:text-white mb-2">Try Abhaya Online</h2>
                <p className="text-lg font-sans text-gray-600 dark:text-gray-300 mb-4">Experiment with the Abhaya language in your browser.</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-0 overflow-hidden">
              <div className="flex items-center justify-between px-8 py-4 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-blue-50/80 dark:from-blue-900/40 to-purple-50/80 dark:to-purple-900/40">
                <h3 className="text-lg font-heading font-semibold text-black dark:text-white">Code Playground</h3>
                <div className="flex gap-2">
                  <button 
                    className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2 px-3 py-1.5 rounded transition-colors duration-200 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
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
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg shadow hover:from-blue-700 hover:to-purple-700 flex items-center gap-2 font-heading font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onClick={runCode}
                  >
                    <PlayIcon className="w-5 h-5" />
                    Run
                  </button>
                </div>
              </div>
              <div className="px-8 py-6">
                <textarea
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value)
                    setHasRun(false)
                    setOutput('')
                  }}
                  className="w-full h-48 bg-gray-900 text-white p-4 rounded-lg font-mono resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-purple-400 text-base mb-4 border border-gray-700"
                  style={{ fontFamily: 'var(--font-mono, monospace)' }}
                />
                {/* Output Section */}
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-heading font-semibold text-black dark:text-white">Output:</h4>
                    {hasRun && (
                      <button 
                        onClick={() => {
                          setHasRun(false)
                          setOutput('')
                        }}
                        className="text-xs text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 font-sans"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg min-h-[60px] border border-gray-200 dark:border-gray-600">
                    {hasRun ? (
                      <div className="text-black dark:text-white font-mono">
                        {output}
                      </div>
                    ) : (
                      <div className="text-gray-400 dark:text-gray-500 font-mono italic">
                        Click "Run" to see the output
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <p className="text-sm font-heading text-black dark:text-white mb-1">Examples:</p>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1 font-mono">
                    <p>• Basic output: <span className="text-blue-600 dark:text-blue-400">chapde("Hello, World!")</span></p>
                    <p>• Variables: <span className="text-blue-600 dark:text-blue-400">karya name = "John"</span></p>
                    <p>• Using variables: <span className="text-blue-600 dark:text-blue-400">chapde("Hello, " + name)</span></p>
                    <p>• Comments: <span className="text-blue-600 dark:text-blue-400">// This is a comment</span></p>
                    <p>• Functions: <span className="text-blue-600 dark:text-blue-400">karan-gar greet(name) {'{'} chapde("Hello, " + name) {'}'}</span></p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-black dark:text-white mt-4">
                    <MagnifyingGlassIcon className="w-4 h-4" />
                    <p>Search online for more examples and documentation</p>
                  </div>
                </div>
                <div className="mt-8 text-right">
                  <Link to="/documentation" className="inline-block text-black dark:text-black font-heading font-semibold hover:underline transition-colors duration-200">
                    Read Documentation →
                  </Link>
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
                  title: "Simple Syntax",
                  description: "Easy to learn with intuitive commands like chapde, karya, and karan-gar"
                },
                {
                  icon: CodeBracketIcon,
                  title: "Modern Features",
                  description: "Support for variables, functions, and comments"
                },
                {
                  icon: BookOpenIcon,
                  title: "Easy Learning",
                  description: "Perfect for beginners with clear and straightforward syntax"
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