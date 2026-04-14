import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/80">
    <div className="container py-14">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 text-primary-foreground font-serif text-xl font-bold mb-4">
            <Heart className="fill-primary" size={24} />
            ComfortCare
          </Link>
          <p className="text-sm leading-relaxed">Licensed healthcare aides providing compassionate, professional home care services across Canada.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-primary-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-primary-foreground transition-colors">Services</Link></li>
            <li><Link to="/testimonials" className="hover:text-primary-foreground transition-colors">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-primary-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-primary-foreground transition-colors">Personal Care</Link></li>
            <li><Link to="/services" className="hover:text-primary-foreground transition-colors">Companionship</Link></li>
            <li><Link to="/services" className="hover:text-primary-foreground transition-colors">Dementia Care</Link></li>
            <li><Link to="/services" className="hover:text-primary-foreground transition-colors">Respite Care</Link></li>
            <li><Link to="/services" className="hover:text-primary-foreground transition-colors">24-Hour Care</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-primary-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5 shrink-0" /> 1-800-555-CARE</li>
            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 shrink-0" /> info@comfortcare.ca</li>
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> Serving all provinces across Canada</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        <p>© {new Date().getFullYear()} ComfortCare Home Services. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/about" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
          <Link to="/about" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
