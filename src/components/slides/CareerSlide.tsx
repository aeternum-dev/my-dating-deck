import { motion } from "framer-motion";
import { Code2, Clapperboard, Megaphone, BookOpen, Rocket } from "lucide-react";

const careers = [
  { icon: Code2, title: "Software Engineer", status: "current" },
  { icon: Clapperboard, title: "Actor", status: "current" },
  { icon: Megaphone, title: "Social Media Marketer", status: "current" },
  { icon: BookOpen, title: "Educator and Streamer", status: "current" },
  { icon: Rocket, title: "Business Owner", status: "soon", note: "hopefully soon🤞" },
];

const CareerSlide = () => {
  return (
    <div className="flex flex-col justify-center h-[420px] px-6 py-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">What I Do</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            Multi-Hyphenate
          </h2>
        </div>

        <div className="space-y-3">
          {careers.map((career, index) => (
            <motion.div
              key={career.title}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:border-primary/50 ${
                career.status === "soon"
                  ? "bg-primary/5 border-primary/30"
                  : "bg-secondary/30 border-border/50"
              }`}
            >
              <div className={`p-2 rounded-lg ${
                career.status === "soon" ? "bg-primary/20" : "bg-muted"
              }`}>
                <career.icon className={`w-5 h-5 ${
                  career.status === "soon" ? "text-primary" : "text-foreground"
                }`} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">{career.title}</p>
                {"note" in career && career.note && (
                  <p className="text-xs text-primary italic">{career.note}</p>
                )}
              </div>
              {career.status === "soon" && (
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/20 text-primary">
                  Coming Soon
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CareerSlide;
