const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Fetch all courses
export async function getCourses() {
  try {
    const res = await fetch(`${API_URL}/courses`, {
      next: { revalidate: 3600 }, // cache for 1 hour — works with Next.js 15
    });
    if (!res.ok) throw new Error("Failed to fetch courses");
    return res.json();
  } catch (err) {
    console.error("Courses fetch failed:", err);
    return [];
  }
}

// Fetch a single course by id
export async function getCourseById(id) {
  const res = await fetch(`${API_URL}/courses/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  return res.json();
}

// Fetch top N courses sorted by rating for Popular section
export async function getPopularCourses(limit = 3) {
  const courses = await getCourses();
  return courses.sort((a, b) => b.rating - a.rating).slice(0, limit);
}

// Fetch trending courses
export async function getTrendingCourses() {
  const courses = await getCourses();
  return courses.filter((c) => c.isTrending);
}

// Fetch new courses
export async function getNewCourses() {
  const courses = await getCourses();
  return courses.filter((c) => c.isNew);
}

// Fetch all instructors
export async function getInstructors() {
  const res = await fetch(`${API_URL}/instructors`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch instructors");
  return res.json();
}

// Fetch top N instructors sorted by rating
export async function getTopInstructors(limit = 4) {
  const instructors = await getInstructors();
  return instructors.sort((a, b) => b.rating - a.rating).slice(0, limit);
}

// Fetch courses by category
export async function getCoursesByCategory(category) {
  const res = await fetch(
    `${API_URL}/courses?category=${encodeURIComponent(category)}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error("Failed to fetch courses by category");
  return res.json();
}

// Search courses by title
export async function searchCourses(query) {
  const courses = await getCourses();
  if (!query) return courses;
  const q = query.toLowerCase();
  return courses.filter((c) => c.title.toLowerCase().includes(q));
}