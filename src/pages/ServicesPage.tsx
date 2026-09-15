import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const ServicesPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="animate-section border-b border-border bg-background py-20">
      <div className="container max-w-2xl">
        <p className="section-label">Our Services</p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight text-foreground md:text-6xl">
          What We Offer at Rooted With You
        </h1>
        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          We offer a wide range of home care services to support you and your
          loved ones. Our team of compassionate caregivers is dedicated to
          providing personalized care that meets your unique needs.
        </p>
        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          From companionship and personal care to specialized support for
          chronic conditions, we are here to help you maintain independence and
          improve quality of life.
        </p>
      </div>
    </section>
    <ServicesSection />
    <CtaBanner />
    <Footer />
  </div>
);

export default ServicesPage;
