import { Link } from "react-router-dom";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { useScrollParallax } from "@/hooks/use-scroll-motion";

const HeroSection = () => {
  const { ref: imageRef, offset } = useScrollParallax<HTMLImageElement>(55);

  return (
    <section className="animate-section border-b border-primary/10 bg-background">
      <div className="container grid min-h-[700px] items-stretch gap-0 py-0 px-0 md:pl-8 md:pr-8 lg:pl-10 lg:pr-10 lg:grid-cols-[1.02fr_.98fr]">
        <div className="flex flex-col justify-between bg-background px-6 py-16 md:px-8 lg:px-10 lg:py-20">
          <div className="animate-fade-in">
            <p className="fade-up-content mb-10 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Licensed care · Alberta, Canada
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.88] text-foreground md:text-7xl lg:text-[88px]">
              <span className="animate-word">Exceptional care,</span>
              <span className="animate-word block font-light text-primary [animation-delay:120ms]">
                rooted at home.
              </span>
            </h1>
            <p className="fade-up-content mt-8 max-w-lg text-base leading-7 text-muted-foreground [animation-delay:260ms]">
              Licensed healthcare aides providing personal, dependable support
              so your loved ones can live safely and confidently at home.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-full px-7 text-xs font-light uppercase tracking-[0.14em]"
              >
                <Link to="/contact">
                  Book an assessment <ArrowRight size={15} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-full px-7 text-xs font-bold uppercase tracking-[0.14em]"
              >
                <Link to="/services">Explore services</Link>
              </Button>
            </div>
          </div>

          <div className="theme-card mt-14 grid gap-0 sm:grid-cols-3 font-serif">
            {["CPR certified", "Police checked", "Available 24/7"].map(
              (item) => (
                <div
                  key={item}
                  className="motion-hover flex items-center gap-2 bg-background px-4 py-4 text-[11px] font-serif uppercase tracking-[0.1em] text-foreground"
                >
                  <Check size={14} className="text-primary" /> {item}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="group relative min-h-[420px] overflow-hidden bg-secondary lg:min-h-0">
          <img
            ref={imageRef}
            src={heroImage}
            alt="Licensed healthcare aide spending time with a senior client at home"
            style={{ transform: `translate3d(0, ${offset}px, 0)` }}
            className="parallax-img absolute inset-x-0 bottom-0 h-[86%] w-full rounded-t-[50%] object-cover transition-transform duration-1000 group-hover:scale-[1.035] lg:h-[84%]"
          />
          <div className="theme-card absolute inset-x-5 bottom-5 grid grid-cols-[1fr_auto] items-end gap-4 bg-background/95 p-6 backdrop-blur-sm md:inset-x-auto md:bottom-7 md:left-7 md:max-w-sm">
            <div>
              <p className="fade-up-content text-xs leading-5 text-muted-foreground">
                Talk with our care team any time.
              </p>
              <a
                href="tel:18005550273"
                className="mt-1 block text-lg font-serif text-foreground"
              >
                1-800-555-CARE
              </a>
            </div>
            <Phone size={20} className="text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
