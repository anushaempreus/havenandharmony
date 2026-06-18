type Props = {
  items: string[];
  className?: string;
};

// Seamless infinite marquee: content is duplicated and the track shifts -50%.
export default function Marquee({ items, className = "" }: Props) {
  const row = [...items, ...items];
  return (
    <div className={`marquee-wrap overflow-hidden ${className}`}>
      <div className="marquee-track flex w-max items-center">
        {row.map((t, i) => (
          <span key={i} className="flex items-center">
            <span className="display-3 px-8 italic font-[family-name:var(--font-display)]">
              {t}
            </span>
            <span aria-hidden="true" className="opacity-40">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
