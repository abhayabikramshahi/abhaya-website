import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

const themes = {
  light: {
    name: 'light',
    background: 'bg-white',
    text: 'text-gray-900',
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
    accent: 'bg-gray-50',
    border: 'border-gray-200',
    hover: 'hover:bg-gray-50',
    shadow: 'shadow-gray-200',
    button: 'bg-gray-900 text-white hover:bg-gray-800',
  },
  dark: {
    name: 'dark',
    background: 'bg-gray-900',
    text: 'text-white',
    primary: 'text-white',
    secondary: 'text-gray-300',
    accent: 'bg-gray-800',
    border: 'border-gray-700',
    hover: 'hover:bg-gray-800',
    shadow: 'shadow-gray-900',
    button: 'bg-white text-gray-900 hover:bg-gray-100',
  },
  black: {
    name: 'black',
    background: 'bg-black',
    text: 'text-white',
    primary: 'text-white',
    secondary: 'text-gray-400',
    accent: 'bg-gray-900',
    border: 'border-gray-800',
    hover: 'hover:bg-gray-900',
    shadow: 'shadow-black',
    button: 'bg-white text-black hover:bg-gray-100',
  }
}

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return savedTheme || (prefersDark ? 'dark' : 'light')
  })

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem('theme', currentTheme)
    
    // Add transition class to body
    document.body.classList.add('transition-all', 'duration-500')
    
    // Update document class for Tailwind dark mode
    document.documentElement.classList.toggle('dark', currentTheme === 'dark' || currentTheme === 'black')
    
    // Remove transition class after animation
    const timer = setTimeout(() => {
      document.body.classList.remove('transition-all', 'duration-500')
    }, 500)
    
    return () => clearTimeout(timer)
  }, [currentTheme])

  const toggleTheme = () => {
    setCurrentTheme(prev => {
      switch (prev) {
        case 'light':
          return 'dark'
        case 'dark':
          return 'black'
        case 'black':
          return 'light'
        default:
          return 'light'
      }
    })
  }

  const getThemeColors = () => {
    return themes[currentTheme]
  }

  return (
    <ThemeContext.Provider value={{ 
      currentTheme, 
      toggleTheme, 
      getThemeColors,
      isDarkMode: currentTheme === 'dark' || currentTheme === 'black'
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 