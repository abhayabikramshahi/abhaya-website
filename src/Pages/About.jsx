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

export const companiesOwned = [
  'Mountain Driftz',
  'Abhaya Infoys',
  'Digital Yaklabs',
  'Create Crafters Groups',
  'Nepal Coding House'
];

export default function About() {
  return (
    <>
      <SEO 
        title="About Me"
        description="Learn more about my journey as a successful entrepreneur, owner of 6 companies (Mountain Driftz, Abhaya Infoys, Digital Yak Labs, Create Crafters Group Of Nepal, Nepal Coding House Private Limited, Abhaya Solutions), and business leader. Discover all companies owned by Abhaya Bikram Shahi."
        keywords="about me, entrepreneur, business owner, company founder, business leader, technology entrepreneur, Mountain Driftz, Abhaya Infoys, Digital Yaklabs, Create Crafters Group Of Nepal, Nepal Coding House Private Limited, Abhaya Solutions, companies owned by Abhaya Bikram Shahi"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            About Me
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
            Here’s a deeper dive into who I am, what I’ve built, and where I’m heading in this exciting entrepreneurial journey.
          </p>
          <p className="mt-2 text-md text-gray-600 dark:text-gray-400">
            Get inspired, get to know me — and maybe even join the mission 🚀
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Personal Info & Portfolio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Who I Am */}
            <Card title="Who I Am" icon={<UserIcon className="w-6 h-6" />}>
              <p>
                At 15 years old, I am a successful entrepreneur and business leader with a portfolio of 6 thriving companies. 
                My journey combines business acumen with technological innovation — I’ve shown leadership, vision, and hustle.
              </p>
            </Card>

            {/* Business Portfolio */}
            <Card title="Business Portfolio" icon={<BuildingOfficeIcon className="w-6 h-6" />}>
              {[
                {
                  name: 'Mountain Driftz',
                  industry: 'Fashion & Retail',
                  desc: 'A premium clothing brand blending Nepali traditions with modern fashion trends.'
                },
                {
                  name: 'Abhaya Infoys',
                  industry: 'Technology Solutions',
                  desc: 'Providing cutting-edge digital transformation services and tech support.'
                },
                {
                  name: 'Digital Yak Labs',
                  industry: 'Digital Innovation',
                  desc: 'Building the future with AI, apps, and digital ecosystems.'
                },
                {
                  name: 'Create Crafters Group Of Company',
                  industry: 'Creative Solutions',
                  desc: 'A collective of creativity-first businesses delivering unique value.'
                },
                {
                  name: 'Nepal Coding House Private Limited',
                  industry: 'Education & Training',
                  desc: 'Coding education hub growing the next-gen devs of Nepal.'
                },
                {
                  name: 'Abhaya Solutions',
                  industry: 'Consulting & Strategy',
                  desc: 'Helping businesses innovate and scale with strategic insights.'
                }
              ].map((biz, i) => (
                <div key={i} className="mb-4">
                  <h3 className="text-lg font-semibold">{biz.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{biz.industry}</p>
                  <p className="text-gray-600 dark:text-gray-300">{biz.desc}</p>
                </div>
              ))}
            </Card>
          </motion.div>

          {/* Right Column - Achievements & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-10"
          >
            {/* Business Achievements */}
            <Card title="Business Achievements" icon={<RocketLaunchIcon className="w-6 h-6" />}>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Built and scaled 6 companies before turning 16</li>
                <li>Generated jobs and uplifted the local economy</li>
                <li>Applied innovative strategies in real-world industries</li>
                <li>Created recognizable brand value in Nepal</li>
                <li>Balanced school, startups, and sanity 😅</li>
              </ul>
            </Card>

            {/* Vision & Mission */}
            <Card title="Vision & Mission" icon={<HeartIcon className="w-6 h-6" />}>
              <p className="mb-3">
                My mission is to spark change, empower youth, and reshape Nepal’s future through technology, innovation, and leadership.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Expand into South Asia</li>
                <li>Create 1,000+ jobs by 2030</li>
                <li>Promote innovation in traditional sectors</li>
                <li>Mentor rising young founders</li>
                <li>Fuel Nepal’s growth from the inside out</li>
              </ul>
            </Card>

            {/* Education & Growth */}
            <Card title="Education & Growth" icon={<BookOpenIcon className="w-6 h-6" />}>
              <div className="mb-4">
                <h3 className="text-lg font-medium">Badimalika Secondary School</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Current - Class 10 (SEE)</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Hustling both in the classroom and the boardroom.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Continuous Learning</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Constantly learning business, trends, and tech — because the grind never stops.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

function Card({ title, icon, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-black dark:text-white">
          {icon}
        </div>
        <h2 className="text-2xl font-semibold text-black dark:text-white">{title}</h2>
      </div>
      <div className="text-gray-700 dark:text-gray-300 space-y-2 text-[16px] leading-relaxed">
        {children}
      </div>
    </div>
  )
}
