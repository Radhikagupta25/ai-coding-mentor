export default function LanguageDropdown({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className="bg-white/5 text-sm rounded-md px-3 py-2"
    >
      <option value="ts">TypeScript</option>
      <option value="js">JavaScript</option>
      <option value="py">Python</option>
      <option value="cpp">C++</option>
    </select>
  );
}