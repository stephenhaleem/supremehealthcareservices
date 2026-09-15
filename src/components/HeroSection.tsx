import { Link } from "react-router-dom";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="border-b border-border bg-background">
    <div className="container grid min-h-[690px] items-stretch gap-0 py-8 lg:grid-cols-[1.02fr_.98fr] lg:py-12">
      <div className="flex flex-col justify-between border border-border bg-background p-7 md:p-12 lg:border-r-0 lg:p-16">
        <div className="animate-fade-in">
          <p className="mb-10 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
            Licensed care · Alberta, Canada
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.94] text-foreground md:text-7xl lg:text-[88px]">
            Exceptional care,
            <span className="block font-light text-primary">rooted at home.</span>
          </h1>
          <p className="mt-8 max-w-lg text-base leading-7 text-muted-foreground">
            Licensed healthcare aides providing personal, dependable support so
            your loved ones can live safely and confidently at home.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-13 rounded-none px-7 text-xs font-bold uppercase tracking-[0.14em]">
              <Link to="/contact">Book an assessment <ArrowRight size={15} /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-13 rounded-none px-7 text-xs font-bold uppercase tracking-[0.14em]">
              <Link to="/services">Explore services</Link>
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-3">
          {["CPR certified", "Police checked", "Available 24/7"].map((item) => (
            <div key={item} className="flex items-center gap-2 bg-background px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-foreground">
              <Check size={14} className="text-primary" /> {item}
            </div>
          ))}
        </div>
      </div>

      <div className="group relative min-h-[520px] overflow-hidden bg-secondary lg:min-h-0">
        <img
          src={heroImage}
          alt="Licensed healthcare aide spending time with a senior client at home"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
        />
        <div className="absolute inset-x-0 bottom-0 grid grid-cols-[1fr_auto] items-end gap-4 bg-background/95 p-6 backdrop-blur-sm md:inset-x-auto md:bottom-7 md:left-7 md:max-w-sm">
          <div>
            <p className="text-xs leading-5 text-muted-foreground">Talk with our care team any time.</p>
            <a href="tel:18005550273" className="mt-1 block text-lg font-semibold text-foreground">1-800-555-CARE</a>
          </div>
          <Phone size={20} className="text-primary" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;