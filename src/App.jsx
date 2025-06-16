import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import Preloader from "./components/Preloader";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Abhaya from "./Pages/Abhaya";
import Documentation from "./Pages/Documentation";
import Gallery from "./Pages/Gallery";
import Educational from "./Pages/Educational";
import PageNotFound from "./Pages/PageNotFound";
import Blogs from "./Pages/Blogs";
import Abhaya1Release from "./blogs/Abhaya Language/Abhaya1Realsease";
import AbhayaAi from './Pages/Abhaya-ai'
import CssCodeGenerator from './Pages/CssCodeGenerator'
import PasswordStrengthChecker from './Pages/PasswordStrengthChecker'
import FlirtingLine from './Pages/FlirtingLine'
import AbhayaLanguageIntro from './blog/AbhayaLanguageIntro';
import AbhayaCssFramework from './blog/AbhayaCssFramework';


import { motion, AnimatePresence } from "framer-motion";

// Page transition wrapper component
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

// Wrapper component to handle location
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
              <Route
          path="/flirting-line-generator"
          element={
            <PageTransition>
              <FlirtingLine />
            </PageTransition>
          }
        />
<Route
  path="/abhaya-1-release"
  element={
    <PageTransition>
      <Abhaya1Release />
    </PageTransition>
  }
/>

        <Route
          path="/home"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/blogs"
          element={
            <PageTransition>
              <Blogs />
            </PageTransition>
          }
        />

        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/skills"
          element={
            <PageTransition>
              <Skills />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition>
              <Projects />
            </PageTransition>
          }
        />
        <Route
          path="/abhaya"
          element={
            <PageTransition>
              <Abhaya />
            </PageTransition>
          }
        />
        <Route
          path="/documentation"
          element={
            <PageTransition>
              <Documentation />
            </PageTransition>
          }
        />
        <Route
          path="/gallery"
          element={
            <PageTransition>
              <Gallery />
            </PageTransition>
          }
        />
        <Route
          path="/educational-videos"
          element={
            <PageTransition>
              <Educational />
            </PageTransition>
          }
        />
        <Route
          path="/css-code-generator"
          element={
            <PageTransition>
              <CssCodeGenerator />
            </PageTransition>
          }
        />
        <Route
          path="/password-strength-checker"
          element={
            <PageTransition>
              <PasswordStrengthChecker />
            </PageTransition>
          }
        />

        <Route
          path="*"
          element={
            <PageTransition>
              <PageNotFound />
            </PageTransition>
          }
        />
              <Route
          path="/abhaya-ai"
          element={
            <PageTransition>
           <AbhayaAi />
            </PageTransition>
          }
        />
              <Route
          path="/abhaya-language-intro"
          element={
            <PageTransition>
              <AbhayaLanguageIntro />
            </PageTransition>
          }
        />
              <Route
          path="/abhaya-css-framework"
          element={
            <PageTransition>
              <AbhayaCssFramework />
            </PageTransition>
          }
        />
              <Route
          path="/abhaya-1-release"
          element={
            <PageTransition>
              <Abhaya1Release />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <SEO
              title="Abhaya - Full Stack Developer"
              description="Meet Abhaya Bikram Shahi, a tech entrepreneur, web/app developer, and digital creator from Nepal. Explore his modern portfolio and startup journey."
              keywords="Full Stack Developer, React, Node.js, JavaScript, Web Development, Portfolio"
            />

            <Preloader />
            <Navbar />
            <main className="pt-16">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
