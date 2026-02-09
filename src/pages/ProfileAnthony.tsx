import { motion } from "framer-motion";
import { ArrowLeft, Check, GraduationCap, FileText, DollarSign, Building2, User, ShieldAlert } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Application Submitted",
    description: "Your scholarship application has been received and reviewed.",
    date: "Jan 15, 2026",
    completed: true,
  },
  {
    icon: Check,
    title: "Eligibility Verified",
    description: "All documentation and eligibility requirements have been confirmed.",
    date: "Jan 20, 2026",
    completed: true,
  },
  {
    icon: ShieldAlert,
    title: "Insurance Funds",
    description: "Insurance funding has been confirmed and processed successfully.",
    date: "Jan 28, 2026",
    completed: true,
  },
  {
    icon: Building2,
    title: "University Acceptance",
    description: "Accepted into Oglethorpe University — Engineering program.",
    date: "Feb 3, 2026",
    completed: true,
  },
  {
    icon: DollarSign,
    title: "Scholarship Awarded",
    description: "Full scholarship has been confirmed and disbursed.",
    date: "Feb 5, 2026",
    completed: true,
  },
];

const ProfileAnthony = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 h-12 flex items-center justify-between px-6 md:px-12 z-50"
      >
        <a
          href="/"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-xs"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Home
        </a>
        <span className="text-sm font-medium text-foreground">Next Horizon</span>
      </motion.div>

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Profile header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <User className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                  Anthony
                </h1>
                <p className="text-sm text-muted-foreground font-light">
                  Scholar · Oglethorpe University
                </p>
              </div>
            </div>

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium">
              <GraduationCap className="h-4 w-4" />
              Scholarship Awarded
            </div>
          </motion.div>

          {/* Award highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-16 text-center py-12 rounded-3xl bg-emerald-500/5 border border-emerald-500/10"
          >
            <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-3">
              Total Award
            </p>
            <h2 className="text-7xl md:text-8xl font-bold tracking-tighter text-foreground">
              $45<span className="text-emerald-400">,</span>000
            </h2>
            <p className="text-sm text-muted-foreground font-light mt-3">
              Full scholarship · Engineering
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-16"
          >
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8">
              Application Progress
            </h2>

            <div className="space-y-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 + i * 0.1 }}
                  className="relative flex gap-5"
                >
                  {i < steps.length - 1 && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-px bg-emerald-500/20" />
                  )}

                  <div className="relative z-10 flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center bg-emerald-500/10">
                    <step.icon className="h-4 w-4 text-emerald-400" />
                  </div>

                  <div className="pb-10">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-[15px] font-medium text-foreground">
                        {step.title}
                      </h3>
                      <span className="text-xs text-muted-foreground">{step.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-light mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scholarship details */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-6">
              Award Details
            </h2>

            <div className="rounded-2xl bg-card p-8 space-y-5">
              {[
                { label: "Award Amount", value: "$45,000" },
                { label: "University", value: "Oglethorpe University" },
                { label: "Program", value: "Engineering (B.S.)" },
                { label: "Academic Year", value: "2026 – 2027" },
                { label: "Status", value: "Awarded ✓" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground font-light">{item.label}</span>
                  <span className={`text-sm font-medium ${item.label === "Status" ? "text-emerald-400" : "text-foreground"}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAnthony;
