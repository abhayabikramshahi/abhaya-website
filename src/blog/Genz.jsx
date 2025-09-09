import React from 'react';
import { Helmet } from 'react-helmet-async';
import genZProtestImage1 from '../images/genz-protest-1.jpg';
import genZProtestImage2 from '../images/genz-protest-2.jpg';
import genZProtestImage3 from '../images/genz-protest-3.jpg';

export default function GenZProtest() {
  const published = "2025-06-06";
  const updated = "2025-09-09";

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-8 lg:px-16">
      <Helmet>
        <title>Gen Z Protest: How the Youth Are Shaping the Future of Activism | Abhaya Blog</title>
        <meta name="description" content="Explore how Gen Z is leading modern protests, using digital activism, and demanding change. Discover the youth-driven movements shaping our world today." />
        <meta name="keywords" content="Gen Z protest, youth activism, digital activism, climate protest, social change, Gen Z movements, Nepal Gen Z" />
        <link rel="canonical" href="https://your-domain.com/blog/gen-z-protest-activism" />
        {/* Open Graph */}
        <meta property="og:title" content="Gen Z Protest: How the Youth Are Shaping the Future of Activism" />
        <meta property="og:description" content="Inside Gen Z protests: digital activism, climate marches, and youth-driven movements demanding real change globally." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={genZProtestImage3} />
        <meta property="article:published_time" content={published} />
        <meta property="article:modified_time" content={updated} />
      </Helmet>

      {/* Main Article Container */}
      <div className="max-w-5xl mx-auto bg-white  rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Gen Z Protest: How the Youth Are Shaping the Future of Activism
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            By <span className="font-semibold">Abhaya Bikram Shahi</span> · Published {published} · Updated {updated}
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full">
          <img src={genZProtestImage1} alt="Gen Z Protest Crowd" className="w-full h-[400px] md:h-[500px] object-cover" />
          <p className="text-center text-gray-500 text-sm py-2 italic">
            Thousands of young activists gathered across cities demanding climate action.
          </p>
        </div>

        {/* Content */}
        <div className="px-6 md:px-10 py-8 space-y-8">
          {/* Intro Paragraph */}
          <p className="text-gray-800 text-lg leading-relaxed">
            Gen Z, born roughly between 1997 and 2012, has transformed activism by merging physical protests with digital campaigns. Across the globe, young people are leading movements on climate change, social justice, and equality, demanding accountability from governments, corporations, and institutions. Unlike previous generations, their activism is hybrid, fast, loud, and highly visible—both online and on the streets.
          </p>

          {/* Digital Activism Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Digital Activism: The New Frontier</h2>
            <img src={genZProtestImage2} alt="Digital Gen Z Protest" className="w-full h-[300px] object-cover rounded-xl shadow-md" />
            <p className="text-gray-500 text-sm italic">Social media amplifies Gen Z's voice beyond borders, creating global awareness.</p>
            <p className="text-gray-800 text-lg leading-relaxed">
              Yesterday, Gen Z activists simultaneously took to the streets and online platforms to amplify their message. In cities like New York, London, Berlin, Tokyo, and Kathmandu, tens of thousands of young people demonstrated peacefully with banners, chants, and coordinated marches demanding urgent climate action and social reforms. Digital platforms were flooded with hashtags like #YouthForClimate, #GenZRising, and #GlobalStrike, trending worldwide and reaching millions. In Nepal, Kathmandu students led urban tree-planting campaigns alongside petitions, social media drives, and educational webinars, highlighting the hybrid activism model that merges physical presence with digital amplification. Experts note that these strategies increase visibility, attract media coverage, and exert direct pressure on policymakers. Critics may call online engagement “slacktivism,” but yesterday’s events proved tangible impact, including petitions delivered to councils, media coverage, and formation of new youth coalitions for long-term advocacy. Gen Z’s combination of creativity, resilience, and digital fluency is redefining civic engagement, showing how a generation can drive change with technology and street activism in harmony.
            </p>
          </section>

          {/* On-the-Ground Protests Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">On-the-Ground Protests</h2>
            <img src={genZProtestImage3} alt="Youth Marching on Streets" className="w-full h-[350px] object-cover rounded-xl shadow-md" />
            <p className="text-gray-500 text-sm italic">Young activists marching peacefully to demand climate action and social justice.</p>
            <p className="text-gray-800 text-lg leading-relaxed">
              Physical protests remain central to Gen Z activism. Rallies, sit-ins, and marches provide visibility, attract media attention, and directly pressure governments. Across the world, including Nepal, these events have led to policy discussions, local environmental campaigns, and youth coalitions advocating for sustainable practices and education reforms.
            </p>
          </section>

          {/* Impact Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Impact of Gen Z Protests</h2>
            <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
              <li><strong>Policy influence:</strong> Governments face increased pressure to address climate, education, and equality issues.</li>
              <li><strong>Global solidarity:</strong> International networks link causes across borders.</li>
              <li><strong>Cultural shift:</strong> Corporations, media, and institutions now prioritize youth concerns, from sustainability to inclusivity.</li>
              <li><strong>Youth representation:</strong> Political and social organizations increasingly include young voices in decision-making.</li>
            </ul>
          </section>

          {/* Challenges Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Challenges & Criticism</h2>
            <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
              <li>Online activism can sometimes be superficial or performative.</li>
              <li>Governmental pushback, censorship, and legal obstacles may hinder movements.</li>
              <li>Maintaining momentum and converting awareness into real policy change is challenging.</li>
              <li>Burnout is common among youth activists balancing school, work, and advocacy.</li>
            </ul>
          </section>

          {/* Further Reading */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Further Reading & Sources</h2>
            <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
              <li>
                Fridays For Future —{" "}
                <a href="https://fridaysforfuture.org/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">Link</a>
              </li>
              <li>
                UN Youth Activism Overview —{" "}
                <a href="https://www.un.org/youthenvoy/youth-activism" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">UN Youth Envoy</a>
              </li>
              <li>
                Climate Strike Global Movement —{" "}
                <a href="https://climatestrike.net/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">Climate Strike</a>
              </li>
              <li>
                Nepal Youth Movements —{" "}
                <a href="https://kathmandupost.com/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">Kathmandu Post</a>
              </li>
            </ul>
          </section>

          <p className="text-gray-500 text-sm">
            Disclaimer: This article summarizes publicly reported information on Gen Z protests. It avoids publishing personal data and focuses on verified public information.
          </p>
        </div>
      </div>
    </div>
  );
}
