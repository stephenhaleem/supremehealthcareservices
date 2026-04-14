import {
  Heart, Bath, UtensilsCrossed, Pill, Activity, Car,
  Brain, Bed, UserCheck, HandHeart, Stethoscope, Home,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Heart, title: "Personal Care", desc: "Bathing, grooming, dressing, and hygiene assistance with dignity and respect." },
  { icon: UtensilsCrossed, title: "Meal Preparation", desc: "Nutritious meals tailored to dietary needs and personal preferences." },
  { icon: Pill, title: "Medication Reminders", desc: "Timely reminders to ensure medications are taken correctly and safely." },
  { icon: Activity, title: "Vital Signs Monitoring", desc: "Regular monitoring of blood pressure, heart rate, and other vitals." },
  { icon: Brain, title: "Dementia & Alzheimer's Care", desc: "Specialised support for cognitive conditions with patience and expertise." },
  { icon: Bed, title: "Overnight & 24-Hour Care", desc: "Round-the-clock care for those who need continuous assistance." },
  { icon: Car, title: "Transportation & Errands", desc: "Accompaniment to appointments, shopping, and community activities." },
  { icon: HandHeart, title: "Companionship", desc: "Friendly conversation, activities, and emotional support to reduce isolation." },
  { icon: Home, title: "Light Housekeeping", desc: "Laundry, tidying, vacuuming, and maintaining a clean living environment." },
  { icon: Stethoscope, title: "Post-Surgery Recovery", desc: "Assistance with recovery routines, wound care, and mobility exercises." },
  { icon: Bath, title: "Respite Care", desc: "Temporary relief for family caregivers so they can rest and recharge." },
  { icon: UserCheck, title: "Fall Prevention", desc: "Home safety assessments and mobility assistance to prevent falls." },
];

const ServicesSection = ({ limit }: { limit?: number }) => {
  const shown = limit ? services.slice(0, limit) : services;
  return (
    <section className="section-gradient py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Home Care Services</h2>
          <p className="text-muted-foreground">Comprehensive care plans designed around your unique needs, delivered by certified healthcare aides.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {shown.map((s) => (
            <div key={s.title} className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow group">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon size={24} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        {limit && (
          <div className="text-center mt-10">
            <Link to="/services" className="text-primary font-medium hover:underline">View All Services →</Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
