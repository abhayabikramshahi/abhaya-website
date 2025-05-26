import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function EducationalVideos() {
  const { isDarkMode } = useTheme()

  const content = [
    {
      id: 'l30_W14nE3Q',
      title: 'Computer Science Class 10 Solution for 8 Marks 16 Number - Karnali Province | Code with Abhaya',
      description: 'Computer Science Class 10 Solution for 8 Marks 16 Number - Karnali Province | Code with Abhaya'
    },
    {
      id: 'oFDL1DIRfak',
      title: 'This is how you can create Jokes generator using Python',
      description: 'This is how you can create Jokes generator using Python "Random". | Code with Abhaya.',
      textContent: 'This is how you can create Jokes generator using Python "Random". | Code with Abhaya.'
    },
    {
      id: 'aJkXSdNrSKI',
      title: 'How to make Navbar',
      description: 'How to make Navbar in "HTML CSS and JS" | Code with Abhaya',
      textContent: 'How to make Navbar in "HTML CSS and JS" | Code with Abhaya'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Educational Videos</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Watch our curated collection of educational content
          </p>
        </div>

        <div className="space-y-16">
          {content.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Video Section */}
              <div className="w-full lg:w-1/2">
                <div className={`rounded-lg overflow-hidden shadow-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <div className="relative pb-[56.25%] h-0">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${item.id}`}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Text Content Section */}
              <div className="w-full lg:w-1/2">
                <div className={`p-8 rounded-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}>
                  <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {item.textContent}
                  </p>
                  <div className="flex justify-end">
                    <a
                      href={`https://www.youtube.com/watch?v=${item.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
                        isDarkMode
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-blue-500 hover:bg-blue-600 text-white'
                      }`}
                    >
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Content Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">More Learning Resources</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Check back regularly for new educational content and tutorials.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.youtube.com/watch?v=l30_W14nE3Q"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              Subscribe to Our Channel
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 