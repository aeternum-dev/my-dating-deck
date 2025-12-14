import { motion } from "framer-motion";

const IntroSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[480px] px-6 py-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground"
        >
          Swipe Right If You Dare
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-6xl md:text-8xl font-display font-semibold italic text-gradient"
        >
          Hello.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl font-light text-foreground/80 max-w-md mx-auto"
        >
          A quick introduction to someone you might want to get to know
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="pt-8"
        >
          <span className="text-muted-foreground text-sm animate-pulse">
            ← Swipe to explore →
          </span>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
    </div>
  );
};

export default IntroSlide;
