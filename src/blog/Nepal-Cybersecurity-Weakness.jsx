import React, { useState } from "react";

function NepalCybersecurityWeakness() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <seo>
        <title>Nepal's Cybersecurity Weakness Exposed | Cyber Truths</title>
        <meta name="description" content="Explore why Nepal's cybersecurity system is dangerously weak and what steps should be taken to improve digital safety." />
      </seo>

      <main className="max-w-3xl mx-auto px-4 py-10 text-gray-900 bg-white mt-6 min-h-screen">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          🔐 Nepal’s Cybersecurity is Weak — Here’s Why It Matters
        </h1>
        <p className="text-gray-700 mb-6">
          Let’s not sugarcoat it—Nepal’s cybersecurity is running on outdated frameworks, zero-day policies, and a{" "}
          <span className="italic">"let’s hope nothing happens"</span> mindset. In a world where digital attacks are
          rising every second, Nepal is still wide open to cyber threats.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">🚨 What’s the Problem?</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>No proper government-backed cybersecurity infrastructure.</li>
            <li>Most websites run outdated PHP/WordPress with zero protection.</li>
            <li>Lack of awareness among developers and users.</li>
            <li>No regular security audits on public systems.</li>
            <li>Public Wi-Fi, school systems, even government portals are hackable in seconds.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">🛡️ Real-Life Examples</h2>
          <p className="text-gray-700">
            From student portals leaking passwords to municipal websites getting defaced, we’ve seen it all. And these
            aren’t advanced-level hacks—just basic exploits like SQLi and XSS. Scary, right?
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">🤔 So What Can Be Done?</h2>
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-blue-600 underline hover:text-blue-800 transition"
          >
            {showMore ? "Hide Solutions" : "Click to See Solutions"}
          </button>
          {showMore && (
            <ul className="list-disc ml-5 mt-3 text-gray-700 space-y-2">
              <li>Mandatory security audits on all gov & edu portals.</li>
              <li>Update software dependencies regularly.</li>
              <li>Train devs and admins about OWASP Top 10 threats.</li>
              <li>Launch bug bounty programs for ethical hackers.</li>
              <li>Secure login systems with 2FA, HTTPS, and firewall rules.</li>
            </ul>
          )}
        </section>

        <footer className="mt-10 border-t border-gray-300 pt-4 text-sm text-gray-500">
          Written by Abhaya | Last updated: July 2025 | #CyberTruthNepal
        </footer>
      </main>
    </>
  );
}

export default NepalCybersecurityWeakness;
