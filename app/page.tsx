import { HeroSection } from "@/components/sections/hero";
import { TrustedBySection } from "@/components/sections/trusted-by";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FeaturesSection } from "@/components/sections/features";
import { FAQsSection } from "@/components/sections/faqs";
import { ReviewsSection } from "@/components/sections/reviews";
import { PackagesSection } from "@/components/sections/packages";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <WhyChooseUsSection />
      <ReviewsSection />
      <PackagesSection />
      <TestimonialsSection />
      <FAQsSection />
      <ContactSection />
    </div>
  );
}