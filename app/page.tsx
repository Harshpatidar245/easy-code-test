import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyLearnSection from "./components/WhyLearnSection";
import IndustryExpertsSection from "./components/IndustryExpertsSection";
import CareerRolesSection from "./components/CareerRolesSection";
import MeetMentorsSection from "./components/MeetMentorsSection";
import WhyEasyCodeSection from "./components/WhyEasyCodeSection";
import BonusesSection from "./components/BonusesSection";
import ProgramRoadmapSection from "./components/ProgramRoadmapSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <WhyLearnSection />
      <IndustryExpertsSection />
      <CareerRolesSection />
      <MeetMentorsSection />
      <WhyEasyCodeSection />
      <BonusesSection />
      <ProgramRoadmapSection />
      {/* <Footer /> */}
    </div>
  );
}
