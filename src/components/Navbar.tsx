import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <a href="/" className="font-display text-xl font-semibold tracking-tight text-foreground">
        Next Horizon<span className="text-gradient-gold">.</span>
      </a>

      <div className="hidden md:flex items-center gap-8 text-sm font-body text-muted-foreground">
        <a href="#about" className="hover:text-foreground transition-colors duration-300">About</a>
        <a href="#programs" className="hover:text-foreground transition-colors duration-300">Programs</a>
        <a href="#impact" className="hover:text-foreground transition-colors duration-300">Impact</a>
        <a href="#faq" className="hover:text-foreground transition-colors duration-300">FAQ</a>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-body text-sm">
          Log in
        </Button>
        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-body text-sm px-5">
          Apply
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
