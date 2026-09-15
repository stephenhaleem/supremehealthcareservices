import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HeartPulse, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Rooted With You home">
          <span className="flex h-9 w-9 items-center justify-center bg-primary text-primary-foreground">
            <HeartPulse size={19} />
          </span>
          <span className="leading-none">
            <span className="block text-sm font-bold uppercase text-foreground">Rooted With You</span>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">At Home Services</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={`text-[10px] font-bold uppercase tracking-[0.16em] transition-colors ${location.pathname === link.path ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href="tel:18005550273" className="flex items-center gap-2 text-xs font-semibold text-foreground"><Phone size={14} className="text-primary" /> 1-800-555-CARE</a>
          <Button asChild className="rounded-none px-5 text-[10px] font-bold uppercase tracking-[0.14em]">
            <Link to="/contact">Free assessment</Link>
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="rounded-none lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-6 py-5 lg:hidden" aria-label="Mobile navigation">
          <div className="grid gap-px border border-border bg-border">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="flex items-center justify-between bg-background px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] text-foreground">
                {link.label}<span className="text-primary">↗</span>
              </Link>
            ))}
          </div>
          <Button asChild className="mt-4 w-full rounded-none">
            <Link to="/contact">Book a free assessment</Link>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;