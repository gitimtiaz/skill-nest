"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "@/components/ui/Loader";
import { updateUserInDb } from "@/lib/api";
import toast from "react-hot-toast";
import { ArrowLeft, User, ImageIcon, BookOpen } from "lucide-react";

const inputBase = {
  className:
    "w-full py-3 pr-4 rounded-xl border text-sm outline-none transition-colors duration-150",
  style: { borderColor: "#E3DBBB", color: "#41431B", background: "#fff" },
  onFocus: (e) => (e.target.style.borderColor = "#AEB784"),
  onBlur: (e) => (e.target.style.borderColor = "#E3DBBB"),
};

export default function UpdateProfilePage() {
  const { user, loading, updateUser } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({ name: "", photoUrl: "" });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login?redirect=/profile/update");
    }
    if (user) {
      setForm({ name: user.name || "", photoUrl: user.photoUrl || "" });
    }
  }, [user, loading, router]);

  if (loading) return <Loader text="Loading..." />;
  if (!user) return null;

  const handleChange = (e) => {
    setError("");
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError("Name cannot be empty.");
      toast.error("Name cannot be empty.");
      return;
    }
    setSaving(true);
    try {
      const updated = await updateUserInDb(user.id, {
        name: form.name.trim(),
        photoUrl: form.photoUrl.trim(),
      });
      updateUser(updated);
      toast.success("Profile updated successfully!");
      router.push("/profile");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setSaving(false);
    }
  };

  const initials = user.name
    ? user.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()
    : "U";

  return (
    <div className="min-h-screen py-12 px-4" style={{ background: "#F8F3E1" }}>
      <div className="max-w-lg mx-auto">

        {/* Back link */}
        <Link
          href="/profile"
          className="inline-flex items-center gap-1.5 text-sm mb-8
                     transition-opacity hover:opacity-70"
          style={{ color: "#41431B" }}
        >
          <ArrowLeft size={15} />
          Back to Profile
        </Link>

        {/* Logo row */}
        <div className="flex items-center gap-2 mb-6">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "#41431B" }}
          >
            <BookOpen size={15} style={{ color: "#F8F3E1" }} />
          </div>
          <span className="font-bold text-lg" style={{ color: "#41431B" }}>
            Skill<span style={{ color: "#AEB784" }}>Nest</span>
          </span>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl border p-8"
          style={{ background: "#fff", borderColor: "#E3DBBB" }}
        >
          <h1 className="text-2xl font-bold mb-1" style={{ color: "#41431B" }}>
            Update Profile
          </h1>
          <p className="text-sm mb-8" style={{ color: "rgba(65,67,27,0.55)" }}>
            Update your display name and profile photo.
          </p>

          {/* Current avatar preview */}
          <div className="flex items-center gap-4 mb-8 p-4 rounded-xl"
               style={{ background: "#F8F3E1" }}>
            {form.photoUrl ? (
              <img
                src={form.photoUrl}
                alt="Preview"
                className="w-16 h-16 rounded-full object-cover border-2 shrink-0"
                style={{ borderColor: "#AEB784" }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
            ) : null}
            {/* Fallback initials — shown if no photoUrl or image fails */}
            <div
              className="w-16 h-16 rounded-full border-2 items-center justify-center
                         text-2xl font-bold shrink-0"
              style={{
                borderColor: "#AEB784",
                background: "#41431B",
                color: "#F8F3E1",
                display: form.photoUrl ? "none" : "flex",
              }}
            >
              {initials}
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: "#41431B" }}>
                {form.name || user.name}
              </p>
              <p className="text-xs mt-0.5" style={{ color: "rgba(65,67,27,0.50)" }}>
                {user.email}
              </p>
              <p className="text-xs mt-1" style={{ color: "#AEB784" }}>
                Live preview
              </p>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div
              className="text-sm px-4 py-3 rounded-xl mb-5"
              style={{ background: "#fee2e2", color: "#991b1b" }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold" style={{ color: "#41431B" }}>
                Display Name
              </label>
              <div className="relative flex items-center">
                <User
                  size={15}
                  className="absolute left-4 pointer-events-none shrink-0"
                  style={{ color: "rgba(65,67,27,0.40)" }}
                />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  autoComplete="name"
                  {...inputBase}
                  style={{ paddingLeft: "2.75rem", ...inputBase.style }}
                />
              </div>
            </div>

            {/* Photo URL */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold" style={{ color: "#41431B" }}>
                Profile Photo URL
              </label>
              <div className="relative flex items-center">
                <ImageIcon
                  size={15}
                  className="absolute left-4 pointer-events-none shrink-0"
                  style={{ color: "rgba(65,67,27,0.40)" }}
                />
                <input
                  type="url"
                  name="photoUrl"
                  value={form.photoUrl}
                  onChange={handleChange}
                  placeholder="https://example.com/your-photo.jpg"
                  autoComplete="off"
                  {...inputBase}
                  style={{ paddingLeft: "2.75rem", ...inputBase.style }}
                />
              </div>
              <p className="text-xs" style={{ color: "rgba(65,67,27,0.45)" }}>
                Paste any public image URL — the preview above updates as you type.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-1">
              <button
                type="submit"
                disabled={saving}
                className="flex-1 py-3 rounded-xl font-semibold text-sm
                           transition-opacity duration-150 disabled:opacity-60"
                style={{ background: "#41431B", color: "#F8F3E1" }}
              >
                {saving ? "Saving..." : "Save Changes →"}
              </button>
              <Link
                href="/profile"
                className="flex-1 py-3 rounded-xl font-semibold text-sm border text-center
                           transition-colors duration-150"
                style={{ borderColor: "#E3DBBB", color: "rgba(65,67,27,0.60)" }}
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
