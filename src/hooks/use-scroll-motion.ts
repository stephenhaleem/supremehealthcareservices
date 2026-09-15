import { useEffect, useRef, useState } from "react";

export function useScrollParallax<T extends HTMLElement>(distance = 70) {
  const ref = useRef<T>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      if (ref.current) {
        const bounds = ref.current.getBoundingClientRect();
        const progress = (window.innerHeight / 2 - (bounds.top + bounds.height / 2)) / window.innerHeight;
        setOffset(Math.max(-distance, Math.min(distance, progress * distance)));
      }
      frame = 0;
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [distance]);

  return { ref, offset };
}

export function useAnimatedNumber(active: boolean, end: number, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    const started = performance.now();
    let frame = 0;
    const animate = (now: number) => {
      const progress = Math.min((now - started) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [active, duration, end]);

  return value;
}
