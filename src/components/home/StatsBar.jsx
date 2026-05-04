const stats = [
  { value: "10,000+", label: "Active Students" },
  { value: "8",       label: "Expert Courses"  },
  { value: "5",       label: "Top Instructors" },
  { value: "4.8★",    label: "Average Rating"  },
];

export default function StatsBar() {
  return (
    <section className="bg-white" style={{ borderBottom: "1px solid #E3DBBB" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="py-8 px-4 text-center"
              style={{
                borderRight:
                  /* hide right border on last of each row */
                  (i === 1 || i === 3) ? "none" : "1px solid #E3DBBB",
                borderBottom:
                  /* hide bottom border on bottom row */
                  i < 2 ? "1px solid #E3DBBB" : "none",
              }}
            >
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: "#41431B" }}
              >
                {stat.value}
              </div>
              <div className="text-sm font-medium" style={{ color: "rgba(65,67,27,0.50)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
