import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Brain,
  CookingPot,
  HeartHandshake,
  Moon,
  PersonStanding,
} from "lucide-react";

const services = [
  { title: "Personal care", category: "Daily assistance", desc: "Bathing, dressing, grooming and daily routines in the comfort of your own home.", img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=900&q=85", icon: PersonStanding, details: ["Bathing and grooming support", "Dressing and moving safely", "Support shaped around your day"] },
  { title: "Dementia care", category: "Specialized support", desc: "Gentle, reassuring support for people living with dementia and those who care for them.", img: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=900&q=85", icon: Brain, details: ["Gentle, familiar daily rhythms", "Care tailored to each person", "Family involvement in planning"] },
  { title: "Respite care", category: "Family support", desc: "A short-term break for family caregivers, with dependable support in the home.", img: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=900&q=85", icon: HeartHandshake, details: ["Time to rest and feel supported", "Flexible visits and care coverage", "A supported introduction to care"] },
  { title: "Meal preparation", category: "Nutrition", desc: "Healthy meal planning and preparation that respects your tastes, dietary needs and kitchen.", img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=85", icon: CookingPot, details: ["Healthy meal planning and prep", "Dietary needs and preferences", "Light kitchen support"] },
  { title: "Companionship", category: "Social wellbeing", desc: "Social connection, conversation and meaningful support that helps days feel more engaging.", img: "https://images.unsplash.com/photo-1559234938-b60fff04894d?w=900&q=85", icon: HeartHandshake, details: ["Conversation and social connection", "Shared activities and interests", "Emotional support and reassurance"] },
  { title: "Overnight care", category: "Around the clock", desc: "Support through the night so you can rest with confidence and wake up feeling supported.", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=900&q=85", icon: Moon, details: ["Nighttime reassurance and safety", "Help with nighttime routines", "Support when you need it most"] },
];

const ServicesSection = ({ limit, variant = "image" }: { limit?: number; variant?: "image" | "compact" }) => {
  const shown = limit ? services.slice(0, limit) : services;
  return (
    <section className="animate-section border-b border-border bg-[#f5f3ed] py-16 md:py-20">
      <div className="container max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="section-label">Support that travels with you</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Six dependable ways we can help.
            </h2>
          </div>
          <p className="max-w-md text-xs leading-6 text-muted-foreground md:text-sm">
            Choose the services that fit your day, your home and your goals — from practical help to meaningful companionship.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {shown.map((service, index) => (
            <article key={service.title} className="group overflow-hidden rounded-[1.15rem] border border-[#e2ded4] bg-[#fffefa] transition-transform duration-300 hover:-translate-y-1">
              {variant === "image" ? (
                <>
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img src={service.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-[#f8f4ee] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-foreground">{service.category}</span>
                  </div>
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <span className="text-[10px] font-semibold text-muted-foreground">0{index + 1}</span>
                        <h3 className="mt-2 text-xl font-semibold text-foreground">{service.title}</h3>
                      </div>
                      <ArrowUpRight size={18} className="text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">{service.desc}</p>
                  </div>
                </>
              ) : (
                <div className="flex h-full flex-col p-5 md:p-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8eee2] text-primary">
                    <service.icon size={17} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-foreground">{service.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{service.desc}</p>
                  <ul className="mt-3 space-y-1.5">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-1.5 text-[10px] leading-4 text-muted-foreground">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-[9px] font-semibold text-primary hover:underline">
                    Explore {service.title.toLowerCase()} <ArrowUpRight size={12} />
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>
        {limit && <Link to="/services" className="mt-8 inline-flex border-b-2 border-primary pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">Explore all services</Link>}
      </div>
    </section>
  );
};

export default ServicesSection;
