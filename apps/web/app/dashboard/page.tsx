// apps/web/app/dashboard/page.tsx
import StatCard from "@/components/StatCard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 md:grid-cols-3">
        <StatCard
          title="Total Scans"
          value="124"
          subtitle="All-time created scans"
        />
        <StatCard
          title="Issues Found"
          value="38"
          subtitle="Across all projects"
        />
        <StatCard
          title="Success Rate"
          value="92%"
          subtitle="Healthy scan outcomes"
        />
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h3 className="text-lg font-semibold text-white">Recent Scans</h3>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-300">
            <thead className="border-b border-slate-800 text-slate-400">
              <tr>
                <th className="py-3">Website</th>
                <th className="py-3">Status</th>
                <th className="py-3">Pages</th>
                <th className="py-3">Date</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["example.com", "Passed", "12", "Today"],
                ["startup.io", "Issues Found", "24", "Today"],
                ["shopzone.com", "Passed", "8", "Yesterday"],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-slate-800">
                  <td className="py-4">{row[0]}</td>
                  <td className="py-4">{row[1]}</td>
                  <td className="py-4">{row[2]}</td>
                  <td className="py-4">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}