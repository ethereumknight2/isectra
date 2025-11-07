import Header from "../components/sections/Header";
import HeroNew from "../components/sections/Hero";
import WhyTechnologyFrees from "../components/sections/WhyTechnologyFrees";
import TrustedTwoDecades from "../components/sections/TrustedTwoDecades";
import RealResults from "../components/sections/RealResults";
import HowItWorks from "../components/sections/HowItWorks";
import Leadership from "../components/sections/Leadership";
import DataCenter from "../components/sections/DataCenter";
import Testimonials from "../components/sections/Testimonials";
import MicrosoftPartner from "@/components/sections/MicrosoftPartner";
import FAQPreview from "../components/sections/FAQPreview";
import CTA from "../components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation Header */}
      <Header />

      {/* Hero Section - NEW */}
      <HeroNew />

      {/* Section 1: Why Technology Should Free You - NEW */}
      <WhyTechnologyFrees />

      {/* Section 2: Trusted for Two Decades - NEW */}
      <TrustedTwoDecades />

      {/* Section 3: Real Results & Impact - NEW */}
      <RealResults />

      {/* Section 4: How It Works (5-Step Process) - NEW */}
      <HowItWorks />

      {/* Section 5: Leadership Video Message */}
      <Leadership />

      <DataCenter />

      {/* Section 6: Client Testimonials */}
      <Testimonials />

      <MicrosoftPartner className="mt-16" />

      {/* Section 7: FAQ Preview - NEW */}
      <FAQPreview />

      {/* Section 8: Final CTA with Contact Form */}
      <CTA />
    </main>
  );
}
