# SkillNest



> **Master your inner talent.**

A modern online learning platform where learners can explore and enroll in skill-based programs across Web Development, AI, Machine Learning, Python, Android App Development, WebOps, Cyber Security, and more.

## 🔗 Links

- **GitHub:** [github/Skill-Nest](https://github.com/gitimtiaz/skill-nest)
- **Live URL:** [skill-nest-ten.vercel.app](https://skill-nest-ten.vercel.app/)
## ✨ Key Features

- Browse 8 courses across 7 tech categories
- Real-time search by title on the All Courses page
- Category filtering with instant results
- Detailed course pages with full curriculum accordion
- Protected course detail pages, login required to access
- User authentication, register, login, logout
- User profile page with avatar, stats, and account details
- Update profile, name and photo URL with live preview
- Toast notifications for all user actions
- Swiper.js hero slider with auto-play and fade transitions
- Skeleton loaders while data fetches
- Custom 404 not-found page
- Fully responsive for mobile, tablet, desktop
- Olive and cream color palette a unique design identity

## 🛠 Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 + DaisyUI v5 |
| Icons | Lucide React |
| Slider | Swiper.js |
| Toasts | React Hot Toast |
| Backend | JSON Server |
| Hosting | Vercel (frontend) + Render (JSON Server) |

## 📦 NPM Packages Used

| Package | Purpose |
| --- | --- |
| `next` | React framework with App Router |
| `react` | UI library |
| `tailwindcss` | Utility-first CSS framework |
| `daisyui` | Component library for Tailwind |
| `lucide-react` | Icon set |
| `swiper` | Touch-enabled hero slider |
| `react-hot-toast` | Toast notification system |
| `json-server` | Mock REST API for data and auth |

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
git clone <repo-url>
cd skill-nest
npm install
```

### Environment Setup

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
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

## 📁 Project Structure

```
src/
├── app/
│   ├── courses/
│   │   ├── [id]/         # Course detail (protected)
│   │   └── page.js       # All courses with search
│   ├── login/            # Login page
│   ├── register/         # Register page
│   ├── profile/
│   │   ├── update/       # Update profile form
│   │   └── page.js       # Profile page (protected)
│   ├── layout.js         # Root layout — Navbar, Footer, Toaster
│   ├── loading.js        # Global loading state
│   └── not-found.js      # 404 page
├── components/
│   ├── home/             # Hero, StatsBar, Popular, Tips, Instructors, Trending
│   ├── courses/          # CourseCard, CourseGrid, SearchBar
│   ├── shared/           # Navbar, Footer
│   └── ui/               # Loader, SectionHeading, StarRating
├── context/
│   └── AuthContext.jsx   # Global auth state + localStorage
└── lib/
    └── api.js            # All fetch helpers for JSON Server
```

## 🎨 Color Palette

| Token | Hex | Usage |
| --- | --- | --- |
| olive-dark | `#41431B` | Headings, buttons, navbar |
| olive-mid | `#AEB784` | Accents, badges, icons |
| cream | `#E3DBBB` | Card borders, dividers |
| cream-light | `#F8F3E1` | Page backgrounds |

## 🔐 Authentication

Email and password auth using JSON Server as the data store. Auth state is managed via React Context and persisted in `localStorage`. Protected routes redirect to `/login` with a `?redirect=` param so users land back on the right page after signing in.

---

*© 2026 SkillNest. Built by [Imtiaz](https://github.com/gitimtiaz)*
