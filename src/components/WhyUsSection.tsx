import { Link } from "react-router-dom";
import { Award, Clock, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const points = [
  {
    icon: ShieldCheck,
    title: "Licensed & CPR certified",
    desc: "Every aide holds current professional credentials and emergency-response training.",
  },
  {
    icon: Award,
    title: "Police background checked",
    desc: "Each team member is carefully screened before entering a client's home.",
  },
  {
    icon: Clock,
    title: "Flexible, dependable care",
    desc: "Choose occasional support, overnight assistance, or continuous 24-hour care.",
  },
  {
    icon: MapPin,
    title: "Across Alberta",
    desc: "Local support for families in Calgary, Edmonton, and communities province-wide.",
  },
];

const WhyUsSection = () => (
  <section className="animate-section overflow-x-clip border-b border-border bg-secondary/35 py-32">
    <div className="container min-w-0 grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="section-label">Our standard</p>
        <h2 className="section-title mt-5 md:text-5xl">
          <span className="animate-word">Care that earns</span>{" "}
          <span className="animate-word text-primary [animation-delay:120ms]">
            your trust.
          </span>
        </h2>
        <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">
          Thoughtful support starts with excellent people. Our care team
          combines clinical readiness with genuine warmth, patience, and
          respect.
        </p>
        <Button asChild variant="outline" className="mt-8 rounded-full">
          <Link to="/about">Meet our approach</Link>
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {points.map((point, index) => (
          <article
            key={point.title}
            className="theme-card motion-hover group min-h-[250px] p-8 transition-colors hover:bg-secondary/50 md:p-10"
          >
            <div className="flex items-start justify-between">
              <point.icon
                size={26}
                strokeWidth={1.4}
                className="text-primary"
              />
              <span className="text-[10px] font-serif text-muted-foreground">
                0{index + 1}
              </span>
            </div>
            <h3 className="mt-14 text-xl font-semibold text-foreground">
              {point.title}
            </h3>
            <p className="mt-3 text-sm font-light leading-6 font-serif text-muted-foreground">
              {point.desc}
            </p>
            <div className="mt-7 h-px w-8 bg-primary transition-all duration-300 group-hover:w-16" />
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
