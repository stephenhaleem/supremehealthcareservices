import { Link } from "react-router-dom";
import { ShieldCheck, Award, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const points = [
  {
    icon: ShieldCheck,
    title: "Licensed & CPR Certified",
    desc: "All aides are licensed healthcare professionals holding valid CPR certification — always current.",
  },
  {
    icon: Award,
    title: "Police Background Checked",
    desc: "Every team member has passed a thorough police background check for your family's peace of mind.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    desc: "From a few hours a week to 24/7 live-in care — we adapt to your unique schedule and needs.",
  },
  {
    icon: MapPin,
    title: "Serving All of Alberta",
    desc: " Proudly providing compassionate home care services across the entire province of Alberta, from Calgary to Edmonton and beyond.",
  },
];

const WhyUsSection = () => (
  <section className="py-20 bg-white">
    <div className="container">
      {/* Section label */}
      <p className="text-center text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">
        OUR PROMISE
      </p>
      <h2 className="text-center text-3xl md:text-4xl font-bold text-foreground mb-3">
        Providing Personalized Care{" "}
        <span className="italic font-normal">with Integrity</span>
      </h2>
      <p className="text-center text-sm text-muted-foreground max-w-xl mx-auto mb-14">
        At Rooted With You At Home Services care services, we promise to deliver
        compassionate, tailored care that promotes independence, dignity, and
        comfort — in the place where healing happens most: home.
      </p>

      {/* Split layout: image left + points right */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image side */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1773227060422-ee506b865417?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Compassionate caregiver with senior"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-5 -right-4 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-lg hidden sm:block">
            <div className="text-3xl font-bold">10K+</div>
            <div className="text-xs opacity-85 font-medium">
              Families Served
            </div>
          </div>
        </div>

        {/* Points side */}
        <div>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {points.map((p, i) => (
              <div
                key={p.title}
                className="group animate-fade-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <p.icon
                    size={20}
                    className="text-primary group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="font-bold text-sm text-foreground mb-1">
                  {p.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="flex gap-3 flex-wrap">
            <Button asChild className="rounded-full px-6">
              <Link to="/about">More About Us</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUsSection;
