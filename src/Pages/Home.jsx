import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Educational from "./Educational";
import {
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import SEO from "../components/SEO";
import abhaya1 from "../images/abhaya1.jpg";

// Reusable fade-up animation
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Home() {
  return (
    <>
      {/* 🔹 SEO */}
      <SEO
        title="Home | Abhaya Bikram Shahi"
        description="Official portfolio of Abhaya Bikram Shahi — Full-stack developer and creative thinker from Nepal. Explore my projects, skills, and journey in tech."
        keywords="Abhaya Bikram Shahi, portfolio, full-stack developer, Nepal, coding, design"
        type="website"
        ogTitle="Abhaya Bikram Shahi | Full-Stack Developer"
        ogDescription="Turning ideas into reality through code & design."
        ogImage={abhaya1}
        twitterCard="summary_large_image"
        twitterTitle="Abhaya Bikram Shahi | Portfolio"
        twitterDescription="Full-stack developer passionate about building unforgettable digital experiences."
        twitterImage={abhaya1}
        canonical="https://abhayabikramshahi.vercel.app/"
        locale="en_US"
      />

      <main className="flex flex-col items-center text-center">
        {/* Hero Section */}
        <section className="relative py-28 w-full bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
          <div className="container mx-auto px-6 flex flex-col items-center">
            {/* Animate text block */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              className="max-w-2xl"
            >
              <motion.h1
                variants={fadeInUp}
                custom={0.2}
                className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
              >
                Hi, I’m <span className="text-gray-700">Abhaya Bikram Shahi</span>
              </motion.h1>

              <motion.h2
                variants={fadeInUp}
                custom={0.4}
                className="text-xl md:text-2xl text-gray-600 mb-6 font-medium"
              >
                Full-Stack Developer · Creative Thinker · Ethical Hacker
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                custom={0.6}
                className="text-lg text-gray-600 mb-10 leading-relaxed"
              >
                I build meaningful digital experiences that blend functionality
                with creativity. Passionate about clean code, scalable design,
                and innovative solutions.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                custom={0.8}
                className="flex flex-wrap justify-center gap-4"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-all duration-300 shadow-md"
                >
                  <RocketLaunchIcon className="h-5 w-5" />
                  View Projects
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-900 text-gray-900 hover:bg-gray-100 transition-all duration-300"
                >
                  <SparklesIcon className="h-5 w-5" />
                  About Me
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 w-full bg-white">
          <div className="container mx-auto px-6 flex flex-col items-center">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.1}
              className="text-3xl font-bold mb-16"
            >
              What I Do
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
              {["Creative Projects", "Professional Work"].map((title, i) => (
                <motion.article
                  key={title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i * 0.3}
                  className="bg-gray-50 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-4">{title}</h3>
                  <p className="text-gray-600 mb-6">
                    {i === 0
                      ? "Exploring innovative ideas and bringing them to life through passion projects."
                      : "Delivering high-quality, scalable solutions in real-world projects."}
                  </p>
                  <Link
                    to={i === 0 ? "/skills" : "/projects"}
                    className="text-black font-medium hover:underline"
                  >
                    {i === 0 ? "Explore my skills →" : "See my work →"}
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.2}
          className="py-24 w-full bg-gray-50"
        >
          <div className="container mx-auto px-6 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-6">Let’s Collaborate</h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed">
              Open to collaborations, freelance projects, and exciting
              opportunities. If you’re looking for someone who can turn
              innovative ideas into reality — let’s connect.
            </p>
            <motion.div
              variants={fadeInUp}
              custom={0.4}
              className="flex justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors duration-300 shadow-md"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Educational />
    </>
  );
}
