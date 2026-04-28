// apps/web/app/dashboard/new/page.tsx
import ScanForm from "@/components/ScanForm";

export default function NewScanPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Create New Scan</h1>
        <p className="mt-2 text-slate-400">
          Configure a new automated website inspection.
        </p>
      </div>

      <ScanForm />
    </div>
  );
}