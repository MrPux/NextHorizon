import { motion } from "framer-motion";
import { ArrowLeft, Check, GraduationCap, FileText, DollarSign, Building2, User, ShieldAlert, ChevronDown } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: FileText,
    title: "Application Submitted",
    description: "Your scholarship application has been received and reviewed.",
    date: "Feb 2, 2026",
    completed: true,
  },
  {
    icon: Check,
    title: "Eligibility Verified",
    description: "All documentation and eligibility requirements have been confirmed.",
    date: "Feb 6, 2026",
    completed: true,
  },
  {
    icon: ShieldAlert,
    title: "Insurance Funds",
    description: "Insurance funding is required and currently awaiting confirmation. Please ensure documentation is submitted.",
    date: "Pending",
    completed: false,
  },
  {
    icon: Building2,
    title: "University Acceptance",
    description: "Pending — awaiting university admission decision.",
    date: "Pending",
    completed: false,
  },
  {
    icon: DollarSign,
    title: "Scholarship Awarded",
    description: "Will be confirmed upon university acceptance.",
    date: "—",
    completed: false,
  },
];

const Profile = () => {
  const [insuranceOpen, setInsuranceOpen] = useState(false);

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
              <div className="h-14 w-14 rounded-full bg-card flex items-center justify-center">
                <User className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                  Ashly Cobo
                </h1>
                <p className="text-sm text-muted-foreground font-light">
                  Applicant · Awaiting University Decision
                </p>
              </div>
            </div>

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full text-sm font-medium">
              <GraduationCap className="h-4 w-4" />
              University Acceptance Pending
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
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
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                  className="relative flex gap-5"
                >
                  {/* Vertical line */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-px bg-border" />
                  )}

                  {/* Icon */}
                  <div className={`relative z-10 flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                    step.completed ? "bg-emerald-500/10" : "bg-card"
                  }`}>
                    <step.icon className={`h-4 w-4 ${step.completed ? "text-emerald-400" : "text-muted-foreground"}`} />
                  </div>

                  {/* Content */}
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

                    {/* Insurance contact dropdown */}
                    {step.title === "Insurance Funds" && (
                      <div className="mt-3">
                        <button
                          onClick={() => setInsuranceOpen(!insuranceOpen)}
                          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <span>Local contacts for insurance</span>
                          <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${insuranceOpen ? "rotate-180" : ""}`} />
                        </button>
                        {insuranceOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 rounded-lg bg-card border border-border px-4 py-3 space-y-2"
                          >
                            <div className="flex justify-between text-xs">
                              <span className="text-muted-foreground">Contact</span>
                              <span className="text-foreground font-medium">Local Insurance Office</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-muted-foreground">Phone</span>
                              <span className="text-foreground font-medium">(555) 123-4567</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-muted-foreground">Email</span>
                              <span className="text-foreground font-medium">insurance@nexthorizon.org</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-muted-foreground">Location</span>
                              <span className="text-foreground font-medium">123 Main St, Suite 200</span>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scholarship details */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-6">
              Award Details
            </h2>

            <div className="rounded-2xl bg-card p-8 space-y-5">
              {[
                { label: "Award Amount", value: "Pending" },
                { label: "University", value: "To be determined" },
                { label: "Program", value: "Pre-Medicine / Biology (B.S.)" },
                { label: "Academic Year", value: "2026 – 2027" },
                { label: "Status", value: "Awaiting Acceptance" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground font-light">{item.label}</span>
                  <span className="text-sm font-medium text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
