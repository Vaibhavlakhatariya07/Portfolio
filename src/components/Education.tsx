
import React from 'react';
import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      level: "Gyanmanjari Institute of Technology(GTU)",
      field: "Bachelor Of Engineering | Information Technology",
      year: "2022 - 2026",
      grade: "7.83 CGPA",
      icon: <GraduationCap className="w-8 h-8" />,
      gradient: "from-blue-600 to-purple-600",
      bgGradient: "from-blue-600/5 to-purple-600/5",
      borderGradient: "from-blue-600/20 to-purple-600/20"
    },
    {
      level: "Shree GyanGURU Vidhyapith",
      field: "Class XII (Science Stream)",
      year: "2020 - 2022",
      grade: "50%",
      icon: <BookOpen className="w-8 h-8" />,
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-600/5 to-pink-600/5",
      borderGradient: "from-purple-600/20 to-pink-600/20"
    },
    {
      level: "Shree Swaminarayan Gurukul Vidhyalaya",
      field: "Class X",
      year: "2019 - 2020",
      grade: "65%",
      icon: <Award className="w-8 h-8" />,
      gradient: "from-primary to-blue-600",
      bgGradient: "from-primary/5 to-blue-600/5",
      borderGradient: "from-primary/20 to-blue-600/20"
    }
  ];

  return (
    <section id="education" className="py-24 bg-gradient-to-br from-background via-accent/20 to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-600/10 to-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My academic journey and educational background
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {educationData.map((education, index) => (
              <div key={index} className="group relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 to-transparent"></div>
                
                <div className={`relative bg-gradient-to-br ${education.bgGradient} backdrop-blur-sm rounded-2xl p-8 border border-transparent bg-clip-padding hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group-hover:scale-[1.02]`}>
                  {/* Gradient border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${education.borderGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                  <div className="absolute inset-0.5 bg-card rounded-2xl -z-10"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Icon */}
                    <div className="relative">
                      <div className={`p-4 bg-gradient-to-r ${education.gradient} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {education.icon}
                      </div>
                      {/* Timeline dot */}
                      <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-primary to-purple-600 rounded-full border-4 border-background"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className={`text-2xl font-bold bg-gradient-to-r ${education.gradient} bg-clip-text text-transparent`}>
                          {education.level}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{education.year}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-lg font-semibold text-foreground">
                          {education.field}
                        </p>
                        <p className="text-muted-foreground">
                          {/* {education.institution} */}
                        </p>
                      </div>
                      
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-full border border-primary/20">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="font-medium text-primary">{education.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
