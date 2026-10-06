import { Link } from "react-router-dom";
import { HeartPulse } from "lucide-react";

const Footer = () => (
  <footer className="animate-section border-t border-border bg-[#f7f5ef] text-foreground">
    <div className="container max-w-6xl py-10 md:py-12">
      <div className="grid gap-8 border-b border-border pb-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_.7fr_.9fr_1.1fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-2" aria-label="Rooted With You home">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 text-primary">
              <HeartPulse size={17} />
            </span>
            <span className="font-serif text-sm font-semibold">Rooted With You</span>
          </Link>
          <p className="mt-3 max-w-xs text-[10px] leading-5 text-muted-foreground">
            Dependable, compassionate in-home care and support throughout Alberta.
          </p>
        </div>
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Discover</p>
          <div className="mt-3 grid gap-2 text-[10px] text-muted-foreground">
            <Link to="/about" className="hover:text-primary">Our approach</Link>
            <Link to="/services" className="hover:text-primary">Our services</Link>
            <Link to="/testimonials" className="hover:text-primary">Testimonials</Link>
            <Link to="/contact" className="hover:text-primary">Contact us</Link>
          </div>
        </div>
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">For families</p>
          <div className="mt-3 grid gap-2 text-[10px] text-muted-foreground">
            <Link to="/services" className="hover:text-primary">Personal care</Link>
            <Link to="/services" className="hover:text-primary">Dementia support</Link>
            <Link to="/services" className="hover:text-primary">Companionship</Link>
            <Link to="/services" className="hover:text-primary">Respite care</Link>
          </div>
        </div>
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Start a conversation</p>
          <div className="mt-3 grid gap-2 text-[10px] text-muted-foreground">
            <a href="tel:18005550273" className="font-serif text-base font-semibold text-primary hover:underline">1-800-555-CARE</a>
            <a href="mailto:info@rootedwithyou.ca" className="hover:text-primary">info@rootedwithyou.ca</a>
            <span>Serving all Alberta · Available 24/7</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-3 pt-5 text-[9px] text-muted-foreground sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Rooted With You At Home Services</p>
        <div className="flex gap-5">
          <Link to="/privacy" className="hover:text-primary">Privacy</Link>
          <Link to="/terms" className="hover:text-primary">Terms</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
