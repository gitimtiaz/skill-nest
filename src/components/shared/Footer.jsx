import Link from "next/link";
import { BookOpen, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "My Profile", href: "/profile" },
  { label: "Login", href: "/login" },
  { label: "Register", href: "/register" },
];

const categories = [
  "Web Development",
  "Artificial Intelligence",
  "Machine Learning",
  "Python",
  "Android App Dev",
  "Cyber Security",
];

const legalLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

// Inline brand SVGs
const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterXIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const socialLinks = [
  { Icon: GitHubIcon,   label: "GitHub",   href: "https://github.com/gitimtiaz" },
  { Icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com" },
  { Icon: TwitterXIcon, label: "X",        href: "https://x.com" },
];

export default function Footer() {
  return (
    <footer className="bg-olive-dark text-cream-light">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <div className="w-8 h-8 rounded-lg bg-olive-mid flex items-center justify-center">
                <BookOpen size={16} className="text-olive-dark" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                Skill<span className="text-olive-mid">Nest</span>
              </span>
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed max-w-[220px]">
              Master your inner talent. A modern platform for tech learners who build real skills.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="w-8 h-8 rounded-lg bg-cream/10 flex items-center justify-center
                             hover:bg-olive-mid hover:text-olive-dark transition-colors duration-150"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 Quick Links */}
          <div>
            <h3 className="font-semibold text-cream text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 text-sm hover:text-olive-mid transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 Categories */}
          <div>
            <h3 className="font-semibold text-cream text-sm uppercase tracking-wider mb-4">
              Categories
            </h3>
            <ul className="flex flex-col gap-2.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/courses?category=${encodeURIComponent(cat)}`}
                    className="text-cream/70 text-sm hover:text-olive-mid transition-colors duration-150"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 Contact + Legal */}
          <div>
            <h3 className="font-semibold text-cream text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-cream/70 text-sm">
                <Mail size={14} className="mt-0.5 shrink-0 text-olive-mid" />
                <span>hello@skillnest.io</span>
              </li>
              <li className="flex items-start gap-2.5 text-cream/70 text-sm">
                <MapPin size={14} className="mt-0.5 shrink-0 text-olive-mid" />
                <span>Mirpur-12, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-start gap-2.5 text-cream/70 text-sm">
                <Phone size={14} className="mt-0.5 shrink-0 text-olive-mid" />
                <span>+880-1712-345678</span>
              </li>
            </ul>

            <div className="mt-5">
              <h4 className="font-semibold text-cream text-xs uppercase tracking-wider mb-3">
                Legal
              </h4>
              <ul className="flex flex-col gap-2">
                {legalLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-cream/70 text-sm hover:text-olive-mid transition-colors duration-150"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row
                        items-center justify-between gap-3 text-sm text-cream/50">
          <span>© {new Date().getFullYear()} SkillNest. All rights reserved.</span>
          <span>Built with Love for learners.</span>
        </div>
      </div>
    </footer>
  );
}
