import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm font-body font-medium tracking-[0.2em] uppercase text-primary mb-8"
        >
          Empowering the next generation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-display text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight text-foreground mb-6"
        >
          Your potential
          <br />
          <span className="text-gradient-gold italic">deserves a chance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mb-12"
        >
          We connect ambitious students with life-changing scholarships.
          No barriers, no complexity — just opportunity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-body text-base px-8 py-6 rounded-full glow-gold group"
          >
            Apply for a Scholarship
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />
    </section>
  );
};

export default Hero;
