"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { loginUser } from "@/lib/api";
import toast from "react-hot-toast";
import { Eye, EyeOff, BookOpen, Mail, Lock } from "lucide-react";

const inputBase = {
  style: { borderColor: "#E3DBBB", color: "#41431B", background: "#fff" },
  onFocus: (e) => (e.target.style.borderColor = "#AEB784"),
  onBlur: (e) => (e.target.style.borderColor = "#E3DBBB"),
};

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const user = await loginUser(form);
      login(user);
      toast.success(`Welcome back, ${user.name}!`);
      router.push(redirectTo);
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    toast("Google login coming soon — use email & password for now.", { icon: "🔔" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16"
         style={{ background: "#F8F3E1" }}>
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center"
               style={{ background: "#41431B" }}>
            <BookOpen size={18} style={{ color: "#F8F3E1" }} />
          </div>
          <span className="font-bold text-2xl" style={{ color: "#41431B" }}>
            Skill<span style={{ color: "#AEB784" }}>Nest</span>
          </span>
        </div>

        {/* Card */}
        <div className="rounded-2xl border p-8"
             style={{ background: "#fff", borderColor: "#E3DBBB" }}>
          <h1 className="text-2xl font-bold mb-1" style={{ color: "#41431B" }}>Sign In</h1>
          <p className="text-sm mb-7" style={{ color: "rgba(65,67,27,0.55)" }}>
            Welcome back — pick up right where you left off.
          </p>

          {error && (
            <div className="text-sm px-4 py-3 rounded-xl mb-5"
                 style={{ background: "#fee2e2", color: "#991b1b" }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold" style={{ color: "#41431B" }}>
                Email Address
              </label>
              <div className="relative flex items-center">
                <Mail size={15} className="absolute left-4 pointer-events-none shrink-0"
                      style={{ color: "rgba(65,67,27,0.40)" }} />
                <input
                  type="email" name="email" value={form.email}
                  onChange={handleChange} placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full py-3 pr-4 rounded-xl border text-sm outline-none
                             transition-colors duration-150"
                  style={{ paddingLeft: "2.75rem", ...inputBase.style }}
                  onFocus={inputBase.onFocus} onBlur={inputBase.onBlur}
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold" style={{ color: "#41431B" }}>
                Password
              </label>
              <div className="relative flex items-center">
                <Lock size={15} className="absolute left-4 pointer-events-none shrink-0"
                      style={{ color: "rgba(65,67,27,0.40)" }} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password" value={form.password}
                  onChange={handleChange} placeholder="••••••••"
                  autoComplete="current-password"
                  className="w-full py-3 rounded-xl border text-sm outline-none
                             transition-colors duration-150"
                  style={{ paddingLeft: "2.75rem", paddingRight: "3rem", ...inputBase.style }}
                  onFocus={inputBase.onFocus} onBlur={inputBase.onBlur}
                />
                <button
                  type="button" onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-4 flex items-center justify-center"
                  aria-label="Toggle password visibility"
                >
                  {showPassword
                    ? <EyeOff size={16} style={{ color: "rgba(65,67,27,0.40)" }} />
                    : <Eye size={16} style={{ color: "rgba(65,67,27,0.40)" }} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit" disabled={loading}
              className="w-full py-3 rounded-xl font-semibold text-sm
                         transition-opacity duration-150 disabled:opacity-60"
              style={{ background: "#41431B", color: "#F8F3E1" }}
            >
              {loading ? "Signing in..." : "Login →"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px" style={{ background: "#E3DBBB" }} />
            <span className="text-xs" style={{ color: "rgba(65,67,27,0.45)" }}>or continue with</span>
            <div className="flex-1 h-px" style={{ background: "#E3DBBB" }} />
          </div>

          {/* Google */}
          <button
            type="button" onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl
                       border text-sm font-medium transition-opacity hover:opacity-75"
            style={{ borderColor: "#E3DBBB", color: "#41431B" }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <p className="text-center text-sm mt-6" style={{ color: "rgba(65,67,27,0.55)" }}>
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-semibold hover:opacity-75 transition-opacity"
                  style={{ color: "#41431B" }}>
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
