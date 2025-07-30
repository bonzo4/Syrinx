import DemoPreview from "./DemoPreview";

export default function HeroSection() {
  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl text-center">
        <div className="mb-8 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          ⚡ AI-Powered Sprint Planning for Builders
        </div>

        <h1 className="mb-6 text-4xl leading-tight font-bold text-slate-900 md:text-6xl lg:text-7xl dark:text-white">
          From idea to demo—
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            without the planning chaos
          </span>
        </h1>

        <p className="mx-auto mb-12 max-w-4xl text-xl leading-relaxed text-slate-600 md:text-2xl dark:text-slate-300">
          AI co-pilot for hackathon warriors and indie developers who want to
          build fast and hit deadlines. Describe your project in one sentence,
          get instant time-boxed plans.
        </p>

        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="transform rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-700">
            Start Planning Now
          </button>
          <button className="rounded-xl border-2 border-slate-300 px-8 py-4 text-lg font-semibold text-slate-700 transition-all hover:border-blue-500 dark:border-slate-600 dark:text-slate-300">
            Watch Demo
          </button>
        </div>

        <DemoPreview />
      </div>
    </section>
  );
}
