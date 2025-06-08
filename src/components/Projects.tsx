
import React from 'react';
import { Github, Link as LinkIcon, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://raw.githubusercontent.com/IsAmitprajapati/BlinkIt-Clone-Full-Stack-Ecommerce/refs/heads/main/Thumnails.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/Vaibhavlakhatariya07/Binkeyit-Full-Stack-Ecommerce.git",
      live: "https://binkeyit-full-stack-ydrn.vercel.app/",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "AI-Powered Code Reviewer",
      description: "An AI-powered code reviewer that enhances code quality, consistency, and security through intelligent analysis and real-time feedback.",
      image: "public/brave_screenshot_ai-powered-code-reviewer-rust.vercel.app.png",
      technologies: ["React", "Node.js", "Express.js", "Gemini API"],
      github: "https://github.com/Vaibhavlakhatariya07/AI-Powered-Code-Reviewer.git",
      live: "https://ai-powered-code-reviewer-kohl.vercel.app/",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "E-learning platform ",
      description: "A responsive weather dashboard that provides current weather conditions, forecasts, and weather maps using external APIs.",
      image: "public/Coursera.7b2b1bf37cad31aa5c79.webp",
      technologies: ["React", "Tailwind CSS", "Node.js", "mongodb"],
      github: "https://github.com/Vaibhavlakhatariya07/E-learning-platform.git",
      // live: "",
      gradient: "from-green-500 to-blue-600"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations and dark mode support.",
      image: "public/brave_screenshot_localhost.png",
      technologies: ["React", "Tailwind CSS",],
      github: "https://github.com/Vaibhavlakhatariya07/Portfolio.git",
      gradient: "from-emerald-500 to-green-600"
    },
    {
      title: "Employee Management System",
      description: "Developed an Employee Management System to efficiently handle employee records, roles, and operations through a user-friendly interface.",
      image: "https://leapmax.ai/wp-content/uploads/2024/10/employee-management-system.webp",
      technologies: ["React", "Tailwind CSS"],
      github: "https://github.com/Vaibhavlakhatariya07/Employee_Management_System.git",
      // live: "",
      gradient: "from-pink-600 to-purple-600"
    },
    {
      title: "Blog Website",
      description: "Developed a blog website enabling users to read, create, and manage posts with a clean and intuitive interface..",
      image: "https://images04.nicepage.com/feature/461183/blog.jpg",
      technologies: ["React", "Tailwind css"],
      github: "https://github.com/Vaibhavlakhatariya07/Blog_website.git",
      // live: "",
      gradient: "from-emerald-500 to-green-600"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-background via-primary/5 to-accent/30 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-primary/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <Sparkles className="w-8 h-8 text-purple-600" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A selection of projects that showcase my skills and experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              {/* Enhanced gradient border */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 blur-sm`}></div>
              
              <div className="relative bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className={`text-xl font-bold group-hover:bg-gradient-to-r group-hover:${project.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-10 text-primary rounded-full text-xs font-medium border border-primary/20 hover:border-primary/40 transition-colors`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-lg hover:from-primary/20 hover:to-purple-600/20 transition-all duration-300 border border-primary/20 hover:border-primary/40"
                    >
                      <Github className="w-4 h-4 text-primary group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-primary">Code</span>
                    </a>
                    
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600/10 to-primary/10 rounded-lg hover:from-purple-600/20 hover:to-primary/20 transition-all duration-300 border border-purple-600/20 hover:border-purple-600/40"
                    >
                      <LinkIcon className="w-4 h-4 text-purple-600 group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-purple-600">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
