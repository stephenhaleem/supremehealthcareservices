import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const TestimonialsPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="animate-section border-b border-border bg-background py-20">
      <div className="container max-w-2xl">
        <p className="section-label">Testimonials</p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight text-foreground md:text-6xl">
          What Our Clients Say
        </h1>
        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          Hear from our satisfied clients about their experiences with Rooted
          With You. We take pride in providing compassionate and professional
          home care services that make a difference in the lives of those we
          serve.
        </p>
      </div>
    </section>
    <TestimonialsSection />
    <CtaBanner />
    <Footer />
  </div>
);

export default TestimonialsPage;
