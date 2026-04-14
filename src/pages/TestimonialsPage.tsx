import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const TestimonialsPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="hero-gradient text-primary-foreground py-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">What Families Say</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">Hear from the families we've had the privilege of caring for.</p>
      </div>
    </section>
    <TestimonialsSection />
    <CtaBanner />
    <Footer />
  </div>
);

export default TestimonialsPage;
