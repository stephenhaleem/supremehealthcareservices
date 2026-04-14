import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ChevronRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative text-primary-foreground overflow-hidden min-h-[580px] md:min-h-[680px] flex items-center">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1543333995-a78aea2eee50?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(168,60%,18%,0.92)] via-[hsl(168,50%,25%,0.78)] to-[hsl(168,40%,30%,0.45)]" />

    <div className="container relative z-10 py-20 md:py-28">
      <div className="max-w-2xl">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] mb-6 animate-fade-in">
          Licensed | Background-Checked Professionals
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-4 animate-fade-in [animation-delay:80ms]">
          SupremeHome
          <br />
          <span className="italic font-normal text-3xl md:text-5xl opacity-90">
            Care Services
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-base md:text-lg font-light opacity-85 mb-3 animate-fade-in [animation-delay:140ms]"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          <em>Caring for you, right at home</em>
        </p>
        <p
          className="text-sm md:text-base font-light opacity-80 mb-10 max-w-xl leading-relaxed animate-fade-in [animation-delay:180ms]"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Our dedicated team provides personalized care that allows your loved
          ones to thrive in the comfort of home. Discover peace of mind with
          care that feels like family.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 animate-fade-in [animation-delay:240ms]">
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full px-8 font-semibold text-primary hover-scale"
            asChild
          >
            <Link to="/contact">Book Free Consultation</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-white/40 text-primary hover:bg-white/10 font-medium text-base hover-scale"
            asChild
          >
            <Link to="/services" className="flex items-center gap-2">
              Our Services <ChevronRight size={16} />
            </Link>
          </Button>
        </div>

        {/* Quick trust badges below CTAs */}
        <div className="flex flex-wrap items-center gap-5 mt-8 animate-fade-in [animation-delay:300ms]">
          {[
            "✓ CPR Certified",
            "✓ Police Background Checked",
            "✓ 24/7 Availability",
          ].map((b) => (
            <span
              key={b}
              className="text-xs font-medium opacity-75"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Floating call card — like YYC's overlay card */}
    <div className="absolute bottom-8 right-8 hidden lg:block animate-fade-in [animation-delay:400ms]">
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
  </section>
);

export default HeroSection;
