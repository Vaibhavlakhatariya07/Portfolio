
import React from 'react';
import { Code, User, Lightbulb, Target, Heart, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-accent/30 via-primary/5 to-purple-600/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-600/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate developer creating innovative digital solutions with modern technologies
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
               I’m Vaibhav Lakhatariya, currently pursuing a B.E. in Information Technology at Gyanmanjri Institute of Technology (GTU). I’m deeply passionate about Full Stack Web Development and love working with technologies like MongoDB, Express.js, React.js, and Node.js to build modern, responsive web applications.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
               In 2023, I was honored to be a Grand Finalist in the SSIP Hackathon, where I collaborated on innovative solutions to real-world problems. That experience strengthened my skills in team collaboration, problem-solving, and rapid development. I'm always excited to explore new technologies, improve my craft, and contribute to impactful projects.


              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-600/5 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="p-3 bg-gradient-to-r from-primary to-purple-600 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Clean Code</h3>
                <p className="text-sm text-muted-foreground">Writing maintainable and scalable code</p>
              </div>
              
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-purple-600/5 to-primary/5 border border-purple-600/10 hover:border-purple-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-600/10">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-primary rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">User Focused</h3>
                <p className="text-sm text-muted-foreground">Creating intuitive user experiences</p>
              </div>
              
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-blue-600/5 to-primary/5 border border-blue-600/10 hover:border-blue-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-primary rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Goal Oriented</h3>
                <p className="text-sm text-muted-foreground">Delivering projects on time and budget</p>
              </div>
              
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-blue-600/5 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="p-3 bg-gradient-to-r from-primary to-blue-600 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Passionate</h3>
                <p className="text-sm text-muted-foreground">Love what I do every day</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-purple-600/20 to-blue-600/20 p-8 backdrop-blur-sm">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm flex items-center justify-center border border-primary/20">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="p-6 bg-gradient-to-r from-primary to-purple-600 rounded-full mb-6 inline-block">
                      <Lightbulb className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                      Innovation Driven
                    </div>
                    <div className="text-muted-foreground">
                      Always learning new technologies and pushing boundaries
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
