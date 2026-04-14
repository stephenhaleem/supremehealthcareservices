import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Personal Care",
    category: "Daily Assistance",
    desc: "Bathing, grooming, dressing, and hygiene assistance with dignity and respect for your loved one.",
    img: "https://images.unsplash.com/photo-1775642545871-ba7503fec638?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Meal Preparation",
    category: "Nutrition & Wellness",
    desc: "Nutritious, delicious meals crafted with care and tailored to dietary needs and preferences.",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
  },
  {
    title: "Dementia & Alzheimer's Care",
    category: "Specialized Care",
    desc: "Specialized, patient support for cognitive conditions by trained professionals who truly understand.",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Respite Care",
    category: "Family Support",
    desc: "Temporary relief for primary family caregivers — giving you the rest you need and deserve.",
    img: "https://images.unsplash.com/photo-1765896387454-3c29c0473615?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Companionship",
    category: "Social & Emotional",
    desc: "Friendly conversation, activities, and genuine emotional support to reduce isolation and loneliness.",
    img: "https://images.unsplash.com/photo-1762955911769-d652ceaa94bb?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "24-Hour / Overnight Care",
    category: "Round-the-Clock",
    desc: "Continuous professional care and supervision for those who need overnight or live-in assistance.",
    img: "https://images.unsplash.com/photo-1740479050151-5d26c764403e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ServicesSection = ({ limit }: { limit?: number }) => {
  const shown = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-20 section-gradient">
      <div className="container">
        <p className="text-center text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">
          WHAT WE OFFER
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-foreground mb-3">
          Trustworthy & Compassionate{" "}
          <span className="italic font-normal">Care Solutions</span>
        </h2>
        <p className="text-center text-sm text-muted-foreground max-w-lg mx-auto mb-12">
          Comprehensive care plans designed around your unique needs, delivered
          by certified healthcare aides.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((s, i) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {s.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-base text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm border border-primary rounded-full px-6 py-2.5 hover:bg-primary hover:text-white transition-all"
            >
              View All Services <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
