import { HeartHandshake, Coffee, Sprout } from "lucide-react";

const points = [
  { icon: HeartHandshake, label: "Licensed healthcare aides" },
  { icon: Coffee, label: "CPR certified" },
  { icon: Sprout, label: "Police checked" },
];

const WhyUsSection = () => (
  <section className="border-b border-border bg-card py-20">
    <div className="mx-auto max-w-[1440px] px-6 text-center md:px-20">
      <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-primary">
        Rooted in dependable support
      </p>
      <h2 className="mx-auto mt-6 max-w-[620px] text-3xl leading-tight text-foreground md:text-[38px]">
        Home is where life feels most like yours. We bring dependable support
        there.
      </h2>
      <p className="mx-auto mt-6 max-w-[560px] text-[15px] leading-7 text-muted-foreground">
        Our vision brings licensed healthcare aides into the home, so older
        adults can stay safe, confident and connected to the routines and
        comforts that matter most.
      </p>
      <div className="mt-10 flex flex-wrap justify-around gap-6">
        {points.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="flex items-center gap-3 text-sm text-foreground"
          >
            <Icon size={17} strokeWidth={1.4} className="text-primary" />{" "}
            {label}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
