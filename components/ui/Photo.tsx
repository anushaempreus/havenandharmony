type Props = {
  src: string;
  alt: string;
  className?: string;
  rounded?: boolean;
  zoom?: boolean;
  tint?: "forest" | "gold" | "blush"; // accepted for compatibility; no longer tints
  priority?: boolean;
};

// Renders a photo as a background-image over a neutral block, so a missing or
// slow image degrades to a soft cream panel rather than a coloured border or
// a broken-image icon.
export default function Photo({
  src,
  alt,
  className = "",
  rounded = true,
  zoom = false,
}: Props) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`bg-cover bg-center bg-bone-dark ${
        rounded ? "rounded-2xl" : ""
      } ${
        zoom ? "transition-transform duration-[1200ms] ease-out group-hover:scale-105" : ""
      } ${className}`}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}