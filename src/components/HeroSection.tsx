import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Phone } from "lucide-react";

const HeroSection = () => (
  <section className="hero-gradient text-primary-foreground">
    <div className="container py-20 md:py-32 text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur rounded-full px-4 py-1.5 text-sm mb-6">
        <ShieldCheck size={16} />
        Licensed &amp; Background-Checked Professionals
      </div>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
        Compassionate Home Care You Can Trust
      </h1>
      <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
        Professional healthcare aides across Canada — CPR-certified, police-verified, and dedicated to helping your loved ones live comfortably at home.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="secondary" asChild>
          <Link to="/contact">Book a Free Assessment</Link>
        </Button>
        <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
          <Link to="/services" className="flex items-center gap-2">
            <Phone size={18} /> Our Services
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
