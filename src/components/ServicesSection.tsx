import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const services = [
  { title: "Personal Care", category: "Daily assistance", desc: "Bathing, grooming, dressing, mobility, and hygiene support delivered with dignity.", img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=900&q=85" },
  { title: "Meal Preparation", category: "Nutrition", desc: "Fresh, nourishing meals planned around dietary needs and personal preferences.", img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=85" },
  { title: "Dementia Care", category: "Specialized care", desc: "Calm, consistent support from aides trained in memory care and cognitive conditions.", img: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=900&q=85" },
  { title: "Respite Care", category: "Family support", desc: "Reliable short-term relief that gives family caregivers time to rest and recharge.", img: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=900&q=85" },
  { title: "Companionship", category: "Social wellbeing", desc: "Conversation, outings, activities, and meaningful connection that reduce isolation.", img: "https://images.unsplash.com/photo-1559234938-b60fff04894d?w=900&q=85" },
  { title: "Overnight Care", category: "Around the clock", desc: "Attentive overnight or live-in assistance for safety, comfort, and peace of mind.", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=900&q=85" },
];

const ServicesSection = ({ limit }: { limit?: number }) => {
  const shown = limit ? services.slice(0, limit) : services;
  return (
    <section className="animate-section theme-wash border-b border-border py-24">
      <div className="container">
        <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="section-label">Care solutions</p>
            <h2 className="section-title mt-5"><span className="animate-word">Support for</span> <span className="animate-word text-primary [animation-delay:120ms]">every day.</span></h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">A complete range of in-home services, thoughtfully tailored to changing needs and personal routines.</p>
        </div>
        <div className="services-grid grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((service, index) => (
            <article key={service.title} className="theme-card motion-hover group">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img src={service.img} alt={service.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 bg-background px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-foreground">{service.category}</span>
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
            </article>
          ))}
        </div>
        {limit && <Link to="/services" className="mt-8 inline-flex border-b-2 border-primary pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">Explore all services</Link>}
      </div>
    </section>
  );
};

export default ServicesSection;