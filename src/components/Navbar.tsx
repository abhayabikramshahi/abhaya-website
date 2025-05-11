// components/Navbar.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav 
        className={`bg-white text-black px-6 py-4 flex justify-between items-center fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'border-b border-gray-200'}`}
        aria-label="Main navigation"
      >
        <div className="flex items-center">
          <a href="#home" className="text-3xl font-bold text-blue-600 hover:text-blue-800 transition" aria-label="Abhaya - Home">Abhaya</a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a 
            href="#home" 
            className="text-gray-700 hover:text-blue-600 transition font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label="Go to home section"
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-gray-700 hover:text-blue-600 transition font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label="Go to about section"
          >
            About
          </a>
          <a 
            href="#projects" 
            className="text-gray-700 hover:text-blue-600 transition font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label="Go to projects section"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="text-gray-700 hover:text-blue-600 transition font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label="Go to contact section"
          >
            Contact
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} 
            />
          </svg>
        </button>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden py-2 px-4 border-t border-gray-200"
          >
            <a 
              href="#home" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
