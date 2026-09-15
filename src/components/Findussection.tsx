import { useState } from "react";
import { MapPin, Phone, Clock, Navigation, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const serviceAreas = [
  "Calgary",
  "Edmonton",
  "Red Deer",
  "Lethbridge",
  "Medicine Hat",
  "Grande Prairie",
  "Airdrie",
  "Spruce Grove",
  "Okotoks",
  "Fort McMurray",
  "Lloydminster",
  "Brooks",
];

const locations = [
  {
    city: "Calgary",
    address: "123 Care Ave SW, Calgary, AB T2P 1A1",
    phone: "403-555-0101",
    hours: "Mon–Sun, 24 hrs",
    lat: 51.0447,
    lng: -114.0719,
  },
  {
    city: "Edmonton",
    address: "456 Wellness Blvd, Edmonton, AB T5J 2N9",
    phone: "780-555-0202",
    hours: "Mon–Sun, 24 hrs",
    lat: 53.5461,
    lng: -113.4938,
  },
  {
    city: "Red Deer",
    address: "789 Comfort Rd, Red Deer, AB T4N 3L4",
    phone: "403-555-0303",
    hours: "Mon–Sun, 24 hrs",
    lat: 52.269,
    lng: -113.8116,
  },
];

const FindUsSection = () => {
  const [activeLocation, setActiveLocation] = useState(0);
  const loc = locations[activeLocation];
  const osmSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${loc.lng - 0.08}%2C${loc.lat - 0.05}%2C${loc.lng + 0.08}%2C${loc.lat + 0.05}&layer=mapnik&marker=${loc.lat}%2C${loc.lng}`;

  return (
    <section
      className="animate-section border-b border-border bg-secondary/35 py-24"
      id="find-us"
    >
      <div className="container">
        <div className="mb-12 max-w-xl">
          <p className="section-label flex items-center gap-2">
            <MapPin size={12} /> Where you can find us
          </p>
          <h2 className="section-title mt-5">
            Serving all of{" "}
            <span className="font-light text-primary">Alberta</span>.
          </h2>
          <p className="mt-5 text-sm leading-6 text-muted-foreground">
            With care hubs across the province, we're always close to home.
            Select a location below to find your nearest Rooted With You office.
          </p>
        </div>

        <div className="theme-card grid gap-0 lg:grid-cols-5">
          <div className="divide-y divide-border bg-background lg:col-span-2">
            {locations.map((l, i) => (
              <button
                key={l.city}
                onClick={() => setActiveLocation(i)}
                className={`block w-full px-6 py-5 text-left transition-colors ${
                  activeLocation === i
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm font-bold">
                    <MapPin
                      size={14}
                      className={
                        activeLocation === i
                          ? "text-primary-foreground"
                          : "text-primary"
                      }
                    />
                    {l.city}
                  </span>
                  <span
                    className={`text-[9px] font-serif uppercase tracking-[0.12em] ${
                      activeLocation === i
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    Open 24/7
                  </span>
                </div>
                <p
                  className={`mt-2 pl-6 text-xs font-serif ${activeLocation === i ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                >
                  {l.address}
                </p>
              </button>
            ))}
            <div className="space-y-3 p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground">
                {loc.city} office
              </p>
              <a
                href={`tel:${loc.phone}`}
                className="flex items-center gap-2.5 text-sm text-muted-foreground  font-serif hover:text-primary"
              >
                <Phone size={14} className="text-primary" /> {loc.phone}
              </a>
              <div className="flex items-center gap-2.5 font-sesrif text-sm text-muted-foreground">
                <Clock size={14} className="text-primary" /> {loc.hours}
              </div>
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(loc.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-primary hover:underline"
              >
                <Navigation size={12} /> Get directions
              </a>
            </div>
          </div>

          <div className="bg-background lg:col-span-3">
            <div className="h-[300px] border-b border-border">
              <iframe
                key={activeLocation}
                src={osmSrc}
                width="100%"
                height="100%"
                title={`Map of ${loc.city}`}
                loading="lazy"
                className="h-full w-full border-0"
              />
            </div>
            <div className="p-7">
              <p className="mb-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                <CheckCircle2 size={13} /> All service areas in Alberta
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {serviceAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 bg-primary/60" />{" "}
                    {area}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs italic text-muted-foreground">
                Don't see your city? We still serve you —{" "}
                <Link
                  to="/contact"
                  className="font-medium text-primary hover:underline"
                >
                  contact us
                </Link>{" "}
                to confirm coverage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;
