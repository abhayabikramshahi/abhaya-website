import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react"; // Added FileText icon for resume

// Create a simple Abhaya component for the name/logo
const Abhaya = () => (
  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-pink-600 hover:to-purple-600 transition-all duration-300 cursor-pointer">
    Abhaya
  </h1>
);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-white/60 shadow-lg transition-all duration-300 border-b border-purple-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Abhaya />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              <li>
                <Link 
                  className="text-gray-700 hover:text-purple-600 transition-all duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300" 
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  className="text-gray-700 hover:text-purple-600 transition-all duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300" 
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  className="text-gray-700 hover:text-purple-600 transition-all duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300" 
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  className="text-gray-700 hover:text-purple-600 transition-all duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300" 
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            
            {/* Resume Button */}
            <a
              href="https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID"
              download="Abhaya_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-300 group"
            >
              <FileText size={18} className="group-hover:animate-bounce" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 hover:text-purple-600 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li>
              <Link 
                className="text-gray-700 hover:text-purple-600 transition-all duration-200" 
                to="/" 
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                className="text-gray-700 hover:text-purple-600 transition-all duration-200" 
                to="/about" 
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                className="text-gray-700 hover:text-purple-600 transition-all duration-200" 
                to="/projects" 
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                className="text-gray-700 hover:text-purple-600 transition-all duration-200" 
                to="/contact" 
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            {/* Mobile Resume Button */}
            <li>
              <a
                href="https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID"
                download="Abhaya_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-300 group"
                onClick={() => setIsOpen(false)}
              >
                <FileText size={18} className="group-hover:animate-bounce" />
                <span>Download CV</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
