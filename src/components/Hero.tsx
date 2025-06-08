import React from "react";
import { Github, ArrowDown, Download } from "lucide-react";
import { Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    // You can replace this with actual resume file path
    const link = document.createElement("a");
    link.href = "public/Resume.pdf"; // Path to resume in public folder
    link.download = "Resume.pdf"; // File name for download
    link.click();
    console.log("Resume download initiated");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-12">
            {/* Unique VL Logo Design */}
            <div className="w-40 h-40 mx-auto mb-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full animate-spin"></div>
              <div className="absolute inset-1 bg-gradient-to-r from-gray-900 to-gray-800 rounded-full"></div>
              <div className="absolute inset-3 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20 rounded-full backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent transform group-hover:scale-110 transition-transform duration-300">
                    V
                  </div>
                  <div className="absolute -right-6 top-2 text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent transform group-hover:scale-110 transition-transform duration-300">
                    L
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent animate-fade-in">
            Vaibhav Lakhatariya
          </h1>

          <div className="mb-8">
            <p className="text-2xl md:text-3xl text-purple-400 font-semibold mb-4 animate-fade-in">
              Full Stack Developer
            </p>
            <p className="text-xl md:text-2xl text-gray-300 animate-fade-in">
              MERN Stack
            </p>
          </div>

          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Passionate about creating beautiful, responsive web applications
            with modern technologies. I bring ideas to life through clean code,
            innovative design, and exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in mb-12">
            <button
              onClick={handleResumeDownload}
              className="group px-5 py-4 bg-gradient-to-r from-cyan-700 to-blue-600 text-white rounded-full hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 font-semibold"
            >
              <span className="flex items-center gap-2">
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                My Resume
              </span>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-5 py-4 border-2 border-purple-500/50 text-white rounded-full hover:bg-purple-600/20 hover:border-purple-400 transition-all duration-300 hover:scale-105 font-semibold"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-8 animate-fade-in">
            <a
              href="https://github.com/Vaibhavlakhatariya07"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full hover:from-purple-600/40 hover:to-blue-600/40 transition-all duration-300 hover:scale-110 border border-purple-500/30"
            >
              <Github className="w-8 h-8 text-purple-400 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhav-lakhatariya/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gradient-to-r from-blue-600/10 to-primary/10 rounded-xl hover:from-blue-600/20 hover:to-primary/20 transition-all duration-300 hover:scale-110 border border-blue-600/20 hover:border-blue-600/40"
            >
              <Linkedin className="w-8 h-8 text-purple-400 group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
