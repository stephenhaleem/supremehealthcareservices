import {
  Heart, Bath, UtensilsCrossed, Pill, Activity, Car,
  Brain, Bed, UserCheck, HandHeart, Stethoscope, Home,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Heart, title: "Personal Care", desc: "Bathing, grooming, dressing, and hygiene assistance with dignity and respect.", color: "from-[hsl(340,80%,55%)] to-[hsl(340,70%,65%)]" },
  { icon: UtensilsCrossed, title: "Meal Preparation", desc: "Nutritious meals tailored to dietary needs and personal preferences.", color: "from-[hsl(30,85%,55%)] to-[hsl(40,80%,60%)]" },
  { icon: Pill, title: "Medication Reminders", desc: "Timely reminders to ensure medications are taken correctly and safely.", color: "from-[hsl(260,70%,60%)] to-[hsl(280,60%,65%)]" },
  { icon: Activity, title: "Vital Signs Monitoring", desc: "Regular monitoring of blood pressure, heart rate, and other vitals.", color: "from-[hsl(150,60%,45%)] to-[hsl(170,50%,50%)]" },
  { icon: Brain, title: "Dementia & Alzheimer's Care", desc: "Specialised support for cognitive conditions with patience and expertise.", color: "from-[hsl(201,90%,45%)] to-[hsl(220,70%,55%)]" },
  { icon: Bed, title: "Overnight & 24-Hour Care", desc: "Round-the-clock care for those who need continuous assistance.", color: "from-[hsl(240,60%,55%)] to-[hsl(260,50%,60%)]" },
  { icon: Car, title: "Transportation & Errands", desc: "Accompaniment to appointments, shopping, and community activities.", color: "from-[hsl(180,60%,45%)] to-[hsl(190,50%,50%)]" },
  { icon: HandHeart, title: "Companionship", desc: "Friendly conversation, activities, and emotional support to reduce isolation.", color: "from-[hsl(350,75%,55%)] to-[hsl(10,70%,60%)]" },
  { icon: Home, title: "Light Housekeeping", desc: "Laundry, tidying, vacuuming, and maintaining a clean living environment.", color: "from-[hsl(45,80%,50%)] to-[hsl(55,70%,55%)]" },
  { icon: Stethoscope, title: "Post-Surgery Recovery", desc: "Assistance with recovery routines, wound care, and mobility exercises.", color: "from-[hsl(200,80%,50%)] to-[hsl(210,70%,55%)]" },
  { icon: Bath, title: "Respite Care", desc: "Temporary relief for family caregivers so they can rest and recharge.", color: "from-[hsl(290,60%,55%)] to-[hsl(310,50%,60%)]" },
  { icon: UserCheck, title: "Fall Prevention", desc: "Home safety assessments and mobility assistance to prevent falls.", color: "from-[hsl(120,50%,45%)] to-[hsl(140,45%,50%)]" },
];

const ServicesSection = ({ limit }: { limit?: number }) => {
  const shown = limit ? services.slice(0, limit) : services;
  return (
    <section className="section-gradient py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3">What We Offer</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
            Our Home Care <span className="italic font-normal">Services</span>
          </h2>
          <p className="font-sans text-sm text-muted-foreground max-w-lg mx-auto">Comprehensive care plans designed around your unique needs, delivered by certified healthcare aides.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {shown.map((s, i) => (
            <div
              key={s.title}
              className="group bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 text-primary-foreground group-hover:scale-110 transition-transform duration-300`}>
                <s.icon size={22} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="font-sans text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        {limit && (
          <div className="text-center mt-10">
            <Link to="/services" className="text-primary font-medium hover:underline text-sm">View All Services →</Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
