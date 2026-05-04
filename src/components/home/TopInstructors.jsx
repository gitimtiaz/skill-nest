import SectionHeading from "@/components/ui/SectionHeading";
import StarRating from "@/components/ui/StarRating";
import Link from "next/link";

export default function TopInstructors({ instructors }) {
  return (
    <section id="instructors" className="py-20" style={{ background: "#F8F3E1" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionHeading
            label="World-class educators"
            title="🏆 Learn From the Best"
            subtitle="Our instructors are practitioners — they build things, then teach them."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="rounded-2xl border overflow-hidden flex flex-col
                         hover:shadow-md transition-shadow duration-200"
              style={{ background: "#fff", borderColor: "#E3DBBB" }}
            >
              {/* Banner + avatar */}
              <div
                className="h-16 relative shrink-0"
                style={{ background: "linear-gradient(135deg, #41431B, #AEB784)" }}
              >
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white
                             absolute -bottom-8 left-5"
                />
              </div>

              {/* Body */}
              <div className="pt-10 px-5 pb-5 flex flex-col gap-3 flex-1">
                <div>
                  <h3
                    className="font-bold text-base leading-tight"
                    style={{ color: "#41431B" }}
                  >
                    {instructor.name}
                  </h3>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(65,67,27,0.55)" }}>
                    {instructor.title}
                  </p>
                </div>

                <span
                  className="self-start px-2.5 py-0.5 rounded-full text-xs font-medium"
                  style={{ background: "rgba(174,183,132,0.25)", color: "#41431B" }}
                >
                  {instructor.specialty}
                </span>

                <div
                  className="flex items-center gap-3 text-xs"
                  style={{ color: "rgba(65,67,27,0.55)" }}
                >
                  <span>{instructor.courses} courses</span>
                  <span>·</span>
                  <span>{instructor.students.toLocaleString()} students</span>
                </div>

                <StarRating rating={instructor.rating} />

                <div className="flex flex-wrap gap-1.5 mt-1">
                  {instructor.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs"
                      style={{ background: "#F8F3E1", color: "#41431B" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/courses"
                  className="instructor-btn mt-auto pt-3 block text-center py-2
                             rounded-xl text-xs font-semibold border transition-all duration-150"
                  style={{ borderColor: "#41431B", color: "#41431B" }}
                >
                  View Courses →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          .instructor-btn:hover {
            background: #41431B !important;
            color: #F8F3E1 !important;
          }
        `}</style>
      </div>
    </section>
  );
}
