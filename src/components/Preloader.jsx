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
      }, 2000) // 2 seconds loading time

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
      className="fixed inset-0 z-[99] flex items-center justify-center bg-white"
    >
      <div className="text-center">
        <motion.div
          className="relative w-24 h-24 mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated border */}
          <motion.div
            className="absolute inset-0 border-4 border-black rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Inner circle */}
          <motion.div
            className="absolute inset-4 border-4 border-black rounded-full"
            animate={{
              scale: [1, 0.9, 1],
              rotate: [0, -360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Center dot */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-4 h-4 bg-black rounded-full" />
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-2"
        >
          <motion.h2
            className="text-2xl font-bold text-black"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Loading
          </motion.h2>
          <motion.div
            className="flex justify-center space-x-1"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-black rounded-full"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Preloader 