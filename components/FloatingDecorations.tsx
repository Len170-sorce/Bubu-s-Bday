"use client";

const DECORATIONS = [
  { icon: "🌸", size: "text-xl", floatClass: "float-a", left: 8, top: 18 },
  { icon: "🌷", size: "text-lg", floatClass: "float-b", left: 88, top: 22 },
  { icon: "✨", size: "text-sm", floatClass: "sparkle-anim", left: 24, top: 38 },
  { icon: "💗", size: "text-base", floatClass: "float-c", left: 74, top: 48 },
  { icon: "🌺", size: "text-xl", floatClass: "float-b", left: 12, top: 62 },
  { icon: "⭐", size: "text-sm", floatClass: "sparkle-anim", left: 84, top: 72 },
  { icon: "💮", size: "text-lg", floatClass: "float-a", left: 48, top: 82 },
  { icon: "🌸", size: "text-base", floatClass: "float-c", left: 92, top: 12 },
  { icon: "✨", size: "text-xs", floatClass: "sparkle-anim", left: 6, top: 88 },
  { icon: "💗", size: "text-sm", floatClass: "float-b", left: 65, top: 28 },
  { icon: "🌷", size: "text-xl", floatClass: "float-a", left: 32, top: 76 },
  { icon: "⭐", size: "text-base", floatClass: "float-c", left: 54, top: 92 },
];

export default function FloatingDecorations() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {DECORATIONS.map((item, index) => (
        <div
          key={index}
          className={`absolute select-none ${item.size} ${item.floatClass}`}
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            opacity: 0.16,
            animationDelay: `${index * -0.6}s`,
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}
