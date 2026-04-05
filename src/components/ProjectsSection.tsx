import { motion } from "framer-motion";
import { Play, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "Combat System Framework",
    description: "A modular, server-authoritative combat system with hitbox detection, combo chains, and ragdoll physics. Used in 3 published games with 10M+ visits.",
    tags: ["Luau", "Server-Auth", "Physics"],
    videoId: "s7xxby",
    featured: true,
  },
  {
    title: "Custom Inventory & Trading",
    description: "Full inventory management system with drag-and-drop UI, real-time trading between players, and DataStore persistence with session locking.",
    tags: ["UI/UX", "DataStore", "Networking"],
    videoId: "dQw4w9WgXcQ",
    featured: true,
  },
  {
    title: "Procedural World Generation",
    description: "Chunk-based terrain generation using Perlin noise with biome systems, LOD rendering, and dynamic entity spawning.",
    tags: ["Algorithms", "Optimization", "Terrain"],
    videoId: "dQw4w9WgXcQ",
    featured: false,
  },
  {
    title: "Admin Dashboard Panel",
    description: "In-game admin panel with player management, analytics graphs, ban system, and remote event monitoring for live debugging.",
    tags: ["UI Framework", "Analytics", "Tools"],
    videoId: "dQw4w9WgXcQ",
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
              {/* Video embed */}
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
