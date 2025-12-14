import { useMemo } from "react";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";

const images = [gallery1, gallery2, gallery3, gallery4];

const GallerySlide = () => {
  const shuffledImages = useMemo(() => {
    const arr = [...images];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="h-[420px] px-6 py-6 overflow-hidden flex flex-col"
    >
      <div className="space-y-1 mb-3">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Snapshots</p>
        <h2 className="text-3xl md:text-4xl font-display font-semibold">
          To get my vibes
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
        {shuffledImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              src={src}
              alt={`Gallery photo ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default GallerySlide;
