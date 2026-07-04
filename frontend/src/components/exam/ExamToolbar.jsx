import { Clock, Flag, Send } from "lucide-react";
import { useState, useEffect } from "react";

export default function ExamToolbar({
  currentQuestion,
  totalQuestions,
}) {
  const [seconds, setSeconds] = useState(60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="mb-5 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-5 flex items-center justify-between">
      <div>
        <h2 className="font-bold text-xl">
          Coding Assessment
        </h2>

        <p className="text-gray-400 text-sm">
          Question {currentQuestion} / {totalQuestions}
        </p>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl">
          <Clock size={18} />

          <span className="font-semibold">
            {mins}:{secs.toString().padStart(2, "0")}
          </span>
        </div>

        <button className="flex items-center gap-2 bg-yellow-500/20 px-4 py-2 rounded-xl hover:bg-yellow-500/30 transition">
          <Flag size={18} />

          Mark Review
        </button>

        <button className="flex items-center gap-2 bg-red-500 px-4 py-2 rounded-xl font-semibold hover:bg-red-400 transition">
          <Send size={18} />

          Submit Exam
        </button>
      </div>
    </div>
  );
}