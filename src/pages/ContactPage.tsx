import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactPoints = [
  { icon: Phone, label: "Call us", value: "1-800-555-CARE" },
  { icon: Mail, label: "Email", value: "info@rootedwithyou.ca" },
  { icon: MapPin, label: "Location", value: "Serving all of Alberta" },
  { icon: Clock, label: "Hours", value: "24/7 availability" },
];

const ContactPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="animate-section border-b border-border bg-background py-20">
      <div className="container max-w-2xl">
        <p className="section-label">Contact us</p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight text-foreground md:text-6xl">
          Get in Touch with Rooted With You
        </h1>
        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          We're here to answer your questions and provide the support you need.
        </p>
      </div>
    </section>

    <section className="animate-section theme-wash border-b border-border py-12">
      <div className="container">
        <div className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
          {contactPoints.map((c) => (
            <div
              key={c.label}
              className="flex flex-col items-center gap-2 bg-background p-6 text-center"
            >
              <c.icon size={24} className="text-primary" />
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-foreground">
                {c.label}
              </p>
              <p className="text-xs text-muted-foreground">{c.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ContactForm />
    <Footer />
  </div>
);

export default ContactPage;
