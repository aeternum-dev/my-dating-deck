import { motion } from "framer-motion";

const PersonalitySlide = () => {
  return (
    <div className="flex flex-col justify-center min-h-[480px] px-6 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">The Personality</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            Quick peak into me
          </h2>
        </div>

        {/* MBTI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
        >
          <p className="text-sm text-muted-foreground mb-2">MBTI Type</p>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-display font-bold text-gradient">ENFP</span>
            <span className="text-base text-foreground/70">The Campaigner</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Extraverted • Intuitive • Feeling • Perceiving
          </p>
        </motion.div>

        {/* Four Temperaments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-4 rounded-xl bg-secondary/50 border border-border/50"
        >
          <p className="text-sm text-muted-foreground mb-2">Classical Temperaments</p>
          <div className="flex items-center gap-3">
            <span className="text-xl font-display font-semibold text-foreground">Choleric</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-xl font-display font-semibold text-foreground">Phlegmatic</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Driven ambition balanced with calm composure
          </p>
        </motion.div>

        {/* Zodiac Sign */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 transition-all duration-300 hover:border-primary/50"
        >
          <div className="p-2 rounded-lg bg-muted">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground"
            >
              <path d="M6 4 L6 14 M10 4 L10 14 M14 4 L14 14 Q14 18 18 18 L20 16 L18 14" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-1">Zodiac Sign</p>
            <p className="font-medium text-foreground">Scorpio</p>
            <p className="text-xs text-muted-foreground mt-1">
              Intense depth, magnetic presence, and loyalty that runs deeper than words.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PersonalitySlide;
