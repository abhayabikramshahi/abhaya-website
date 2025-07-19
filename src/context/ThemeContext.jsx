import { createContext, useContext } from 'react'

const ThemeContext = createContext()

const theme = {
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
}

export function ThemeProvider({ children }) {
  const getThemeColors = () => {
    return theme
  }

  return (
    <ThemeContext.Provider value={{ 
      currentTheme: 'light',
      getThemeColors,
      isDarkMode: false
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