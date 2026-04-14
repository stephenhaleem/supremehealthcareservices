import { ShieldCheck, Award, Clock, MapPin } from "lucide-react";

const points = [
  { icon: ShieldCheck, title: "Licensed & Certified", desc: "All aides are licensed healthcare professionals with valid CPR certification.", color: "from-[hsl(201,90%,45%)] to-[hsl(220,70%,55%)]" },
  { icon: Award, title: "Police Background Checked", desc: "Every team member has passed a thorough police background check for your peace of mind.", color: "from-[hsl(150,60%,45%)] to-[hsl(170,50%,50%)]" },
  { icon: Clock, title: "Flexible Scheduling", desc: "From a few hours a week to 24/7 live-in care — we adapt to your schedule.", color: "from-[hsl(30,85%,55%)] to-[hsl(40,80%,60%)]" },
  { icon: MapPin, title: "Serving All of Canada", desc: "Available across provinces with locally matched caregivers in your community.", color: "from-[hsl(340,80%,55%)] to-[hsl(350,70%,60%)]" },
];

const WhyUsSection = () => (
  <section className="py-20 bg-card">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3">Why Choose Us</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
          Care You Can <span className="italic font-normal">Count On</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {points.map((p, i) => (
          <div
            key={p.title}
            className="group text-center animate-fade-in"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mx-auto mb-5 text-primary-foreground group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
              <p.icon size={28} />
            </div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="font-sans text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
