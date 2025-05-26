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
        description="Learn more about my journey as a successful entrepreneur, owner of 6 companies, and business leader."
        keywords="about me, entrepreneur, business owner, company founder, business leader, technology entrepreneur"
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
            Successful Entrepreneur & Business Leader with a portfolio of 6 thriving companies
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
                At 15 years old, I am a successful entrepreneur and business leader with a portfolio of 6 thriving companies. 
                My journey combines business acumen with technological innovation, leading to the creation and successful 
                management of multiple ventures across various industries. I've demonstrated exceptional leadership and 
                strategic thinking in building and scaling these businesses.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                  <BuildingOfficeIcon className="w-6 h-6 text-black dark:text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-black dark:text-white">Business Portfolio</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white">Mountain Driftz</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Fashion & Retail</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    A premium clothing brand that has successfully established its presence in the Nepali market, 
                    combining traditional aesthetics with modern fashion trends.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white">Abhaya Infoys</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Technology Solutions</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Leading provider of innovative technology solutions and digital transformation services.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white">Digital Yaklabs</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Digital Innovation</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Pioneering digital solutions and cutting-edge technology development.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white">Create Crafters Groups</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Creative Solutions</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    A conglomerate of creative businesses focused on innovative solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white">Nepal Coding House</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Education & Training</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Premier coding education and professional training institution.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Business Achievements & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                  <RocketLaunchIcon className="w-6 h-6 text-black dark:text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-black dark:text-white">Business Achievements</h2>
              </div>
              <div className="space-y-4">
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Successfully established and scaled 6 diverse companies</li>
                  <li>Created numerous employment opportunities in the local market</li>
                  <li>Implemented innovative business strategies across multiple industries</li>
                  <li>Built strong brand presence in the Nepali market</li>
                  <li>Demonstrated exceptional leadership in managing multiple ventures</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                  <HeartIcon className="w-6 h-6 text-black dark:text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-black dark:text-white">Vision & Mission</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  My vision is to transform Nepal's business landscape through innovation and entrepreneurship. 
                  I am committed to:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Expanding business operations across South Asia</li>
                  <li>Creating more employment opportunities</li>
                  <li>Promoting innovation in traditional industries</li>
                  <li>Mentoring young entrepreneurs</li>
                  <li>Contributing to Nepal's economic growth</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                  <BookOpenIcon className="w-6 h-6 text-black dark:text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-black dark:text-white">Education & Growth</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white">Badimalika Secondary School</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Current - Class 10 (SEE)</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Balancing academic excellence with entrepreneurial responsibilities
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white">Continuous Learning</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Actively pursuing business education and staying updated with global market trends while 
                    managing multiple companies
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
