import { Check, MessageCircle, ClipboardCheck, HeartHandshake } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="animate-section border-b border-border bg-[#e9eee2] py-16 md:py-20">
      <div className="container grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-12">
        <div className="overflow-hidden rounded-sm">
          <img
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1100&q=85"
            alt="A caregiver listening and talking with an older adult at home"
            loading="lazy"
            className="aspect-[4/3] h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="section-label">The person comes first</p>
          <h2 className="mt-4 max-w-lg text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Good support begins with getting to know you.
          </h2>
          <p className="mt-4 text-xs leading-6 text-muted-foreground md:text-sm">
            Your story, your preferences, your small daily rituals. These are the
            starting points for the kind of dependable in-home support we
            provide at Rooted With You.
          </p>
          <ol className="mt-5 divide-y divide-primary/10">
            {[
              { icon: MessageCircle, title: "Listen first", text: "Learn what matters to you, your culture and way of life." },
              { icon: ClipboardCheck, title: "Plan together", text: "Match the right help to your home, routines and care priorities." },
              { icon: HeartHandshake, title: "Keep the conversation open", text: "Adjust support as your preferences and needs change." },
            ].map((step) => (
              <li key={step.title} className="flex gap-3 py-3">
                <step.icon size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-xs font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-[10px] leading-4 text-muted-foreground">{step.text}</p>
                </div>
                <Check size={13} className="ml-auto mt-0.5 shrink-0 text-primary/70" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
