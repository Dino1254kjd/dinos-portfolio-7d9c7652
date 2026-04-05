import { motion } from "framer-motion";
import { Cpu, Gamepad2, Layers, MonitorSmartphone, Zap } from "lucide-react";

const skills = [
  {
    icon: Gamepad2,
    title: "Game Systems",
    description: "Combat, inventory, quests, vehicles, pets — full gameplay loops from scratch.",
  },
  {
    icon: Layers,
    title: "Module Systems",
    description: "Clean, scalable codebases using OOP, Knit/Rojo, and modular service patterns.",
  },
  {
    icon: Cpu,
    title: "Server Systems",
    description: "Server-authoritative logic, anti-exploit patterns, and optimized remote event handling.",
  },
  {
    icon: MonitorSmartphone,
    title: "UI/UX Design",
    description: "Custom UI frameworks with animations, responsive layouts, and drag-and-drop interfaces.",
  },
  {
    icon: Zap,
    title: "Optimization",
    description: "Micro-profiler analysis, LOD systems, streaming, and memory management for 100+ player servers.",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-mono text-sm mb-2 block">// expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Core <span className="text-primary text-glow">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
