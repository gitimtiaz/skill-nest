import Link from "next/link";
import { BookOpen, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-[80vh] flex items-center justify-center px-4"
      style={{ background: "#F8F3E1", paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div className="text-center max-w-md">

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: "#41431B" }}
          >
            <BookOpen size={18} style={{ color: "#F8F3E1" }} />
          </div>
          <span className="font-bold text-xl" style={{ color: "#41431B" }}>
            Skill<span style={{ color: "#AEB784" }}>Nest</span>
          </span>
        </div>

        {/* 404 number */}
        <div
          style={{
            fontSize: "6rem",
            fontWeight: 900,
            lineHeight: 1,
            color: "#41431B",
            marginBottom: "1.5rem",
            letterSpacing: "-0.05em",
          }}
        >
          404
        </div>

        {/* Icon */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{ background: "#fff", border: "1px solid #E3DBBB" }}
        >
          <Search size={28} style={{ color: "#AEB784" }} />
        </div>

        {/* Text */}
        <h1
          className="text-2xl font-bold mb-3"
          style={{ color: "#41431B" }}
        >
          Page Not Found
        </h1>
        <p
          className="text-sm font-medium leading-relaxed mb-8"
          style={{ color: "rgba(65,67,27,0.60)" }}
        >
          The page you are looking for does not exist or has been moved.
          Let us help you find what you need.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold
                       transition-opacity hover:opacity-80"
            style={{ background: "#41431B", color: "#F8F3E1" }}
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>
          <Link
            href="/courses"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold
                       border transition-opacity hover:opacity-80"
            style={{ borderColor: "#41431B", color: "#41431B" }}
          >
            Browse Courses
          </Link>
        </div>

        {/* Help text */}
        <p
          className="text-xs mt-8"
          style={{ color: "rgba(65,67,27,0.60)" }}
        >
          If you think this is a mistake, check the URL and try again.
        </p>
      </div>
    </div>
  );
}