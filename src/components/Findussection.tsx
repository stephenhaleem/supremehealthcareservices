import { useEffect, useRef, useState } from "react";
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
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const loc = locations[activeLocation];
  // Embed Google Maps as static map centered on selected city
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY&q=${encodeURIComponent(loc.address)}&zoom=13`;

  // Fallback to OpenStreetMap iframe since no API key available
  const osmSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${loc.lng - 0.08}%2C${loc.lat - 0.05}%2C${loc.lng + 0.08}%2C${loc.lat + 0.05}&layer=mapnik&marker=${loc.lat}%2C${loc.lng}`;

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white overflow-hidden"
      id="find-us"
    >
      <div className="container">
        {/* Section header */}
        <div
          className={`text-center max-w-xl mx-auto mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2 flex items-center justify-center gap-2">
            <MapPin size={13} /> WHERE YOU CAN FIND US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Serving All of <span className="italic font-normal">Alberta</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            With care hubs across the province, we're always close to home.
            Select a location below to find your nearest Rooted With You At Home
            Services office.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left panel — location selector */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Location tabs */}
            <div className="space-y-3 mb-8">
              {locations.map((l, i) => (
                <button
                  key={l.city}
                  onClick={() => setActiveLocation(i)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 group ${
                    activeLocation === i
                      ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                      : "bg-white border-border hover:border-primary/40 hover:bg-muted/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <MapPin
                        size={15}
                        className={
                          activeLocation === i
                            ? "text-green-300"
                            : "text-primary"
                        }
                      />
                      <span
                        className={`font-bold text-sm ${activeLocation === i ? "text-white" : "text-foreground"}`}
                      >
                        {l.city}
                      </span>
                    </div>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        activeLocation === i
                          ? "bg-white/20 text-white"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      Open 24/7
                    </span>
                  </div>
                  <p
                    className={`text-xs pl-[22px] ${activeLocation === i ? "text-white/80" : "text-muted-foreground"}`}
                  >
                    {l.address}
                  </p>
                </button>
              ))}
            </div>

            {/* Contact details for active location */}
            <div className="bg-muted/40 rounded-2xl p-5 space-y-3">
              <h3 className="font-semibold text-foreground text-sm mb-1">
                {loc.city} Office
              </h3>
              <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                {loc.address}
              </div>
              <a
                href={`tel:${loc.phone}`}
                className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={14} className="text-primary shrink-0" />
                {loc.phone}
              </a>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Clock size={14} className="text-primary shrink-0" />
                {loc.hours}
              </div>
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(loc.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
              >
                <Navigation size={12} /> Get Directions
              </a>
            </div>
          </div>

          {/* Right panel — map + service areas */}
          <div
            className={`lg:col-span-3 space-y-5 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Map iframe */}
            <div
              className="rounded-2xl overflow-hidden border border-border/60 shadow-lg"
              style={{ height: 340 }}
            >
              <iframe
                key={activeLocation}
                src={osmSrc}
                width="100%"
                height="100%"
                title={`Map of ${loc.city}`}
                loading="lazy"
                className="border-0 w-full h-full"
                style={{ filter: "saturate(0.9) contrast(1.05)" }}
              />
            </div>

            {/* Service areas grid */}
            <div className="bg-muted/30 rounded-2xl p-5">
              <p className="text-xs font-bold text-primary uppercase tracking-[0.15em] mb-4 flex items-center gap-2">
                <CheckCircle2 size={13} /> ALL SERVICE AREAS IN ALBERTA
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {serviceAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic">
                Don't see your city? We still serve you —{" "}
                <Link
                  to="/contact"
                  className="text-primary font-medium hover:underline"
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
