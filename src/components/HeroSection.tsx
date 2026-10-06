import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg"; // swap for your exported Figma hero image

const HeroSection = () => (
  <section className="border-b border-border bg-background pb-24 pt-8">
    <div className="mx-auto grid max-w-[1440px] items-start gap-12 px-6 md:px-20 lg:grid-cols-2">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-primary">
          In-home support across Canada
        </p>
        <h1 className="mt-7 text-[56px] leading-[1.08] text-foreground md:text-[68px]">
          Personal care.
          <br />
          Dependable support.
          <br />
          <span className="text-primary">At home.</span>
        </h1>
        <p className="mt-9 max-w-[480px] text-[17px] leading-8 text-muted-foreground">
          Licensed healthcare aides provide dependable, one-to-one support so
          loved ones can live safely, confidently and comfortably in their own
          home.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-8 rounded-md bg-primary px-6 py-4 text-sm font-medium text-white hover:bg-primary/90"
          >
            Talk to a care coordinator <ArrowRight size={16} />
          </Link>
          <Link
            to="/services"
            className="rounded-md border border-border px-6 py-4 text-sm font-medium text-foreground hover:bg-white/60"
          >
            Explore our services
          </Link>
        </div>
        <p className="mt-9 flex items-center gap-2.5 text-xs text-muted-foreground">
          <MessageCircle size={14} /> Licensed healthcare aides · CPR certified
          · police checked · available 24/7.
        </p>
      </div>

      <div className="relative">
        <img
          src={heroImage}
          alt="A healthcare aide enjoying tea with an older adult in a garden"
          className="h-[500px] w-full rounded-t-[260px] rounded-b-md object-cover md:h-[540px]"
        />
        <div className="absolute -left-6 bottom-[-28px] w-[240px] rounded-md bg-card p-5 shadow-sm">
          <p className="font-serif text-xl leading-snug text-foreground">
            Care that fits your home.
          </p>
          <p className="mt-3 text-xs leading-5 text-muted-foreground">
            Personal care, meals, companionship and overnight support.
            <br />A helping hand when you need it.
          </p>
        </div>
        <p className="absolute -bottom-10 left-8 text-[10px] text-muted-foreground">
          Support that stays close to home.
        </p>
      </div>
    </div>
  </section>
);

export default HeroSection;
