import { motion } from "framer-motion";
import { Waves, BookOpen, Brain, Plane, Mountain, Feather } from "lucide-react";

const hobbies = [
  { icon: Waves, name: "Scuba Diving", vibe: "Exploring the deep" },
  { icon: BookOpen, name: "Philosophy", vibe: "Questioning everything" },
  { icon: Brain, name: "Neuroscience", vibe: "Understanding the mind" },
  { icon: Feather, name: "Poetry", vibe: "Words that move" },
  { icon: Plane, name: "Traveling", vibe: "Collecting experiences" },
  { icon: Mountain, name: "Hiking", vibe: "Summit seeker" },
];

const HobbiesSlide = () => {
  return (
    <div className="flex flex-col justify-center w-full px-6 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Free Time</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            The Fun Stuff
          </h2>
        </div>

        <div className="space-y-3">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 transition-all duration-300 hover:border-primary/50"
            >
              <div className="p-2 rounded-lg bg-muted">
                <hobby.icon className="w-5 h-5 text-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">{hobby.name}</p>
                <p className="text-xs text-muted-foreground italic">{hobby.vibe}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HobbiesSlide;
