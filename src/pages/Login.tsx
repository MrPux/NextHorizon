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
    "bg-white/[0.06] border-white/[0.08] text-foreground placeholder:text-muted-foreground/40 text-sm h-12 rounded-xl backdrop-blur-sm focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all duration-200";

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 bg-background overflow-hidden">
      {/* Colorful orbs that the glass blurs over */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-[hsl(270_60%_50%/0.35)] blur-[60px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -35, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-[hsl(200_70%_50%/0.3)] blur-[60px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[25%] w-[400px] h-[400px] rounded-full bg-[hsl(30_80%_55%/0.25)] blur-[70px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] right-[25%] w-[300px] h-[300px] rounded-full bg-[hsl(340_70%_50%/0.2)] blur-[50px] pointer-events-none"
      />

      {/* Back */}
      <motion.a
        href="/"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 h-12 flex items-center gap-2 px-6 md:px-12 text-white/50 hover:text-foreground transition-colors text-xs z-50"
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

      {/* Glass card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-sm rounded-3xl bg-white/[0.05] backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_60px_-12px_rgba(0,0,0,0.5)] p-10"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isSignUp ? "signup" : "login"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-10">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground mb-2">
                {isSignUp ? "Create your account" : "Welcome back"}
              </h1>
              <p className="text-sm text-white/40 font-light">
                {isSignUp
                  ? "Start your journey with Next Horizon."
                  : "Sign in to continue your journey."}
              </p>
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
                    className="text-xs text-white/30 hover:text-white/60 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <div className="pt-3">
                <Button
                  type="submit"
                  className="w-full bg-white/[0.12] hover:bg-white/[0.18] text-foreground backdrop-blur-sm border border-white/[0.06] text-sm font-medium h-12 rounded-full transition-all duration-300 group"
                >
                  {isSignUp ? "Create account" : "Sign in"}
                  <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </div>
            </form>

            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-white/[0.06]" />
              <span className="text-[11px] text-white/20">or</span>
              <div className="flex-1 h-px bg-white/[0.06]" />
            </div>

            <p className="text-center text-sm text-white/40">
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
      </motion.div>
    </div>
  );
};

export default Login;
