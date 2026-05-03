export default function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="mb-10">
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest
                         text-olive-mid mb-2">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-olive-dark leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-olive-dark/60 text-base max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}
