import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const NotFound = () => {
  const { themeColors } = useTheme()
  const mountRef = useRef(null)

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(200, 200)
    mountRef.current.appendChild(renderer.domElement)

    // Create cube
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshPhongMaterial({
      color: themeColors.primary.replace('bg-', ''),
      transparent: true,
      opacity: 0.8,
      shininess: 100
    })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)
    
    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    camera.position.z = 3

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      
      renderer.render(scene, camera)
    }
    animate()

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [themeColors.primary])

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 ${themeColors.background}`}>
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div ref={mountRef} className="mb-8" />
          <h1 className={`text-9xl font-bold mb-4 ${themeColors.text}`}>404</h1>
          <h2 className={`text-3xl font-semibold mb-6 ${themeColors.text}`}>Page Not Found</h2>
          <p className={`text-lg mb-8 ${themeColors.textSecondary}`}>
            Oops! The page you're looking for seems to have vanished into thin air.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className={`inline-block px-8 py-3 rounded-lg text-white font-medium transition-colors duration-200 ${themeColors.primary} hover:${themeColors.primaryHover}`}
            >
              Return Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound 