import { motion } from "framer-motion";
import { MapPin, Ruler, Globe, GraduationCap } from "lucide-react";

const stats = [
  { icon: Ruler, label: "Height", value: "6'4\"", subtext: "193 cm" },
  { icon: MapPin, label: "Nationality", value: "Hungarian", subtext: "Budapest, Hungary" },
  { icon: Globe, label: "Ethnicity", value: "Hungarian", subtext: "Part Slavic, Part German" },
  { icon: GraduationCap, label: "Education", value: "B.S. Computer Science", subtext: "Fresh graduate" },
];

const languages = ["Hungarian", "German", "Polish", "Japanese"];

const StatsSlide = () => {
  return (
    <div className="flex flex-col justify-center min-h-[600px] px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">The Basics</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            23 Years Old
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="p-4 rounded-xl bg-secondary/50 border border-border/50 space-y-2"
            >
              <stat.icon className="w-5 h-5 text-primary" />
              <p className="text-lg font-medium text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.subtext}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-3"
        >
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Languages Spoken
          </p>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang, i) => (
              <motion.span
                key={lang}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="stat-badge"
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StatsSlide;
