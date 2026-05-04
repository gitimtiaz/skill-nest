import { getCourseById, getCourses } from "@/lib/api";
import CourseDetailClient from "./CourseDetailClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((c) => ({ id: String(c.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const course = await getCourseById(id);
  if (!course) return { title: "Course Not Found — SkillNest" };
  return {
    title: `${course.title} — SkillNest`,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }) {
  const { id } = await params;
  const course = await getCourseById(id);
  if (!course) notFound();
  return <CourseDetailClient course={course} />;
}
