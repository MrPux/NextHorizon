import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[11px] font-body font-light tracking-ultra-wide uppercase text-primary mb-6">
            The Next Frontier
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground leading-tight">
            One border crossed.
            <br />
            <span className="text-gradient-warm">Another horizon ahead.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              num: "01",
              title: "Arrive",
              desc: "You've already made the hardest journey. Next Horizon meets you where you are and connects you to scholarships built for your story.",
            },
            {
              num: "02",
              title: "Apply",
              desc: "One application. No barriers. We cut through the complexity so you can focus on your future, not paperwork.",
            },
            {
              num: "03",
              title: "Ascend",
              desc: "Funding, mentorship, and a community that understands the road you've traveled — and believes in where you're going.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass rounded-2xl p-10 group hover:glow-warm transition-all duration-500"
            >
              <p className="text-[11px] font-body font-light tracking-ultra-wide text-primary/60 mb-6 group-hover:text-primary transition-colors duration-500">
                {item.num}
              </p>
              <p className="font-display text-lg font-medium text-foreground mb-4">{item.title}</p>
              <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
