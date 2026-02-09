import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-12 bg-background/80 backdrop-blur-xl backdrop-saturate-150 border-b border-border/50"
    >
      <a href="/" className="text-sm font-medium text-foreground tracking-tight">
        Next Horizon
      </a>

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground text-xs h-8 px-3 rounded-full" asChild>
          <a href="/login">Log in</a>
        </Button>
        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs h-8 px-4 rounded-full font-medium">
          Apply
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
