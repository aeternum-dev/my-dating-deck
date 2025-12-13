import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";

const images = [gallery1, gallery2, gallery3, gallery4];

const GallerySlide = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-8 py-12"
    >
      <div className="space-y-2 mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Gallery</p>
        <h2 className="text-4xl md:text-5xl font-display font-semibold">
          Some Moments
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="overflow-hidden rounded-2xl"
          >
            <AspectRatio ratio={3 / 4}>
              <img
                src={src}
                alt={`Gallery photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default GallerySlide;
