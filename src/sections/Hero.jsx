export const Hero = () => {
  return (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src="/hero-bg.jpg" alt="Hero image" className="w-full h-full object-cover opacity-50"/>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
    </div>

    {/* Green Dots */}
    <div className="absolute inset-0" overflow-hidden pointer-events-none>
      {[...Array(30)].map((_, index) => (
        <div className= "absolute w-1.5 h-1.5 rounded-full opacity-60" style={{
          background: "#20B2A6",
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`
        }}/>
      ))}
    </div>

    {/* Content */}
    <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Full-Stack Software Developer
            </span>
          </div>
        </div>
        {/* Right Column - Profile Image */}
      </div>
    </div>
  </section>);
};
