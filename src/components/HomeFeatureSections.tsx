import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Heart,
  Leaf,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const dayToDayMoments = [
  {
    category: "Morning",
    title: "A gentle start",
    text: "A cup of tea, a favourite spot in the sunshine and support with morning routines when you need it.",
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=900&q=85",
    alt: "A caregiver sharing a calm moment with an older adult",
  },
  {
    category: "Afternoon",
    title: "Something to look forward to",
    text: "A walk, a creative project or a friendly conversation with a healthcare aide who knows your home.",
    image:
      "https://images.unsplash.com/photo-1559234938-b60fff04894d?w=900&q=85",
    alt: "An older adult enjoying company and conversation",
  },
  {
    category: "Evening",
    title: "Good company",
    text: "Music, familiar stories and time spent with dependable support nearby.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=85",
    alt: "A family spending time together at home",
  },
];

const trustPoints = [
  { icon: Heart, text: "Support tailored to your home" },
  { icon: UserRoundCheck, text: "Licensed healthcare aides" },
  { icon: ShieldCheck, text: "CPR certified" },
  { icon: ShieldCheck, text: "Police checked" },
];

const questions = [
  {
    question: "How do I know which service is right?",
    answer:
      "We begin by listening. A care coordinator can learn about your routines, priorities and support needs, then help you explore the options that fit.",
  },
  {
    question: "What should the first conversation cover?",
    answer:
      "We can talk through what a typical day looks like, where a little extra help would be useful, and what matters most to you and your family.",
  },
  {
    question: "Are healthcare aides available 24/7?",
    answer:
      "Care schedules depend on your needs and location. Contact our team to discuss available visit times, overnight care and ongoing support.",
  },
  {
    question: "What can someone bring from home?",
    answer:
      "Your familiar routines, preferences and personal touches help us shape support around you. We can discuss practical details together during your assessment.",
  },
];

