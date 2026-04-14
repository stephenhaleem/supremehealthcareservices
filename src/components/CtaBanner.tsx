import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CtaBanner = () => (
  <section className="hero-gradient text-primary-foreground py-16">
    <div className="container text-center max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="opacity-90 mb-8">Contact us today for a free, no-obligation care assessment. Our team is here to help your family find the right care solution.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="secondary" asChild>
          <Link to="/contact">Book Free Assessment</Link>
        </Button>
        <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
          <Phone size={18} className="mr-2" /> 1-800-555-CARE
        </Button>
      </div>
    </div>
  </section>
);

export default CtaBanner;
