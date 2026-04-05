import { motion } from "framer-motion";
import { Clock, Trophy, Users, Code } from "lucide-react";

const stats = [
  { icon: Clock, value: "3+", label: "Years Experience" },
  { icon: Trophy, value: "20+", label: "Projects Delivered" },
  { icon: Users, value: "50M+", label: "Players Reached" },
  { icon: Code, value: "100K+", label: "Lines of Luau" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono text-sm mb-2 block">// about me</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The <span className="text-primary text-glow">Developer</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Roblox developer with deep expertise in Luau scripting and game system design.
                I've built everything from combat frameworks to full economy simulations for games
                with millions of players.
              </p>
              <p>
                My approach focuses on clean, maintainable code architecture and server-authoritative
                design patterns that keep games secure and performant at scale.
              </p>
              <p>
                I work with tools like Rojo, Wally, and GitHub for professional workflows, and I'm
                experienced with both solo development and team collaboration on large-scale projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6 text-center border-glow"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground text-glow">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
