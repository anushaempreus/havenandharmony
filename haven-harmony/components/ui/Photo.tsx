type Props = {
  src: string;
  alt: string;
  className?: string;
  rounded?: boolean;
  zoom?: boolean;
  tint?: "forest" | "gold" | "blush";
  priority?: boolean;
};

// Renders a photo as a background-image over a coloured block, so a missing or
// slow image degrades to an on-brand panel rather than a broken-image icon.
export default function Photo({
  src,
  alt,
  className = "",
  rounded = true,
  zoom = false,
  tint = "forest",
}: Props) {
  const tintClass =
    tint === "gold" ? "bg-gold/20" : tint === "blush" ? "bg-blush/20" : "bg-forest/15";

  return (
    <div
      role="img"
      aria-label={alt}
      className={`bg-cover bg-center ${tintClass} ${
        rounded ? "rounded-2xl" : ""
      } ${
        zoom ? "transition-transform duration-[1200ms] ease-out group-hover:scale-105" : ""
      } ${className}`}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}
