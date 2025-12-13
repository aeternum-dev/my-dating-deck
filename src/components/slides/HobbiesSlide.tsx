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
    <div className="flex flex-col justify-center min-h-[600px] px-8 py-12">
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

        <div className="space-y-4">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-secondary/50 to-transparent border border-border/30 hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-muted group-hover:bg-primary/20 transition-colors duration-300">
                <hobby.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-lg font-medium text-foreground">{hobby.name}</p>
                <p className="text-sm text-muted-foreground italic">{hobby.vibe}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HobbiesSlide;
