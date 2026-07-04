export default function SubmitButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-md font-semibold shadow-md hover:from-emerald-600"
    >
      Submit
    </button>
  );
}