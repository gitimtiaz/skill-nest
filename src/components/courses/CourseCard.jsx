import Link from "next/link";
import StarRating from "@/components/ui/StarRating";
import { Clock, Signal, Users } from "lucide-react";

const categoryColors = {
  "Web Development":      "bg-olive-dark/10 text-olive-dark",
  "Artificial Intelligence": "bg-amber-100 text-amber-800",
  "Machine Learning":     "bg-blue-100 text-blue-800",
  "Python":               "bg-green-100 text-green-800",
  "Android App Dev":      "bg-purple-100 text-purple-800",
  "WebOps":               "bg-orange-100 text-orange-800",
  "Cyber Security":       "bg-red-100 text-red-800",
};

const levelColors = {
  Beginner:     "bg-green-100 text-green-700",
  Intermediate: "bg-amber-100 text-amber-700",
  Advanced:     "bg-red-100 text-red-700",
};

export default function CourseCard({ course, featured = false }) {
  const catColor = categoryColors[course.category] || "bg-olive-mid/20 text-olive-dark";
  const lvlColor = levelColors[course.level] || "bg-cream text-olive-dark";

  return (
    <div className={`bg-white rounded-2xl border border-cream overflow-hidden flex flex-col
                     hover:shadow-lg hover:border-olive-mid transition-all duration-200
                     ${featured ? "ring-2 ring-olive-mid" : ""}`}>
      {/* Course image */}
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
        />
        {/* Badges on image */}
        <div className="absolute top-3 left-3 flex gap-2">
          {course.isNew && (
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-olive-dark text-cream-light">
              NEW
            </span>
          )}
          {course.isTrending && (
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-500 text-white">
              🔥 Trending
            </span>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Category + Level */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${catColor}`}>
            {course.category}
          </span>
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${lvlColor}`}>
            {course.level}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-olive-dark text-base leading-snug line-clamp-2">
          {course.title}
        </h3>

        {/* Instructor */}
        <div className="flex items-center gap-2">
          <img
            src={course.instructorImage}
            alt={course.instructor}
            className="w-6 h-6 rounded-full object-cover border border-cream"
          />
          <span className="text-xs text-olive-dark/60 font-medium">{course.instructor}</span>
        </div>

        {/* Rating */}
        <StarRating rating={course.rating} totalRatings={course.totalRatings} />

        {/* Meta row */}
        <div className="flex items-center gap-3 text-xs text-olive-dark/50">
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users size={12} />
            {course.enrolled.toLocaleString()} students
          </span>
        </div>

        {/* Spacer + CTA */}
        <div className="mt-auto pt-3 border-t border-cream">
          <Link
            href={`/courses/${course.id}`}
            className="block w-full text-center py-2 rounded-xl text-sm font-semibold
                       bg-olive-dark text-cream-light hover:bg-olive-mid hover:text-olive-dark
                       transition-colors duration-150"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
