import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal — attaches an IntersectionObserver to a ref.
 * Returns [ref, isVisible].
 *
 * Usage:
 *   const [ref, visible] = useScrollReveal();
 *   <div ref={ref} className={visible ? "opacity-100" : "opacity-0 translate-y-6"} />
 */
export function useScrollReveal<T extends Element>(
  threshold = 0.15,
  once = true,
): [React.RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return [ref, visible];
}

export default useScrollReveal;
