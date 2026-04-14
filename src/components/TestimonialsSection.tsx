import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Margaret L.", location: "Toronto, ON", text: "ComfortCare has been a blessing for our family. The aide who looks after my mother is incredibly kind and professional. We finally have peace of mind.", rating: 5 },
  { name: "James R.", location: "Vancouver, BC", text: "After my hip surgery, the recovery care I received was outstanding. My caregiver helped me get back on my feet safely and with confidence.", rating: 5 },
  { name: "Susan T.", location: "Calgary, AB", text: "The companionship care for my father has made such a difference. He looks forward to his visits and his mood has improved so much. Highly recommend!", rating: 5 },
  { name: "David K.", location: "Ottawa, ON", text: "Professional, punctual, and genuinely caring. The team went above and beyond during a very difficult time for our family. We are eternally grateful.", rating: 5 },
  { name: "Linda M.", location: "Montreal, QC", text: "We tried several home care agencies before finding ComfortCare. The difference is night and day — truly exceptional caregivers who treat my mom like family.", rating: 5 },
  { name: "Robert P.", location: "Winnipeg, MB", text: "The overnight care service gave us the rest we desperately needed as family caregivers. Knowing Dad is safe lets us sleep peacefully.", rating: 5 },
];

const TestimonialsSection = ({ limit }: { limit?: number }) => {
  const shown = limit ? testimonials.slice(0, limit) : testimonials;
  return (
    <section className="py-20 section-gradient">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
            What Families <span className="italic font-normal">Say</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((t, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl p-7 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 relative overflow-hidden animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Quote size={40} className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
