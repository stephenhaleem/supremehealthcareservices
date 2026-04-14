import { Link } from "react-router-dom";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => (
  <footer className="bg-[hsl(210,25%,12%)] text-white/75">
    <div className="container py-14">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <Heart className="fill-white text-white" size={18} />
            </div>
            <div className="leading-tight">
              <div
                className="font-bold text-white text-base"
                style={{ fontFamily: "Lora, serif" }}
              >
                SupremeHome
              </div>
              <div className="text-[10px] opacity-60 uppercase tracking-widest">
                Care Services
              </div>
            </div>
          </Link>
          <p className="text-sm leading-relaxed mb-5">
            Licensed healthcare aides providing compassionate, professional home
            care services across Albberta.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
              >
                <Icon size={14} className="text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-[0.15em]">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Testimonials", path: "/testimonials" },
              { label: "Contact Us", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className="hover:text-white hover:pl-1 transition-all duration-150"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-[0.15em]">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              "Personal Care",
              "Companionship",
              "Dementia Care",
              "Respite Care",
              "24-Hour Care",
            ].map((s) => (
              <li key={s}>
                <Link
                  to="/services"
                  className="hover:text-white hover:pl-1 transition-all duration-150"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-[0.15em]">
            Contact Us
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="tel:18005550273"
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <Phone size={15} className="mt-0.5 shrink-0 text-primary" />
                1-800-555-CARE
              </a>
            </li>
            <li>
              <a
                href="mailto:info@comfortcare.ca"
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <Mail size={15} className="mt-0.5 shrink-0 text-primary" />
                info@comfortcare.ca
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0 text-primary" />
              Serving all Alberta
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/45">
        <p>
          © {new Date().getFullYear()} ComfortCare Home Services. All rights
          reserved.
        </p>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-white/70 transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-white/70 transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
