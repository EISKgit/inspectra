"use client";

import { useState } from "react";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function ScanForm() {
  const [url, setUrl] = useState("");
  const [scanType, setScanType] = useState("quick");
  const [maxPages, setMaxPages] = useState(10);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setMessage("");
    setError("");

    if (!url.trim()) {
      setError("Please enter a website URL.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${API_URL}/scans/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url,
            scan_type: scanType,
            max_pages: maxPages,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Request failed with status ${response.status}`
        );
      }

      const data = await response.json();

      console.log("Scan created:", data);

      setMessage(
        `Scan #${data.id} created successfully.`
      );

      // Reset form
      setUrl("");
      setScanType("quick");
      setMaxPages(10);
    } catch (err) {
      console.error(err);

      setError(
        "Failed to create scan. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Website URL
        </label>

        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Scan Type
        </label>

        <select
          value={scanType}
          onChange={(e) => setScanType(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
        >
          <option value="quick">
            Quick Scan
          </option>

          <option value="full">
            Full Scan
          </option>

          <option value="performance">
            Performance Scan
          </option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Max Pages
        </label>

        <input
          type="number"
          min="1"
          value={maxPages}
          onChange={(e) =>
            setMaxPages(Number(e.target.value))
          }
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
        />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={loading}
        className="w-full rounded-xl bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading
          ? "Creating Scan..."
          : "Create Scan"}
      </button>

      {message && (
        <div className="rounded-lg border border-emerald-700 bg-emerald-900/20 p-3 text-sm text-emerald-400">
          {message}
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-red-700 bg-red-900/20 p-3 text-sm text-red-400">
          {error}
        </div>
      )}
    </form>
  );
}