"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { BookOpen, LogOut, Menu, User, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "My Profile", href: "/profile" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    setMenuOpen(false);
  };

  const isActive = (href) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-cream-light/90 backdrop-blur-sm border-b border-cream">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => setMenuOpen(false)}
          >
            <div className="w-8 h-8 rounded-lg bg-olive-dark flex items-center justify-center
                            group-hover:bg-olive-mid transition-colors duration-200">
              <BookOpen size={16} className="text-cream-light" />
            </div>
            <span className="font-bold text-xl text-olive-dark tracking-tight">
              Skill<span className="text-olive-mid">Nest</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150
                    ${
                      isActive(link.href)
                        ? "bg-olive-dark text-cream-light"
                        : "text-olive-dark hover:bg-cream"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                {/* Avatar + name */}
                <div className="flex items-center gap-2">
                  {user.photoUrl ? (
                    <img
                      src={user.photoUrl}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover border-2 border-olive-mid"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-olive-mid flex items-center
                                    justify-center text-olive-dark font-bold text-sm">
                      {user.name?.[0]?.toUpperCase() ?? "U"}
                    </div>
                  )}
                  <span className="text-sm font-medium text-olive-dark truncate max-w-[120px]">
                    {user.name}
                  </span>
                </div>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm
                             font-medium text-olive-dark border border-olive-mid
                             hover:bg-olive-dark hover:text-cream-light
                             transition-colors duration-150"
                >
                  <LogOut size={14} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-lg text-sm font-medium text-olive-dark
                             border border-olive-mid hover:bg-cream transition-colors duration-150"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-olive-dark
                             text-cream-light hover:bg-olive-mid hover:text-olive-dark
                             transition-colors duration-150"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-olive-dark hover:bg-cream
                       transition-colors duration-150"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile popup */}
        {menuOpen && (
          <div className="md:hidden border-t border-cream py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors
                  ${
                    isActive(link.href)
                      ? "bg-olive-dark text-cream-light"
                      : "text-olive-dark hover:bg-cream"
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3 pt-3 border-t border-cream flex flex-col gap-2">
              {user ? (
                <>
                  <div className="flex items-center gap-2 px-4 py-2">
                    {user.photoUrl ? (
                      <img
                        src={user.photoUrl}
                        alt={user.name}
                        className="w-8 h-8 rounded-full object-cover border-2 border-olive-mid"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-olive-mid flex items-center
                                      justify-center text-olive-dark font-bold text-sm">
                        {user.name?.[0]?.toUpperCase() ?? "U"}
                      </div>
                    )}
                    <span className="text-sm font-medium text-olive-dark">{user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm
                               font-medium text-olive-dark hover:bg-cream transition-colors"
                  >
                    <LogOut size={14} />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-2.5 rounded-lg text-sm font-medium text-olive-dark
                               border border-olive-mid hover:bg-cream text-center transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-2.5 rounded-lg text-sm font-medium bg-olive-dark
                               text-cream-light text-center hover:bg-olive-mid
                               hover:text-olive-dark transition-colors"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
