export default function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 flex items-center space-x-2 md:mb-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
              <span className="text-sm font-bold text-white">S</span>
            </div>
            <span className="text-xl font-bold text-white">Syrinx</span>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-white"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-white"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 Syrinx. Built for builders who ship fast.
          </p>
        </div>
      </div>
    </footer>
  );
}
