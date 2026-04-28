// apps/web/components/Navbar.tsx
export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-6 py-4">
      <div>
        <h2 className="text-xl font-semibold text-white">Dashboard</h2>
        <p className="text-sm text-slate-400">
          Monitor scans and website quality
        </p>
      </div>

      <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
        Upgrade
      </button>
    </header>
  );
}