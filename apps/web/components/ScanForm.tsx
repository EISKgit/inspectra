"use client";

import { useState } from "react";

export default function ScanForm() {
  const [url, setUrl] = useState("");
  const [scanType, setScanType] = useState("Quick Scan");
  const [maxPages, setMaxPages] = useState(10);

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:8000/scans/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
        scan_type: scanType,
        max_pages: maxPages,
      }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <form className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
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
          <option>Quick Scan</option>
          <option>Full Scan</option>
          <option>Performance Scan</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Max Pages
        </label>
        <input
          type="number"
          value={maxPages}
          onChange={(e) => setMaxPages(Number(e.target.value))}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
        />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="w-full rounded-xl bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-500"
      >
        Create Scan
      </button>
    </form>
  );
}