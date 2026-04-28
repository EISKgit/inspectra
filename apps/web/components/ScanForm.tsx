// apps/web/components/ScanForm.tsx
export default function ScanForm() {
  return (
    <form className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Website URL
        </label>
        <input
          type="url"
          placeholder="https://example.com"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Scan Type
        </label>
        <select className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500">
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
          defaultValue={10}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
        />
      </div>

      <button
        type="button"
        className="w-full rounded-xl bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-500"
      >
        Create Scan
      </button>
    </form>
  );
}