import React from 'react';
import { Helmet } from 'react-helmet-async';
import genZProtestImage1 from '../images/genz-protest-1.jpg';
import genZProtestImage2 from '../images/genz-protest-2.jpg';
import genZProtestImage3 from '../images/genz-protest-3.jpg';

export default function GenZProtest() {
  const published = "2025-06-06";
  const updated = "2025-09-09";

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 bg-white mt-8 mb-12">
      <Helmet>
        <title>Gen Z Protest: How the Youth Are Shaping the Future of Activism | Abhaya Blog</title>
        <meta
          name="description"
          content="Explore how Gen Z is leading modern protests, using digital activism, and demanding change. Discover the youth-driven movements shaping our world today."
        />
        <meta
          name="keywords"
          content="Gen Z protest, youth activism, digital activism, climate protest, social change, Gen Z movements, Nepal Gen Z"
        />
        <link rel="canonical" href="https://your-domain.com/blog/gen-z-protest-activism" />
        {/* Open Graph */}
        <meta property="og:title" content="Gen Z Protest: How the Youth Are Shaping the Future of Activism" />
        <meta
          property="og:description"
          content="Inside Gen Z protests: digital activism, climate marches, and youth-driven movements demanding real change globally."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={genZProtestImage3} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:published_time" content={published} />
        <meta property="article:modified_time" content={updated} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gen Z Protest: How the Youth Are Shaping the Future of Activism" />
        <meta name="twitter:description" content="Inside Gen Z protests: digital activism, climate marches, and youth-driven movements demanding real change globally." />
        <meta name="twitter:image" content={genZProtestImage3} />
        {/* JSON-LD */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Gen Z Protest: How the Youth Are Shaping the Future of Activism",
            "author": { "@type": "Person", "name": "Abhaya Bikram Shahi" },
            "datePublished": "${published}",
            "dateModified": "${updated}",
            "inLanguage": "en",
            "keywords": [
              "Gen Z protest",
              "youth activism",
              "digital activism",
              "climate protest",
              "social change",
              "Gen Z movements",
              "Nepal Gen Z"
            ],
            "description": "Explore how Gen Z is leading modern protests, using digital activism, and demanding change. Discover the youth-driven movements shaping our world today.",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://your-domain.com/blog/gen-z-protest-activism"
            }
          }
        `}</script>
      </Helmet>

      <h1 className="text-3xl font-extrabold mb-4 text-black leading-tight text-left">
        Gen Z Protest: How the Youth Are Shaping the Future of Activism
      </h1>
      <p className="text-sm text-gray-500 mb-6 text-left">
        By <span className="font-semibold">Abhaya Bikram Shahi</span> · Published {published} · Updated {updated}
      </p>

      <img src={genZProtestImage1} alt="Gen Z Protest Crowd" className="w-full h-[350px] object-cover rounded-xl mb-6 shadow-md" />
      <p className="text-gray-500 text-sm mb-6 italic">A massive turnout at a global climate protest led by Gen Z activists.</p>

      <p className="mb-6 text-lg text-gray-800 text-left">
        Gen Z, born roughly between 1997 and 2012, is taking activism into its own hands. With climate, social justice, and equality at the forefront, young people are demanding accountability from institutions worldwide. Unlike previous generations, Gen Z blends street protests with digital campaigns, creating a hybrid form of activism that’s fast, loud, and highly visible.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-black text-left">Digital Activism: The New Frontier</h2>
      <img src={genZProtestImage2} alt="Digital Gen Z Protest" className="w-full h-[300px] object-cover rounded-xl mb-4 shadow-md" />
      <p className="text-gray-500 text-sm mb-6 italic">Social media amplifies Gen Z's voice beyond borders, creating global awareness.</p>
      <p className="mb-4 text-gray-800 text-left">
        Platforms like Instagram, TikTok, and Twitter have become essential for mobilizing support. Hashtags trend worldwide, petitions gather millions of signatures, and live streams broadcast protests globally.
      </p>
      <ul className="list-disc ml-6 mb-6 text-gray-800">
        <li><span className="font-semibold">Hashtag campaigns:</span> #FridaysForFuture, #BlackLivesMatter, and #ClimateStrike show the power of collective voice.</li>
        <li><span className="font-semibold">Petitions & fundraising:</span> Digital petitions fund projects and help organize local and international initiatives.</li>
        <li><span className="font-semibold">Real-time awareness:</span> Live videos allow supporters worldwide to witness events and rally together instantly.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-black text-left">On-the-Ground Protests</h2>
      <img src={genZProtestImage3} alt="Youth Marching on Streets" className="w-full h-[350px] object-cover rounded-xl mb-4 shadow-md" />
      <p className="text-gray-500 text-sm mb-6 italic">Young activists marching peacefully to demand climate action and social justice.</p>
      <p className="mb-6 text-gray-800 text-left">
        Physical protests remain central to Gen Z activism. Marches, sit-ins, and rallies provide visibility, attract media attention, and pressure governments directly.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-2 text-black text-left">Impact of Gen Z Protests</h2>
      <ul className="list-disc ml-6 mb-6 text-gray-800">
        <li><span className="font-semibold">Policy influence:</span> Governments face increasing pressure to address climate, education, and equality issues.</li>
        <li><span className="font-semibold">Global solidarity:</span> International networks emerge, linking causes across borders.</li>
        <li><span className="font-semibold">Cultural shift:</span> Corporations, media, and institutions now prioritize youth concerns, from sustainability to inclusivity.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-2 text-black text-left">Challenges & Criticism</h2>
      <ul className="list-disc ml-6 mb-6 text-gray-800">
        <li>Some critics argue that social media activism can be superficial without measurable outcomes.</li>
        <li>Youth-led protests sometimes encounter governmental pushback or political hurdles.</li>
        <li>Maintaining momentum and translating awareness into policy change is challenging.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-2 text-black text-left">Future Outlook</h2>
      <p className="mb-6 text-gray-800 text-left">
        Gen Z’s hybrid activism model—combining digital savvy with on-the-ground action—signals a generational shift in how social change happens. Their resilience, creativity, and global connectedness are shaping not just protests but the policy and discourse of the future.
      </p>

      <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-200 text-yellow-900 mb-6">
        <p className="text-sm">
          <span className="font-semibold">Editorial note:</span> Content is sourced from verified reports and public media on global Gen Z movements. Images are used under fair use for educational purposes.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-2 text-black text-left">Further Reading & Sources</h2>
      <ul className="list-disc ml-6 mb-10 text-gray-800">
        <li>
          Fridays For Future —{" "}
          <a href="https://fridaysforfuture.org/" target="_blank" rel="noopener noreferrer" className="underline">
            Link
          </a>
        </li>
        <li>
          UN Youth Activism Overview —{" "}
          <a href="https://www.un.org/youthenvoy/youth-activism" target="_blank" rel="noopener noreferrer" className="underline">
            UN Youth Envoy
          </a>
        </li>
        <li>
          Climate Strike Global Movement —{" "}
          <a href="https://climatestrike.net/" target="_blank" rel="noopener noreferrer" className="underline">
            Climate Strike
          </a>
        </li>
      </ul>

      <p className="text-gray-500 text-sm">
        Disclaimer: This article summarizes publicly reported information on Gen Z protests. It avoids publishing personal data and focuses on verified public information.
      </p>
    </div>
  );
}
