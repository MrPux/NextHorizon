const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-xs font-medium tracking-ultra-wide uppercase text-foreground">
          Next<span className="text-primary"> Horizon</span>
        </p>
        <p className="font-body text-xs font-light text-muted-foreground tracking-wider">
          © 2025 Next Horizon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
