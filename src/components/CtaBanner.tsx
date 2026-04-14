import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CtaBanner = () => (
  <section className="hero-gradient text-primary-foreground py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(201_70%_65%/0.3),transparent_70%)]" />
    <div className="container text-center max-w-2xl mx-auto relative z-10">
      <p className="text-xs uppercase tracking-[0.2em] opacity-80 mb-4">Get Started Today</p>
      <h2 className="text-3xl md:text-5xl font-bold mb-3">
        Ready to <span className="italic font-normal">Begin?</span>
      </h2>
      <p className="font-sans text-sm opacity-85 mb-10 max-w-lg mx-auto leading-relaxed">Contact us today for a free, no-obligation care assessment. Our team is here to help your family find the right care solution.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="secondary" className="hover-scale text-base px-8 py-6" asChild>
          <Link to="/contact">Book Free Assessment</Link>
        </Button>
        <Button size="lg" variant="outline" className="hover-scale text-base px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
          <Phone size={18} className="mr-2" /> 1-800-555-CARE
        </Button>
      </div>
    </div>
  </section>
);

export default CtaBanner;
