import { Code2, Sparkles, Gamepad2, AppWindow } from "lucide-react";

interface Skill {
  name: string;
  color: "cyan" | "magenta" | "lime";
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
  color: "cyan" | "magenta" | "lime";
}

const skillCategories: SkillCategory[] = [
  {
    title: "Game Development & C++",
    icon: Gamepad2,
    color: "cyan",
    skills: [
      { name: "C++", color: "cyan" },
      { name: "C# (for Unity/Godot)", color: "cyan" },
      { name: "Unreal Engine", color: "cyan" },
      { name: "Unity", color: "cyan" },
    ],
  },
  {
    title: "Desktop & Application Dev",
    icon: AppWindow,
    color: "magenta",
    skills: [
      { name: "C#", color: "magenta" },
      { name: ".NET Framework / .NET", color: "magenta" },
      { name: "WinUI 3", color: "magenta" },
    ],
  },
  {
    title: "Web Development & Databases",
    icon: Code2,
    color: "lime",
    skills: [
      { name: "React.js", color: "lime" },
      { name: "JavaScript & TypeScript", color: "lime" },
      { name: "Tailwind CSS", color: "lime" },
      { name: "HTML5 & CSS3", color: "lime" },
      { name: "Node.js", color: "lime" },
      { name: "RESTful API", color: "lime" },
      { name: "PostgreSQL", color: "lime" },
    ],
  },
];

const Skills = () => {
  const getColorClasses = (color: "cyan" | "magenta" | "lime") => {
    const colors = {
      cyan: {
        border: "border-cyan",
        text: "text-cyan",
        bg: "bg-cyan/10",
        glow: "glow-cyan",
        hover: "hover:bg-cyan/20",
      },
      magenta: {
        border: "border-magenta",
        text: "text-magenta",
        bg: "bg-magenta/10",
        glow: "glow-magenta",
        hover: "hover:bg-magenta/20",
      },
      lime: {
        border: "border-lime",
        text: "text-lime",
        bg: "bg-lime/10",
        glow: "glow-lime",
        hover: "hover:bg-lime/20",
      },
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 px-4 md:px-8 lg:px-16 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-magenta/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-secondary">Skills & Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div
                key={category.title}
                className="animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className={`bg-card border-2 ${colorClasses.border} rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${colorClasses.glow}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 ${colorClasses.bg} rounded-lg`}>
                      <IconComponent className={`w-6 h-6 ${colorClasses.text}`} />
                    </div>
                    <h3 className={`text-2xl font-bold ${colorClasses.text}`}>
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => {
                      const skillColorClasses = getColorClasses(skill.color);
                      return (
                        <div
                          key={skill.name}
                          className={`px-4 py-3 bg-background border ${skillColorClasses.border} rounded-lg font-medium ${skillColorClasses.text} transition-all duration-300 ${skillColorClasses.hover} hover:scale-105 cursor-default`}
                          style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                        >
                          {skill.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional highlight */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan/20 via-magenta/20 to-lime/20 border border-cyan rounded-full">
            <Sparkles className="w-5 h-5 text-cyan animate-glow-pulse" />
            <span className="text-foreground font-medium">
              Always learning, always growing
            </span>
            <Sparkles className="w-5 h-5 text-magenta animate-glow-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
