import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

// Keep original image imports to avoid 404 issues
import abhaya1 from '../images/abhaya1.jpg';
import abhaya2 from '../images/abhaya2.jpg';
import abhaya3 from '../images/abhaya3.jpg';
import abhaya4 from '../images/abhaya4.jpg';
import abhayaLogo from '../images/abhaya-logo.jpg';
import working from '../images/working.jpg';

const galleryImages = [
  {
    id: 1,
    src: abhaya1,
    alt: 'Abhaya Bikram Shahi Full Stack Developer Project Showcase 1'
  },
  {
    id: 2,
    src: abhaya2,
    alt: 'Abhaya Bikram Shahi Full Stack Developer Project Showcase 2'
  },
  {
    id: 3,
    src: abhaya3,
    alt: 'Abhaya Bikram Shahi Full Stack Developer Project Showcase 3'
  },
  {
    id: 4,
    src: abhaya4,
    alt: 'Abhaya Bikram Shahi Full Stack Developer Project Showcase 4'
  },
  {
    id: 5,
    src: abhayaLogo,
    alt: 'Abhaya Bikram Shahi Official Developer Logo'
  },
  {
    id: 6,
    src: working,
    alt: 'Abhaya Bikram Shahi Working Environment Snapshot'
  }
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseFullscreen = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Helmet>
        <title>Gallery | Abhaya Bikram Shahi - Full Stack Developer</title>
        <meta
          name="description"
          content="Explore the portfolio and gallery of Abhaya Bikram Shahi showcasing web development projects and working environment."
        />
        <meta
          name="keywords"
          content="Abhaya Bikram Shahi, Web Developer Nepal, Portfolio, Full Stack Developer, Project Gallery, Developer Kalikot"
        />
        <meta property="og:title" content="Gallery | Abhaya Bikram Shahi - Full Stack Developer" />
        <meta
          property="og:description"
          content="Explore stunning images from Abhaya Bikram Shahi's full stack development journey and professional work."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Abhaya Bikram Shahi",
              "jobTitle": "Full Stack Developer",
              "image": "https://yourdomain.com/images/abhaya1.jpg",
              "url": "https://yourdomain.com/gallery",
              "sameAs": [
                "https://www.linkedin.com/in/abhaya",
                "https://github.com/abhaya"
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white"
        >
          Gallery
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {galleryImages.map((image, index) => {
            const isEven = index % 2 === 0;
            const row = Math.floor(index / 3);
            const isEvenRow = row % 2 === 0;

            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-lg shadow-lg aspect-square cursor-pointer
                  ${isEvenRow
                    ? isEven
                      ? 'md:translate-y-0'
                      : 'md:translate-y-24'
                    : isEven
                    ? 'md:translate-y-24'
                    : 'md:translate-y-0'
                  }`}
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  title={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                <p className="absolute bottom-2 left-2 text-xs bg-white bg-opacity-80 text-black px-2 py-1 rounded">
                  {image.alt}
                </p>
              </motion.div>
            );
          })}
        </div>

        {galleryImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No images available in the gallery yet.
            </p>
          </div>
        )}

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
              onClick={handleCloseFullscreen}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
                onClick={handleCloseFullscreen}
              >
                <XMarkIcon className="w-8 h-8" />
              </button>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-7xl max-h-[90vh] mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[90vh] object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fallback for bots */}
        <noscript>
          <img
            src="/images/abhaya1.jpg"
            alt="Abhaya Bikram Shahi Full Stack Developer Project"
          />
        </noscript>
      </div>
    </>
  );
}

export default Gallery;
