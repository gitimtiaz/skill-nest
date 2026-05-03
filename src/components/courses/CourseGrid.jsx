"use client";

import { useState, useMemo } from "react";
import SearchBar from "@/components/courses/SearchBar";
import CourseCard from "@/components/courses/CourseCard";
import { SlidersHorizontal } from "lucide-react";

const ALL = "All";

export default function CourseGrid({ courses, initialCategory = ALL }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  // Build category list dynamically from data
  const categories = useMemo(() => {
    const cats = [...new Set(courses.map((c) => c.category))];
    return [ALL, ...cats];
  }, [courses]);

  // Filter courses by search + category
  const filtered = useMemo(() => {
    return courses.filter((course) => {
      const matchesQuery = course.title
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesCategory =
        activeCategory === ALL || course.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [courses, query, activeCategory]);

  return (
    <div>
      {/* Search + filter bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <SearchBar value={query} onChange={setQuery} />
        </div>
        <div
          className="flex items-center gap-1.5 text-sm font-medium px-4 py-3 rounded-xl border"
          style={{ borderColor: "#E3DBBB", color: "rgba(65,67,27,0.55)", background: "#fff" }}
        >
          <SlidersHorizontal size={15} />
          <span>Filter</span>
        </div>
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 flex-wrap mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-4 py-1.5 rounded-full text-sm font-medium border
                       transition-colors duration-150"
            style={
              activeCategory === cat
                ? { background: "#41431B", color: "#F8F3E1", borderColor: "#41431B" }
                : { background: "#fff", color: "#41431B", borderColor: "#E3DBBB" }
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm mb-6" style={{ color: "rgba(65,67,27,0.55)" }}>
        {filtered.length === courses.length
          ? `${courses.length} courses available`
          : `${filtered.length} of ${courses.length} courses`}
        {query && (
          <span> for &quot;<strong style={{ color: "#41431B" }}>{query}</strong>&quot;</span>
        )}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        /* Empty state */
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <span className="text-5xl mb-4">🔍</span>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#41431B" }}>
            No courses found
          </h3>
          <p className="text-sm max-w-xs" style={{ color: "rgba(65,67,27,0.55)" }}>
            No results for &quot;{query}&quot;
            {activeCategory !== ALL && ` in ${activeCategory}`}. Try a different
            search or category.
          </p>
          <button
            onClick={() => { setQuery(""); setActiveCategory(ALL); }}
            className="mt-6 px-5 py-2.5 rounded-xl text-sm font-semibold
                       transition-colors duration-150"
            style={{ background: "#41431B", color: "#F8F3E1" }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
