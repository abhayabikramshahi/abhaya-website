import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HomeIcon, 
  CodeBracketIcon, 
  BriefcaseIcon, 
  UserIcon,
  LanguageIcon,
  Bars3Icon,
  XMarkIcon,
  PhotoIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const sections = [
  { 
    id: 'home', 
    icon: HomeIcon, 
    label: 'Home', 
    path: '/',
    description: 'Go to homepage'
  },
  { 
    id: 'about', 
    icon: UserIcon, 
    label: 'About Me', 
    path: '/about',
    description: 'Learn more about me and my background'
  },
  { 
    id: 'skills', 
    icon: CodeBracketIcon, 
    label: 'Technical Skills', 
    path: '/skills',
    description: 'View my technical expertise and capabilities'
  },
  { 
    id: 'projects', 
    icon: BriefcaseIcon, 
    label: 'My Projects', 
    path: '/projects',
    description: 'Explore my portfolio of projects'
  },
  { 
    id: 'gallery', 
    icon: PhotoIcon, 
    label: 'Photo Gallery', 
    path: '/gallery',
    description: 'Browse through my work gallery'
  },
  { 
    id: 'linkedin', 
    icon: LanguageIcon, 
    label: 'LinkedIn Feed', 
    path: '/linkedin',
    description: 'View my latest LinkedIn updates'
  },
  { 
    id: 'abhaya', 
    icon: LanguageIcon, 
    label: 'Abhaya Language', 
    path: '/abhaya',
    description: 'Learn about the Abhaya programming language'
  },
]

export default function Navbar() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isDarkMode } = useTheme()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === path
    }
    return location.pathname.startsWith(path)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 bg-white shadow-md z-50"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-2xl font-bold text-black hover:text-gray-700 transition-colors duration-300"
              aria-label="Abhaya - Home"
            >
              Abhaya (OS)
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center ml-auto">
              <div className="flex items-center space-x-6">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    to={section.path}
                    className={`group relative flex items-center px-2 py-2 rounded-lg transition-all duration-300 ${
                      isActive(section.path)
                        ? 'text-black font-medium'
                        : 'text-gray-600 hover:text-black'
                    }`}
                    aria-current={isActive(section.path) ? 'page' : undefined}
                    aria-label={section.description}
                    title={section.description}
                  >
                    {isActive(section.path) && (
                      <motion.div
                        layoutId="activeNavItem"
                        className="absolute inset-0 bg-gray-100 rounded-lg"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <section.icon 
                      className={`w-5 h-5 mr-2 relative z-10 ${
                        isActive(section.path) ? 'text-black' : 'text-current'
                      }`} 
                      aria-hidden="true"
                    />
                    <span className="relative z-10 whitespace-nowrap">{section.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center ml-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg text-gray-600 hover:text-black hover:bg-gray-100 transition-colors duration-300"
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 bg-white shadow-lg z-40 md:hidden"
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container mx-auto px-4 py-2">
              <div className="flex flex-col space-y-1">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    to={section.path}
                    className={`group relative flex items-center px-4 py-3 rounded-lg ${
                      isActive(section.path)
                        ? 'text-black font-medium bg-gray-100'
                        : 'text-gray-600 hover:text-black hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={isActive(section.path) ? 'page' : undefined}
                    aria-label={section.description}
                    title={section.description}
                  >
                    {isActive(section.path) && (
                      <motion.div
                        layoutId="activeMobileNavItem"
                        className="absolute inset-0 bg-gray-100 rounded-lg"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <section.icon 
                      className={`w-5 h-5 mr-3 relative z-10 ${
                        isActive(section.path) ? 'text-black' : 'text-current'
                      }`} 
                      aria-hidden="true"
                    />
                    <span className="relative z-10">{section.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
