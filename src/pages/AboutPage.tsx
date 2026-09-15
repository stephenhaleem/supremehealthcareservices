import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { ShieldCheck, Award, Users, Heart } from "lucide-react";

const AboutPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="animate-section border-b border-border bg-background py-20">
      <div className="container max-w-2xl">
        <p className="section-label">About us</p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight text-foreground md:text-6xl">
          About Rooted With You
        </h1>
        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          Dedicated to providing exceptional home care across Alberta since 2026
        </p>
      </div>
    </section>
    <section className="animate-section theme-wash py-20">
      <div className="container max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground mb-4">
              At ComfortCare, we believe everyone deserves to age with dignity
              in the comfort of their own home. Our team of licensed healthcare
              aides is committed to providing personalized, compassionate care
              that enhances quality of life.
            </p>
            <p className="text-muted-foreground">
              Every caregiver on our team holds current CPR certification and
              has passed a thorough police background check. We invest heavily
              in ongoing training to ensure the highest standards of care.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px border border-border bg-border">
            {[
              { icon: ShieldCheck, label: "CPR Certified" },
              { icon: Award, label: "Police Checked" },
              { icon: Users, label: "500+ Caregivers" },
              { icon: Heart, label: "10,000+ Families" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center gap-3 bg-background p-8 text-center"
              >
                <item.icon
                  size={26}
                  strokeWidth={1.4}
                  className="text-primary"
                />
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our Values
          </h2>
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
            {[
              {
                title: "Compassion",
                desc: "We treat every client as family, with empathy and genuine care.",
              },
              {
                title: "Integrity",
                desc: "Transparent communication, honest pricing, and reliable service.",
              },
              {
                title: "Excellence",
                desc: "Continuous training and quality assurance for outstanding outcomes.",
              },
            ].map((v, index) => (
              <div key={v.title} className="bg-background p-8">
                <span className="text-[10px] font-bold text-muted-foreground">
                  0{index + 1}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {v.desc}
                </p>
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
