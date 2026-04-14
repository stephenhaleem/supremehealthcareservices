import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="hero-gradient text-primary-foreground py-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">We're here to answer your questions and schedule a free care assessment.</p>
      </div>
    </section>

    <section className="py-12 bg-card">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Phone, label: "Call Us", value: "1-800-555-CARE" },
            { icon: Mail, label: "Email", value: "info@comfortcare.ca" },
            { icon: MapPin, label: "Location", value: "Serving All of Canada" },
            { icon: Clock, label: "Hours", value: "24/7 Availability" },
          ].map((c) => (
            <div key={c.label} className="text-center p-4">
              <c.icon size={28} className="text-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground text-sm">{c.label}</p>
              <p className="text-sm text-muted-foreground">{c.value}</p>
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
