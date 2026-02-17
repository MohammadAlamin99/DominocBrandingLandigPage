import HeroSection from "@/components/hero-section";
import PricingSection from "@/components/pricingSection";
import StatsSection from "@/components/stateSection";
import SalonManagementSection from "@/components/salonManagementSection";
import FeaturesSection from "@/components/featuresSection";
import ManageSalonSection from "@/components/manageSalonSection";
import SuccessStoriesSection from "@/components/successStoriesSection";
import FaqSection from "@/components/faqSection";
import CtaSection from "@/components/ctaSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background">
      {/* <Header /> */}
      <HeroSection />
      <StatsSection />
      <SalonManagementSection />
      <PricingSection />
      <FeaturesSection />
      <ManageSalonSection />
      <SuccessStoriesSection />
      <FaqSection />
      <CtaSection />
      {/* <Footer/> */}
    </main>
  );
}
