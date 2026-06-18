"use client";

import { useEffect, useRef, useState } from "react";

// Reveal that wipes content in from beneath a mask — used for headings.
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={`inline-block overflow-hidden ${className}`}>
      <span
        className="inline-block"
        style={{
          transform: visible ? "translateY(0)" : "translateY(110%)",
          opacity: visible ? 1 : 0,
          transition: `transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s, opacity 0.8s ease ${delay}s`,
        }}
      >
        {children}
      </span>
    </span>
  );
}
