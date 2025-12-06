import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const OutroSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] px-8 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30"
        >
          <Heart className="w-8 h-8 text-primary animate-pulse" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-display font-semibold italic"
        >
          <span className="text-gradient">Intrigued?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-foreground/70 max-w-md mx-auto"
        >
          Let's turn this scroll into a conversation
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="pt-4"
        >
          <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:opacity-90 transition-opacity duration-300">
            Say Hello
          </button>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};

export default OutroSlide;
