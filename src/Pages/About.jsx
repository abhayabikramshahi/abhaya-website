import { motion } from 'framer-motion'
import { 
  UserIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  BuildingOfficeIcon,
  RocketLaunchIcon,
  BookOpenIcon,
  SparklesIcon,
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
         
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
            About Me
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Here’s a deeper dive into who I am, what I’ve built, and where I’m heading in this exciting entrepreneurial journey.
          </p>
          <p className="mt-2 text-md text-gray-600">
            Get inspired, get to know me — and maybe even join the mission 🚀
          </p>
           <div className="flex justify-center mb-6">
            {/* Profile Photo */}
          </div>
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

            {/* Why I Code */}
            <Card title="Why I Code" icon={<AcademicCapIcon className="w-6 h-6" />}>
              <p>
                I started coding because I wanted to create things that didn’t exist yet. 
                For me, it’s not just about writing code — it’s about solving problems, 
                turning ideas into reality, and building tools that actually help people. 
                Every project feels like unlocking a new superpower.
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
                  <p className="text-sm text-gray-500">{biz.industry}</p>
                  <p className="text-gray-600">{biz.desc}</p>
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
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Built and scaled 6 companies before turning 16</li>
                <li>Generated jobs and uplifted the local economy</li>
                <li>Applied innovative strategies in real-world industries</li>
                <li>Created recognizable brand value in Nepal</li>
                <li>Balanced school, startups, and sanity 😅</li>
              </ul>
            </Card>

            {/* My Journey */}
            <Card title="My Journey" icon={<BriefcaseIcon className="w-6 h-6" />}>
              <p>
                I grew up fascinated by technology, always curious about how apps, games, and websites worked. 
                By experimenting, breaking, and fixing things, I slowly turned curiosity into skill. 
                That journey evolved into building real businesses and mentoring other young creators in Nepal.
              </p>
            </Card>

            {/* Vision & Mission */}
            <Card title="Vision & Mission" icon={<HeartIcon className="w-6 h-6" />}>
              <p className="mb-3">
                My mission is to spark change, empower youth, and reshape Nepal’s future through technology, innovation, and leadership.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-600">
                <li>Expand into South Asia</li>
                <li>Create 1,000+ jobs by 2040</li>
                <li>Promote Nepal from the Strong vison of IT Hub</li>
                <li>Mentor rising young founders</li>
                <li>Fuel Nepal’s growth from the inside out</li>
              </ul>
            </Card>

            {/* Education & Growth */}
            <Card title="Education & Growth" icon={<BookOpenIcon className="w-6 h-6" />}>
              <div className="mb-4">
                <h3 className="text-lg font-medium">Badimalika Secondary School</h3>
                <p className="text-sm text-gray-500">Current - Class 10 (SEE)</p>
                <p className="text-gray-600">
                  Hustling both in the classroom and the boardroom.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Continuous Learning</h3>
                <p className="text-gray-600">
                  Constantly learning business, trends, and tech — because the grind never stops.
                </p>
              </div>
            </Card>

            {/* Fun Facts & Hobbies */}
            <Card title="Fun Facts & Hobbies" icon={<SparklesIcon className="w-6 h-6" />}>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>I love capturing moments with my Canon EOS 4000D 📸</li>
                <li>Big fan of outdoor adventures & Nepali culture</li>
                <li>Sometimes I code late at night with lo-fi beats</li>
                <li>Dreaming of building the “Silicon Valley of Nepal”</li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

function Card({ title, icon, children }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-gray-100 p-3 rounded-lg text-black">
          {icon}
        </div>
        <h2 className="text-2xl font-semibold text-black">{title}</h2>
      </div>
      <div className="text-gray-700 space-y-2 text-[16px] leading-relaxed">
        {children}
      </div>
    </div>
  )
}
