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
        title="Home | Abhaya's Personal Website"
        description="Welcome to my personal website where I share my journey, projects, and experiences. Explore my work, skills, and connect with me."
        keywords="personal website, portfolio, projects, skills, experience, professional journey, personal blog"
        type="website"
        ogTitle="Abhaya's Personal Website - Portfolio & Projects"
        ogDescription="Welcome to my personal website where I share my journey, projects, and experiences. Explore my work, skills, and connect with me."
        ogImage={abhaya1}
        twitterCard="summary_large_image"
        twitterTitle="Abhaya's Personal Website - Portfolio & Projects"
        twitterDescription="Welcome to my personal website where I share my journey, projects, and experiences. Explore my work, skills, and connect with me."
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
                  Hi, I'm Abhaya
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
                  Welcome to My Digital Space
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  I'm passionate about creating meaningful experiences through technology and design. 
                  Here you'll find my journey, projects, and the stories behind them.
                </p>
                <nav aria-label="Primary navigation" className="flex flex-wrap gap-4">
                  <Link
                    to="/projects"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors duration-300"
                    aria-label="View my projects"
                  >
                    View Projects
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-black text-black hover:bg-gray-100 transition-colors duration-300"
                    aria-label="Learn more about me"
                  >
                    About Me
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
                  alt="Abhaya - Professional portrait showcasing personality and style"
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
            <h2 id="features-heading" className="text-3xl font-bold text-center mb-12">What I Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <article className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Creative Projects</h3>
                <p className="text-gray-600">
                  Exploring innovative ideas and bringing them to life through various creative endeavors.
                </p>
                <Link 
                  to="/skills" 
                  className="text-black font-medium hover:underline mt-4 inline-block"
                  aria-label="Learn more about my skills and expertise"
                >
                  Explore my skills →
                </Link>
              </article>
              <article className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Professional Work</h3>
                <p className="text-gray-600">
                  Delivering high-quality solutions and contributing to meaningful projects.
                </p>
                <Link 
                  to="/projects" 
                  className="text-black font-medium hover:underline mt-4 inline-block"
                  aria-label="View my professional projects"
                >
                  See my work →
                </Link>
              </article>
              <article className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Personal Journey</h3>
                <p className="text-gray-600">
                  Sharing experiences, insights, and stories from my professional and personal growth.
                </p>
                <Link 
                  to="/gallery" 
                  className="text-black font-medium hover:underline mt-4 inline-block"
                  aria-label="View my personal gallery and experiences"
                >
                  View gallery →
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20" aria-labelledby="cta-heading">
          <div className="container mx-auto px-6 text-center">
            <h2 id="cta-heading" className="text-3xl font-bold mb-8">Let's Connect</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Interested in working together or just want to say hello? 
              Feel free to reach out and let's start a conversation.
            </p>
            <nav aria-label="Call to action navigation" className="flex flex-wrap justify-center gap-4">
              <Link
                to="/skills"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors duration-300"
                aria-label="View my skills and expertise"
              >
                View Skills
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-black text-black hover:bg-gray-100 transition-colors duration-300"
                aria-label="Explore my gallery and experiences"
              >
                Explore Gallery
              </Link>
            </nav>
          </div>
        </section>
      </main>
    </>
  )
}
