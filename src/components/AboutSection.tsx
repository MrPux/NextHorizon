import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body font-medium tracking-[0.2em] uppercase text-primary mb-4">
            Why Next Horizon
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-tight">
            Your launchpad to <br />
            <span className="italic text-gradient-gold">what's next</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Explore",
              desc: "Next Horizon matches you with scholarships aligned to your goals, background, and field of study.",
            },
            {
              title: "Apply",
              desc: "One application. Zero friction. Next Horizon streamlines everything so you can focus on what matters.",
            },
            {
              title: "Thrive",
              desc: "Funding is just the start. Next Horizon provides mentorship and a community invested in your success.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 rounded-xl bg-card border border-border/50 hover:border-glow transition-colors duration-500"
            >
              <p className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
