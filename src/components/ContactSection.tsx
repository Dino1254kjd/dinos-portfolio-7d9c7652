import { motion } from "framer-motion";
import { MessageSquare, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-primary font-mono text-sm mb-2 block">// get in touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's <span className="text-primary text-glow">Work Together</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Looking for a skilled Roblox scripter for your next project? I'm open for commissions
            and team collaborations. Reach out and let's create something amazing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.com/users/1235275778888040593"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground hover:brightness-110 transition-all duration-200"
            >
              <MessageSquare className="w-5 h-5" />
              Discord
            </a>
            <a
              href="https://www.roblox.com/users/2822100556/profile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-8 py-3 font-semibold text-secondary-foreground hover:border-primary/40 transition-all duration-200"
            >
              <ExternalLink className="w-5 h-5" />
              Roblox Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
