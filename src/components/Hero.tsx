import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[11px] font-body font-light tracking-ultra-wide uppercase text-muted-foreground mb-12"
        >
          You crossed one frontier. Now cross the next.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-foreground mb-8"
        >
          The journey
          <br />
          doesn't end here
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-sm md:text-base font-light text-muted-foreground max-w-md mx-auto leading-relaxed mb-14"
        >
          You left everything behind to build something new.
          Next Horizon is here to make sure education is a frontier you don't have to cross alone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 font-body text-xs font-light tracking-wider px-10 py-6 rounded-full group transition-shadow duration-500 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.15)]"
          >
            Apply for a Scholarship
            <ArrowRight className="ml-3 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Minimal decorative line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 1.4 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-muted-foreground/20 to-transparent origin-top"
      />
    </section>
  );
};

export default Hero;
