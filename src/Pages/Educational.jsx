import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { PlayIcon } from '@heroicons/react/24/solid'

export default function EducationalVideos() {
  const { isDarkMode } = useTheme()

  const content = [
    {
      id: 'l30_W14nE3Q',
      title: 'Computer Science Class 10 Solution for 8 Marks 16 Number - Karnali Province | Code with Abhaya',
      description: 'Computer Science Class 10 Solution for 8 Marks 16 Number - Karnali Province | Code with Abhaya',
      thumbnail: `https://img.youtube.com/vi/l30_W14nE3Q/maxresdefault.jpg`,
      duration: '15:30'
    },
    {
      id: 'oFDL1DIRfak',
      title: 'This is how you can create Jokes generator using Python',
      description: 'This is how you can create Jokes generator using Python "Random". | Code with Abhaya.',
      thumbnail: `https://img.youtube.com/vi/oFDL1DIRfak/maxresdefault.jpg`,
      duration: '10:45'
    },
    {
      id: 'aJkXSdNrSKI',
      title: 'How to make Navbar',
      description: 'How to make Navbar in "HTML CSS and JS" | Code with Abhaya',
      thumbnail: `https://img.youtube.com/vi/aJkXSdNrSKI/maxresdefault.jpg`,
      duration: '12:15'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              {/* Video Thumbnail with Play Button */}
              <div className="relative aspect-video">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <PlayIcon className="w-16 h-16 text-white" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {item.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  
                  <a
                    href={`https://www.youtube.com/watch?v=${item.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                      isDarkMode
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    Watch Now
                  </a>
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