import { useSectionAnimation } from '@/lib/animations';

const About = () => {
  const section = useSectionAnimation({ threshold: 0.1 });

  return (
    <section
      id="about"
      ref={section.ref}
      className={`py-24 relative ${section.className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image/Avatar Side */}
          <div className="w-full md:w-2/5 relative">
            <div className="relative z-10">
              <div className="aspect-square overflow-hidden rounded-3xl shadow-xl shadow-primary/10">
                <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center">
                  <span className="text-8xl font-bold text-primary/30">SP</span>
                </div>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl border border-primary/20 -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-3/5">
            <div className="inline-block mb-4">
              <div className="bg-primary/10 rounded-full px-4 py-1 text-xs font-medium text-primary">
                About Me
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Passionate Software Developer
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                With a strong background in full-stack development, I specialize in crafting seamless digital experiences. 
                From front-end designs with React to back-end architectures using Node.js and MongoDB, I bring ideas to life.
              </p>
              <p>
                I also have experience with Flutter for mobile development and Terraform for cloud infrastructure. 
                My approach combines technical expertise with a keen eye for user experience, ensuring that every 
                project I work on is not only functional but also intuitive and enjoyable to use.
              </p>
              <p>
                I'm constantly learning and exploring new technologies to stay at the forefront of the ever-evolving 
                tech landscape. This curiosity drives me to continuously improve and innovate in everything I do.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center font-medium text-primary hover-link"
              >
                Contact Me
                <svg 
                  className="ml-1 h-4 w-4" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center font-medium text-primary hover-link"
              >
                See My Work
                <svg 
                  className="ml-1 h-4 w-4" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
