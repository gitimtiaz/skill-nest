"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import StarRating from "@/components/ui/StarRating";
import Loader from "@/components/ui/Loader";
import Link from "next/link";
import {
  Clock,
  Users,
  Signal,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  BookOpen,
  ArrowLeft,
  Lock,
} from "lucide-react";

const levelColors = {
  Beginner:     { bg: "#dcfce7", text: "#166534" },
  Intermediate: { bg: "#fef9c3", text: "#854d0e" },
  Advanced:     { bg: "#fee2e2", text: "#991b1b" },
};

export default function CourseDetailClient({ course }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [openWeek, setOpenWeek] = useState(null);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push(`/login?redirect=/courses/${course.id}`);
    }
  }, [user, loading, router, course.id]);

  // Show spinner while auth state is being determined
  if (loading) return <Loader text="Checking access..." />;

  // Show lock screen shortly before redirect fires
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#F8F3E1" }}>
        <div className="text-center px-6 py-16">
          <Lock size={40} className="mx-auto mb-4" style={{ color: "#AEB784" }} />
          <h2 className="text-xl font-bold mb-2" style={{ color: "#41431B" }}>
            Login Required
          </h2>
          <p className="text-sm mb-6" style={{ color: "rgba(65,67,27,0.60)" }}>
            You need to be logged in to view course details.
          </p>
          <Link
            href={`/login?redirect=/courses/${course.id}`}
            className="px-6 py-3 rounded-xl text-sm font-semibold"
            style={{ background: "#41431B", color: "#F8F3E1" }}
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  const lvl = levelColors[course.level] || { bg: "#F8F3E1", text: "#41431B" };

  return (
    <div style={{ background: "#F8F3E1" }} className="min-h-screen">

      {/* Dark header banner */}
      <div style={{ background: "#41431B" }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-sm mb-6 transition-opacity hover:opacity-75"
            style={{ color: "#AEB784" }}
          >
            <ArrowLeft size={15} /> Back to Courses
          </Link>

          {/* Category + level */}
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: "rgba(174,183,132,0.20)", color: "#AEB784" }}
            >
              {course.category}
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: lvl.bg, color: lvl.text }}
            >
              {course.level}
            </span>
            {course.isNew && (
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "#AEB784", color: "#41431B" }}
              >
                NEW
              </span>
            )}
          </div>

          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-4 max-w-3xl"
            style={{ color: "#F8F3E1" }}
          >
            {course.title}
          </h1>

          {/* Rating row */}
          <div className="mb-4">
            <StarRating
              rating={course.rating}
              totalRatings={course.totalRatings}
              size="lg"
            />
          </div>

          {/* Instructor */}
          <div className="flex items-center gap-2.5">
            <img
              src={course.instructorImage}
              alt={course.instructor}
              className="w-9 h-9 rounded-full object-cover border-2"
              style={{ borderColor: "#AEB784" }}
            />
            <div>
              <p className="text-xs" style={{ color: "rgba(248,243,225,0.55)" }}>
                Instructor
              </p>
              <p className="text-sm font-semibold" style={{ color: "#F8F3E1" }}>
                {course.instructor}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left main content */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* Course image */}
            <img
              src={course.image}
              alt={course.title}
              className="w-full rounded-2xl object-cover"
              style={{ maxHeight: "380px" }}
            />

            {/* Quick meta */}
            <div
              className="grid grid-cols-3 rounded-2xl border overflow-hidden"
              style={{ background: "#fff", borderColor: "#E3DBBB", divideColor: "#E3DBBB" }}
            >
              {[
                { icon: Clock,   label: "Duration",  value: course.duration },
                { icon: Users,   label: "Students",  value: course.enrolled.toLocaleString() },
                { icon: Signal,  label: "Level",     value: course.level },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex flex-col items-center py-5 px-3 text-center" style={{ borderRight: "1px solid #E3DBBB" }}>
                  <Icon size={18} className="mb-1.5" style={{ color: "#AEB784" }} />
                  <p className="text-xs" style={{ color: "rgba(65,67,27,0.50)" }}>{label}</p>
                  <p className="text-sm font-bold mt-0.5" style={{ color: "#41431B" }}>{value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div
              className="rounded-2xl border p-6"
              style={{ background: "#fff", borderColor: "#E3DBBB" }}
            >
              <h2 className="text-lg font-bold mb-3" style={{ color: "#41431B" }}>
                About This Course
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(65,67,27,0.70)" }}>
                {course.description}
              </p>

              {/* Tags */}
              {course.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ background: "#F8F3E1", color: "#41431B" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Curriculum */}
            <div
              className="rounded-2xl border overflow-hidden"
              style={{ background: "#fff", borderColor: "#E3DBBB" }}
            >
              <div className="px-6 py-5" style={{ borderBottom: "1px solid #E3DBBB" }}>
                <h2 className="text-lg font-bold" style={{ color: "#41431B" }}>
                  Course Curriculum
                </h2>
                <p className="text-xs mt-1" style={{ color: "rgba(65,67,27,0.50)" }}>
                  {course.curriculum.length} weeks ·{" "}
                  {course.curriculum.reduce((acc, w) => acc + w.lessons, 0)} lessons total
                </p>
              </div>

              <div className="divide-y" style={{ divideColor: "#E3DBBB" }}>
                {course.curriculum.map((week) => (
                  <div key={week.week} style={{ borderBottom: "1px solid #E3DBBB" }}>
                    {/* toggle */}
                    <button
                      onClick={() =>
                        setOpenWeek(openWeek === week.week ? null : week.week)
                      }
                      className="w-full flex items-center justify-between px-6 py-4
                                 hover:opacity-80 transition-opacity text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-7 h-7 rounded-full flex items-center justify-center
                                     text-xs font-bold shrink-0"
                          style={{ background: "#F8F3E1", color: "#41431B" }}
                        >
                          {week.week}
                        </span>
                        <span className="text-sm font-semibold" style={{ color: "#41431B" }}>
                          {week.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs" style={{ color: "rgba(65,67,27,0.50)" }}>
                          {week.lessons} lessons
                        </span>
                        {openWeek === week.week
                          ? <ChevronUp size={16} style={{ color: "#AEB784" }} />
                          : <ChevronDown size={16} style={{ color: "#AEB784" }} />}
                      </div>
                    </button>

                    {/* Expanded content */}
                    {openWeek === week.week && (
                      <div className="px-6 pb-4">
                        <ul className="flex flex-col gap-2">
                          {Array.from({ length: week.lessons }).map((_, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2.5 text-xs py-1.5"
                              style={{ color: "rgba(65,67,27,0.65)" }}
                            >
                              <CheckCircle
                                size={13}
                                className="shrink-0"
                                style={{ color: "#AEB784" }}
                              />
                              Lesson {i + 1} — {week.title} Part {i + 1}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sticky enroll card */}
          <div className="lg:col-span-1">
            <div
              className="rounded-2xl border p-6 flex flex-col gap-4 lg:sticky lg:top-24"
              style={{ background: "#fff", borderColor: "#E3DBBB" }}
            >
              <div>
                <p className="text-3xl font-bold" style={{ color: "#41431B" }}>
                  ${course.price}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(65,67,27,0.50)" }}>
                  One-time payment · Lifetime access
                </p>
              </div>

              <button
                className="w-full py-3 rounded-xl font-semibold text-sm
                           transition-colors duration-150"
                style={{ background: "#41431B", color: "#F8F3E1" }}
              >
                Enroll Now
              </button>

              <button
                className="w-full py-3 rounded-xl font-semibold text-sm border
                           transition-colors duration-150"
                style={{ borderColor: "#41431B", color: "#41431B" }}
              >
                Try Free Preview
              </button>

              {/* Includes list */}
              <div style={{ borderTop: "1px solid #E3DBBB" }} className="pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider mb-3"
                   style={{ color: "rgba(65,67,27,0.50)" }}>
                  This course includes
                </p>
                <ul className="flex flex-col gap-2.5">
                  {[
                    `${course.duration} of on-demand content`,
                    "Certificate of completion",
                    "Full lifetime access",
                    "Access on mobile & desktop",
                    "30-day money-back guarantee",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs"
                        style={{ color: "rgba(65,67,27,0.65)" }}>
                      <CheckCircle size={13} className="shrink-0 mt-0.5"
                                   style={{ color: "#AEB784" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructor mini card */}
              <div
                className="rounded-xl p-4 flex items-center gap-3"
                style={{ background: "#F8F3E1" }}
              >
                <img
                  src={course.instructorImage}
                  alt={course.instructor}
                  className="w-11 h-11 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="text-xs" style={{ color: "rgba(65,67,27,0.50)" }}>
                    Your instructor
                  </p>
                  <p className="text-sm font-bold" style={{ color: "#41431B" }}>
                    {course.instructor}
                  </p>
                </div>
              </div>

              {/* Enrolled count */}
              <div className="flex items-center gap-2">
                <BookOpen size={14} style={{ color: "#AEB784" }} />
                <p className="text-xs" style={{ color: "rgba(65,67,27,0.55)" }}>
                  <strong style={{ color: "#41431B" }}>
                    {course.enrolled.toLocaleString()}
                  </strong>{" "}
                  students already enrolled
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
