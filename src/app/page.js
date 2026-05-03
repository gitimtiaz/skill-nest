import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import PopularCourses from "@/components/home/PopularCourses";
import { getPopularCourses } from "@/lib/api";

export default async function Home() {
  const popularCourses = await getPopularCourses(3);

  return (
    <>
      <HeroSection />
      <StatsBar />
      <PopularCourses courses={popularCourses} />
    </>
  );
}
