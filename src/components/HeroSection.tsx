import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after mount
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        setOffsetY(window.scrollY * 0.38);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={parallaxRef}
      className="relative text-primary-foreground overflow-hidden min-h-[580px] md:min-h-[700px] flex items-center"
    >
      {/* Parallax BG */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1543333995-a78aea2eee50?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          transform: `translateY(${offsetY}px)`,
          top: "-10%",
          height: "120%",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(168,60%,18%,0.93)] via-[hsl(168,50%,25%,0.8)] to-[hsl(168,40%,30%,0.45)]" />

      {/* Animated grain overlay for texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-2xl">
          {/* Eyebrow — slide in from left */}
          <div
            className={`inline-flex items-center gap-2 bg-white/12 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] mb-7 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            Licensed · Background-Checked · CPR Certified
          </div>

          {/* Main headline — letter stagger via word groups */}
          <h1 className="mb-5" aria-label="SupremeHome Care Services">
            <span
              className={`block text-5xl md:text-7xl font-bold leading-[1.0] transition-all duration-700 delay-100 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ fontFamily: "Lora, serif" }}
            >
              Supreme
              <span className="text-green-300">Home</span>
            </span>
            <span
              className={`block italic font-normal text-3xl md:text-5xl opacity-90 mt-1 transition-all duration-700 delay-200 ${
                visible
                  ? "opacity-90 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ fontFamily: "Lora, serif" }}
            >
              Care Services
            </span>
          </h1>

          {/* Tagline — fade up */}
          <p
            className={`text-base md:text-lg font-light opacity-85 mb-2 italic transition-all duration-700 delay-300 ${
              visible ? "opacity-85 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Caring for you, right at home
          </p>
          <p
            className={`text-sm md:text-base font-light opacity-80 mb-10 max-w-xl leading-relaxed transition-all duration-700 delay-[380ms] ${
              visible ? "opacity-80 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Our dedicated team provides personalized care that allows your loved
            ones to thrive in the comfort of home. Discover peace of mind with
            care that feels like family.
          </p>

          {/* CTAs — slide up */}
          <div
            className={`flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-3.5 rounded-full hover:bg-white/90 active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl text-sm"
            >
              Book Free Consultation
              <ChevronRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border border-white/35 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/10 active:scale-[0.98] transition-all duration-200 text-sm"
            >
              Our Services
            </Link>
          </div>

          {/* Trust badges */}
          <div
            className={`flex flex-wrap items-center gap-6 mt-9 transition-all duration-700 delay-[600ms] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {[
              "✓ CPR Certified",
              "✓ Police Background Checked",
              "✓ 24/7 Availability",
            ].map((b) => (
              <span
                key={b}
                className="text-xs font-medium opacity-75 tracking-wide"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating call card */}
      <div
        className={`absolute bottom-8 right-8 hidden lg:block transition-all duration-700 delay-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="bg-white rounded-2xl p-5 shadow-2xl max-w-[220px]">
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">
            Call Us Anytime
          </p>
          <a
            href="tel:18005550273"
            className="flex items-center gap-2 text-primary font-bold text-lg hover:opacity-80 transition-opacity"
          >
            <Phone size={18} />
            1-800-555-CARE
          </a>
          <p className="text-xs text-muted-foreground mt-1">
            Available 24 hours a day
          </p>
        </div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
