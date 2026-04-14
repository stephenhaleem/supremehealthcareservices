import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="hero-gradient text-primary-foreground py-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg opacity-90">Last updated: April 2026</p>
      </div>
    </section>
    <section className="py-20 bg-card">
      <div className="container max-w-3xl prose prose-sm sm:prose">
        <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
        <p className="text-muted-foreground mb-6">We collect personal information you provide directly, such as your name, email address, phone number, and health-related details when you request care assessments. We also collect usage data automatically through cookies and analytics tools.</p>

        <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
        <p className="text-muted-foreground mb-6">Your information is used to provide and improve our home care services, match you with appropriate caregivers, process inquiries, communicate important updates, and comply with Canadian healthcare regulations (PIPEDA).</p>

        <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Protection</h2>
        <p className="text-muted-foreground mb-6">We implement industry-standard security measures including encryption, secure servers, and access controls. All personal health information is handled in compliance with provincial and federal privacy legislation.</p>

        <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing</h2>
        <p className="text-muted-foreground mb-6">We do not sell your personal information. We may share data with assigned caregivers (as necessary for service delivery), healthcare partners (with your consent), and legal authorities when required by law.</p>

        <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
        <p className="text-muted-foreground mb-6">Under PIPEDA, you have the right to access, correct, or delete your personal information. You may withdraw consent at any time by contacting us at privacy@comfortcare.ca.</p>

        <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies</h2>
        <p className="text-muted-foreground mb-6">Our website uses cookies to enhance your browsing experience. You can manage cookie preferences through your browser settings.</p>

        <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
        <p className="text-muted-foreground">If you have questions about this Privacy Policy, contact our Privacy Officer at privacy@comfortcare.ca or call 1-800-555-CARE.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default PrivacyPolicy;
