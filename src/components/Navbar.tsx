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
    <header className="sticky top-0 z-50 border-b border-[#d9d1c7] bg-[#f7f5ef]/95 px-3 backdrop-blur-md sm:px-5 lg:px-8">
      <div className="container">
        <p className="hidden h-6 items-center justify-center text-[8px] font-medium text-primary/80 sm:flex">
          Dependable in-home care and support across Alberta
        </p>
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Rooted With You home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 text-primary">
              <HeartPulse size={19} />
            </span>
            <span className="leading-none">
              <span className="block font-serif text-sm font-semibold text-foreground">
                Rooted With You
              </span>
              <span className="mt-1 block text-[8px] font-medium text-muted-foreground">
                At Home Services
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] font-medium transition-colors ${location.pathname === link.path ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="tel:18005550273"
              className="flex items-center gap-2 text-xs font-medium text-foreground"
            >
              <Phone size={14} className="text-primary" /> 1-800-555-CARE
            </a>
            <Button
              asChild
              className="rounded-md bg-[#2b544d] px-5 text-[10px] font-semibold text-white hover:bg-[#214a45]"
            >
              <Link to="/contact">Free assessment</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-full text-foreground lg:hidden"
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

        <div
          id="mobile-navigation"
          className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
          aria-hidden={!open}
        >
          <div className="overflow-hidden">
            <nav
              className="grid divide-y divide-primary/10 border-t border-primary/10"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center justify-between py-4 text-xs font-medium text-foreground"
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
            <div className="pb-4 pt-1">
              <Button asChild className="w-full rounded-md bg-[#2b544d] text-white hover:bg-[#214a45]">
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