export const DayToDaySection = () => (
  <section className="animate-section border-b border-border bg-[#fffefa] py-16 md:py-20">
    <div className="container max-w-6xl">
      <div className="mb-7 grid gap-4 md:grid-cols-2 md:items-end">
        <div>
          <p className="section-label">A little dependable support</p>
          <h2 className="mt-4 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            A day with room for you.
          </h2>
        </div>
        <p className="max-w-lg text-xs leading-6 text-muted-foreground md:justify-self-end md:text-sm">
          Imagine a day where help is available when you need it, so you can stay
          safe, confident and connected at home.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {dayToDayMoments.map((moment) => (
          <article key={moment.title} className="min-w-0">
            <div className="overflow-hidden rounded-sm bg-muted">
              <img
                src={moment.image}
                alt={moment.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.025]"
              />
            </div>
            <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.12em] text-primary">
              {moment.category}
            </p>
            <h3 className="mt-1 text-lg font-medium text-foreground">
              {moment.title}
            </h3>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              {moment.text}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export const HomeVisitSection = () => (
  <section className="animate-section border-b border-border bg-[#eee9df] py-16 md:py-20">
    <div className="container grid max-w-6xl items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
      <div>
        <p className="section-label">Support that fits your home</p>
        <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight text-foreground md:text-4xl">
          More than a visit. A dependable presence.
        </h2>
        <p className="mt-4 max-w-md text-xs leading-6 text-muted-foreground md:text-sm">
          Licensed healthcare aides bring dependable support into the home, so
          you can stay safe, confident and connected to the routines that matter
          most.
        </p>
        <ul className="mt-5 space-y-2">
          {[
            "Support tailored to your home",
            "Licensed healthcare aides",
            "Available 24/7",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-[10px] font-medium text-foreground"
            >
              <Leaf size={12} className="text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="overflow-hidden rounded-sm">
        <img
          src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=85"
          alt="A nourishing meal prepared and shared at home"
          loading="lazy"
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
    </div>
  </section>
);

export const HomeGallerySection = () => (
  <section className="animate-section border-b border-border bg-[#f7f5ef] py-16 md:py-20">
    <div className="container max-w-6xl">
      <div className="mb-7 grid gap-4 md:grid-cols-2 md:items-end">
        <div>
          <p className="section-label">Your independence, supported</p>
          <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Support that respects your home.
          </h2>
        </div>
        <p className="max-w-lg text-xs leading-6 text-muted-foreground md:justify-self-end md:text-sm">
          Dependable support can help you stay safe, confident and connected in
          the place that feels most like you.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1100&q=85"
            alt="A comfortable, light-filled living room"
            loading="lazy"
            className="aspect-[4/2.5] w-full rounded-sm object-cover"
          />
          <figcaption className="mt-2 text-xs text-foreground">
            Support that fits your home
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1100&q=85"
            alt="A welcoming living space with a place to sit and relax"
            loading="lazy"
            className="aspect-[4/2.5] w-full rounded-sm object-cover"
          />
          <figcaption className="mt-2 text-xs text-foreground">
            A familiar place to stay
          </figcaption>
        </figure>
      </div>
      <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex items-center justify-center gap-2 rounded-sm border border-border/80 bg-background/60 px-3 py-3 text-center text-[9px] font-medium text-foreground"
          >
            <Icon size={13} className="shrink-0 text-primary" />
            {text}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const DecisionStepsSection = () => (
  <section className="animate-section border-b border-border bg-[#edf0e7] py-16 md:py-20">
    <div className="container grid max-w-6xl gap-8 md:grid-cols-2 md:gap-14">
      <div>
        <p className="section-label">For you and your family</p>
        <h2 className="mt-4 max-w-sm text-3xl font-medium leading-tight text-foreground md:text-4xl">
          A big decision. Small, thoughtful steps.
        </h2>
        <p className="mt-4 max-w-md text-xs leading-6 text-muted-foreground">
          You don't need to have all the answers. Start with a conversation, and
          take the time you need to explore your options together.
        </p>
        <Link
          to="/contact"
          className="mt-4 inline-flex items-center gap-1 text-[10px] font-semibold text-primary hover:underline"
        >
          Questions to bring to a care conversation <ArrowUpRight size={13} />
        </Link>
      </div>
      <ol className="divide-y divide-primary/10">
        {[
          {
            title: "Tell us what matters",
            text: "Talk through daily routines, preferences and the support you're looking for.",
          },
          {
            title: "Get a feel for the support",
            text: "Explore the services, ask about availability and imagine how dependable in-home support could feel.",
          },
          {
            title: "Consider the next chapter",
            text: "Before making a decision, review care suitability, a written fee breakdown and what ongoing support would involve.",
          },
        ].map((step, index) => (
          <li key={step.title} className="flex gap-4 py-4 first:pt-0">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e1e8d8] font-serif text-[10px] text-primary">
              0{index + 1}
            </span>
            <div>
              <h3 className="text-sm font-medium text-foreground">
                {step.title}
              </h3>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                {step.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export const FaqSection = () => (
  <section className="animate-section border-b border-border bg-[#fffefa] py-16 md:py-20">
    <div className="container grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
      <div>
        <p className="section-label">A little clarity</p>
        <h2 className="mt-4 max-w-sm text-3xl font-medium leading-tight text-foreground md:text-4xl">
          It’s natural to have questions.
        </h2>
        <p className="mt-4 max-w-sm text-xs leading-6 text-muted-foreground">
          A few helpful starting points for older adults and their families.
        </p>
        <Link
          to="/contact"
          className="mt-4 inline-flex items-center gap-1 text-[10px] font-semibold text-primary hover:underline"
        >
          Ask us a question <ArrowUpRight size={13} />
        </Link>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {questions.map(({ question, answer }, index) => (
          <AccordionItem
            key={question}
            value={`question-${index}`}
            className="border-primary/10"
          >
            <AccordionTrigger className="py-4 text-left text-xs font-medium text-foreground hover:no-underline">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-xs leading-5 text-muted-foreground">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
