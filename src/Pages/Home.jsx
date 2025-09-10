import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Educational from './Educational';
import {
  RocketLaunchIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import abhaya1 from '../images/abhaya1.jpg';

// Only one logo for now
import logo1 from '../assets/techawarenepal.png';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Home() {
  return (
    <>
      <SEO
        title="Home | Abhaya's Personal Website"
        description="Welcome to my personal website where I share my journey, projects, and experiences."
        keywords="portfolio, projects, skills, full-stack developer"
        type="website"
        ogTitle="Abhaya's Personal Website"
        ogDescription="Explore my journey, work, and thoughts."
        ogImage={abhaya1}
        twitterCard="summary_large_image"
        twitterTitle="Abhaya's Personal Website"
        twitterDescription="Explore my journey, work, and thoughts."
        twitterImage={abhaya1}
      />

      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100" aria-labelledby="hero-heading">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="show"
                className="text-left"
              >
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                  Hey, I’m <span className="text-gray-600">Abhaya</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-medium">
                  Turning Ideas into Reality through Code & Design
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-xl">
                  I’m a full-stack developer and creative thinker, passionate about building digital experiences that are not just functional but unforgettable.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-all duration-300 shadow-lg">
                    <RocketLaunchIcon className="h-5 w-5" />
                    View Projects
                  </Link>
                  <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-black text-black hover:bg-gray-100 transition-all duration-300">
                    <SparklesIcon className="h-5 w-5" />
                    About Me
                  </Link>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img loading="lazy" src={abhaya1} alt="Abhaya - Developer Portrait" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-md text-sm font-medium text-gray-800">
                  Let’s build something amazing.
                </div>
              </motion.div>
            </div>
          </div>
        </section>



        {/* Features Section */}
        <section className="py-20 bg-gray-50" aria-labelledby="features-heading">
          <div className="container mx-auto px-6">
            <h2 id="features-heading" className="text-3xl font-bold text-center mb-12">What I Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {["Creative Projects", "Professional Work"].map((title, i) => (
                <motion.article
                  key={title}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-4">{title}</h3>
                  <p className="text-gray-600">
                    {i === 0
                      ? 'Exploring innovative ideas and bringing them to life through various creative endeavors.'
                      : 'Delivering high-quality solutions and contributing to meaningful projects.'}
                  </p>
                  <Link
                    to={i === 0 ? '/skills' : '/projects'}
                    className="text-black font-medium hover:underline mt-4 inline-block"
                  >
                    {i === 0 ? 'Explore my skills →' : 'See my work →'}
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Interested in working together or just want to say hello? I’m open to collaborations, freelance work, or just tech talk.
            </p>
            <Link
              to="/skills"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors duration-300"
            >
              View Skills
            </Link>
          </div>
        </motion.section>
      </main>

      <Educational />
    </>
  );
}
