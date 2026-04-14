import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

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
    <section className="py-20 bg-card" id="contact-form">
      <div className="container max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Get Started</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Request a Free Care Assessment</h2>
          <p className="text-muted-foreground">Fill out the form below and a care coordinator will contact you within 24 hours.</p>
        </div>
        <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
          <Input name="firstName" placeholder="First Name *" required maxLength={100} />
          <Input name="lastName" placeholder="Last Name *" required maxLength={100} />
          <Input name="email" type="email" placeholder="Email Address *" required maxLength={255} />
          <Input name="phone" type="tel" placeholder="Phone Number *" required maxLength={20} />
          <Input name="city" placeholder="City / Province" className="sm:col-span-2" maxLength={100} />
          <div className="sm:col-span-2">
            <select
              name="service"
              className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground"
              defaultValue=""
            >
              <option value="" disabled>Type of Care Needed</option>
              <option>Personal Care</option>
              <option>Companionship</option>
              <option>Dementia / Alzheimer's Care</option>
              <option>Post-Surgery Recovery</option>
              <option>Respite Care</option>
              <option>24-Hour / Live-In Care</option>
              <option>Other</option>
            </select>
          </div>
          <Textarea name="message" placeholder="Tell us about your care needs…" className="sm:col-span-2 min-h-[120px]" maxLength={2000} />
          <div className="sm:col-span-2">
            <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={loading}>
              <Send size={18} className="mr-2" /> {loading ? "Sending…" : "Request Free Assessment"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
