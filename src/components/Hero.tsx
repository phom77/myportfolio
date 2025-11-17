
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4  bg-gradient-to-b from-background via-navy to-navy-light">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-lime/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Name with gradient */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold animate-fade-in">
          <span className="text-gradient-primary">Bùi Duy Khánh</span>
        </h1>

        {/* Subtitle with staggered animation */}
        <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-medium">
            Software Engineering Student
          </p>
          <p className="text-lg md:text-xl text-cyan font-light">
            Game & Web Application Developer
          </p>
        </div>

        {/* Tagline */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Turning complex requirements into simple and effective applications. <br/>
          I enjoy building interactive and performant digital experiences, from game logic to user interfaces.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a 
            href="#projects" 
            className="group relative px-8 py-3 bg-cyan text-primary-foreground font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 glow-cyan"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan to-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border-2 border-magenta text-magenta font-semibold rounded-lg transition-all duration-300 hover:bg-magenta hover:text-background hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
