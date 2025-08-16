import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Microservices Platform",
      description: "Built a scalable e-commerce platform using Spring Boot microservices, Docker, and Kubernetes. Features include user management, product catalog, order processing, and payment integration.",
      technologies: ["Java", "Spring Boot", "Microservices", "Docker", "PostgreSQL", "Redis"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Real-time Chat Application",
      description: "Developed a real-time messaging application with WebSocket support, user authentication, and file sharing capabilities using Spring Boot and React.",
      technologies: ["Java", "Spring Boot", "WebSocket", "React", "TypeScript", "MongoDB"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Task Management System",
      description: "Created a comprehensive project management tool with team collaboration features, real-time updates, and analytics dashboard.",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "WebSocket", "AWS"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Banking API System",
      description: "Designed and implemented secure RESTful APIs for banking operations with robust authentication, transaction processing, and audit logging.",
      technologies: ["Java", "Spring Security", "JPA", "PostgreSQL", "JWT", "Docker"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Analytics Dashboard",
      description: "Built a data visualization platform that processes and displays real-time analytics with interactive charts and customizable reports.",
      technologies: ["Java", "Spring Boot", "React", "D3.js", "Apache Kafka", "Elasticsearch"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "IoT Device Management",
      description: "Developed a system for managing IoT devices with real-time monitoring, device configuration, and data collection capabilities.",
      technologies: ["Java", "Spring Boot", "MQTT", "InfluxDB", "React", "Docker"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in Java full stack development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:scale-[1.02]"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  Code
                </Button>
                <Button size="sm" className="flex items-center gap-2 bg-gradient-primary">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/30 border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:scale-105"
              >
                <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-muted-foreground">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 p-2">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 p-2">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
