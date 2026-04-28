// apps/web/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-tight">Inspectra</h1>

          <nav className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-500"
            >
              Open Dashboard
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            AI QA Automation
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Find Website Issues Before Users Do
          </h2>

          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Inspectra scans websites, captures failures, and helps teams improve
            quality faster.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/dashboard/new"
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium hover:bg-blue-500"
            >
              Create Scan
            </Link>

            <Link
              href="/dashboard"
              className="rounded-xl border border-slate-700 px-6 py-3 font-medium hover:bg-slate-900"
            >
              View Dashboard
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
          <div className="space-y-4">
            <div className="rounded-xl bg-slate-800 p-4">
              <p className="text-sm text-slate-400">Last Scan</p>
              <p className="mt-1 text-xl font-semibold">example.com</p>
              <p className="mt-2 text-sm text-emerald-400">
                12 pages scanned • 0 critical issues
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-slate-800 p-4">
                <p className="text-sm text-slate-400">Uptime</p>
                <p className="mt-1 text-2xl font-bold">99.9%</p>
              </div>

              <div className="rounded-xl bg-slate-800 p-4">
                <p className="text-sm text-slate-400">Scans This Week</p>
                <p className="mt-1 text-2xl font-bold">24</p>
              </div>
            </div>

            <div className="rounded-xl bg-slate-800 p-4">
              <p className="text-sm text-slate-400">Detected Issues</p>
              <div className="mt-3 flex gap-2 text-sm">
                <span className="rounded-full bg-rose-500/20 px-3 py-1 text-rose-300">
                  2 Critical
                </span>
                <span className="rounded-full bg-amber-500/20 px-3 py-1 text-amber-300">
                  5 Medium
                </span>
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-300">
                  8 Low
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-slate-800">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-3">
          {[
            "Automated website scanning",
            "Detailed issue reporting",
            "Fast MVP-ready workflow",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="font-semibold">{item}</h3>
              <p className="mt-2 text-sm text-slate-400">
                Professional frontend foundation for the next phases.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}