import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const toggleMode = () => setIsSignUp((prev) => !prev);

  const inputClass =
    "bg-card border-border text-foreground placeholder:text-muted-foreground/50 text-sm h-12 rounded-xl focus:border-ring focus:ring-1 focus:ring-ring/20 transition-all duration-200";

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 bg-background">
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
        className="w-full max-w-sm"
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
              <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-2">
                {isSignUp ? "Create your account" : "Welcome back"}
              </h1>
              <p className="text-sm text-muted-foreground font-light">
                {isSignUp
                  ? "Start your journey with Next Horizon."
                  : "Welcome back — continue your journey."}
              </p>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              setError("");
              if (email === "ashlycoboeducation@gmail.com" && password === "ashlycoboeducation") {
                navigate("/profile");
              } else {
                setError("Invalid email or password.");
              }
            }} className="space-y-3">
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

              {error && (
                <p className="text-sm text-destructive text-center">{error}</p>
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
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground/50">or</span>
              <div className="flex-1 h-px bg-border" />
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
      </motion.div>
    </div>
  );
};

export default Login;
