// Navbar.jsx
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const sections = [
  { id: 'home', label: 'Home', path: '/', description: 'Go to homepage' },
  { id: 'about', label: 'About Me', path: '/about', description: 'Learn more about me and my background' },
  { id: 'tool', label: 'Tool', path: '/abhaya-ai', description: 'Access Abhaya AI tools' },
  { id: 'skills', label: 'Technical Skills', path: '/skills', description: 'View my technical expertise and capabilities' },
  // { id: 'projects', label: 'My Projects', path: '/projects', description: 'Explore my portfolio of projects' },
  { id: 'abhaya', label: 'Abhaya Language', path: '/abhaya', description: 'Learn about the Abhaya programming language' },
  { id: 'blogs', label: 'Blogs', path: '/blogs', description: 'Read my blog posts' }
]

export default function Navbar() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const isActive = (path) => {
    if (path === '/') return location.pathname === path;
    return location.pathname === path;
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white border-b border-gray-200 shadow"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="text-2xl font-extrabold font-sans tracking-tight text-black hover:opacity-80 transition-opacity duration-300 select-none"
              aria-label="Abhaya - Home"
            >
              Abhaya <span className="text-[#087EA4] font-semibold">(OS)</span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center ml-auto">
              <div className="flex items-center space-x-4">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    to={section.path}
                    onClick={closeMobileMenu}
                    className={`group relative flex items-center px-2 py-1 select-none transition-colors duration-300
                      ${
                        isActive(section.path)
                          ? 'text-gray-600 font-semibold tracking-wide uppercase text-sm'
                          : 'text-gray-600 hover:text-gray-600 hover:bg-gray-100 font-medium tracking-wide uppercase text-sm'
                      }`}
                    aria-current={isActive(section.path) ? 'page' : undefined}
                    aria-label={section.description}
                    title={section.description}
                  >
                    <span className="relative z-10 leading-5">
                      {section.label}
                      <span
                        className={`absolute left-0 -bottom-0.5 w-full h-0.5 rounded bg-red-600 transition-all duration-300 origin-left
                          ${isActive(section.path) ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}
                        style={{ pointerEvents: 'none' }}
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-600"
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
            className="fixed top-16 left-0 right-0 z-40 md:hidden backdrop-blur-xl bg-white/95 border-b border-gray-200 shadow"
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col space-y-2">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    to={section.path}
                    onClick={closeMobileMenu}
                    className={`group relative flex items-center px-3 py-2 select-none text-sm transition-colors duration-300
                      ${
                        isActive(section.path)
                          ? 'text-red-600 font-semibold tracking-wide uppercase'
                          : 'text-gray-600 hover:text-red-600 hover:bg-gray-100 font-medium tracking-wide uppercase'
                      }`}
                    aria-current={isActive(section.path) ? 'page' : undefined}
                    aria-label={section.description}
                    title={section.description}
                  >
                    <span className="relative z-10 leading-5">
                      {section.label}
                      <span
                        className={`absolute left-0 -bottom-0.5 w-full h-0.5 rounded bg-red-600 transition-all duration-300 origin-left
                          ${isActive(section.path) ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}
                        style={{ pointerEvents: 'none' }}
                      />
                    </span>
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
