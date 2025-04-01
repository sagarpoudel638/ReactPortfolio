import { useSectionAnimation, useStaggeredAnimation } from '@/lib/animations';

const experiences = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    description: "Built and deployed multiple microservices-based applications using MERN stack. Improved application performance by 40% through code optimization and best practices implementation.",
    achievements: [
      "Led a team of 5 developers for client projects",
      "Implemented CI/CD pipelines using GitHub Actions",
      "Architected scalable cloud infrastructure on AWS"
    ]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "WebFusion Innovations",
    period: "2020 - 2022",
    description: "Developed customer management systems in Laravel and React. Built RESTful APIs for mobile and web applications, ensuring high security and performance standards.",
    achievements: [
      "Optimized database queries reducing load time by 35%",
      "Implemented responsive designs for cross-platform compatibility",
      "Contributed to open-source projects in the Laravel ecosystem"
    ]
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "DataSphere Technologies",
    period: "2018 - 2020",
    description: "Created Python-based data processing and analysis tools. Developed and maintained MySQL databases and API endpoints for client applications.",
    achievements: [
      "Designed efficient data processing algorithms",
      "Created comprehensive API documentation",
      "Implemented unit and integration tests to ensure code quality"
    ]
  }
];

const Experience = () => {
  const section = useSectionAnimation({ threshold: 0.1 });
  const staggered = useStaggeredAnimation({ threshold: 0.1 });

  return (
    <section 
      id="experience" 
      ref={section.ref}
      className={`py-24 bg-secondary/50 ${section.className}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="bg-primary/10 rounded-full px-4 py-1 text-xs font-medium text-primary">
              Experience & Achievements
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Journey
          </h2>
          
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A timeline of my professional growth, key roles, and notable achievements
            throughout my career as a software developer.
          </p>
        </div>
        
        <div 
          ref={staggered.ref}
          className={`relative ${staggered.className}`}
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20 rounded-full"></div>
          
          {experiences.map((exp, idx) => (
            <div 
              key={exp.id} 
              className={`stagger-item relative flex flex-col md:flex-row ${idx !== experiences.length - 1 ? 'mb-16' : ''}`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-slate-900"></div>
              
              {/* Left side (even) or empty space (odd) */}
              <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 text-right' : 'md:pr-12 md:text-right invisible'}`}>
                {idx % 2 === 0 && (
                  <>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-sm font-semibold text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul className={`space-y-2 text-sm ${idx % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      {exp.achievements.map((achievement, achieveIdx) => (
                        <li key={achieveIdx} className="flex items-center justify-end">
                          <span>{achievement}</span>
                          <span className="ml-2 w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            ✓
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              
              {/* Mobile dot (only visible on mobile) */}
              <div className="md:hidden absolute left-0 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-slate-900"></div>
              
              {/* Right side (odd) or empty space (even) */}
              <div className={`md:w-1/2 ${idx % 2 === 1 ? 'md:pl-12' : 'md:pl-12 invisible'} ${idx % 2 === 0 ? 'ml-6 md:ml-0' : 'ml-6 md:ml-0'}`}>
                {idx % 2 === 1 && (
                  <>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-sm font-semibold text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul className="space-y-2 text-sm">
                      {exp.achievements.map((achievement, achieveIdx) => (
                        <li key={achieveIdx} className="flex items-center">
                          <span className="mr-2 w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            ✓
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              
              {/* Mobile content (only visible on mobile) */}
              <div className="md:hidden ml-6">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-sm font-semibold text-primary">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <ul className="space-y-2 text-sm">
                  {exp.achievements.map((achievement, achieveIdx) => (
                    <li key={achieveIdx} className="flex items-center">
                      <span className="mr-2 w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        ✓
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 frosted-glass rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Continuous Professional Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-3">Certifications</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-2 w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    ✓
                  </span>
                  <span>AWS Certified Developer</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    ✓
                  </span>
                  <span>MongoDB Certified Developer</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    ✓
                  </span>
                  <span>React Advanced Patterns</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Ongoing Learning</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-2 w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    ✓
                  </span>
                  <span>Serverless Architecture</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    ✓
                  </span>
                  <span>Kubernetes & Microservices</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    ✓
                  </span>
                  <span>Progressive Web Apps</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
