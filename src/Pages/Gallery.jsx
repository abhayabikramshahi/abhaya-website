import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

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
    alt: 'Abhaya Project Showcase 1',
    title: 'Project Showcase',
    description: 'A glimpse of our innovative project development'
  },
  {
    id: 2,
    src: abhaya2,
    alt: 'Abhaya Project Showcase 2',
    title: 'Development Process',
    description: 'Behind the scenes of our development workflow'
  },
  {
    id: 3,
    src: abhaya3,
    alt: 'Abhaya Project Showcase 3',
    title: 'Technical Excellence',
    description: 'Demonstrating our technical capabilities'
  },
  {
    id: 4,
    src: abhaya4,
    alt: 'Abhaya Project Showcase 4',
    title: 'Project Innovation',
    description: 'Showcasing our innovative solutions'
  },
  {
    id: 5,
    src: abhayaLogo,
    alt: 'Abhaya Logo',
    title: 'Brand Identity',
    description: 'Our distinctive brand logo'
  },
  {
    id: 6,
    src: working,
    alt: 'Working Environment',
    title: 'Development Environment',
    description: 'Our professional working setup'
  }
];

function Gallery() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`group relative overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 
                ${index % 2 === 0 ? 'md:translate-y-0' : 'md:translate-y-16'}`}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{image.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {galleryImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No images available in the gallery yet. Please add some images to get started.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Gallery; 