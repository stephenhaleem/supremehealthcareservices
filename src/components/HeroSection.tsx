import { Link } from "react-router-dom";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="animate-section border-b border-border/80 bg-[#f4f1ea] py-8 md:py-10">
    <div className="container">
      <div className="rounded-[2rem] border border-[#ddd3c7] bg-[#f5f2ee] p-4 shadow-[0_18px_60px_-24px_rgba(28,24,19,0.18)] md:p-6">
        <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="px-2 py-6 md:px-6 md:py-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary/80">
              Licensed healthcare aides · Alberta, Canada
            </p>

            <h1 className="mt-5 max-w-xl text-[3.3rem] leading-[0.9] text-foreground sm:text-[4.35rem] lg:text-[5.3rem]">
              Personal care.
              <span className="mt-2 block">Dependable support.</span>
              <span className="mt-2 block text-primary">At home.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
              Licensed healthcare aides provide dependable, one-to-one support so
              loved ones can live safely, comfortably and confidently in their own
              homes.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-[#2a5a54] px-6 text-[10px] font-bold uppercase tracking-[0.14em] text-white hover:bg-[#214b46]"
              >
                <Link to="/contact">
                  Talk to a care coordinator <ArrowRight size={15} />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-[#d8cfc5] bg-transparent px-6 text-[10px] font-bold uppercase tracking-[0.14em] text-foreground hover:bg-white/50"
              >
                <Link to="/services">Explore our services</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] font-medium text-muted-foreground">
              {[
                "Licensed healthcare aides",
                "CPR certified",
                "Police checked",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-primary/20 bg-white/60 text-primary">
                    <Check size={12} strokeWidth={2.4} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center px-2 pb-2 md:px-4">
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-[#d7cfc5] bg-[#e9e0d7] shadow-[0_22px_56px_-20px_rgba(87,69,42,0.22)]">
              <img
                src={heroImage}
                alt="A healthcare aide spending time with an older adult at home"
                className="h-[420px] w-full object-cover md:h-[520px]"
              />
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex max-w-[260px] items-center justify-between gap-3 rounded-2xl border border-white/50 bg-[#f3efe9]/90 p-4 backdrop-blur-md shadow-[0_18px_32px_-20px_rgba(18,17,15,0.25)] md:left-8 md:right-auto md:max-w-[290px]">
              <div>
                <p className="text-[11px] leading-5 text-muted-foreground">
                  Care that fits your routine.
                </p>
                <a
                  href="tel:18005550273"
                  className="mt-1 block text-[1.05rem] font-semibold text-foreground"
                >
                  1-800-555-CARE
                </a>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2a5a54] text-white">
                <Phone size={18} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
