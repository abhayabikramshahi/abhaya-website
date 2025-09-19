import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  // Show only on homepage
  const isHomePage = location.pathname === "/" || location.pathname === "/home"

  useEffect(() => {
    if (isHomePage) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 2000) // sync with progress bar timing

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
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white text-gray-900"
    >
      {/* Loader Circle */}
      <motion.div
        className="relative w-20 h-20 mb-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Outer ring (soft gray) */}
        <motion.div
          className="absolute inset-0 border-4 border-gray-300 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
        {/* Inner accent ring (brand red) */}
        <motion.div
          className="absolute inset-2 border-4 border-red-500 rounded-full border-t-transparent"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="text-center mb-4"
      >
        <h2 className="text-xl font-semibold tracking-wide">Loading</h2>
        <p className="mt-1 text-sm text-gray-500">Please wait a moment...</p>
      </motion.div>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-red-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  )
}

export default Preloader
