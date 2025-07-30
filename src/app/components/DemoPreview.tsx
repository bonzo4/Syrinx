export default function DemoPreview() {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-800">
        <div className="border-b border-slate-200 bg-slate-100 px-6 py-4 dark:border-slate-600 dark:bg-slate-700">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-sm text-slate-600 dark:text-slate-400">
              Syrinx AI Planner
            </span>
          </div>
        </div>
        <div className="p-8">
          <div className="text-left">
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Describe your project in one sentence:
              </label>
              <div className="rounded-lg border bg-slate-50 p-4 dark:bg-slate-900">
                <span className="text-slate-600 dark:text-slate-400">
                  &ldquo;Build a travel app MVP in 48 hours for the
                  hackathon&rdquo;
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
                  <span className="text-xs text-white">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Day 1 (12 hours): Foundation
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Set up Next.js + Firebase auth, integrate travel API
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                  <span className="text-xs text-white">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Day 2 (12 hours): UI + Demo
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Build search interface, polish landing page, prep pitch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
