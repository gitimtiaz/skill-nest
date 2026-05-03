import CourseCard from "@/components/courses/CourseCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

export default function PopularCourses({ courses }) {
  return (
    <section id="popular" className="py-20 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionHeading
            label="Most loved by learners"
            title="🔥 Popular Courses"
            subtitle="Top-rated courses picked by thousands of students just like you."
          />
          <Link
            href="/courses"
            className="shrink-0 text-sm font-semibold text-olive-dark border border-olive-mid
                       px-5 py-2.5 rounded-xl hover:bg-olive-dark hover:text-cream-light
                       transition-colors duration-150"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
