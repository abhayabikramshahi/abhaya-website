import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

// Import images
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
    alt: 'Abhaya Project Showcase 1'
  },
  {
    id: 2,
    src: abhaya2,
    alt: 'Abhaya Project Showcase 2'
  },
  {
    id: 3,
    src: abhaya3,
    alt: 'Abhaya Project Showcase 3'
  },
  {
    id: 4,
    src: abhaya4,
    alt: 'Abhaya Project Showcase 4'
  },
  {
    id: 5,
    src: abhayaLogo,
    alt: 'Abhaya Logo'
  },
  {
    id: 6,
    src: working,
    alt: 'Working Environment'
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
        <title>Gallery | Abhaya - Full Stack Developer</title>
        <meta name="description" content="Explore our collection of stunning images showcasing our work and projects." />
        <meta name="keywords" content="gallery, portfolio, images, projects, web development" />
        <meta property="og:title" content="Gallery | Abhaya - Full Stack Developer" />
        <meta property="og:description" content="Explore our collection of stunning images showcasing our work and projects." />
        <meta property="og:type" content="website" />
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
                    ? (isEven ? 'md:translate-y-0' : 'md:translate-y-24') 
                    : (isEven ? 'md:translate-y-24' : 'md:translate-y-0')}`}
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
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

        {/* Fullscreen View */}
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
      </div>
    </>
  );
}

export default Gallery; 