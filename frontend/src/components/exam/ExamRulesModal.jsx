export default function ExamRulesModal({ onStart }) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#0f172a] rounded-3xl p-8 w-[600px] border border-cyan-500/20">
        <h2 className="text-3xl font-bold mb-5">
          Coding Assessment Rules
        </h2>

        <ul className="space-y-3 text-gray-300 list-disc ml-6">
          <li>60 minute duration</li>
          <li>No tab switching</li>
          <li>Auto Save enabled</li>
          <li>Timer cannot be paused</li>
          <li>Submit before timer ends</li>
        </ul>

        <button
          onClick={onStart}
          className="mt-8 w-full bg-cyan-500 text-black py-3 rounded-xl font-bold"
        >
          Start Exam
        </button>
      </div>
    </div>
  );
}