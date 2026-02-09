const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-semibold text-foreground">
          Ascend<span className="text-gradient-gold">.</span>
        </p>
        <p className="font-body text-sm text-muted-foreground">
          © 2024 Ascend Scholarships. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
