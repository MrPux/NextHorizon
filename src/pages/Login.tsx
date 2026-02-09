import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const toggleMode = () => setIsSignUp((prev) => !prev);

  const inputClass =
    "bg-foreground/[0.06] border-foreground/[0.08] text-foreground placeholder:text-muted-foreground/40 text-sm h-12 rounded-xl focus:border-foreground/20 focus:ring-1 focus:ring-foreground/10 transition-all duration-200 backdrop-blur-sm";

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 bg-background overflow-hidden">
      {/* Ambient background orbs for glass effect */}
      <motion.div
        className="absolute top-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-warm/20 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-[350px] h-[350px] rounded-full bg-foreground/[0.06] blur-[100px]"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-warm/10 blur-[150px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Back */}
      <motion.a
        href="/"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 h-12 flex items-center gap-2 px-6 md:px-12 text-muted-foreground hover:text-foreground transition-colors text-xs z-50"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back
      </motion.a>

      {/* Logo */}
      <motion.a
        href="/"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 right-0 h-12 flex items-center px-6 md:px-12 text-sm font-medium text-foreground z-50"
      >
        Next Horizon
      </motion.a>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative w-full max-w-md"
      >
        {/* Glass card */}
        <div className="relative rounded-3xl border border-foreground/[0.08] bg-foreground/[0.04] backdrop-blur-2xl p-10 shadow-[0_8px_60px_-12px_hsl(var(--warm)/0.15)]">
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-foreground/[0.06] to-transparent pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={isSignUp ? "signup" : "login"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <div className="text-center mb-10">
                <motion.h1
                  className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-3 leading-[1.1]"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  {isSignUp ? (
                    <>
                      Join the <br />
                      <span className="text-gradient-warm">Next Horizon</span>
                    </>
                  ) : (
                    <>
                      Welcome <br />
                      <span className="text-gradient-warm">back</span>
                    </>
                  )}
                </motion.h1>
                <motion.p
                  className="text-sm text-muted-foreground font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                >
                  {isSignUp
                    ? "Your future starts here."
                    : "Great to see you again."}
                </motion.p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                {isSignUp && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Input
                      type="text"
                      placeholder="Full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClass}
                    />
                  </motion.div>
                )}

                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />

                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={inputClass}
                />

                {!isSignUp && (
                  <div className="flex justify-end pt-1">
                    <button
                      type="button"
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                <div className="pt-3">
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium h-12 rounded-full group"
                  >
                    {isSignUp ? "Create account" : "Sign in"}
                    <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </div>
              </form>

              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-foreground/[0.08]" />
                <span className="text-xs text-muted-foreground/50">or</span>
                <div className="flex-1 h-px bg-foreground/[0.08]" />
              </div>

              <p className="text-center text-sm text-muted-foreground">
                {isSignUp ? "Already have an account?" : "New to Next Horizon?"}{" "}
                <button
                  onClick={toggleMode}
                  className="text-foreground hover:text-foreground/80 transition-colors font-medium"
                >
                  {isSignUp ? "Sign in" : "Create account"}
                </button>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
