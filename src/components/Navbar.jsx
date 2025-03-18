import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

// Create a simple Abhaya component for the name/logo
const Abhaya = () => (
  <h1 className="text-2xl font-bold text-gray-800">Abhaya</h1>
);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Abhaya /> {/* Here we use the Abhaya component */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link className="text-gray-800 hover:text-gray-500 transition" to="/">Home</Link>
          </li>
          <li>
            <Link className="text-gray-800 hover:text-gray-500 transition" to="/about">About</Link>
          </li>
          <li>
            <Link className="text-gray-800 hover:text-gray-500 transition" to="/projects">Projects</Link>
          </li>
          <li>
            <Link className="text-gray-800 hover:text-gray-500 transition" to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-lg py-4 flex flex-col items-center space-y-4">
          <li>
            <Link className="text-gray-800 hover:text-gray-500 transition" to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link className="text-gray-800 hover:text-gray-500 transition" to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link className="text-gray-800 hover:text-gray-500 transition" to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          </li>
          <li>
            <Link className="text-gray-800 hover:text-gray-500 transition" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
