export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          Ready to build without the planning panic?
        </h2>
        <p className="mb-8 text-xl text-blue-100">
          Join hundreds of developers who&apos;ve shipped faster with AI-powered
          sprint planning.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="transform rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-all hover:scale-105 hover:bg-gray-50">
            Get Early Access
          </button>
          <button className="rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10">
            Watch Demo Video
          </button>
        </div>
      </div>
    </section>
  );
}
