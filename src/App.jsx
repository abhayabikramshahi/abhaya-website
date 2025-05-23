import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SEO from './components/SEO'

import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Abhaya from './Pages/Abhaya'
import Documentation from './Pages/Documentation'
import Gallery from './Pages/Gallery'

import { motion } from 'framer-motion'
import './App.css'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <SEO 
              title="Abhaya - Full Stack Developer"
              description="Portfolio website of Abhaya, a Full Stack Developer specializing in React, Node.js, and modern web technologies."
              keywords="Full Stack Developer, React, Node.js, JavaScript, Web Development, Portfolio"
            />
            <Navbar />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/abhaya" element={<Abhaya />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/gallery" element={<Gallery />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
