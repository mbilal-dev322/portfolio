"use client";

import { useRef, useState } from "react";

export default function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glare, setGlare] = useState({ "--glare-x": "50%", "--glare-y": "50%" } as React.CSSProperties);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 12;
    const rotateX = (0.5 - py) * 10;
    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
    });
    setGlare({ "--glare-x": `${px * 100}%`, "--glare-y": `${py * 100}%` } as React.CSSProperties);
  }

  function onLeave() {
    setStyle({ transform: "rotateX(0deg) rotateY(0deg) scale(1)" });
  }

  return (
    <div className={`tilt-scene ${className}`}>
      <div
        ref={ref}
        className="tilt-card glow-card relative h-full rounded-2xl border border-border-subtle bg-card"
        style={style}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <div className="tilt-glare" style={glare} />
        {children}
      </div>
    </div>
  );
}
