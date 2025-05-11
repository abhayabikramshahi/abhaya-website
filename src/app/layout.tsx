import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head'; // Import Head component from next/head

export const metadata = {
  title: 'Abhaya | Full-Stack Developer Portfolio',
  description:
    'Abhaya, a full-stack developer from Nepal, specializes in web, mobile, and AI solutions. Explore innovative projects and contact for collaboration.',
  keywords:
    'full-stack developer, web development, mobile apps, AI solutions, Nepal developer, portfolio, Next.js, TailwindCSS',
  authors: [{ name: 'Abhaya' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Abhaya | Full-Stack Developer Portfolio',
    description:
      'Discover Abhaya\'s portfolio showcasing web, mobile, and AI projects built with modern technologies like Next.js and TailwindCSS.',
    url: 'https://abhaya-portfolio.com',
    siteName: 'Abhaya Portfolio',
    images: [
      {
        url: '/globe.svg',
        width: 800,
        height: 600,
        alt: 'Abhaya Portfolio Preview',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhaya | Full-Stack Developer Portfolio',
    description:
      'Discover Abhaya\'s portfolio showcasing web, mobile, and AI projects built with modern technologies.',
    images: ['/globe.svg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add other meta tags here */}
      </Head>
      <body className="bg-white text-black font-sans">
        <Navbar />
        <main className="min-h-screen px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
