import { motion } from "framer-motion";

const traits = [
  { 
    name: "Neuroticism", 
    score: 20, 
    level: "Low",
    description: "Exceptionally calm and composed under pressure"
  },
  { 
    name: "Extraversion", 
    score: 85, 
    level: "High",
    description: "Sociable, energetic, thrives around people"
  },
  { 
    name: "Openness", 
    score: 80, 
    level: "High",
    description: "Curious, imaginative, embraces novelty"
  },
  { 
    name: "Agreeableness", 
    score: 35, 
    level: "Low",
    description: "Independent thinker, direct communicator"
  },
  { 
    name: "Conscientiousness", 
    score: 40, 
    level: "Low",
    description: "Spontaneous, flexible, lives in the moment"
  },
];

const BigFiveSlide = () => {
  return (
    <div className="flex flex-col justify-center min-h-[600px] px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Science Says</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            Big Five
          </h2>
        </div>

        <div className="space-y-4">
          {traits.map((trait, index) => (
            <motion.div
              key={trait.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">{trait.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  trait.level === "High" 
                    ? "bg-primary/20 text-primary" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  {trait.level}
                </span>
              </div>
              <div className="progress-bar">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${trait.score}%` }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                  className="progress-fill"
                />
              </div>
              <p className="text-xs text-muted-foreground">{trait.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BigFiveSlide;
