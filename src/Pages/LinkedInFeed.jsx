import { motion } from 'framer-motion'
import SEO from '../components/SEO'

export default function LinkedInFeed() {
  return (
    <>
      <SEO 
        title="LinkedIn Feed - Abhaya"
        description="Stay updated with Abhaya's latest LinkedIn posts and professional updates."
        keywords="LinkedIn, professional updates, Abhaya, social media feed"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">
              LinkedIn Updates
            </h1>
            <p className="text-xl text-black dark:text-white mb-8">
              Stay connected with my latest professional updates and insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* LinkedIn Feed Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="flex justify-center">
                <iframe 
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:7332605949473439744?collapsed=1" 
                  height="522" 
                  width="504" 
                  frameBorder="0" 
                  allowFullScreen 
                  title="Embedded post"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
} 