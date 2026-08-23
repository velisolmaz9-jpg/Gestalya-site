interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-champagne-300" : "text-gold"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl font-bold sm:text-4xl ${light ? "text-white" : "text-navy-900"}`}>{title}</h2>
      {subtitle && (
        <p className={`max-w-2xl text-base sm:text-lg ${light ? "text-champagne-100/90" : "text-navy-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
