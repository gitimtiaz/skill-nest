"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import Loader from "@/components/ui/Loader";
import {
  Mail,
  Calendar,
  Pencil,
  BookOpen,
  Award,
  CheckCircle,
  LogOut,
  User,
} from "lucide-react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login?redirect=/profile");
    }
  }, [user, loading, router]);

  if (loading) return <Loader text="Loading profile..." />;
  if (!user) return null;

  const initials = user.name
    ? user.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()
    : "U";

  const memberSince = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "N/A";

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    router.push("/");
  };

  const stats = [
    { icon: BookOpen, label: "Enrolled Courses", value: "0" },
    { icon: CheckCircle, label: "Completed",       value: "0" },
    { icon: Award,      label: "Certificates",     value: "0" },
  ];

  return (
    <div className="min-h-screen py-12 px-4" style={{ background: "#F8F3E1" }}>
      <div className="max-w-3xl mx-auto flex flex-col gap-6">

        {/* Profile card */}
        <div
          className="rounded-2xl border overflow-hidden"
          style={{ background: "#fff", borderColor: "#E3DBBB" }}
        >
          {/* Banner */}
          <div
            className="h-28"
            style={{
              background: "linear-gradient(135deg, #41431B 0%, #AEB784 100%)",
            }}
          />

          {/* Avatar + info */}
          <div className="px-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-12 mb-5">
              {/* Avatar */}
              <div>
                {user.photoUrl ? (
                  <img
                    src={user.photoUrl}
                    alt={user.name}
                    className="w-24 h-24 rounded-full object-cover border-4"
                    style={{ borderColor: "#fff" }}
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                ) : (
                  <div
                    className="w-24 h-24 rounded-full border-4 flex items-center
                               justify-center text-3xl font-bold"
                    style={{ borderColor: "#fff", background: "#41431B", color: "#F8F3E1" }}
                  >
                    {initials}
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3">
                <Link
                  href="/profile/update"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm
                             font-semibold border transition-colors duration-150"
                  style={{ borderColor: "#41431B", color: "#41431B" }}
                >
                  <Pencil size={14} />
                  Edit Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm
                             font-semibold transition-colors duration-150"
                  style={{ background: "#41431B", color: "#F8F3E1" }}
                >
                  <LogOut size={14} />
                  Logout
                </button>
              </div>
            </div>

            {/* Name + email */}
            <h1 className="text-2xl font-bold" style={{ color: "#41431B" }}>
              {user.name}
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <span
                className="flex items-center gap-1.5 text-sm"
                style={{ color: "rgba(65,67,27,0.60)" }}
              >
                <Mail size={13} style={{ color: "#AEB784" }} />
                {user.email}
              </span>
              <span
                className="flex items-center gap-1.5 text-sm"
                style={{ color: "rgba(65,67,27,0.60)" }}
              >
                <Calendar size={13} style={{ color: "#AEB784" }} />
                Member since {memberSince}
              </span>
            </div>
          </div>
        </div>

        {/* Activity stats */}
        <div
          className="grid grid-cols-3 rounded-2xl border divide-x overflow-hidden"
          style={{ background: "#fff", borderColor: "#E3DBBB" }}
        >
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center py-6 px-3 text-center">
              <Icon size={20} className="mb-2" style={{ color: "#AEB784" }} />
              <p className="text-2xl font-bold" style={{ color: "#41431B" }}>{value}</p>
              <p className="text-xs mt-0.5" style={{ color: "rgba(65,67,27,0.50)" }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Account details */}
        <div
          className="rounded-2xl border p-6"
          style={{ background: "#fff", borderColor: "#E3DBBB" }}
        >
          <h2 className="text-base font-bold mb-5" style={{ color: "#41431B" }}>
            Account Details
          </h2>

          <div className="flex flex-col gap-4">
            {[
              { icon: User,     label: "Full Name",      value: user.name },
              { icon: Mail,     label: "Email Address",  value: user.email },
              {
                icon: Calendar,
                label: "Auth Provider",
                value: user.provider || "Email & Password",
              },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 py-3 border-b last:border-0"
                style={{ borderColor: "#F8F3E1" }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "#F8F3E1" }}
                >
                  <Icon size={15} style={{ color: "#AEB784" }} />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "rgba(65,67,27,0.45)" }}>{label}</p>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: "#41431B" }}>
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div
          className="rounded-2xl border p-6"
          style={{ background: "#fff", borderColor: "#E3DBBB" }}
        >
          <h2 className="text-base font-bold mb-4" style={{ color: "#41431B" }}>
            Quick Actions
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/courses"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold
                         transition-colors duration-150"
              style={{ background: "#41431B", color: "#F8F3E1" }}
            >
              Browse Courses
            </Link>
            <Link
              href="/profile/update"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold border
                         transition-colors duration-150"
              style={{ borderColor: "#41431B", color: "#41431B" }}
            >
              Update Profile
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
