import { Quote, Star } from "lucide-react";

const testimonials = [
  { name: "Margaret L.", location: "Calgary, AB", text: "The aide who looks after my mother is incredibly kind and professional. We finally have peace of mind." },
  { name: "James R.", location: "Edmonton, AB", text: "After my hip surgery, the recovery care was outstanding. My caregiver helped me regain confidence safely." },
  { name: "Susan T.", location: "Red Deer, AB", text: "The companionship care has made such a difference. Dad looks forward to every visit and feels like himself again." },
  { name: "David K.", location: "Calgary, AB", text: "Professional, punctual, and genuinely caring. The team went above and beyond for our family." },
  { name: "Linda M.", location: "Airdrie, AB", text: "The difference is remarkable—exceptional caregivers who treat my mom with dignity and patience." },
  { name: "Robert P.", location: "Lethbridge, AB", text: "Overnight care gave our family the rest we desperately needed. Knowing Dad is safe lets us sleep peacefully." },
];

const TestimonialsSection = ({ limit }: { limit?: number }) => {
  const shown = limit ? testimonials.slice(0, limit) : testimonials;
  return (
    <section className="border-b border-border bg-background py-24">
      <div className="container">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="section-label">Family stories</p><h2 className="section-title mt-5">Trusted in the moments that matter.</h2></div>
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground"><span className="flex gap-1 text-primary">{[1,2,3,4,5].map((n) => <Star key={n} size={14} fill="currentColor" />)}</span> 5.0 average</div>
        </div>
        <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {shown.map((item) => (
            <article key={item.name} className="group min-h-[280px] bg-background p-8 transition-colors hover:bg-secondary/40">
              <Quote size={28} strokeWidth={1.2} className="text-primary" />
              <blockquote className="mt-10 text-lg leading-7 text-foreground">“{item.text}”</blockquote>
              <div className="mt-8 border-t border-border pt-5"><p className="text-xs font-bold uppercase tracking-[0.1em] text-foreground">{item.name}</p><p className="mt-1 text-xs text-muted-foreground">{item.location}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;