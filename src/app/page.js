import BannerSection from "@/components/pages/home-page/BannerSection";
import CoursesSection from "@/components/pages/home-page/CoursesSection";
import EasyAccessSection from "@/components/pages/home-page/EasyAccessSection";
import InstructorsSection from "@/components/pages/home-page/InstructorsSection";
import SliderSection from "@/components/pages/home-page/SliderSection";
import WhoWeAreSection from "@/components/pages/home-page/WhoWeAreSection";

export const metadata = {
  title: "HomePage",
  description: "Edmax is an Awsome Website",
};

export default function Home() {
  return (
    <main>
      <BannerSection />
      <SliderSection />
      <WhoWeAreSection />
      <CoursesSection />
      <EasyAccessSection />
      <InstructorsSection />
    </main>
  );
}
