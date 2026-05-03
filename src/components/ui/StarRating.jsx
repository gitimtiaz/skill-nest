export default function StarRating({ rating, totalRatings, size = "sm" }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  const starSize = size === "lg" ? "text-xl" : "text-sm";

  return (
    <div className="flex items-center gap-1.5">
      <div className={`flex items-center gap-0.5 ${starSize}`}>
        {Array.from({ length: full }).map((_, i) => (
          <span key={`full-${i}`} className="text-amber-500">★</span>
        ))}
        {hasHalf && <span className="text-amber-400">★</span>}
        {Array.from({ length: empty }).map((_, i) => (
          <span key={`empty-${i}`} className="text-olive-dark/20">★</span>
        ))}
      </div>
      <span className="text-xs font-semibold text-olive-dark">{rating.toFixed(1)}</span>
      {totalRatings && (
        <span className="text-xs text-olive-dark/50">({totalRatings.toLocaleString()})</span>
      )}
    </div>
  );
}
