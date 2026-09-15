import { Link } from "react-router-dom";
import { HeartPulse } from "lucide-react";

const Footer = () => (
  <footer className="overflow-hidden bg-foreground text-background">
    <div className="container pb-8 pt-20">
      <div className="grid gap-12 border-b border-background/15 pb-20 sm:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3"><HeartPulse size={22} className="text-primary" /><span className="text-sm font-bold uppercase">Rooted With You</span></div>
          <p className="mt-6 max-w-xs text-sm leading-6 text-background/55">Licensed healthcare aides delivering dependable, compassionate home care throughout Alberta.</p>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <div className="mt-5 grid gap-3 text-xs text-background/60"><Link to="/">Home</Link><Link to="/about">About us</Link><Link to="/services">Services</Link><Link to="/testimonials">Testimonials</Link></div>
        </div>
        <div>
          <p className="footer-label">Care</p>
          <div className="mt-5 grid gap-3 text-xs text-background/60"><Link to="/services">Personal care</Link><Link to="/services">Dementia care</Link><Link to="/services">Respite care</Link><Link to="/services">Overnight care</Link></div>
        </div>
        <div>
          <p className="footer-label">Contact</p>
          <div className="mt-5 grid gap-3 text-xs text-background/60"><a href="tel:18005550273">1-800-555-CARE</a><a href="mailto:info@comfortcare.ca">info@comfortcare.ca</a><span>Serving all Alberta</span><Link to="/contact" className="text-primary">Book an assessment</Link></div>
        </div>
      </div>

      <div className="py-9">
        <p className="whitespace-nowrap text-center text-[clamp(2.6rem,9.6vw,9rem)] font-bold leading-none text-background">ROOTED WITH YOU</p>
      </div>

      <div className="flex flex-col justify-between gap-4 border-t border-background/15 pt-6 text-[9px] font-semibold uppercase tracking-[0.12em] text-background/45 sm:flex-row">
        <p>© {new Date().getFullYear()} Rooted With You At Home Services</p>
        <div className="flex gap-6"><Link to="/privacy">Privacy policy</Link><Link to="/terms">Terms of service</Link></div>
      </div>
    </div>
  </footer>
);

export default Footer;