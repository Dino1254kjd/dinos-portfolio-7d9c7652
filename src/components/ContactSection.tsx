import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

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

          <Button asChild size="lg" className="gap-2">
            <a href="https://discord.com/users/1235275778888040593" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="w-5 h-5" />
              Contact on Discord
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
