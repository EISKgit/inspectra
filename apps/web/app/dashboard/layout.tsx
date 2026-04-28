// apps/web/app/dashboard/layout.tsx
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-slate-950 md:flex">
      <Sidebar />

      <section className="flex-1">
        <Navbar />
        <div className="p-6">{children}</div>
      </section>
    </main>
  );
}