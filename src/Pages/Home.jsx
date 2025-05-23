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
        description="Discover Abhaya, a modern programming language that combines simplicity with power. Perfect for developers seeking efficient coding with innovative syntax and comprehensive tools."
        keywords="programming language, Abhaya, modern programming, efficient coding, software development, developer tools, programming language features, coding efficiency, developer community"
        type="website"
        ogTitle="Abhaya Programming Language - Modern, Efficient, Powerful"
        ogDescription="Discover Abhaya, a modern programming language that combines simplicity with power. Perfect for developers seeking efficient coding with innovative syntax and comprehensive tools."
        ogImage={abhaya1}
        twitterCard="summary_large_image"
        twitterTitle="Abhaya Programming Language - Modern, Efficient, Powerful"
        twitterDescription="Discover Abhaya, a modern programming language that combines simplicity with power. Perfect for developers seeking efficient coding with innovative syntax and comprehensive tools."
        twitterImage={abhaya1}
      />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20" aria-labelledby="hero-heading">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-left"
              >
                <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Welcome to Abhaya
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
                  Exploring the Future of Programming Languages
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Discover the innovative world of Abhaya, a modern programming language designed for simplicity and power. 
                  Join us in revolutionizing the way we code.
                </p>
                <nav aria-label="Primary navigation" className="flex flex-wrap gap-4">
                  <Link
                    to="/projects"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors duration-300"
                    aria-label="Get started with Abhaya projects"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-black text-black hover:bg-gray-100 transition-colors duration-300"
                    aria-label="Learn more about Abhaya"
                  >
                    Learn More
                  </Link>
                </nav>
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
                  alt="Abhaya Programming Language - Modern development environment showcasing clean syntax and powerful features"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                  loading="eager"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50" aria-labelledby="features-heading">
          <div className="container mx-auto px-6">
            <h2 id="features-heading" className="text-3xl font-bold text-center mb-12">Why Choose Abhaya?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <article className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Simple Syntax</h3>
                <p className="text-gray-600">
                  Easy to learn and use, with a clean and intuitive syntax that makes coding a pleasure.
                </p>
                <Link 
                  to="/skills" 
                  className="text-black font-medium hover:underline mt-4 inline-block"
                  aria-label="Learn more about Abhaya's features and capabilities"
                >
                  Learn more about our features →
                </Link>
              </article>
              <article className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Powerful Features</h3>
                <p className="text-gray-600">
                  Built with modern programming paradigms and powerful tools for complex applications.
                </p>
                <Link 
                  to="/projects" 
                  className="text-black font-medium hover:underline mt-4 inline-block"
                  aria-label="Explore Abhaya projects and examples"
                >
                  See our projects →
                </Link>
              </article>
              <article className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Active Community</h3>
                <p className="text-gray-600">
                  Join a growing community of developers and contribute to the future of programming.
                </p>
                <Link 
                  to="/gallery" 
                  className="text-black font-medium hover:underline mt-4 inline-block"
                  aria-label="View Abhaya community gallery and contributions"
                >
                  View our community →
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20" aria-labelledby="cta-heading">
          <div className="container mx-auto px-6 text-center">
            <h2 id="cta-heading" className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our community and start exploring the possibilities with Abhaya. 
              Check out our documentation and start coding today.
            </p>
            <nav aria-label="Call to action navigation" className="flex flex-wrap justify-center gap-4">
              <Link
                to="/skills"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors duration-300"
                aria-label="View Abhaya documentation and guides"
              >
                View Documentation
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-black text-black hover:bg-gray-100 transition-colors duration-300"
                aria-label="Explore Abhaya code examples and use cases"
              >
                Explore Examples
              </Link>
            </nav>
          </div>
        </section>
      </main>
    </>
  )
}
