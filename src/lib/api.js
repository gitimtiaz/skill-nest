const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

// Fetch all courses
export async function getCourses() {
  const res = await fetch(`${API_URL}/courses`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch courses");
  return res.json();
}

// Fetch a single course by id
export async function getCourseById(id) {
  const res = await fetch(`${API_URL}/courses/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

// Fetch top N courses sorted by rating for Popular section
export async function getPopularCourses(limit = 3) {
  const courses = await getCourses();
  return courses
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
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
  const res = await fetch(`${API_URL}/instructors`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch instructors");
  return res.json();
}

// Fetch top N instructors sorted by rating
export async function getTopInstructors(limit = 4) {
  const instructors = await getInstructors();
  return instructors
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

// Fetch courses by category
export async function getCoursesByCategory(category) {
  const res = await fetch(
    `${API_URL}/courses?category=${encodeURIComponent(category)}`,
    { cache: "no-store" }
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

// Register a new user
export async function registerUser({ name, email, password, photoUrl }) {
  // Check if email already exists
  const checkRes = await fetch(
    `${API_URL}/users?email=${encodeURIComponent(email)}`
  );
  const existing = await checkRes.json();
  if (existing.length > 0) {
    throw new Error("An account with this email already exists.");
  }

  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      password, 
      photoUrl: photoUrl || "",
      createdAt: new Date().toISOString(),
    }),
  });

  if (!res.ok) throw new Error("Registration failed. Please try again.");
  return res.json();
}

// Login: match email + password
export async function loginUser({ email, password }) {
  const res = await fetch(
    `${API_URL}/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
  );
  const users = await res.json();
  if (users.length === 0) {
    throw new Error("Invalid email or password.");
  }
  return users[0];
}

// Update user info (name + photoUrl)
export async function updateUserInDb(id, { name, photoUrl }) {
  const res = await fetch(`${API_URL}/users/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, photoUrl }),
  });
  if (!res.ok) throw new Error("Failed to update profile.");
  return res.json();
}
