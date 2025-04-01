import { useState } from 'react';
import { useSectionAnimation, useStaggeredAnimation } from '@/lib/animations';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: "Dhurbatara Quiz Project",
    description: "An online quiz platform for educational institutions with real-time feedback, analytics, and customizable question banks.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Transaction Management System",
    description: "A real-time finance tracker for managing income and expenses with visualization and budget planning features.",
    technologies: ["React", "Redux", "Node.js", "MySQL"],
    category: "Full Stack"
  },
  {
    id: 3,
    title: "Movie Search App",
    description: "A React-based app using the OMDB API for real-time movie searches with responsive design and favorites management.",
    technologies: ["React", "API Integration", "CSS3", "JavaScript"],
    category: "Frontend"
  },
  {
    id: 4,
    title: "Library Management System",
    description: "A Python-based system for managing library records including book tracking, member management, and fine calculations.",
    technologies: ["Python", "Django", "PostgreSQL", "Bootstrap"],
    category: "Backend"
  },
  {
    id: 5,
    title: "Personal Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with modern design principles and animations.",
    technologies: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    category: "Frontend"
  },
  {
    id: 6,
    title: "Cloud Resource Manager",
    description: "A tool for managing and optimizing cloud resources across multiple providers with cost analysis features.",
    technologies: ["Terraform", "AWS", "Node.js", "React"],
    category: "DevOps"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const section = useSectionAnimation({ threshold: 0.1 });
  const staggered = useStaggeredAnimation({ threshold: 0.1 });
  
  const categories = ["All", "Frontend", "Backend", "Full Stack", "DevOps"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section 
      id="projects" 
      ref={section.ref}
      className={`py-24 ${section.className}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="bg-primary/10 rounded-full px-4 py-1 text-xs font-medium text-primary">
              Projects
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Notable Work
          </h2>
          
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Here are some of my noteworthy projects that showcase my skills and experience.
            Each project reflects my dedication to quality and attention to detail.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-all",
                  filter === category
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-secondary hover:bg-secondary/70"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div 
          ref={staggered.ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${staggered.className}`}
        >
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="stagger-item group"
            >
              <div className="h-full frosted-glass rounded-2xl overflow-hidden shadow-lg shadow-primary/5 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-2">
                    <span className="inline-block bg-primary/10 rounded-full px-3 py-1 text-xs font-medium text-primary">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="inline-block bg-secondary rounded-full px-3 py-1 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <a 
                        href="#" 
                        className="text-sm font-medium text-primary hover-link inline-flex items-center"
                      >
                        View Project
                        <svg 
                          className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </a>
                      
                      <a 
                        href="#" 
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/yourgithub" 
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center px-8 py-3 rounded-full bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-all hover:-translate-y-0.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
