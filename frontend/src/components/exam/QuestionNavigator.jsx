export default function QuestionNavigator({
  total,
  current,
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h2 className="text-lg font-bold mb-4">
        Questions
      </h2>

      <div className="grid grid-cols-5 gap-3">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            className={`h-12 rounded-xl transition ${
              current === index + 1
                ? "bg-cyan-500 text-black font-bold"
                : "bg-[#111827] hover:bg-cyan-500/20"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}