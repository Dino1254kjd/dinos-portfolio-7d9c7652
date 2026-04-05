import { Code2 } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-primary font-bold">
        <Code2 className="w-5 h-5" />
        <span>RblxDev</span>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} RblxDev. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
