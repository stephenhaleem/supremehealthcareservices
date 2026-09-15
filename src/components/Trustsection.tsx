import { ShieldCheck, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollParallax } from "@/hooks/use-scroll-motion";

const badges = [
  { icon: ShieldCheck, label: "Licensed", sub: "Healthcare aides" },
  { icon: Clock, label: "24 hour", sub: "Availability" },
  { icon: Star, label: "Top rated", sub: "5-star service" },
];

const TrustSection = () => {
  const { ref: imageRef, offset } = useScrollParallax<HTMLDivElement>(80);
  return (
  <section className="animate-section theme-wash border-b border-border py-24">
    <div className="container grid gap-14 lg:grid-cols-[1fr_1.1fr]">
      <div className="relative">
        <div ref={imageRef} style={{ transform: `translate3d(${-offset}px, 0, 0)` }} className="parallax-img grid grid-cols-2 gap-px border border-border bg-border">
          <div className="aspect-[4/5] overflow-hidden bg-muted">
            <img
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=700&q=80"
              alt="Caregiver and senior"
              className="h-full w-full rounded-t-[45%] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="aspect-[4/5] overflow-hidden bg-muted">
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=700&q=80"
              alt="Professional home care"
              className="h-full w-full rounded-b-[45%] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
        <div className="absolute -bottom-6 left-6 flex items-center gap-3 border border-border bg-background px-5 py-4">
          <div className="flex gap-0.5 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill="currentColor" />
            ))}
          </div>
          <div>
            <p className="text-xs font-bold text-foreground">
              Excellent — 100+ reviews
            </p>
            <p className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
              Google verified
            </p>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <p className="section-label">Why families choose us</p>
        <h2 className="section-title mt-5">Care you can count on.</h2>
        <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">
          We understand that inviting someone into your home takes trust. That's
          why every Rooted With You professional is rigorously screened,
          trained, and matched to your specific needs — so you never have to
          wonder if your loved one is in good hands.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-px border border-border bg-border">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-start gap-3 bg-background p-5"
            >
              <b.icon size={20} strokeWidth={1.5} className="text-primary" />
              <div>
                <p className="text-sm font-bold leading-tight text-foreground">
                  {b.label}
                </p>
                <p className="text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
                  {b.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button
          asChild
          size="lg"
          className="mt-10 rounded-none px-7 text-xs font-bold uppercase tracking-[0.14em]"
        >
          <Link to="/contact">Get a free assessment</Link>
        </Button>
      </div>
    </div>
  </section>
  );
};

export default TrustSection;
