import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        y: -5,
      }}
      className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6"
    >
      <p className="text-gray-400">
        {title}
      </p>

      <h2
        className="text-4xl font-bold mt-4"
        style={{
          color,
        }}
      >
        {value}
      </h2>
    </motion.div>
  );
}