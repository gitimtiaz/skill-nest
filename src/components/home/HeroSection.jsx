"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Link from "next/link";

const slides = [
  {
    id: 1,
    label: "Start Your Journey",
    heading: "Upgrade Your Skills Today 🚀",
    subtext:
      "Learn from industry experts at your own pace. Real projects, real skills, real results.",
    cta: { label: "Explore Courses", href: "/courses" },
    ctaSecondary: { label: "Learn More", href: "#popular" },
    bg: "linear-gradient(135deg, #41431B 0%, #3a3c18 50%, #2a2c10 100%)",
  },
  {
    id: 2,
    label: "Tech Education Reimagined",
    heading: "From Zero to Job Ready",
    subtext:
      "Master Web Dev, AI, Machine Learning, Cyber Security and more. All in one platform built for serious learners.",
    cta: { label: "Browse All Courses", href: "/courses" },
    ctaSecondary: { label: "View Instructors", href: "#instructors" },
    bg: "linear-gradient(135deg, #2a2c10 0%, #41431B 50%, #4a4d1e 100%)",
  },
  {
    id: 3,
    label: "Join the Community",
    heading: "Learn from Industry Experts",
    subtext:
      "Join 10,000+ learners who are building the skills that employers are looking for right now.",
    cta: { label: "Get Started Free", href: "/register" },
    ctaSecondary: { label: "Sign In", href: "/login" },
    bg: "linear-gradient(135deg, #4a4d1e 0%, #3a3c18 50%, #41431B 100%)",
  },
];

export default function HeroSection() {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              style={{ background: slide.bg }}
              className="min-h-[580px] flex items-center"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
                <div className="max-w-2xl">
                  {/* Label pill */}
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-5"
                    style={{
                      background: "rgba(174,183,132,0.15)",
                      borderColor: "rgba(174,183,132,0.4)",
                      color: "#AEB784",
                    }}
                  >
                    {slide.label}
                  </span>

                  {/* Heading */}
                  <h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5"
                    style={{ color: "#F8F3E1" }}
                  >
                    {slide.heading}
                  </h1>

                  {/* Subtext */}
                  <p
                    className="text-lg leading-relaxed mb-8 max-w-xl"
                    style={{ color: "rgba(248,243,225,0.70)" }}
                  >
                    {slide.subtext}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={slide.cta.href}
                      className="px-7 py-3 rounded-xl font-semibold text-sm transition-colors duration-150"
                      style={{ background: "#AEB784", color: "#41431B" }}
                    >
                      {slide.cta.label}
                    </Link>
                    <Link
                      href={slide.ctaSecondary.href}
                      className="px-7 py-3 rounded-xl font-semibold text-sm transition-colors duration-150"
                      style={{
                        border: "1px solid rgba(248,243,225,0.30)",
                        color: "#F8F3E1",
                      }}
                    >
                      {slide.ctaSecondary.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Add dots indicator for slider */}
      <style>{`
        .swiper-pagination-bullet {
          background: #AEB784 !important;
          opacity: 0.45;
          width: 8px;
          height: 8px;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
          background: #AEB784 !important;
          opacity: 1;
          width: 24px;
          border-radius: 4px;
        }
        .swiper-pagination {
          bottom: 20px !important;
        }
      `}</style>
    </section>
  );
}
