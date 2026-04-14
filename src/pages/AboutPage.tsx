import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { ShieldCheck, Award, Users, Heart } from "lucide-react";

const AboutPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="hero-gradient text-primary-foreground py-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About ComfortCare</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">Dedicated to providing exceptional home care across Canada since 2010.</p>
      </div>
    </section>
    <section className="py-20 bg-card">
      <div className="container max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">At ComfortCare, we believe everyone deserves to age with dignity in the comfort of their own home. Our team of licensed healthcare aides is committed to providing personalized, compassionate care that enhances quality of life.</p>
            <p className="text-muted-foreground">Every caregiver on our team holds current CPR certification and has passed a thorough police background check. We invest heavily in ongoing training to ensure the highest standards of care.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, label: "CPR Certified" },
              { icon: Award, label: "Police Checked" },
              { icon: Users, label: "500+ Caregivers" },
              { icon: Heart, label: "10,000+ Families" },
            ].map((item) => (
              <div key={item.label} className="bg-accent rounded-xl p-6 text-center">
                <item.icon size={32} className="text-primary mx-auto mb-2" />
                <p className="font-semibold text-foreground text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { title: "Compassion", desc: "We treat every client as family, with empathy and genuine care." },
              { title: "Integrity", desc: "Transparent communication, honest pricing, and reliable service." },
              { title: "Excellence", desc: "Continuous training and quality assurance for outstanding outcomes." },
            ].map((v) => (
              <div key={v.title} className="bg-accent/50 rounded-xl p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <CtaBanner />
    <Footer />
  </div>
);

export default AboutPage;
