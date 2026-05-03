const stats = [
  { value: "10,000+", label: "Active Students" },
  { value: "8",       label: "Expert Courses" },
  { value: "5",       label: "Top Instructors" },
  { value: "4.8★",    label: "Average Rating" },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-8 px-6 text-center
                ${i < stats.length - 1 ? "border-r border-cream" : ""}`}
            >
              <div className="text-3xl font-bold text-olive-dark mb-1">{stat.value}</div>
              <div className="text-sm text-olive-dark/50 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
