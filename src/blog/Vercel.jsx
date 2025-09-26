import React from "react";

function Vercel() {
  return (
    <main className="min-h-screen  flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full space-y-10 bg-white p-8 ">
        {/* Intro */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold mb-4">
            🚀 Fixing 404 Errors in Vercel Deployments: A React Router Survival Guide
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Hey everyone! 👋 I recently ran into a frustrating issue when I deployed my React app to Vercel: 
            whenever I tried to access a route directly (like <code className="bg-gray-100 px-1 rounded">myapp.com/about</code>) or refreshed the page, 
            I got a 404 error. 😱 If you’re using React Router (or any client-side routing), 
            you’ve probably seen this too. Here’s how I tackled it:
          </p>
        </div>

        {/* Section: What Was Happening */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">🔍 What Was Happening</h2>
          <ul className="list-decimal list-inside space-y-2 text-gray-600 leading-relaxed">
            <li>
              I’d deploy my React app to Vercel, and everything worked fine on the home page.
            </li>
            <li>
              As soon as I tried to navigate to <code className="bg-gray-100 px-1 rounded">/about</code> directly or hit “refresh” on a client-side route, 
              Vercel looked for a static <code className="bg-gray-100 px-1 rounded">/about.html</code> file. Of course, it didn’t exist, so I got a 404.
            </li>
            <li>
              Sharing any link to a nested route also led users straight into a dead end.
            </li>
          </ul>
        </section>
        
        {/* Section: Why It Happens */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">❓ Why It Happens</h2>
          <p className="text-gray-700 leading-relaxed">
            Vercel is primarily a static-file host. By default, when you hit a URL like 
            <span className="bg-gray-100 px-1 py-0.5 rounded mx-1">/contact</span>, it checks if there’s a file named 
            <span className="bg-gray-100 px-1 py-0.5 rounded mx-1">contact.html</span> (or a folder named 
            <span className="bg-gray-100 px-1 py-0.5 rounded mx-1">contact/index.html</span>). Since React Router handles routing inside the browser, 
            those files don’t exist, so Vercel returns a 404.
          </p>
        </section>

        {/* Section: How I Fixed It */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">✨ How I Fixed It</h2>
          <p>The solution is super simple: tell Vercel to always serve <code>index.html</code> and let React Router do the rest. Here’s what I added to the root of my project:</p>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`
  // vercel.json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}`}
          </pre>
        </section>

        {/* Section: Steps I Followed */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">🛠️ Steps I Followed</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 leading-relaxed">
            <li>Created a new file called <code className="bg-gray-100 px-1 rounded">vercel.json</code> in my project’s root folder.</li>
            <li>Pasted the JSON snippet above.</li>
            <li>Committed my changes and pushed to GitHub.</li>
            <li>Vercel auto-deployed, and voilà — no more 404 errors on direct links or refresh! 🎉</li>
          </ol>
        </section>

        {/* Section: Pro Tip */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">🎯 Pro Tip</h2>
          <p className="text-gray-700 leading-relaxed">
            This rewrite trick works for any client-side router (React Router, Vue Router, Angular Router, etc.). Once you set up the rewrite, Vercel will always serve your app’s entry point. From there, your router library decides what to render based on the URL.
          </p>
        </section>

        {/* Section: TL;DR */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">💬 TL;DR</h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>Problem:</strong> Refreshing or directly accessing a route on Vercel → 404.<br/>
            <strong>Cause:</strong> Vercel can’t find a matching static file; React Router handles routes on the client.<br/>
            <strong>Solution:</strong> Add a <code className="bg-gray-100 px-1 rounded">vercel.json</code> with a catch-all rewrite to <code className="bg-gray-100 px-1 rounded">index.html</code>.<br/>
            <strong>Result:</strong> All routes load correctly, and React Router handles navigation as expected.<br/>
            Hope this helps anyone else who’s hit this snag — happy coding! 🚀🔧
          </p>
        </section>

        {/* Hashtags */}
        <section className="text-gray-500 text-sm space-y-2">
          <p>#WebDevelopment #ReactJS #Vercel #ReactRouter #Frontend #CodingTips #100DaysOfCode #DeveloperLife</p>
        </section>
      </div>
    </main>
  );
}

export default Vercel;
