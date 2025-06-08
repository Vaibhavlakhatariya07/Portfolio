import React, { useState } from "react";
import { Github, User, Send, Mail, MapPin } from "lucide-react";
import { Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-accent/30 via-primary/5 to-purple-600/10 relative overflow-hidden"
    >
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Enhanced Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a project in mind or just want to
                chat about technology, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="group flex items-center space-x-6 p-6 bg-gradient-to-r from-primary/5 to-blue-600/5 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="p-4 bg-gradient-to-r from-primary to-blue-600 rounded-xl text-white group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-muted-foreground">
                    vaibhavlakhatariya07@gmail.com
                  </p>
                </div>
              </div>

              <div className="group flex items-center space-x-6 p-6 bg-gradient-to-r from-green-600/5 to-emerald-600/5 rounded-2xl border border-green-600/10 hover:border-green-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-600/10">
                <div className="p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Location</h4>
                  <p className="text-muted-foreground">Bhavnagar, Gujarat</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-bold text-lg mb-6">
                Follow me on social media
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Vaibhavlakhatariya07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-xl hover:from-primary/20 hover:to-blue-600/20 transition-all duration-300 hover:scale-110 border border-primary/20 hover:border-primary/40"
                >
                  <Github className="w-6 h-6 text-primary group-hover:text-blue-600 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vaibhav-lakhatariya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-gradient-to-r from-blue-600/10 to-primary/10 rounded-xl hover:from-blue-600/20 hover:to-primary/20 transition-all duration-300 hover:scale-110 border border-blue-600/20 hover:border-blue-600/40"
                >
                  <Linkedin className="w-6 h-6 text-blue-600 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-600 to-blue-600 rounded-2xl opacity-20 blur-sm"></div>
            <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-foreground"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background/80 backdrop-blur-sm border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-foreground"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background/80 backdrop-blur-sm border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-foreground"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/80 backdrop-blur-sm border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
                    placeholder="Project inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background/80 backdrop-blur-sm border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none hover:border-primary/50"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full px-8 py-4 bg-gradient-to-r from-primary to-blue-900 text-white rounded-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02] font-semibold flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
