import { CheckCircle2 } from "lucide-react";

export default function AutoSaveIndicator() {
  return (
    <div className="flex items-center gap-2 text-green-400 text-sm mt-3">

      <CheckCircle2 size={16} />

      Auto Saved

    </div>
  );
}