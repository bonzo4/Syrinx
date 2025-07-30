export default function Header() {
  return (
    <header className="relative z-10 px-6 py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
            <span className="text-sm font-bold text-white">S</span>
          </div>
          <span className="text-xl font-bold text-slate-900 dark:text-white">
            Syrinx
          </span>
        </div>
        <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700">
          Get Early Access
        </button>
      </nav>
    </header>
  );
}
