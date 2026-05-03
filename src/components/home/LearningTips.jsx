import SectionHeading from "@/components/ui/SectionHeading";

const tips = [
  {
    id: 1,
    icon: "🎯",
    title: "Set a Daily Learning Goal",
    desc: "Even 30 focused minutes a day compounds into real skill over weeks. Consistency beats intensity every time.",
    featured: false,
  },
  {
    id: 2,
    icon: "⏱️",
    title: "Use the Pomodoro Technique",
    desc: "25 minutes of deep focus, then a 5-minute break. Your brain retains more and fatigue stays low.",
    featured: false,
  },
  {
    id: 3,
    icon: "📝",
    title: "Take Notes by Hand",
    desc: "Writing forces you to process and rephrase. You will remember far more than if you just watch and scroll.",
    featured: false,
  },
  {
    id: 4,
    icon: "🔁",
    title: "Review Before You Start",
    desc: "Spend the first 5 minutes of every session revisiting yesterday's material. Spaced repetition is the single most effective learning technique known to science — use it.",
    featured: true,
  },
];

export default function LearningTips() {
  const regular = tips.filter((t) => !t.featured);
  const featured = tips.find((t) => t.featured);

  return (
    <section className="py-20" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Study smarter"
          title="📚 Learning Tips That Actually Work"
          subtitle="Techniques used by top performers — not productivity fluff."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: 3 regular tip cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {/* large screens stack vertically in col-span-2, md show 2 cols */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {regular.map((tip) => (
                <div
                  key={tip.id}
                  className="rounded-2xl p-6 border flex flex-col gap-3"
                  style={{
                    background: "#F8F3E1",
                    borderColor: "#E3DBBB",
                    borderLeft: "4px solid #AEB784",
                  }}
                >
                  <span className="text-2xl">{tip.icon}</span>
                  <h3
                    className="font-bold text-base"
                    style={{ color: "#41431B" }}
                  >
                    {tip.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(65,67,27,0.65)" }}>
                    {tip.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: featured large tip */}
          {featured && (
            <div
              className="rounded-2xl p-8 flex flex-col justify-between gap-6"
              style={{ background: "#41431B" }}
            >
              <div>
                <span className="text-4xl mb-4 block">{featured.icon}</span>
                <h3
                  className="font-bold text-xl mb-3 leading-snug"
                  style={{ color: "#F8F3E1" }}
                >
                  {featured.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(248,243,225,0.70)" }}
                >
                  {featured.desc}
                </p>
              </div>
              <div
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#AEB784" }}
              >
                Featured Tip ✦
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
