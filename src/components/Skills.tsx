
import React from 'react';
import { Monitor, Server, Wrench, Code2 } from 'lucide-react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Monitor className="w-8 h-8" />,
      gradient: "from-blue-500 via-blue-600 to-cyan-700",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      skills: [
        { name: "HTML", symbol: <SiHtml5 className="w-8 h-8 text-orange-500" /> },
        { name: "CSS", symbol: <SiCss3 className="w-8 h-8 text-blue-500" /> },
        { name: "JavaScript", symbol: <SiJavascript className="w-8 h-8 text-yellow-400" /> },
        { name: "React.js", symbol: <SiReact className="w-8 h-8 text-cyan-400" /> },
        { name: "Bootstrap", symbol: <SiBootstrap className="w-8 h-8 text-purple-500" /> },
        { name: "Tailwind CSS", symbol: <SiTailwindcss className="w-8 h-8 text-teal-400" /> },
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-8 h-8" />,
       gradient: "from-blue-500 via-blue-600 to-cyan-700",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      skills: [
        { name: "Node.js", symbol: <SiNodedotjs className="w-8 h-8 text-green-500" /> },
        { name: "Express.js", symbol: <SiExpress className="w-8 h-8 text-gray-300" /> },
        { name: "MongoDB", symbol: <SiMongodb className="w-8 h-8 text-green-600" /> },
        { name: "MySQL", symbol: <SiMysql className="w-8 h-8 text-blue-400" /> },
      ]
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="w-8 h-8" />,
       gradient: "from-blue-500 via-blue-600 to-cyan-700",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      skills: [
        { name: "Git", symbol: <SiGit className="w-8 h-8 text-orange-500" /> },
        { name: "GitHub", symbol: <SiGithub className="w-8 h-8 text-white" /> },
        { name: "VS Code", symbol: "💻", color: "text-blue-400" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-300 to-blue-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Technologies I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group relative">
              {/* Enhanced animated gradient border */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-2xl opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 blur-sm animate-pulse`}></div>
              
              <div className={`relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 ${category.bgGradient} backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 group-hover:shadow-purple-500/20`}>
                <div className="flex items-center justify-center mb-8">
                  <div className={`p-5 rounded-2xl bg-gradient-to-r ${category.gradient} text-white shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                </div>
                <h3 className={`text-3xl font-bold mb-10 text-center bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill relative">
                      {/* Enhanced skill card */}
                      <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-5 border border-gray-600/30 hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-xl group-hover/skill:shadow-purple-500/20">
                        <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover/skill:opacity-10 rounded-xl transition-all duration-300`}></div>
                        
                        <div className="relative flex flex-col items-center space-y-3">
                          <div className="text-4xl group-hover/skill:scale-110 transition-transform duration-300">
                            {skill.symbol}
                          </div>
                          <span className={`text-sm font-bold text-center ${skill.color} group-hover/skill:text-white transition-colors duration-300`}>
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced decorative elements */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
            <Code2 className="w-6 h-6 text-purple-400" />
            <span className="text-lg font-semibold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Always learning new technologies
            </span>
            <Code2 className="w-6 h-6 text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
