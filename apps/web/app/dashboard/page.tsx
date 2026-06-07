"use client";

import { useEffect, useState } from "react";

type Scan = {
  id: number;
  url: string;
  status: string;
  screenshot_path?: string;
};

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function DashboardPage() {
  const [scans, setScans] = useState<Scan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchScans = async () => {
    try {
      const response = await fetch(
        `${API_URL}/scans`
      );

      if (!response.ok) {
        throw new Error(
          `Failed with status ${response.status}`
        );
      }

      const data = await response.json();

      setScans(data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to load scans.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScans();

    const interval = setInterval(
      fetchScans,
      5000
    );

    return () => clearInterval(interval);
  }, []);

  const getStatusClasses = (
    status: string
  ) => {
    switch (status) {
      case "COMPLETED":
        return "bg-emerald-500/20 text-emerald-400";

      case "RUNNING":
        return "bg-blue-500/20 text-blue-400";

      case "FAILED":
        return "bg-red-500/20 text-red-400";

      default:
        return "bg-yellow-500/20 text-yellow-400";
    }
  };

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">
            Recent Scans
          </h3>

          <span className="text-sm text-slate-400">
            Auto refresh: 5s
          </span>
        </div>

        {loading ? (
          <div className="py-8 text-center text-slate-400">
            Loading scans...
          </div>
        ) : error ? (
          <div className="rounded-lg border border-red-700 bg-red-900/20 p-4 text-red-400">
            {error}
          </div>
        ) : scans.length === 0 ? (
          <div className="py-8 text-center text-slate-400">
            No scans found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-300">
              <thead className="border-b border-slate-800 text-slate-400">
                <tr>
                  <th className="py-3">ID</th>
                  <th className="py-3">Website</th>
                  <th className="py-3">Status</th>
                  <th className="py-3">Screenshot</th>
                </tr>
              </thead>

              <tbody>
                {scans.map((scan) => (
                  <tr
                    key={scan.id}
                    className="border-b border-slate-800"
                  >
                    <td className="py-4">
                      #{scan.id}
                    </td>

                    <td className="py-4">
                      {scan.url}
                    </td>

                    <td className="py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusClasses(
                          scan.status
                        )}`}
                      >
                        {scan.status}
                      </span>
                    </td>

                    <td className="py-4">
                      {scan.screenshot_path ? (
                        <a
                          href={`${API_URL}/${scan.screenshot_path}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300"
                        >
                          View Screenshot
                        </a>
                      ) : (
                        <span className="text-slate-500">
                          Not Available
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}