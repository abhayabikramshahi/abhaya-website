import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website'
}) {
  const siteTitle = 'Abhaya Bikram Shahi';
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Full Stack Developer & Tech Entrepreneur`;
  const defaultDescription = 'Full Stack Developer specializing in React, Node.js, Python, and modern web technologies. Building innovative solutions with expertise in AI, automation, and data science.';
  const defaultImage = '/images/abhaya1.jpg';
  const defaultUrl = 'https://www.abhayabikramshahi.xyz/';
  const defaultKeywords = 'Full Stack Developer, React Developer, Node.js, Python, AI Development, Web Development, Tech Entrepreneur, Software Engineer, Frontend Developer, Backend Developer';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteTitle,
    jobTitle: 'Full Stack Developer & Tech Entrepreneur',
    description: description || defaultDescription,
    url: url || defaultUrl,
    image: image || defaultImage,
    sameAs: [
      'https://github.com/abhayabikramshahi',
      'https://linkedin.com/in/abhayabikramshahi',
      'https://twitter.com/abhayabikramshahi'
    ],
    knowsAbout: [
      'Web Development',
      'React.js',
      'Node.js',
      'Python',
      'AI Development',
      'Data Science',
      'Software Engineering'
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:image" content={image || defaultImage} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url || defaultUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}