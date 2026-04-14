import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative text-primary-foreground overflow-hidden">
    <img
      src={heroBg}
      alt="Compassionate home care"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-primary/50" />
    <div className="container relative z-10 py-24 md:py-40 text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs uppercase tracking-widest mb-6 animate-fade-in">
        <ShieldCheck size={14} />
        Licensed &amp; Background-Checked Professionals
      </div>
      <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in [animation-delay:100ms]">
        Compassionate
        <span className="block font-sans text-lg md:text-2xl font-light tracking-wide opacity-90 mt-3 mb-2">Home Care</span>
        <span className="italic font-normal">You Can Trust</span>
      </h1>
      <p className="font-sans text-base md:text-lg font-light opacity-85 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in [animation-delay:200ms]">
        Professional healthcare aides across Canada — CPR-certified, police-verified, and dedicated to helping your loved ones live comfortably at home.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:300ms]">
        <Button size="lg" variant="secondary" className="text-base px-8 py-6 hover-scale" asChild>
          <Link to="/contact">Book a Free Assessment</Link>
        </Button>
        <Button size="lg" variant="outline" className="text-base px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover-scale" asChild>
          <Link to="/services" className="flex items-center gap-2">
            <Phone size={18} /> Our Services
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
