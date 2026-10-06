import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Send } from "lucide-react";

const ContactForm = ({ variant = "default" }: { variant?: "default" | "home" }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const isHome = variant === "home";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Request Received!", description: "We'll be in touch within 24 hours to schedule your free assessment." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section
      className={
        isHome
          ? "animate-section bg-[#314633] py-14 text-white md:py-16"
          : "animate-section theme-wash py-20"
      }
      id="contact-form"
    >
      <div
        className={
          isHome
            ? "container grid max-w-6xl items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12"
            : "container max-w-4xl"
        }
      >
        <div className={isHome ? "max-w-md" : "mx-auto mb-14 max-w-2xl text-center"}>
          <p className={isHome ? "text-[9px] font-semibold uppercase tracking-[0.14em] text-white/65" : "section-label"}>
            {isHome ? "For you and your family" : "Get started"}
          </p>
          <h2 className={isHome ? "mt-4 text-3xl font-medium leading-tight text-white md:text-4xl" : "section-title mt-5"}>
            {isHome ? "Talk to a care coordinator. Ask your questions." : "Request a Free Care Assessment"}
          </h2>
          <p className={isHome ? "mt-4 text-xs leading-6 text-white/75" : "mt-4 text-sm text-muted-foreground"}>
            {isHome
              ? "We're a real team offering dependable in-home care across Alberta. Start with a conversation about the support that feels right for you."
              : "Fill out the form below and a care coordinator will contact you within 24 hours."}
          </p>
          {isHome && (
            <div className="mt-5 space-y-2 text-xs text-white/85">
              <a href="tel:18005550273" className="block hover:underline">
                1-800-555-CARE
              </a>
              <a href="mailto:info@rootedwithyou.ca" className="block hover:underline">
                info@rootedwithyou.ca
              </a>
            </div>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className={
            isHome
              ? "reveal-card grid gap-3 rounded-md bg-[#fffefa] p-5 text-foreground shadow-xl sm:grid-cols-2 md:p-6"
              : "reveal-card grid gap-4 sm:grid-cols-2"
          }
        >
          <p className={isHome ? "text-sm font-medium text-foreground sm:col-span-2" : "sr-only"}>
            Request your free care conversation
          </p>
          <Input name="firstName" placeholder="First name *" required maxLength={100} className={isHome ? "h-10 rounded-sm text-xs" : undefined} />
          <Input name="lastName" placeholder="Last name *" required maxLength={100} className={isHome ? "h-10 rounded-sm text-xs" : undefined} />
          <Input name="phone" type="tel" placeholder="Phone number *" required maxLength={20} className={isHome ? "h-10 rounded-sm text-xs" : undefined} />
          <Input name="email" type="email" placeholder="Email address *" required maxLength={255} className={isHome ? "h-10 rounded-sm text-xs" : undefined} />
          <Input name="city" placeholder="City / Province" className={isHome ? "h-10 rounded-sm text-xs sm:col-span-2" : "sm:col-span-2"} maxLength={100} />
          <div className={isHome ? "sm:col-span-2" : "sm:col-span-2"}>
            <select
              name="service"
              className="h-10 w-full rounded-sm border border-input bg-background px-3 text-xs text-foreground"
              defaultValue=""
            >
              <option value="" disabled>Type of care needed</option>
              <option>Personal Care</option>
              <option>Companionship</option>
              <option>Dementia / Alzheimer's Care</option>
              <option>Post-Surgery Recovery</option>
              <option>Respite Care</option>
              <option>24-Hour / Live-In Care</option>
              <option>Other</option>
            </select>
          </div>
          <Textarea name="message" placeholder="Tell us about your care needs…" className={isHome ? "min-h-[72px] rounded-sm text-xs sm:col-span-2" : "sm:col-span-2 min-h-[120px]"} maxLength={2000} />
          <div className="sm:col-span-2">
            <Button type="submit" size="lg" className={isHome ? "h-10 w-full justify-between rounded-sm bg-[#496448] px-4 text-[10px] font-semibold text-white hover:bg-[#3d563d]" : "w-full rounded-full text-xs font-bold uppercase tracking-[0.14em] sm:w-auto"} disabled={loading}>
              {loading ? <><Send size={16} className="mr-2" /> Sending…</> : <>{isHome ? "Request a care conversation" : <><Send size={18} className="mr-2" /> Request Free Assessment</>}{isHome && <ArrowRight size={14} />}</>}
            </Button>
            {isHome && <p className="mt-2 text-[8px] leading-4 text-muted-foreground">By sending this form, you agree we may contact you about your care request.</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
