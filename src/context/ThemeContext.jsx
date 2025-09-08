import { createContext, useContext } from 'react'

const ThemeContext = createContext()

const lightTheme = {
  name: 'light',
  background: 'bg-white',           // pure white background
  text: 'text-black',               // strong black text
  primary: 'text-black',
  secondary: 'text-gray-600',       // medium gray secondary text
  accent: 'bg-black/10',            // translucent black accent (glass effect)
  border: 'border-gray-300',        // light gray border
  hover: 'hover:bg-black/10',       // subtle black hover overlay
  shadow: 'shadow-gray-400',        // soft gray shadow
  button: 'bg-black/10 text-black hover:bg-black/20', // translucent light button
}

export function ThemeProvider({ children }) {
  const getThemeColors = () => lightTheme

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
