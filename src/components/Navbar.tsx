import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 bg-background/60 backdrop-blur-xl"
    >
      <a href="/" className="font-display text-sm font-medium tracking-ultra-wide uppercase text-foreground">
        Next<span className="text-primary"> Horizon</span>
      </a>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-body text-xs font-light tracking-wider" asChild>
          <a href="/login">Log in</a>
        </Button>
        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-body text-xs font-light tracking-wider px-6 rounded-full glow-warm-hover transition-all duration-500">
          Apply
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
