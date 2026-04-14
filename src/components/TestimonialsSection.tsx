import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Margaret L.",
    location: "Toronto, ON",
    text: "SupremeHome care services has been a blessing for our family. The aide who looks after my mother is incredibly kind and professional. We finally have peace of mind.",
    rating: 5,
    initial: "M",
  },
  {
    name: "James R.",
    location: "Vancouver, BC",
    text: "After my hip surgery, the recovery care I received was outstanding. My caregiver helped me get back on my feet safely and with confidence.",
    rating: 5,
    initial: "J",
  },
  {
    name: "Susan T.",
    location: "Calgary, AB",
    text: "The companionship care for my father has made such a difference. He looks forward to his visits and his mood has improved so much. Highly recommend!",
    rating: 5,
    initial: "S",
  },
  {
    name: "David K.",
    location: "Ottawa, ON",
    text: "Professional, punctual, and genuinely caring. The team went above and beyond during a very difficult time for our family. We are eternally grateful.",
    rating: 5,
    initial: "D",
  },
  {
    name: "Linda M.",
    location: "Montreal, QC",
    text: "We tried several home care agencies before finding ComfortCare. The difference is night and day — truly exceptional caregivers who treat my mom like family.",
    rating: 5,
    initial: "L",
  },
  {
    name: "Robert P.",
    location: "Winnipeg, MB",
    text: "The overnight care service gave us the rest we desperately needed as family caregivers. Knowing Dad is safe lets us sleep peacefully.",
    rating: 5,
    initial: "R",
  },
];

const TestimonialsSection = ({ limit }: { limit?: number }) => {
  const shown = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <p className="text-center text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">
          TESTIMONIALS
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-foreground mb-3">
          What Families <span className="italic font-normal">Say About Us</span>
        </h2>

        {/* Overall rating bar */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <span className="text-sm font-bold text-foreground">Excellent</span>
          <span className="text-sm text-muted-foreground">
            — Based on 100+ Google reviews
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {shown.map((t, i) => (
            <div
              key={i}
              className="group bg-white border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in relative"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <Quote
                size={32}
                className="absolute top-4 right-4 text-primary/8 group-hover:text-primary/15 transition-colors"
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={13}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed mb-5 relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground">{t.name}</p>
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
