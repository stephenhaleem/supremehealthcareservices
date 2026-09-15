import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import TestimonialsPage from "./pages/TestimonialsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const SmoothScroll = () => {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (reducedMotion || isTouch) return; // skip Lenis on touch, use native scroll

    const lenis = new Lenis({ autoRaf: true, lerp: 0.05 });
    return () => lenis.destroy();
  }, []);

  return null;
};

const ScrollAnimationObserver = () => {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const observer = reducedMotion
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              const element = entry.target as HTMLElement;
              element.classList.add(
                element.classList.contains("reveal-card")
                  ? "reveal-visible"
                  : "is-visible",
              );
              observer?.unobserve(element);
            });
          },
          { threshold: 0.2, rootMargin: "0px 0px -5% 0px" },
        );

    const revealElements = () => {
      const sections = document.querySelectorAll<HTMLElement>(
        ".animate-section:not([data-scroll-bound])",
      );
      const cards = document.querySelectorAll<HTMLElement>(
        ".reveal-card:not([data-scroll-bound])",
      );

      sections.forEach((section) => {
        section.dataset.scrollBound = "true";
        const revealItems = section.querySelectorAll<HTMLElement>(
          ":scope > .container > *, :scope > .container .theme-card, :scope > .container article",
        );
        revealItems.forEach((item, index) => {
          if (item === section || item.classList.contains("section-reveal"))
            return;
          item.classList.add("section-reveal");
          item.style.transitionDelay = `${Math.min(index * 110, 550)}ms`;
        });

        if (reducedMotion) {
          section.classList.add("is-visible");
          return;
        }
        observer?.observe(section);
      });

      cards.forEach((card) => {
        card.dataset.scrollBound = "true";
        if (reducedMotion) {
          card.classList.add("reveal-visible");
          return;
        }
        observer?.observe(card);
      });
    };

    revealElements();
    const mutations = new MutationObserver(revealElements);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer?.disconnect();
    };
  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SmoothScroll />
        <ScrollAnimationObserver />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
