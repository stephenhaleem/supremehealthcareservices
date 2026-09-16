import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { useScrollParallax } from "@/hooks/use-scroll-motion";

const HeroSection = () => {
  const desktopParallax = useScrollParallax<HTMLImageElement>(55);
  const mobileParallax = useScrollParallax<HTMLImageElement>(90);

  return (
    <>
      {/* Desktop — original split layout */}
      <section className="animate-section hidden border-b border-primary/10 bg-background lg:block">
        <div className="container grid min-h-[700px] items-stretch gap-0 py-0 px-0 lg:grid-cols-[1.02fr_.98fr] lg:pl-10 lg:pr-10">
          <div className="flex flex-col justify-between bg-background px-8 py-16 lg:px-10 lg:py-20">
            <div className="animate-fade-in">
              <p className="fade-up-content mb-10 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                Licensed care · Alberta, Canada
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.88] text-foreground lg:text-[88px]">
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

            <div className="theme-card mt-14 grid grid-cols-3 gap-0 font-serif">
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

          <div className="group relative min-h-0 overflow-hidden bg-secondary">
            <img
              ref={desktopParallax.ref}
              src={heroImage}
              alt="Licensed healthcare aide spending time with a senior client at home"
              style={{
                transform: `translate3d(0, ${desktopParallax.offset}px, 0)`,
              }}
              className="parallax-img absolute inset-x-0 bottom-0 h-[84%] w-full rounded-t-[50%] object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
            />
            <div className="theme-card absolute inset-x-auto bottom-7 left-7 grid max-w-sm grid-cols-[1fr_auto] items-end gap-4 bg-background/95 p-6 backdrop-blur-sm">
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

      {/* Mobile & tablet — full-bleed parallax */}
      <section className="animate-section relative -mt-[4.75rem] block h-[100svh] min-h-[560px] w-full overflow-hidden bg-primary lg:hidden">
        <img
          ref={mobileParallax.ref}
          src={heroImage}
          alt="Licensed healthcare aide spending time with a senior client at home"
          style={{
            transform: `translate3d(0, ${mobileParallax.offset}px, 0) scale(1.15)`,
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/45 to-primary/10" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/35 to-transparent" />

        <div className="relative z-10 flex h-full flex-col justify-end">
          <div className="container pb-8 pt-16 sm:pb-20 sm:pt-24">
            <p className="animate-fade-in text-[9px] font-bold uppercase tracking-[0.18em] text-primary-foreground/70 sm:text-[10px] sm:tracking-[0.2em]">
              Licensed care · Alberta, Canada
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.95] text-primary-foreground sm:mt-6 sm:text-7xl">
              <span className="animate-word block">Exceptional care,</span>
              <span className="animate-word block font-light text-secondary [animation-delay:120ms]">
                rooted at home.
              </span>
            </h1>

            <p className="fade-up-content mt-4 max-w-md text-sm leading-6 text-primary-foreground/80 [animation-delay:260ms] sm:mt-7 sm:max-w-lg sm:text-base sm:leading-7">
              Licensed healthcare aides providing personal, dependable support
              so your loved ones can live safely and confidently at home.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-full bg-secondary px-7 text-xs font-bold uppercase tracking-[0.14em] text-primary hover:bg-secondary/90"
              >
                <Link to="/contact">
                  Book an assessment <ArrowRight size={15} />
                </Link>
              </Button>

              <a
                href="tel:18005550273"
                className="flex items-center gap-2 text-sm font-serif text-primary-foreground/90 hover:text-primary-foreground"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/30">
                  <Phone size={16} />
                </span>
                1-800-555-CARE
              </a>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-3 divide-x divide-primary-foreground/15 border-t border-primary-foreground/15 bg-primary/70 backdrop-blur-sm">
            {["CPR certified", "Police checked", "Available 24/7"].map(
              (item) => (
                <div
                  key={item}
                  className="px-2 py-3 text-center text-[8px] font-bold uppercase leading-tight tracking-[0.08em] text-primary-foreground sm:px-4 sm:py-4 sm:text-[11px] sm:tracking-[0.14em]"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-[6.5rem] left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-primary-foreground/70 sm:flex">
          <span className="text-[9px] font-bold uppercase tracking-[0.18em]">
            Scroll
          </span>
          <ArrowDown size={14} className="animate-bounce" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
