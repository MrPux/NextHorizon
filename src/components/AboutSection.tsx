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
            The Next Frontier
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-tight">
            One border crossed. <br />
            <span className="italic text-gradient-gold">Another horizon ahead.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Arrive",
              desc: "You've already made the hardest journey. Next Horizon meets you where you are and connects you to scholarships built for your story.",
            },
            {
              title: "Apply",
              desc: "One application. No barriers. We cut through the complexity so you can focus on your future, not paperwork.",
            },
            {
              title: "Ascend",
              desc: "Funding, mentorship, and a community that understands the road you've traveled — and believes in where you're going.",
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
