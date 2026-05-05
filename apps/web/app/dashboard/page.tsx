"use client";

import { useEffect, useState } from "react";
import StatCard from "@/components/StatCard";

export default function DashboardPage() {
  const [scans, setScans] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/scans")
      .then((res) => res.json())
      .then((data) => setScans(data));
  }, []);

  return (
    <div className="space-y-8">
      <section className="grid gap-6 md:grid-cols-3">
        <StatCard title="Total Scans" value={String(scans.length)} subtitle="All-time created scans" />
        <StatCard title="Issues Found" value="--" subtitle="Coming in next phase" />
        <StatCard title="Success Rate" value="--" subtitle="Coming in next phase" />
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h3 className="text-lg font-semibold text-white">Recent Scans</h3>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-300">
            <thead className="border-b border-slate-800 text-slate-400">
              <tr>
                <th className="py-3">Website</th>
                <th className="py-3">Scan Type</th>
                <th className="py-3">Pages</th>
              </tr>
            </thead>

            <tbody>
              {scans.map((scan: any) => (
                <tr key={scan.id} className="border-b border-slate-800">
                  <td className="py-4">{scan.url}</td>
                  <td className="py-4">{scan.scan_type}</td>
                  <td className="py-4">{scan.max_pages}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}