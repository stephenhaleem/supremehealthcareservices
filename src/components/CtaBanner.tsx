import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

const CtaBanner = () => {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const scrollFromSection = window.scrollY - sectionTop;
      setOffsetY(scrollFromSection * 0.25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative text-white py-20 min-h-[60vh] flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1576765607525-15b37efdb9ac?w=2000&q=90')`,
          transform: `translateY(${offsetY}px)`,
          top: "-10%",
          height: "120%",
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
          Contact us today for a free, no-obligation care assessment. Our team
          is here to help your family find the right care solution — quickly and
          compassionately.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-3.5 rounded-full hover:bg-white/90 active:scale-[0.98] transition-all duration-200 shadow-lg text-sm"
          >
            Book Free Assessment <ArrowRight size={16} />
          </Link>
          <a
            href="tel:18005550273"
            className="inline-flex items-center gap-2 border border-white/40 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/10 active:scale-[0.98] transition-all duration-200 text-sm"
          >
            <Phone size={16} /> 1-800-555-CARE
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
