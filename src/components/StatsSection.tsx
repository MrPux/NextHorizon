import { motion } from "framer-motion";

const stats = [
  { value: "2,400+", label: "Scholarships Awarded" },
  { value: "$12M", label: "In Funding Distributed" },
  { value: "96%", label: "Graduation Rate" },
  { value: "48", label: "Partner Universities" },
];

const StatsSection = () => {
  return (
    <section className="py-24 px-6 border-t border-border/50">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-display text-3xl md:text-4xl font-semibold text-gradient-gold mb-2">
              {stat.value}
            </p>
            <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
