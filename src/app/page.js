import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import PopularCourses from "@/components/home/PopularCourses";
import LearningTips from "@/components/home/LearningTips";
import TopInstructors from "@/components/home/TopInstructors";
import TrendingCourses from "@/components/home/TrendingCourses";
import { getPopularCourses, getTopInstructors, getTrendingCourses } from "@/lib/api";

export default async function Home() {
  const [popularCourses, instructors, trendingCourses] = await Promise.all([
    getPopularCourses(3),
    getTopInstructors(4),
    getTrendingCourses(),
  ]);

  return (
    <>
      <HeroSection />
      <StatsBar />
      <PopularCourses courses={popularCourses} />
      <LearningTips />
      <TopInstructors instructors={instructors} />
      <TrendingCourses courses={trendingCourses} />
    </>
  );
}
