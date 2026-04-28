// apps/web/components/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Create Scan", href: "/dashboard/new" },
  { name: "Reports", href: "#" },
  { name: "Settings", href: "#" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full border-b border-slate-800 bg-slate-950 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
      <div className="px-6 py-5">
        <h1 className="text-2xl font-bold text-white">Inspectra</h1>
        <p className="mt-1 text-sm text-slate-400">QA Intelligence</p>
      </div>

      <nav className="flex gap-2 overflow-x-auto px-4 pb-4 md:block md:space-y-2 md:px-4">
        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`block rounded-xl px-4 py-3 text-sm font-medium whitespace-nowrap transition ${
                active
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-900 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}