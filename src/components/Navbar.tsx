import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HeartPulse, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import arrowUpRight from "@/assets/arrow-up-right-svgrepo-com.svg";

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
    <header className="sticky top-0 z-50 bg-transparent px-3 pt-3 sm:px-5 lg:px-8">
      <div className="container overflow-hidden rounded-[2rem] border border-primary/15 bg-background/90 shadow-[0_8px_30px_-14px_hsl(var(--primary)/0.45)] backdrop-blur-md">
        {/* Top bar row — always present */}
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Rooted With You home"
          >
            <span className="flex h-9 w-9 items-center justify-center bg-primary text-primary-foreground">
              <HeartPulse size={19} />
            </span>
            <span className="leading-none">
              <span className="block text-sm font-bold uppercase text-foreground">
                Rooted With You
              </span>
              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                At Home Services
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-bold uppercase tracking-[0.16em] transition-colors ${location.pathname === link.path ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="tel:18005550273"
              className="flex items-center gap-2 text-xs font-serif text-foreground"
            >
              <Phone size={14} className="text-primary font-serif" />{" "}
              1-800-555-CARE
            </a>
            <Button
              asChild
              className="rounded-full px-5 text-[10px] font-bold uppercase tracking-[0.14em]"
            >
              <Link to="/contact">Free assessment</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-full lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <Menu
              className={`absolute transition-all duration-300 ${open ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
            />
            <X
              className={`absolute transition-all duration-300 ${open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
            />
          </Button>
        </div>

        {/* Menu content — the pill "grows" to reveal this, and shrinks to hide it */}
        <div
          id="mobile-navigation"
          className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
          aria-hidden={!open}
        >
          <div className="overflow-hidden">
            <nav
              className="grid divide-y divide-primary/10 border-t border-primary/10 px-4"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center justify-between py-4 text-xs font-bold uppercase tracking-[0.14em] text-foreground"
                >
                  {link.label}
                  <img
                    src={arrowUpRight}
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-4 text-primary"
                  />
                </Link>
              ))}
            </nav>
            <div className="px-4 pb-4 pt-1">
              <Button asChild className="w-full rounded-full">
                <Link to="/contact">Book a free assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
