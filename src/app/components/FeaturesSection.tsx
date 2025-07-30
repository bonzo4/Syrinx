export default function FeaturesSection() {
  return (
    <section className="bg-white px-6 py-20 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
          Stop wasting hours on scoping. Start building.
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 dark:from-blue-900/20 dark:to-indigo-900/20">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
              <span className="text-xl text-white">⚡</span>
            </div>
            <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
              Lightning-Fast Setup
            </h3>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              Describe your goal in one sentence. Get instant timelines, tech
              stack recommendations, and pre-built templates.
            </p>
            <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
              &ldquo;Use Firebase for auth, RapidAPI for flights&rdquo;
            </div>
          </div>

          {/* Feature 2 */}
          <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 dark:from-purple-900/20 dark:to-pink-900/20">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600">
              <span className="text-xl text-white">🎯</span>
            </div>
            <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
              Time-Boxed Tasks
            </h3>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              Auto-generated tasks in 2-hour blocks for hackathons or daily
              sprints for MVPs. Critical path highlighted.
            </p>
            <div className="text-sm font-medium text-purple-600 dark:text-purple-400">
              &ldquo;2hr: Set up Next.js + Tailwind (with boilerplate)&rdquo;
            </div>
          </div>

          {/* Feature 3 */}
          <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 dark:from-green-900/20 dark:to-emerald-900/20">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-600">
              <span className="text-xl text-white">🔧</span>
            </div>
            <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
              Embedded Cheat Codes
            </h3>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              One-click access to API docs, code snippets, and design assets
              right inside your tasks.
            </p>
            <div className="text-sm font-medium text-green-600 dark:text-green-400">
              &ldquo;Copy this Flask endpoint for hotels&rdquo;
            </div>
          </div>

          {/* Feature 4 */}
          <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 p-8 dark:from-orange-900/20 dark:to-red-900/20">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600">
              <span className="text-xl text-white">📊</span>
            </div>
            <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
              Smart Adjustments
            </h3>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              Real-time timeline updates when you fall behind. AI suggests
              pivots before it&apos;s too late.
            </p>
            <div className="text-sm font-medium text-orange-600 dark:text-orange-400">
              &ldquo;4hrs behind—simplify hotel search or cut restaurants&rdquo;
            </div>
          </div>

          {/* Feature 5 */}
          <div className="rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 p-8 dark:from-teal-900/20 dark:to-cyan-900/20">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600">
              <span className="text-xl text-white">🎤</span>
            </div>
            <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
              Demo-Day Ready
            </h3>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              Last-hour checklist with pitch prep and auto-generated README with
              your tech stack and features.
            </p>
            <div className="text-sm font-medium text-teal-600 dark:text-teal-400">
              &ldquo;Polish landing page + prep 30-second pitch&rdquo;
            </div>
          </div>

          {/* Feature 6 */}
          <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 p-8 dark:from-indigo-900/20 dark:to-blue-900/20">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600">
              <span className="text-xl text-white">🚀</span>
            </div>
            <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
              Hackathon & MVP Focus
            </h3>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              Purpose-built for time-constrained builders. No enterprise bloat,
              just what you need to ship fast.
            </p>
            <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              &ldquo;Hourly for hackathons, weekly for MVPs&rdquo;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
