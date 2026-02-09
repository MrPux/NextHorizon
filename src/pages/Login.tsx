import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const toggleMode = () => setIsSignUp((prev) => !prev);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 bg-background overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-primary/[0.03] blur-[100px]" />
      </div>

      {/* Back button */}
      <motion.a
        href="/"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="fixed top-6 left-8 md:left-16 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-xs font-body font-light tracking-wider z-50"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back
      </motion.a>

      {/* Logo */}
      <motion.a
        href="/"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="fixed top-6 right-8 md:right-16 font-display text-sm font-medium tracking-ultra-wide uppercase text-foreground z-50"
      >
        Next<span className="text-primary"> Horizon</span>
      </motion.a>

      <div className="relative z-10 w-full max-w-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={isSignUp ? "signup" : "login"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="text-center mb-12">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[11px] font-body font-light tracking-ultra-wide uppercase text-muted-foreground mb-5"
              >
                {isSignUp ? "Begin your journey" : "Welcome back"}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground"
              >
                {isSignUp ? (
                  <>Cross the next <span className="text-gradient-warm">horizon</span></>
                ) : (
                  <>Continue your <span className="text-gradient-warm">journey</span></>
                )}
              </motion.h1>
            </div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              {isSignUp && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Input
                    type="text"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground font-body text-sm font-light h-12 rounded-lg focus:border-primary/40 focus:ring-primary/20 transition-all duration-300"
                  />
                </motion.div>
              )}

              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-card border-border text-foreground placeholder:text-muted-foreground font-body text-sm font-light h-12 rounded-lg focus:border-primary/40 focus:ring-primary/20 transition-all duration-300"
              />

              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-card border-border text-foreground placeholder:text-muted-foreground font-body text-sm font-light h-12 rounded-lg focus:border-primary/40 focus:ring-primary/20 transition-all duration-300"
              />

              {!isSignUp && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-[11px] font-body font-light text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body text-xs font-light tracking-wider h-12 rounded-full glow-warm-hover transition-all duration-500 group"
                >
                  {isSignUp ? "Create account" : "Sign in"}
                  <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.form>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4 my-8"
            >
              <div className="flex-1 h-px bg-border" />
              <span className="text-[10px] font-body font-light text-muted-foreground tracking-widest uppercase">or</span>
              <div className="flex-1 h-px bg-border" />
            </motion.div>

            {/* Toggle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-center text-xs font-body font-light text-muted-foreground"
            >
              {isSignUp ? "Already have an account?" : "New to Next Horizon?"}{" "}
              <button
                onClick={toggleMode}
                className="text-primary hover:text-primary/80 transition-colors duration-300 font-normal"
              >
                {isSignUp ? "Sign in" : "Create an account"}
              </button>
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom horizon line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.8, delay: 0.8, ease: "easeOut" }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-32 h-px horizon-line"
      />
    </div>
  );
};

export default Login;
