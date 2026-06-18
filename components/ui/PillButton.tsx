import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
  className?: string;
};

export default function PillButton({
  href,
  children,
  variant = "solid",
  external = false,
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";
  const styles =
    variant === "solid"
      ? "bg-forest text-bone hover:bg-forest-deep"
      : "border border-forest text-forest hover:bg-forest hover:text-bone";

  const cls = `${base} ${styles} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
