import { Geist } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillNest – Master your inner talent.",
  description:
    "A modern online learning platform for Web Development, AI, ML, Python, Android App Development, WebOps, Cyber Security, and more.",
  keywords: [
    "online learning",
    "web development",
    "AI courses",
    "python",
    "cyber security",
    "SkillNest",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="skillnest" className={geist.variable}>
      <body className="min-h-screen flex flex-col bg-cream-light">
        <AuthProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3500,
              style: {
                background: "#41431B",
                color: "#F8F3E1",
                fontSize: "14px",
                borderRadius: "10px",
              },
              success: {
                iconTheme: { primary: "#AEB784", secondary: "#41431B" },
              },
              error: {
                iconTheme: { primary: "#f87171", secondary: "#41431B" },
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
