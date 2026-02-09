import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Ambient horizon glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-primary/[0.04] blur-[100px]" />
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-primary/[0.06] blur-[80px]" />
      </div>

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
          <span className="text-gradient-warm">doesn't end here</span>
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
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-body text-xs font-light tracking-wider px-10 py-6 rounded-full group transition-all duration-500 glow-warm-hover"
          >
            Apply for a Scholarship
            <ArrowRight className="ml-3 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Horizon line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.8, delay: 1.4, ease: "easeOut" }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 w-48 h-px horizon-line"
      />
    </section>
  );
};

export default Hero;
