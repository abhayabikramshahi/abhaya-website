import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  // Only show preloader on home page routes
  const isHomePage = location.pathname === '/' || location.pathname === '/home'

  useEffect(() => {
    if (isHomePage) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 2300) // 2.3 seconds loading time

      return () => clearTimeout(timer)
    } else {
      setIsLoading(false)
    }
  }, [location.pathname, isHomePage])

  if (!isLoading || !isHomePage) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[99] flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <div className="text-center">
        <motion.div
          className="relative w-20 h-20 mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Facebook-like logo */}
          <motion.div
            className="absolute inset-0 bg-blue-600 rounded-lg"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 2.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            A
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-2"
        >
          <motion.h2
            className="text-2xl font-bold text-black dark:text-white"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Powered by
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
          >
            Abhaya
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Preloader 