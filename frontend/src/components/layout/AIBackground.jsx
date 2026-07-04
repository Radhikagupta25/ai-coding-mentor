const dots = Array.from({ length: 180 });

export default function AIBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Main Background */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Cyan Glow */}
      <div className="absolute -top-52 -left-52 w-[700px] h-[700px] rounded-full bg-cyan-500/15 blur-[180px] animate-pulse" />

      {/* Purple Glow */}
      <div className="absolute -bottom-52 -right-52 w-[700px] h-[700px] rounded-full bg-violet-500/15 blur-[180px] animate-pulse" />

      {/* Blue Glow */}
      <div className="absolute top-1/3 left-1/2 w-[450px] h-[450px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[150px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
        `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glowing AI Dots */}
      {dots.map((_, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-cyan-300/60 animate-pulse"
          style={{
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${2 + Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Floating Particles */}

      <div className="absolute top-[15%] left-[20%] w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
      <div className="absolute top-[30%] left-[70%] w-3 h-3 rounded-full bg-violet-400 animate-pulse" />
      <div className="absolute top-[75%] left-[40%] w-2 h-2 rounded-full bg-blue-400 animate-ping" />
      <div className="absolute top-[60%] left-[85%] w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
      <div className="absolute top-[45%] left-[10%] w-3 h-3 rounded-full bg-violet-500 animate-pulse" />

      {/* Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, white 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

    </div>
  );
}