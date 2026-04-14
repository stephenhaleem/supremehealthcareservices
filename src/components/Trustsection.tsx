import { ShieldCheck, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const badges = [
  { icon: ShieldCheck, label: "Licensed", sub: "Healthcare Aides" },
  { icon: Clock, label: "24 Hour", sub: "Availability" },
  { icon: Star, label: "Top Rated", sub: "5-Star Service" },
];

const TrustSection = () => (
  <section className="py-20 section-gradient">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Photo collage side */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden h-56 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80"
                alt="Caregiver and senior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-56 shadow-md mt-8">
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80"
                alt="Professional home care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Trust rating badge */}
          <div className="absolute bottom-2 left-4 bg-white rounded-xl px-4 py-3 shadow-lg">
            <div className="flex items-center gap-1 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <p className="text-xs font-bold text-foreground">
              Excellent — 100+ reviews
            </p>
            <p className="text-[10px] text-muted-foreground">Google Verified</p>
          </div>
        </div>

        {/* Content side */}
        <div>
          <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">
            WHY FAMILIES CHOOSE US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Care You Can <span className="italic font-normal">Count On</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            We understand that inviting someone into your home takes trust.
            That's why every ComfortCare professional is rigorously screened,
            trained, and matched to your specific needs — so you never have to
            wonder if your loved one is in good hands.
          </p>

          {/* Trust badges */}
          <div className="flex gap-5 mb-8 flex-wrap">
            {badges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-border/60"
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <b.icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground leading-tight">
                    {b.label}
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    {b.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button asChild className="rounded-full px-7">
            <Link to="/contact">Get a Free Assessment</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default TrustSection;
