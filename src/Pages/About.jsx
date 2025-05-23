import { motion } from 'framer-motion'
import { 
  UserIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  BuildingOfficeIcon,
  RocketLaunchIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline'
import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO 
        title="About Me"
        description="Learn more about my journey, expertise, and passion for technology and software development."
        keywords="about me, software developer, full stack developer, technology enthusiast, entrepreneur"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Young Full Stack Developer & Entrepreneur passionate about creating innovative solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Personal Info & Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                  <UserIcon className="w-6 h-6 text-black dark:text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-black dark:text-white">Who I Am</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                At 15 years old, I am a full-stack developer and entrepreneur with a passion for creating innovative solutions. 
                My journey combines technical expertise with entrepreneurial spirit, leading to the creation 
                of multiple successful ventures in technology and digital services.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                  <BookOpenIcon className="w-6 h-6 text-black dark:text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-black dark:text-white">Education Journey</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white">Badimalika Secondary School</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Current - Class 10 (SEE)</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Currently pursuing my secondary education while actively contributing to the school's digital transformation
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white">Nava Prabhat English Boarding School</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Classes 5-6</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Completed middle school education with a focus on English language and general studies
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white">New Light Education Home</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Nursery to Class 4</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Started my educational journey with foundational learning and early development
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                  <BriefcaseIcon className="w-6 h-6 text-black dark:text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-black dark:text-white">Professional Experience</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white">Web & App Developer — Saga Service</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Jan 2024 – Present</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Leading front-end and back-end development using modern stacks (React, Node.js, Firebase)</li>
                    <li>Designing and developing dynamic, user-focused websites and mobile apps</li>
                    <li>Collaborating with UI/UX designers for clean, responsive interfaces</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white">Tech Developer — Badimalika Secondary School</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Oct 2023 – Present</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Developed official school website and integrated digital results system</li>
                    <li>Implemented JSON-based data management for class-wise results</li>
                    <li>Led school's digital transformation initiative</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Entrepreneurship & Goals */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                  <BuildingOfficeIcon className="w-6 h-6 text-black dark:text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-black dark:text-white">Entrepreneurial Ventures</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white">Founder — Mountain Driftz</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Nov 2024 – Present</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Founded and built an online presence for a Nepali-based clothing brand, creating a sleek 
                    e-commerce interface using modern web technologies to promote local fashion.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white">Other Ventures</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Abhaya Infoys</li>
                    <li>Digital Yaklabs</li>
                    <li>Create Crafting Groups</li>
                    <li>Nepal Coding House Limited</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                  <RocketLaunchIcon className="w-6 h-6 text-black dark:text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-black dark:text-white">Goals & Aspirations</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Despite my young age, I am constantly striving to improve my skills and knowledge in the ever-evolving field of technology. 
                  My goals include:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Expanding my entrepreneurial ventures in technology</li>
                  <li>Contributing to Nepal's tech ecosystem</li>
                  <li>Creating innovative solutions for local businesses</li>
                  <li>Mentoring aspiring developers and entrepreneurs</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Personal Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
              <HeartIcon className="w-6 h-6 text-black dark:text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-black dark:text-white">Personal Interests</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Beyond coding and entrepreneurship, I am passionate about contributing to Nepal's growing tech community. 
            I enjoy exploring new technologies, participating in tech communities, and staying updated with the latest 
            industry trends. My focus is on creating solutions that make a positive impact in the local context while 
            maintaining global standards, all while balancing my academic responsibilities.
          </p>
        </motion.div>
      </motion.div>
    </>
  )
}
