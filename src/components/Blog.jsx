import { useSectionAnimation, useStaggeredAnimation } from '@/lib/animations';

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable APIs with Node.js and Express",
    excerpt: "Learn how to create robust, high-performance APIs that can handle millions of requests using Node.js and Express.",
    date: "May 15, 2023",
    category: "Backend Development",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "React Performance Optimization Techniques",
    excerpt: "Discover practical strategies to boost your React application's performance and create smoother user experiences.",
    date: "April 3, 2023",
    category: "Frontend Development",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Getting Started with AWS Lambda and Serverless",
    excerpt: "A beginner's guide to building serverless applications with AWS Lambda and the Serverless framework.",
    date: "March 12, 2023",
    category: "Cloud Computing",
    readTime: "10 min read"
  }
];

const Blog = () => {
  const section = useSectionAnimation({ threshold: 0.1 });
  const staggered = useStaggeredAnimation({ threshold: 0.1 });

  return (
    <section 
      id="blog" 
      ref={section.ref}
      className={`py-24 ${section.className}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="bg-primary/10 rounded-full px-4 py-1 text-xs font-medium text-primary">
              Blog & Insights
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest Articles
          </h2>
          
          <p className="max-w-2xl mx-auto text-muted-foreground">
            I share my thoughts and insights on software development, career growth, and tech trends. 
            Check out my latest articles below.
          </p>
        </div>
        
        <div 
          ref={staggered.ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${staggered.className}`}
        >
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="stagger-item group"
            >
              <a 
                href="#" 
                className="block h-full frosted-glass rounded-2xl overflow-hidden shadow-lg shadow-primary/5 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="inline-block bg-primary/10 rounded-full px-3 py-1 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                    <span className="text-muted-foreground">{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {post.readTime}
                    </span>
                    
                    <span 
                      className="text-sm font-medium text-primary inline-flex items-center"
                    >
                      Read More
                      <svg 
                        className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-8 py-3 rounded-full bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-all hover:-translate-y-0.5"
          >
            View All Articles
            <svg 
              className="ml-2 h-4 w-4" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
