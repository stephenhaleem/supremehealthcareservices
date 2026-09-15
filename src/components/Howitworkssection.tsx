import { ClipboardList, HeartHandshake, RefreshCw } from "lucide-react";

const steps = [
  { icon: ClipboardList, number: "01", title: "Listen", desc: "We begin with a free conversation about needs, routines, preferences, and goals." },
  { icon: HeartHandshake, number: "02", title: "Plan", desc: "We design a personal care plan and thoughtfully match the right healthcare aide." },
  { icon: RefreshCw, number: "03", title: "Support", desc: "Care begins with regular check-ins, clear communication, and adjustments as needs evolve." },
];

const HowItWorksSection = () => (
  <section className="animate-section theme-wash border-b border-border py-24">
    <div className="container">
      <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="section-label">How it works</p>
          <h2 className="section-title mt-5"><span className="animate-word">A clear path</span> <span className="animate-word text-primary [animation-delay:120ms]">to better care.</span></h2>
        </div>
        <div className="grid gap-px border-y border-border bg-border md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.title} className="motion-hover bg-background py-8 pr-7 md:px-7">
              <div className="flex items-center justify-between text-primary"><step.icon size={23} strokeWidth={1.5} /><span className="text-[10px] font-bold">{step.number}</span></div>
              <h3 className="mt-10 text-2xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;