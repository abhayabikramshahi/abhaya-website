import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: FaGithub },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: FaLinkedin },
    { name: 'Twitter', url: 'https://twitter.com', icon: FaTwitter }
  ];

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Abhaya', path: '/abhaya' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-secondary-800 shadow-md py-8 mt-16 relative"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400">Abhaya Bikram Shahi <span className='font-semibold'>( Abhaya Os)</span></h3>
              <p className="text-secondary-600 dark:text-secondary-300">
                A modern way to see Abhaya Bikram Shahi portfolio from a digital way.....
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Visit our ${link.name} page`}
                  >
                    <link.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-secondary-600 dark:text-secondary-300">
                  <EnvelopeIcon className="w-5 h-5" />
                  <a href="mailto:abhayabikramshahiofficial@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                    abhayabikramshahiofficial@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-secondary-600 dark:text-secondary-300">
                  <MapPinIcon className="w-5 h-5" />
                  <span>Kalikot, Nepal</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-secondary-200 dark:border-secondary-700 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-600 dark:text-secondary-300 mb-4 md:mb-0">
              © {currentYear} Abhaya OS. All rights reserved.
            </p>
            <p className="text-secondary-500 dark:text-secondary-400 text-sm">
              Designed with ❤️ by <span className='font-bold'>Abhaya Bikram Shahi</span>
            </p>
          </div>
        </div>
      </motion.footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 transition-colors duration-300 z-50"
            aria-label="Back to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUpIcon className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}