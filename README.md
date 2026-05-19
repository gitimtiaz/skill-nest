# SkillNest

> **Master your inner talent.**

A modern online learning platform where learners can explore and enroll in skill-based programs across Web Development, AI, Machine Learning, Python, Android App Development, WebOps, Cyber Security, and more.

## 🔗 Links

- **GitHub:** [github.com/gitimtiaz/skill-nest](https://github.com/gitimtiaz/skill-nest)
- **Live URL:** [skill-nest-ten.vercel.app](https://skill-nest-ten.vercel.app)

---

## ✨ Key Features

- Browse 8 courses across 7 tech categories
- Real-time search by title on the All Courses page
- Category filtering with instant results
- Detailed course pages with full curriculum accordion
- Protected course detail pages — login required to access
- Redirect back to the original page after login via `?redirect=` param
- User registration and login with email & password
- Google OAuth sign-in via BetterAuth
- User profile page with avatar, stats, and account details
- Update profile — name and photo URL with live preview
- Toast notifications for all user actions
- Swiper.js hero slider with auto-play and fade transitions
- Skeleton loaders while data fetches
- Custom 404 not-found page
- Fully responsive — mobile, tablet, desktop
- Olive and cream color palette — a unique design identity

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 + DaisyUI v5 |
| Icons | Lucide React |
| Slider | Swiper.js |
| Toasts | React Hot Toast |
| Authentication | BetterAuth |
| Auth Database | MongoDB Atlas |
| Course Data API | JSON Server v1 |
| Frontend Host | Vercel |
| API Host | Render |

---

## 📦 NPM Packages Used

| Package | Purpose |
|---|---|
| `next` | React framework with App Router |
| `react` | UI library |
| `tailwindcss` | Utility-first CSS framework |
| `daisyui` | Component library for Tailwind |
| `lucide-react` | Icon set |
| `swiper` | Touch-enabled hero slider ✅ |
| `react-hot-toast` | Toast notification system |
| `better-auth` | Authentication (email + Google OAuth) |
| `mongodb` | MongoDB driver for BetterAuth adapter |
| `json-server` | Mock REST API for course and instructor data |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- npm
- A MongoDB Atlas cluster

### Installation

```bash
git clone https://github.com/gitimtiaz/skill-nest.git
cd skill-nest
npm install
```

### Environment Setup

Create `.env.local` in the root:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_URL=http://localhost:3000
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your-random-secret-min-32-chars
MONGODB_URI=your-mongodb-atlas-connection-string
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### Run Locally

Open two terminals:

```bash
# Terminal 1 — JSON Server on port 3001
npm run server

# Terminal 2 — Next.js on port 3000
npm run dev
```

Visit `http://localhost:3000`

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/     # BetterAuth route handler
│   ├── courses/
│   │   ├── [id]/             # Course detail page (protected)
│   │   └── page.js           # All courses with search + filter
│   ├── login/                # Login page
│   ├── register/             # Register page
│   ├── profile/
│   │   ├── update/           # Update profile form
│   │   └── page.js           # Profile page (protected)
│   ├── layout.js             # Root layout — Navbar, Footer, Toaster
│   ├── loading.js            # Global loading state
│   └── not-found.js          # 404 page
├── components/
│   ├── home/                 # Hero, StatsBar, PopularCourses, LearningTips, TopInstructors, TrendingCourses
│   ├── courses/              # CourseCard, CourseGrid, SearchBar
│   ├── shared/               # Navbar, Footer
│   └── ui/                   # Loader, SectionHeading, StarRating
├── context/
│   └── AuthContext.jsx       # useAuth() hook — wraps BetterAuth useSession
└── lib/
    ├── api.js                # Fetch helpers for courses and instructors
    ├── auth.js               # BetterAuth server config (MongoDB adapter)
    └── auth-client.js        # BetterAuth client — signIn, signUp, signOut, useSession
```

---

## 🎨 Color Palette

| Token | Hex | Usage |
|---|---|---|
| olive-dark | `#41431B` | Headings, buttons, navbar background |
| olive-mid | `#AEB784` | Accents, badges, icons |
| cream | `#E3DBBB` | Card borders, dividers |
| cream-light | `#F8F3E1` | Page backgrounds |

---

## 🔐 Authentication

Authentication is handled by **BetterAuth** with a **MongoDB Atlas** database. Supported methods:

- Email & password registration and login
- Google OAuth (one-click sign-in)

Auth state is consumed via a `useAuth()` hook wrapping BetterAuth's `useSession`. Protected routes (`/courses/[id]`, `/profile`, `/profile/update`) redirect to `/login?redirect=<path>` and bring users back after successful login.

---

*© 2026 SkillNest. Built by [Imtiaz](https://github.com/gitimtiaz)*
