import { Award, ShieldCheck, UserRoundCheck } from "lucide-react";

const points = [
  { icon: UserRoundCheck, title: "Licensed healthcare aides" },
  { icon: ShieldCheck, title: "CPR certified" },
  { icon: Award, title: "Police checked" },
];

const WhyUsSection = () => (
  <section className="animate-section overflow-x-clip border-b border-border bg-[#fffefa] py-16 md:py-20">
    <div className="container max-w-6xl">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-label">Rooted in dependable support</p>
        <h2 className="mt-4 text-2xl font-semibold leading-tight text-foreground md:text-4xl">
          Home is where life feels most like yours.
          <span className="mt-1 block">We bring dependable support there.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-muted-foreground md:text-sm">
          Our trained healthcare aides offer calm, one-to-one support so clients can stay
          safe, independent and connected to the routines that matter most.
        </p>
      </div>

      <div className="mx-auto mt-9 flex max-w-4xl flex-wrap justify-center gap-x-8 gap-y-4">
        {points.map((point, index) => (
          <div key={point.title} className="flex items-center gap-2 text-[10px] font-medium text-foreground">
            <point.icon size={14} strokeWidth={1.7} className="text-primary" aria-hidden="true" />
            <span>{point.title}</span>
            {index < points.length - 1 && <span className="sr-only">,</span>}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
