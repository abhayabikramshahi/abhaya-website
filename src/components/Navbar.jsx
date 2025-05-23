import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HomeIcon, 
  CodeBracketIcon, 
  BriefcaseIcon, 
  UserIcon,
  LanguageIcon,
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const sections = [
  { id: 'home', icon: HomeIcon, label: 'Home', path: '/' },
  { id: 'about', icon: UserIcon, label: 'About', path: '/about' },
  { id: 'skills', icon: CodeBracketIcon, label: 'Skills', path: '/skills' },
  { id: 'projects', icon: BriefcaseIcon, label: 'Projects', path: '/projects' },
  { id: 'abhaya', icon: LanguageIcon, label: 'Abhaya Language', path: '/abhaya' },
]

export default function Navbar() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isDarkMode, toggleTheme: switchTheme } = useTheme()

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
        className="fixed top-0 left-0 right-0 bg-white dark:bg-secondary-800 shadow-lg z-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              Abhaya
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  to={section.path}
                  className={`group relative flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(section.path)
                      ? 'text-secondary-900 dark:text-secondary-900'
                      : 'text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                  aria-current={isActive(section.path) ? 'page' : undefined}
                >
                  {isActive(section.path) && (
                    <motion.div
                      layoutId="activeNavItem"
                      className="absolute inset-0 bg-white dark:bg-white rounded-lg shadow-sm"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <section.icon className={`w-5 h-5 mr-2 relative z-10 ${
                    isActive(section.path) ? 'text-secondary-900' : 'text-current'
                  }`} aria-hidden="true" />
                  <span className="relative z-10 font-medium">{section.label}</span>
                </Link>
              ))}
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={switchTheme}
                className="p-2 rounded-lg text-secondary-600 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-secondary-700"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDarkMode ? 'sun' : 'moon'}
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isDarkMode ? (
                      <SunIcon className="w-6 h-6" />
                    ) : (
                      <MoonIcon className="w-6 h-6" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg text-secondary-600 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-secondary-700"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
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
            className="fixed top-16 left-0 right-0 bg-white dark:bg-secondary-800 shadow-lg z-40 md:hidden"
          >
            <div className="container mx-auto px-4 py-2">
              <div className="flex flex-col space-y-1">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    to={section.path}
                    className={`group relative flex items-center px-4 py-3 rounded-lg ${
                      isActive(section.path)
                        ? 'text-secondary-900 dark:text-secondary-900'
                        : 'text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={isActive(section.path) ? 'page' : undefined}
                  >
                    {isActive(section.path) && (
                      <motion.div
                        layoutId="activeMobileNavItem"
                        className="absolute inset-0 bg-white dark:bg-white rounded-lg shadow-sm"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <section.icon className={`w-5 h-5 mr-3 relative z-10 ${
                      isActive(section.path) ? 'text-secondary-900' : 'text-current'
                    }`} aria-hidden="true" />
                    <span className="relative z-10 font-medium">{section.label}</span>
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
