import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Server } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Backend Development",
      description: "Expert in Java, Spring Boot, Microservices, and RESTful API design"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Proficient in SQL, NoSQL, JPA/Hibernate, and database optimization"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Frontend Technologies",
      description: "Modern React, TypeScript, HTML5, CSS3, and responsive design"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "DevOps & Cloud",
      description: "Docker, Kubernetes, AWS, CI/CD pipelines, and cloud architecture"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate Java Full Stack Developer with 5+ years of experience building 
            enterprise-grade applications. I love turning complex problems into simple, 
            beautiful, and intuitive solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              Started my journey in software development with a Computer Science degree, 
              specializing in Java ecosystem. Over the years, I've worked with startups 
              and enterprise companies, delivering scalable solutions that serve millions of users.
            </p>
            <p className="text-muted-foreground mb-6">
              I'm passionate about clean code, best practices, and staying updated with 
              the latest technologies in the Java and web development space.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "AWS", "Docker", "Microservices"].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-secondary rounded-2xl shadow-card relative overflow-hidden">
              <div className="absolute inset-4 bg-background/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <Code className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold">5+ Years</p>
                  <p className="text-muted-foreground">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-secondary border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:scale-105"
            >
              <div className="text-primary mb-4">{skill.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{skill.title}</h4>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;