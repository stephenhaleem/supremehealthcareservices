import { useAnimatedNumber } from "@/hooks/use-scroll-motion";
import useScrollReveal from "@/hooks/Use-scroll-reveal";

const stats = [
  { value: "24/7", end: 24, suffix: "/7", label: "Care availability" },
  { value: "100%", end: 100, suffix: "%", label: "Background checked" },
  { value: "10k+", end: 10, suffix: "k+", label: "Families supported" },
  { value: "4.9", end: 49, suffix: "", label: "Average rating" },
];

const Stat = ({ stat, active }: { stat: (typeof stats)[number]; active: boolean }) => {
  const value = useAnimatedNumber(active, stat.end);
  return (
    <div className="motion-hover stat-item border-primary-foreground/20 px-5 text-center sm:border-r sm:last:border-r-0">
      <p className="font-serif text-5xl font-semibold tracking-tight md:text-6xl">{stat.value === "4.9" ? (value / 10).toFixed(1) : value}{stat.suffix}</p>
      <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary-foreground/70">{stat.label}</p>
    </div>
  );
};

const ImpactStats = () => {
  const [sectionRef, active] = useScrollReveal<HTMLElement>(0.2);
  return (
  <section ref={sectionRef} className="animate-section bg-primary py-16 text-primary-foreground">
    <div className="container grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-0">
      {stats.map((stat) => <Stat key={stat.label} stat={stat} active={active} />)}
    </div>
  </section>
  );
};

export default ImpactStats;
