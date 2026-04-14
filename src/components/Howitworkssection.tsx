import { ClipboardList, HeartHandshake, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Initial Consultation",
    desc: "Our process begins with a free consultation to understand the unique needs, preferences, and goals of each client and their family.",
  },
  {
    icon: HeartHandshake,
    number: "02",
    title: "Personalized Care Plan",
    desc: "After the consultation, we develop a tailored care plan designed specifically for the individual — matched with the right caregiver.",
  },
  {
    icon: RefreshCw,
    number: "03",
    title: "Ongoing Care & Support",
    desc: "With the plan in place, our team provides ongoing support, regularly monitoring progress and adjusting services as needs evolve.",
  },
];

const HowItWorksSection = () => (
  <section className="py-20 bg-white">
    <div className="container">
      <p className="text-center text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">
        HOW IT WORKS
      </p>
      <h2 className="text-center text-3xl md:text-4xl font-bold text-foreground mb-3">
        Our Simple &{" "}
        <span className="italic font-normal">Effective Care Process</span>
      </h2>
      <p className="text-center text-sm text-muted-foreground max-w-lg mx-auto mb-14">
        Getting started is easy. We make finding the right care simple,
        compassionate, and stress-free.
      </p>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connecting line on desktop */}
        <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-px bg-border z-0" />

        {steps.map((s, i) => (
          <div
            key={s.title}
            className="relative z-10 text-center animate-fade-in"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            {/* Number circle */}
            <div className="w-24 h-24 rounded-full bg-primary/8 border-2 border-primary/20 flex flex-col items-center justify-center mx-auto mb-5">
              <span className="text-xs font-bold text-primary/60 tracking-widest">
                {s.number}
              </span>
              <s.icon size={26} className="text-primary mt-0.5" />
            </div>
            <h3 className="font-bold text-base text-foreground mb-2">
              {s.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
