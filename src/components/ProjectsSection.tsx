import { motion } from "framer-motion";
import { Star } from "lucide-react";

const projects = [
  {
    title: "Combat System",
    description: "A modular, server-authoritative combat system with hitbox detection, combo chains, and ragdoll physics.",
    tags: ["Luau", "Server-Auth", "Physics"],
    videoId: "nk39yf",
    featured: true,
  },
  {
    title: "Drone System",
    description: "A fully functional drone system with smooth flight controls, camera follow, and aerial mechanics.",
    tags: ["Luau", "Physics", "Controls"],
    videoId: "ylht3w",
    featured: true,
  },
  {
    title: "Movement System",
    description: "Custom character movement framework with advanced locomotion, wall running, and fluid animations.",
    tags: ["Luau", "Animation", "Physics"],
    videoId: "xbf2vl",
    featured: false,
  },
  {
    title: "Voting System",
    description: "Real-time multiplayer voting system with live UI updates and server-validated vote tracking.",
    tags: ["UI/UX", "Networking", "Luau"],
    videoId: "9krsmy",
    featured: false,
  },
  {
    title: "Mining System",
    description: "Interactive mining gameplay loop with resource gathering, tool progression, and terrain destruction.",
    tags: ["Gameplay", "Luau", "Systems"],
    videoId: "p2ziv1",
    featured: false,
  },
  {
    title: "Additional System",
    description: "Another showcase of polished Roblox scripting and gameplay mechanics.",
    tags: ["Luau", "Systems", "Gameplay"],
    videoId: "zhbbkk",
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-mono text-sm mb-2 block">// featured work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            My <span className="text-primary text-glow">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            A selection of Roblox scripting projects showcasing complex systems, clean architecture, and polished gameplay.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group rounded-xl border border-border bg-card overflow-hidden card-hover"
            >
              <div className="relative aspect-video bg-muted overflow-hidden">
                <iframe
                  src={`https://streamable.com/e/${project.videoId}`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-primary/90 px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                    <Star className="w-3 h-3" /> Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-mono text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
