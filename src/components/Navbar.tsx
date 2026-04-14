import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top utility bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between h-9 text-xs">
          <div className="flex items-center gap-5">
            <a
              href="tel:18005550273"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity font-medium"
            >
              <Phone size={12} />
              1-800-555-CARE
            </a>
            <a
              href="mailto:info@comfortcare.ca"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity hidden sm:flex"
            >
              <Mail size={12} />
              info@comfortcare.ca
            </a>
          </div>
          <Link
            to="/contact"
            className="text-xs font-semibold uppercase tracking-wide hover:opacity-80 transition-opacity"
          >
            Book Free Consultation →
          </Link>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white border-b border-border/60">
        <div className="container flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <Heart className="fill-white text-white" size={18} />
            </div>
            <div className="leading-tight">
              <div
                className="font-bold text-foreground text-lg"
                style={{ fontFamily: "Lora, serif" }}
              >
                SupremeHome
              </div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest -mt-0.5">
                Care Services
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === l.path
                    ? "text-primary border-b-2 border-primary pb-0.5"
                    : "text-foreground/70"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="px-5 rounded-full font-semibold"
            >
              <Link to="/contact">Free Assessment</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-white border-t pb-4">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setOpen(false)}
                className={`block px-6 py-3 text-sm font-medium hover:bg-accent transition-colors ${
                  location.pathname === l.path
                    ? "text-primary bg-accent/50"
                    : "text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="px-6 pt-3">
              <Button asChild className="w-full rounded-full">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Book Free Assessment
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
