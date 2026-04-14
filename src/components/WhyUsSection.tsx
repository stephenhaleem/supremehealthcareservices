import { ShieldCheck, Award, Clock, MapPin } from "lucide-react";

const points = [
  { icon: ShieldCheck, title: "Licensed & Certified", desc: "All aides are licensed healthcare professionals with valid CPR certification." },
  { icon: Award, title: "Police Background Checked", desc: "Every team member has passed a thorough police background check for your peace of mind." },
  { icon: Clock, title: "Flexible Scheduling", desc: "From a few hours a week to 24/7 live-in care — we adapt to your schedule." },
  { icon: MapPin, title: "Serving All of Canada", desc: "Available across provinces with locally matched caregivers in your community." },
];

const WhyUsSection = () => (
  <section className="py-20 bg-card">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Why Choose Us</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Care You Can Count On</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {points.map((p) => (
          <div key={p.title} className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4 text-primary">
              <p.icon size={28} />
            </div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
