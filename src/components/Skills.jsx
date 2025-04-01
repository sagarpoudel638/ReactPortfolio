import { useSkillAnimation, useStaggeredAnimation } from '@/lib/animations';

const Skills = () => {
  const section = useSkillAnimation({ threshold: 0.1 });
  const staggered = useStaggeredAnimation({ threshold: 0.1 });

  const skillCategories = [
    {
      name: "Front-end",
      skills: [
        { name: "React.js", percent: "90%" },
        { name: "HTML/CSS", percent: "95%" },
        { name: "JavaScript", percent: "90%" },
        { name: "Bootstrap", percent: "85%" },
      ]
    },
    {
      name: "Back-end",
      skills: [
        { name: "Node.js", percent: "85%" },
        { name: "Express.js", percent: "85%" },
        { name: "Python", percent: "80%" },
        { name: "Laravel/PHP", percent: "75%" },
      ]
    },
    {
      name: "Database & Cloud",
      skills: [
        { name: "MongoDB", percent: "85%" },
        { name: "MySQL", percent: "80%" },
        { name: "AWS", percent: "75%" },
        { name: "Docker", percent: "70%" },
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={section.ref}
      className={`py-24 bg-secondary/50 ${section.className}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="bg-primary/10 rounded-full px-4 py-1 text-xs font-medium text-primary">
              Skills & Technologies
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Technical Proficiency
          </h2>

          <p className="max-w-2xl mx-auto text-muted-foreground">
            I've developed expertise in a variety of technologies and frameworks, 
            allowing me to create comprehensive solutions for diverse projects.
          </p>
        </div>

        <div 
          ref={staggered.ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${staggered.className}`}
        >
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="stagger-item bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-primary/5 p-6 frosted-glass"
            >
              <h3 className="text-xl font-bold mb-4 text-center">{category.name}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.percent}</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ "--skill-percent": skill.percent }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-6">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Flutter", "Terraform", "Git", "RESTful APIs", "TypeScript", 
              "Redux", "GraphQL", "NextJS", "Firebase", "BASH Scripting"
            ].map((tech, idx) => (
              <span 
                key={idx} 
                className="px-4 py-2 bg-white dark:bg-slate-900 rounded-full text-sm font-medium shadow-sm frosted-glass"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;