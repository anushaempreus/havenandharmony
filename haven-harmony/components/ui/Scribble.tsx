type Props = {
  variant?: "underline" | "circle";
  className?: string;
};

// Hand-drawn accent marks — a playful, boutique signature layer.
export default function Scribble({ variant = "underline", className = "" }: Props) {
  if (variant === "circle") {
    return (
      <svg
        viewBox="0 0 240 96"
        fill="none"
        aria-hidden="true"
        className={className}
        preserveAspectRatio="none"
      >
        <path
          d="M168 8C96-2 28 12 18 44c-9 30 52 46 120 44 62-2 92-22 86-44-5-19-40-30-78-34"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 300 18"
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M4 11C58 4 112 4 152 8c46 5 96-4 144 1"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
