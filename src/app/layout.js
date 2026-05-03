import { Geist } from "next/font/google";
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
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}