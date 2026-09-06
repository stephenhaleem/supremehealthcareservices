import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Phone, Mail, ChevronRight, ArrowRight, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}
      >
        <div
          className={`bg-primary text-primary-foreground overflow-hidden transition-all duration-300 ${
            scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
          }`}
        >
          <div className="container flex items-center justify-between h-9 text-xs">
            <div className="flex items-center gap-5">
              <a
                href="tel:18005550273"
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity font-medium"
              >
                <Phone size={12} /> 1-800-555-CARE
              </a>
              <a
                href="mailto:info@comfortcare.ca"
                className="hidden sm:flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              >
                <Mail size={12} /> info@comfortcare.ca
              </a>
            </div>
            <Link
              to="/contact"
              className="text-xs font-semibold uppercase tracking-wide hover:opacity-80 transition-opacity flex items-center gap-1"
            >
              Book Free Consultation <ArrowRight size={11} />
            </Link>
          </div>
        </div>

        <nav className="bg-white/95 backdrop-blur-md border-b border-border/40">
          <div className="container flex items-center justify-between h-[72px]">
            <Link
              to="/"
              className="flex items-center gap-3 group"
              onClick={() => setOpen(false)}
            >
              <div className="relative w-10 h-10 rounded-2xl bg-primary flex items-center justify-center shadow-md group-hover:shadow-primary/40 transition-all duration-300">
                <Heart className="fill-white text-white" size={18} />
                <div className="absolute inset-0 rounded-2xl ring-2 ring-primary/0 group-hover:ring-primary/30 transition-all duration-300" />
              </div>
              <div className="leading-tight">
                <div
                  className="font-bold text-foreground text-lg"
                  style={{ fontFamily: "Lora, serif" }}
                >
                  Rooted With You
                </div>
                <div className="text-[9px] text-muted-foreground uppercase tracking-[0.2em] -mt-0.5">
                  At Home Services
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    location.pathname === l.path
                      ? "text-primary bg-primary/8"
                      : "text-foreground/65 hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  {l.label}
                  {location.pathname === l.path && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:18005550273"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone size={14} className="text-primary" />
                </div>
                1-800-555-CARE
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-primary/25"
              >
                Free Assessment <ChevronRight size={14} />
              </Link>
            </div>

            {/* Mobile controls */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href="tel:18005550273"
                className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center"
                aria-label="Call us"
              >
                <Phone size={15} className="text-primary" />
              </a>
              <button
                onClick={() => setOpen(!open)}
                className="w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-[5px] hover:bg-muted/60 transition-colors"
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`}
                />
                <span
                  className={`block w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`}
                />
                <span
                  className={`block w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
                />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
        style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[300px] bg-white lg:hidden flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-border/50">
          <Link
            to="/"
            className="flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <div className="w-9 h-9 rounded-2xl bg-primary flex items-center justify-center">
              <Heart className="fill-white text-white" size={16} />
            </div>
            <div className="leading-tight">
              <div
                className="font-bold text-foreground text-base"
                style={{ fontFamily: "Lora, serif" }}
              >
                Rooted With You At Home Services
              </div>
              <div className="text-[9px] text-muted-foreground uppercase tracking-[0.18em]">
                Care Services
              </div>
            </div>
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {navLinks.map((l, i) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${i * 50}ms` }}
              className={`flex items-center justify-between px-4 py-3.5 rounded-xl mb-1 text-sm font-medium transition-all ${
                location.pathname === l.path
                  ? "bg-primary text-white shadow-sm"
                  : "text-foreground/75 hover:bg-muted/70 hover:text-foreground"
              }`}
            >
              {l.label}
              <ChevronRight size={14} className="opacity-50" />
            </Link>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="p-4 border-t border-border/50 space-y-3">
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-primary text-white text-sm font-semibold py-3 rounded-full hover:bg-primary/90 transition-colors shadow-md"
          >
            Book Free Assessment <ArrowRight size={14} />
          </Link>
          <div className="flex gap-2">
            <a
              href="tel:18005550273"
              className="flex-1 flex items-center justify-center gap-1.5 bg-muted text-foreground/70 text-xs font-medium py-2.5 rounded-full hover:bg-muted/80 transition-colors"
            >
              <Phone size={12} /> Call Us
            </a>
            <a
              href="mailto:info@comfortcare.ca"
              className="flex-1 flex items-center justify-center gap-1.5 bg-muted text-foreground/70 text-xs font-medium py-2.5 rounded-full hover:bg-muted/80 transition-colors"
            >
              <Mail size={12} /> Email Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
