import { Link } from "react-router-dom";
import { Logo } from "@/components/Navbar";

const cols = [
  {
    h: "Discover",
    links: [
      ["Our support", "/about"],
      ["Services", "/services"],
      ["Our team", "/testimonials"],
      ["Our approach", "/about"],
    ],
  },
  {
    h: "For families",
    links: [
      ["Planning a conversation", "/contact"],
      ["Helpful questions", "/contact"],
      ["Choosing support", "/services"],
      ["Contact us", "/contact"],
    ],
  },
];

const Footer = () => (
  <footer className="bg-background">
    <div className="mx-auto max-w-[1440px] px-6 pt-16 md:px-20">
      <div className="grid gap-10 border-b border-border pb-12 md:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
        <div>
          <Logo />
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <p className="text-sm font-semibold text-foreground">{c.h}</p>
            <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
              {c.links.map(([l, to]) => (
                <Link key={l} to={to} className="hover:text-primary">
                  {l}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div>
          <p className="text-sm font-semibold text-foreground">
            Start with a conversation
          </p>
          <a
            href="tel:6135550148"
            className="mt-4 block font-serif text-[26px] text-primary"
          >
            613-555-0148
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            hello@rootedwithyou.example
          </p>
        </div>
      </div>
      <div className="grid items-center gap-3 py-7 text-[11px] text-muted-foreground md:grid-cols-3">
        <p>© {new Date().getFullYear()} Rooted With You · Concept design</p>
        <p className="font-serif text-[15px] italic text-foreground md:text-center">
          Dependable support. A lot of life.
        </p>
        <div className="flex gap-6 md:justify-end">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Accessibility</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
