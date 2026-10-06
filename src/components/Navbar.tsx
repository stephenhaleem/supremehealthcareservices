import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, Sprout, X } from "lucide-react";

const navLinks = [
  { label: "Our support", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Our team", path: "/testimonials" },
  { label: "For families", path: "/contact" },
];

export const Logo = () => (
  <Link
    to="/"
    className="flex items-center gap-3"
    aria-label="Rooted With You home"
  >
    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/60 text-primary">
      <Sprout size={18} strokeWidth={1.4} />
    </span>
    <span className="leading-none">
      <span className="block font-serif text-[22px] text-foreground">
        Rooted With You
      </span>
      <span className="mt-1 block text-[8px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
        In-home healthcare aide support
      </span>
    </span>
  </Link>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-[84px] max-w-[1440px] items-center justify-between px-6 md:px-20">
        <Logo />
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.path}
              className={`text-sm transition-colors ${pathname === l.path ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden items-center gap-3 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-white hover:bg-primary/90 lg:inline-flex"
        >
          Book a tour <ArrowRight size={16} />
        </Link>
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="grid gap-1 border-t border-border bg-background px-6 pb-5 lg:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.path}
              className="border-b border-border py-3 text-sm"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-3 rounded-md bg-primary py-3 text-center text-sm font-medium text-white"
          >
            Book a tour
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
