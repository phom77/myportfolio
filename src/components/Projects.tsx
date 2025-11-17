import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  color: "cyan" | "magenta" | "lime";
}

const projects: Project[] = [
  {
    title: "Dragon Ball Z",
    description: "A 2D fighting game engine built from scratch in C++/SFML, featuring a data-driven JSON animation pipeline, state-machine character logic, and hitbox-based combat.",
    technologies: ["C++", "cmake", "SFML"],
    githubUrl: "https://github.com/phom77/dragon-ball-Z-.git",
    color: "cyan",
  },
  {
    title: "The Calculator",
    description: "Modern calculator application with a responsive UI, persistent calculation history, and advanced mathematical functions.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
    githubUrl: "https://github.com/phom77/calculator.git",
    liveUrl: "https://calculator-rplp.onrender.com/",
    color: "magenta",
  },
  {
    title: "Endless Runner 3D",
    description: "A 3D endless runner built in Unity/C#, featuring procedurally generated obstacles, smooth character controls, and dynamic scoring mechanics.",
    technologies: ["C#", "Unity"],
    githubUrl: "https://github.com/phom77/endlessRunner.git",
    color: "lime",
  },
  {
    title: "Tic Tac Toe",
    description: "A responsive and interactive Tic-Tac-Toe application developed with React, showcasing advanced state management and a polished UI.",
    technologies: ["React", "TailwindCSS", "JavaScript", "Lucide React"],
    githubUrl: "https://github.com/phom77/tic-tac-toe.git",
    liveUrl: "https://tic-tac-toe-mf5h.onrender.com/",
    color: "cyan",
  },
  {
    title: "Github Finder",
    description: "A dynamic web application to search for GitHub users and display their profile information and repositories using the GitHub API.",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "GitHub API"],
    githubUrl: "https://github.com/phom77/github_finder.git",
    liveUrl: "https://github-finder-cqym.onrender.com/",
    color: "magenta",
  },
  {
    title: "Group Infomation",
    description: "A dynamic portfolio website featuring a team of developers, designed with a focus on cyberpunk aesthetics and micro-interactions.",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP", "Swup.js"],
    githubUrl: "https://github.com/phom77/group_info_WEB.git",
    liveUrl: "https://group-info-br24.onrender.com/",
    color: "lime",
  },
];

const Projects = () => {
  const getColorClasses = (color: "cyan" | "magenta" | "lime") => {
    const colors = {
      cyan: {
        border: "border-cyan",
        text: "text-cyan",
        bg: "bg-cyan/10",
        hover: "hover:border-cyan",
        glow: "hover:glow-cyan",
      },
      magenta: {
        border: "border-magenta",
        text: "text-magenta",
        bg: "bg-magenta/10",
        hover: "hover:border-magenta",
        glow: "hover:glow-magenta",
      },
      lime: {
        border: "border-lime",
        text: "text-lime",
        bg: "bg-lime/10",
        hover: "hover:border-lime",
        glow: "hover:glow-lime",
      },
    };
    return colors[color];
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 bg-navy-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Some of my recent work and side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            
            return (
              <div
                key={project.title}
                className={`group bg-card border-2 border-border rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${colorClasses.hover} ${colorClasses.glow} animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 ${colorClasses.bg} rounded-lg`}>
                    <div className={`w-6 h-6 ${colorClasses.text} font-bold flex items-center justify-center`}>
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg ${colorClasses.bg} ${colorClasses.text} hover:bg-opacity-80 transition-colors duration-300`}
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg ${colorClasses.bg} ${colorClasses.text} hover:bg-opacity-80 transition-colors duration-300`}
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project content */}
                <h3 className={`text-xl font-bold mb-3 ${colorClasses.text} group-hover:text-gradient-primary transition-all duration-300`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-background border border-border rounded-full text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <a
            href="https://github.com/phom77"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyan text-cyan font-semibold rounded-lg transition-all duration-300 hover:bg-cyan hover:text-background hover:scale-105"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
