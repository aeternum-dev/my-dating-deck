import { motion } from "framer-motion";

const PersonalitySlide = () => {
  return (
    <div className="flex flex-col justify-center min-h-[600px] px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">The Mind</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            Personality
          </h2>
        </div>

        {/* MBTI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
        >
          <p className="text-sm text-muted-foreground mb-2">MBTI Type</p>
          <div className="flex items-baseline gap-3">
            <span className="text-5xl font-display font-bold text-gradient">ENFP</span>
            <span className="text-lg text-foreground/70">The Campaigner</span>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Extraverted • Intuitive • Feeling • Perceiving
          </p>
        </motion.div>

        {/* Four Temperaments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-5 rounded-xl bg-secondary/50 border border-border/50"
        >
          <p className="text-sm text-muted-foreground mb-2">Classical Temperaments</p>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-display font-semibold text-foreground">Choleric</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-2xl font-display font-semibold text-foreground">Phlegmatic</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Driven ambition balanced with calm composure
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PersonalitySlide;
