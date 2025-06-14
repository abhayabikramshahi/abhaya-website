import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const sections = [
  { id: 'home', label: 'Home', path: '/', description: 'Go to homepage' },
  { id: 'about', label: 'About Me', path: '/about', description: 'Learn more about me and my background' },
    { id: 'tool', label: 'Tool', path: '/abhaya-ai', description: 'Access Abhaya AI tools' },
  { id: 'skills', label: 'Technical Skills', path: '/skills', description: 'View my technical expertise and capabilities' },
  { id: 'projects', label: 'My Projects', path: '/projects', description: 'Explore my portfolio of projects' },
  { id: 'abhaya', label: 'Abhaya Language', path: '/abhaya', description: 'Learn about the Abhaya programming language' },
  { id: 'blogs', label: 'Blogs', path: '/blogs', description: 'Read my blog posts' }
]

export default function Navbar() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { getThemeColors } = useTheme()
  const themeColors = getThemeColors()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const isActive = (path) => {
    if (path === '/') return location.pathname === path
    return location.pathname.startsWith(path)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/30 dark:bg-black/30 border-b border-white/20 shadow-md`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`text-2xl font-bold ${themeColors.text} hover:opacity-80 transition-opacity duration-300`}
              aria-label="Abhaya - Home"
            >
              Abhaya <span className='text-[#087EA4]'>(OS)</span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center ml-auto">
              <div className="flex items-center space-x-4">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    to={section.path}
                    className={`group relative flex items-center px-2 py-2 rounded-lg transition-all duration-300 ${
                      isActive(section.path)
                        ? `${themeColors.text} font-medium`
                        : `${themeColors.secondary} hover:${themeColors.text}`
                    }`}
                    aria-current={isActive(section.path) ? 'page' : undefined}
                    aria-label={section.description}
                    title={section.description}
                  >
                    {isActive(section.path) && (
                      <motion.div
                        layoutId="activeNavItem"
                        className={`absolute inset-0 ${themeColors.accent} rounded-lg`}
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 whitespace-nowrap">{section.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMobileMenu}
                className={`md:hidden p-2 rounded-lg ${themeColors.button} transition-colors duration-300`}
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
            className={`fixed top-20 left-0 right-0 z-40 md:hidden backdrop-blur-lg bg-white/30 dark:bg-black/30 border-b border-white/20 shadow-lg`}
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container mx-auto px-4 py-2">
              <div className="flex flex-col space-y-2">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    to={section.path}
                    className={`group relative flex items-center px-4 py-3 rounded-lg ${
                      isActive(section.path)
                        ? `${themeColors.text} font-medium ${themeColors.accent}`
                        : `${themeColors.secondary} hover:${themeColors.text} ${themeColors.hover}`
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={isActive(section.path) ? 'page' : undefined}
                    aria-label={section.description}
                    title={section.description}
                  >
                    {isActive(section.path) && (
                      <motion.div
                        layoutId="activeMobileNavItem"
                        className={`absolute inset-0 ${themeColors.accent} rounded-lg`}
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
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
