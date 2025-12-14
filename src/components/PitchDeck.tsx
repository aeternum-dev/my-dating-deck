import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import IntroSlide from "./slides/IntroSlide";
import StatsSlide from "./slides/StatsSlide";
import CareerSlide from "./slides/CareerSlide";
import HobbiesSlide from "./slides/HobbiesSlide";
import PersonalitySlide from "./slides/PersonalitySlide";
import BigFiveSlide from "./slides/BigFiveSlide";
import GallerySlide from "./slides/GallerySlide";
import OutroSlide from "./slides/OutroSlide";

const slides = [
  { id: "intro", component: IntroSlide },
  { id: "stats", component: StatsSlide },
  { id: "career", component: CareerSlide },
  { id: "hobbies", component: HobbiesSlide },
  { id: "personality", component: PersonalitySlide },
  { id: "bigfive", component: BigFiveSlide },
  { id: "gallery", component: GallerySlide },
  { id: "outro", component: OutroSlide },
];

const PitchDeck = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: "center",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-background py-6">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 50%, hsl(35 90% 55% / 0.08) 0%, transparent 60%)"
        }}
      />

      {/* Main layout with arrows on sides */}
      <div className="flex items-center justify-center gap-4 w-full max-w-2xl mx-auto px-4">
        {/* Left arrow */}
        <button
          onClick={scrollPrev}
          className="flex-shrink-0 p-3 rounded-full bg-secondary/50 border border-border/50 text-foreground hover:bg-secondary hover:border-primary/30 transition-all duration-300 disabled:opacity-30"
          disabled={selectedIndex === 0}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Carousel */}
        <div className="flex-1 max-w-md">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, index) => (
                <motion.div
                  key={slide.id}
                  className="flex-none w-full px-2"
                  animate={{
                    opacity: selectedIndex === index ? 1 : 0.4,
                    scale: selectedIndex === index ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="slide-card">
                    <slide.component />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dots indicator below card */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`nav-dot ${selectedIndex === index ? "active" : ""}`}
              />
            ))}
          </div>

        </div>

        {/* Right arrow */}
        <button
          onClick={scrollNext}
          className="flex-shrink-0 p-3 rounded-full bg-secondary/50 border border-border/50 text-foreground hover:bg-secondary hover:border-primary/30 transition-all duration-300 disabled:opacity-30"
          disabled={selectedIndex === slides.length - 1}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default PitchDeck;
