import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/Howitworkssection";
import TrustSection from "@/components/Trustsection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <WhyUsSection />
    <ServicesSection limit={6} />
    <HowItWorksSection />
    <TrustSection />
    <TestimonialsSection limit={3} />
    <CtaBanner />
    <Footer />
  </div>
);

export default Index;
