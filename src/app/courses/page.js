import CourseGrid from "@/components/courses/CourseGrid";
import { getCourses } from "@/lib/api";

export const metadata = {
  title: "All Courses — SkillNest",
  description:
    "Browse all courses on SkillNest — Web Development, AI, ML, Python, Android, WebOps, Cyber Security and more.",
};

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div style={{ background: "#F8F3E1" }} className="min-h-screen">
      <div style={{ background: "#41431B" }} className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "#AEB784" }}
          >
            Everything in one place
          </p>
          <h1
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: "#F8F3E1" }}
          >
            All Courses
          </h1>
          <p className="text-base max-w-xl" style={{ color: "rgba(248,243,225,0.65)" }}>
            {courses.length} courses across Web Development, AI, ML, Python,
            Android, WebOps, Cyber Security and more. Find yours.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CourseGrid courses={courses} initialCategory="All" />
      </div>
    </div>
  );
}