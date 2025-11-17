import profileImage from '../assets/avt.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-navy-light relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan via-magenta to-lime"></div>
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-gradient-primary">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 animate-fade-in-left">
            <p className="text-lg text-foreground leading-relaxed">
              Hi! I'm <span className="text-cyan font-semibold">Bùi Duy Khánh</span>, a third-year Software Engineering student at the University of Science. 
              I have a strong passion for programming, especially in game development. 
              I thrive in problem-solving competitions and algorithm challenges.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm currently looking for frontend and backend internship opportunities to gain hands-on experience in real-world projects. 
              I enjoy creating clean, responsive web applications using modern technologies like  
              <span className="text-magenta font-semibold"> React.js</span>, 
              <span className="text-lime font-semibold"> Tailwind CSS</span>, and 
              <span className="text-cyan font-semibold"> WinUI C#</span>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My goal is to combine this technical background with practical experience to contribute effectively to software projects, 
              while continuously growing as a developer capable of creating meaningful and user-friendly applications.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-card border border-cyan text-cyan rounded-lg font-medium hover:bg-cyan/10 transition-colors duration-300">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-card border border-magenta text-magenta rounded-lg font-medium hover:bg-magenta/10 transition-colors duration-300">
                Quick Learner
              </span>
              <span className="px-4 py-2 bg-card border border-lime text-lime rounded-lg font-medium hover:bg-lime/10 transition-colors duration-300">
                Agile Mindset
              </span>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative animate-fade-in-right">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 border-4 border-cyan/30 rounded-3xl rotate-6 animate-glow-pulse"></div>
              <div className="absolute inset-4 border-4 border-magenta/30 rounded-3xl -rotate-6 animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-8 border-4 border-lime/30 rounded-3xl rotate-3 animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Center content */}
              <img 
                src={profileImage}
                alt="Your Name"
                className="absolute inset-16 w-80 h-80 object-cover rounded-2xl" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
