import { useState } from "react";
import LanguageDropdown from "./LanguageDropdown";
import SubmitButton from "./SubmitButton";

export default function BottomToolbar() {
  const [lang, setLang] = useState("ts");
  const [cpMode, setCpMode] = useState(false);

  return (
    <div className="fixed left-0 right-0 bottom-4 flex items-center justify-center pointer-events-none">
      <div className="pointer-events-auto w-full max-w-3xl mx-4 bg-white/4 backdrop-blur rounded-2xl p-3 flex items-center gap-4 border border-white/6">
        <div className="flex items-center gap-2">
          <LanguageDropdown value={lang} onChange={setLang} />
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={cpMode}
                onChange={() => setCpMode((s) => !s)}
              />
              <span className="select-none">CP / Exam</span>
            </label>
          </div>

          <SubmitButton />
        </div>
      </div>
    </div>
  );
}