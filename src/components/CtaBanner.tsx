import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const CtaBanner = () => (
  <section className="relative text-white py-20 min-h-[60vh] flex items-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1576765607525-15b37efdb9ac?w=2000&q=90')`,
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(168,60%,18%,0.92)] via-[hsl(168,50%,25%,0.78)] to-[hsl(168,40%,30%,0.45)]" />

    <div className="container relative z-10 text-center max-w-3xl mx-auto px-4">
      <p className="text-xs uppercase tracking-[0.2em] opacity-80 mb-4 font-semibold">
        Get Started Today
      </p>

      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Ready to <span className="italic font-normal">Begin?</span>
      </h2>

      <p className="text-sm opacity-90 mb-10 max-w-md mx-auto leading-relaxed">
        Contact us today for a free, no-obligation care assessment. Our team is
        here to help your family find the right care solution — quickly and
        compassionately.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          size="lg"
          variant="secondary"
          className="rounded-full px-8 font-semibold text-primary"
          asChild
        >
          <Link to="/contact" className="flex items-center gap-2">
            Book Free Assessment <ArrowRight size={16} />
          </Link>
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="rounded-full px-8 border-white/40 text-primary hover:bg-white/10"
          asChild
        >
          <a href="tel:18005550273" className="flex items-center gap-2">
            <Phone size={16} /> 1-800-555-CARE
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default CtaBanner;
