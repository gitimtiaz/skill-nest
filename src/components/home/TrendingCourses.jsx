import SectionHeading from "@/components/ui/SectionHeading";
import StarRating from "@/components/ui/StarRating";
import Link from "next/link";
import { Clock, Users } from "lucide-react";

export default function TrendingCourses({ courses }) {
  return (
    <section className="py-20" style={{ background: "#E3DBBB" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionHeading
            label="Hot right now"
            title="🆕 New & Trending This Month"
            subtitle="Courses gaining traction fast — join before they fill up."
          />
          <Link
            href="/courses"
            className="shrink-0 text-sm font-semibold px-5 py-2.5 rounded-xl
                       border transition-colors duration-150"
            style={{ borderColor: "#41431B", color: "#41431B", background: "transparent" }}
          >
            Browse All →
          </Link>
        </div>

        {/* Horizontal scroll row on mobile, 4-col grid on desktop */}
        <div className="flex gap-5 overflow-x-auto pb-3 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
          {courses.map((course) => (
            <div
              key={course.id}
              className="min-w-[260px] lg:min-w-0 rounded-2xl border overflow-hidden
                         flex flex-col hover:shadow-md transition-shadow duration-200"
              style={{ background: "#fff", borderColor: "rgba(65,67,27,0.12)" }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-36 object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* NEW badge */}
                {course.isNew && (
                  <span
                    className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full
                               text-xs font-bold"
                    style={{ background: "#41431B", color: "#F8F3E1" }}
                  >
                    NEW
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-4 flex flex-col gap-2 flex-1">
                {/* Category */}
                <span
                  className="text-xs font-medium"
                  style={{ color: "#AEB784" }}
                >
                  {course.category}
                </span>

                {/* Title */}
                <h3
                  className="font-bold text-sm leading-snug line-clamp-2"
                  style={{ color: "#41431B" }}
                >
                  {course.title}
                </h3>

                {/* Instructor */}
                <div className="flex items-center gap-1.5">
                  <img
                    src={course.instructorImage}
                    alt={course.instructor}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <span className="text-xs" style={{ color: "rgba(65,67,27,0.55)" }}>
                    {course.instructor}
                  </span>
                </div>

                <StarRating rating={course.rating} totalRatings={course.totalRatings} />

                {/* Meta */}
                <div
                  className="flex items-center gap-3 text-xs"
                  style={{ color: "rgba(65,67,27,0.50)" }}
                >
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={11} /> {course.enrolled.toLocaleString()}
                  </span>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-3" style={{ borderTop: "1px solid #E3DBBB" }}>
                  <Link
                    href={`/courses/${course.id}`}
                    className="block w-full text-center py-2 rounded-xl text-xs font-semibold
                               transition-colors duration-150"
                    style={{ background: "#41431B", color: "#F8F3E1" }}
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
