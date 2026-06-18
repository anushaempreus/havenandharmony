// Fine single-line motif used as a quiet section divider — the brand's signature mark.
export default function EucalyptDivider({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`flex justify-center ${className}`} aria-hidden="true">
      <svg width="120" height="24" viewBox="0 0 120 24" fill="none">
        <path
          d="M2 12h36M82 12h36"
          stroke="currentColor"
          strokeWidth="1"
          className="text-forest/40"
        />
        <path
          d="M60 4c-4 3-6 5-6 8s2 5 6 8c4-3 6-5 6-8s-2-5-6-8z"
          stroke="currentColor"
          strokeWidth="1"
          className="text-forest/70"
          fill="none"
        />
        <path
          d="M60 4v16"
          stroke="currentColor"
          strokeWidth="1"
          className="text-forest/40"
        />
      </svg>
    </div>
  );
}
