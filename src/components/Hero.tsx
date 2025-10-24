const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-block px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-4">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            What We Have Done
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
          Work That Speaks for Itself.
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          From bold campaigns to unforgettable experiences, our projects show how creativity and strategy come together to make brands shine.
        </p>

        <button className="btn-primary mt-6">
          See Our Work
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-20 max-w-5xl w-full">
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            1M+
          </div>
          <div className="text-sm text-muted-foreground">
            Tickets Delivered This Month
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            53K+
          </div>
          <div className="text-sm text-muted-foreground">
            Active Customers Rate
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            98.29%
          </div>
          <div className="text-sm text-muted-foreground">
            Customer Satisfaction Rate
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
