const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
            <span className="text-foreground font-bold text-sm">Y</span>
          </div>
          <span className="text-foreground font-semibold text-lg">Yonite</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About Us
          </a>
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">
            Our Work
          </a>
        </div>

        <button className="btn-primary">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
