import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const ServicesPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="hero-gradient text-primary-foreground py-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">Comprehensive home care solutions tailored to every need.</p>
      </div>
    </section>
    <ServicesSection />
    <CtaBanner />
    <Footer />
  </div>
);

export default ServicesPage;
