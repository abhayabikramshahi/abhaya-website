import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowDownIcon, 
  CodeBracketIcon, 
  LanguageIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  SparklesIcon,
  CommandLineIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline'
import SEO from '../components/SEO'
import abhaya1 from '../images/abhaya1.jpg'

export default function Home() {
  return (
    <>
      <SEO 
        title="Home | Abhaya Programming Language"
        description="Abhaya is a cutting-edge programming language designed for modern software development. Experience the perfect blend of simplicity and power with our innovative syntax, comprehensive tooling, and active developer community. Start your journey with Abhaya today."
        keywords="programming language, Abhaya, modern programming, efficient coding, software development, developer tools, programming language features, coding efficiency, developer community"
        type="website"
      />
      
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Welcome to Abhaya
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
                Exploring the Future of Programming Languages
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Discover the innovative world of Abhaya, a modern programming language designed for simplicity and power. 
                Join us in revolutionizing the way we code.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors duration-300"
                >
                  Get Started
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-black text-black hover:bg-gray-100 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[500px]"
            >
              <img
                src={abhaya1}
                alt="Abhaya Programming Language"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Abhaya?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Simple Syntax</h3>
              <p className="text-gray-600">
                Easy to learn and use, with a clean and intuitive syntax that makes coding a pleasure.
              </p>
              <Link to="/skills" className="text-black font-medium hover:underline mt-4 inline-block">
                Learn more about our features →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Powerful Features</h3>
              <p className="text-gray-600">
                Built with modern programming paradigms and powerful tools for complex applications.
              </p>
              <Link to="/projects" className="text-black font-medium hover:underline mt-4 inline-block">
                See our projects →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Active Community</h3>
              <p className="text-gray-600">
                Join a growing community of developers and contribute to the future of programming.
              </p>
              <Link to="/gallery" className="text-black font-medium hover:underline mt-4 inline-block">
                View our community →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community and start exploring the possibilities with Abhaya. 
            Check out our documentation and start coding today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/skills"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors duration-300"
            >
              View Documentation
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-black text-black hover:bg-gray-100 transition-colors duration-300"
            >
              Explore Examples
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
