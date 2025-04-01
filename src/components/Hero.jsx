import { useSectionAnimation } from '@/lib/animations';

const Hero = () => {
  const section = useSectionAnimation({ threshold: 0.1 });

  return (
    <section 
      ref={section.ref}
      className={`min-h-screen flex items-center justify-center pt-16 relative overflow-hidden ${section.className}`}
      style={{ 
        background: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0) 70%)"
      }}
    >
      {/* Abstract geometric decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[25%] -left-20 w-64 h-64 rounded-full bg-primary/5 animate-float"></div>
        <div className="absolute bottom-[15%] right-[5%] w-96 h-96 rounded-full bg-primary/5 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[60%] left-[10%] w-48 h-48 rounded-full bg-primary/5 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-6">
            <div className="frosted-glass rounded-full px-6 py-2 text-sm font-medium text-primary animate-fade-in">
              Software Developer
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Sagar Poudel
          </h1>
          
          <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              A passionate software developer with expertise in MERN stack, Python, cloud computing, and full-stack development. 
              I thrive on building scalable, user-friendly applications that solve real-world problems.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#projects" 
                className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-full bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-all hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground/50 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
