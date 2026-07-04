export default function ExamSummary() {
  return (
    <div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-8">

      <h1 className="text-3xl font-bold mb-6">
        Exam Submitted 🎉
      </h1>

      <div className="grid grid-cols-3 gap-5">

        <div className="rounded-xl bg-white/5 p-5">
          <p className="text-gray-400">Solved</p>
          <h2 className="text-3xl font-bold text-cyan-400">
            8
          </h2>
        </div>

        <div className="rounded-xl bg-white/5 p-5">
          <p className="text-gray-400">Marked</p>
          <h2 className="text-3xl font-bold text-yellow-400">
            2
          </h2>
        </div>

        <div className="rounded-xl bg-white/5 p-5">
          <p className="text-gray-400">Time Left</p>
          <h2 className="text-3xl font-bold text-green-400">
            15:30
          </h2>
        </div>

      </div>

    </div>
  );
}