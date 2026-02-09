import { motion } from "framer-motion";

const steps = [
  {
    title: "Arrive.",
    description: "You've already made the hardest journey. Next Horizon meets you where you are and connects you to scholarships built for your story.",
  },
  {
    title: "Apply.",
    description: "One application. No barriers. We cut through the complexity so you can focus on your future, not paperwork.",
  },
  {
    title: "Ascend.",
    description: "Funding, mentorship, and a community that understands the road you've traveled — and believes in where you're going.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 md:mb-28"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance leading-[1.1]">
            One border crossed.
            <br />
            <span className="text-muted-foreground">Another horizon ahead.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-2">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-card p-8 md:p-10"
            >
              <h3 className="text-2xl font-semibold text-foreground tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="text-[15px] text-muted-foreground font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
