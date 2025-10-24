const CTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Interested in collaboration with us?
            </h2>
            <p className="text-muted-foreground text-lg">
              We will help you reach your business goal
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <button className="btn-primary text-lg px-8">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
