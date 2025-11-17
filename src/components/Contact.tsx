import { useState } from "react";
import { Mail, Github, Send, Keyboard, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      toast.error("Failed to send message. Please try again later.");
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-magenta/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-secondary">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's work together on your next project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8 animate-fade-in-left">
            {/* Contact methods */}
            <div className="space-y-4">
              <a
                className="flex items-center gap-4 p-4 bg-card border-2 border-cyan rounded-xl hover:bg-cyan/10 transition-all duration-300 hover:scale-105 glow-cyan group"
              >
                <div className="p-3 bg-cyan/10 rounded-lg group-hover:bg-cyan/20 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="text-foreground font-medium">bdkhanh2005@gmail.com</div>
                </div>
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/khanh-duy-764bb5362/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border-2 border-magenta rounded-xl hover:bg-magenta/10 transition-all duration-300 hover:scale-105 glow-magenta group"
              >
                <div className="p-3 bg-magenta/10 rounded-lg group-hover:bg-magenta/20 transition-colors duration-300">
                  <Linkedin className="w-6 h-6 text-magenta" /> 
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">LinkedIn</div>
                  <div className="text-foreground font-medium">linkedin.com/in/KhanhDuy</div> 
                </div>
              </a>
              <a
                href="https://github.com/phom77"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border-2 border-lime rounded-xl hover:bg-lime/10 transition-all duration-300 hover:scale-105 glow-lime group"
              >
                <div className="p-3 bg-lime/10 rounded-lg group-hover:bg-lime/20 transition-colors duration-300">
                  <Github className="w-6 h-6 text-lime" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">GitHub</div>
                  <div className="text-foreground font-medium">github.com/phom77</div>
                </div>
              </a>
              {/* LeetCode Link */}
              <a
                href="https://leetcode.com/u/23120281/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border-2 border-cyan rounded-xl hover:bg-cyan/10 transition-all duration-300 hover:scale-105 glow-cyan group"
              >
                <div className="p-3 bg-cyan/10 rounded-lg group-hover:bg-cyan/20 transition-colors duration-300">
                  <Keyboard className="w-6 h-6 text-cyan" /> 
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">LeetCode</div> 
                  <div className="text-foreground font-medium">Bùi Duy Khánh - 23120281</div> 
                </div>
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-6 bg-card border-2 border-border rounded-2xl p-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-background border-2 border-border focus:border-cyan focus:ring-0 transition-colors duration-300"
                  placeholder="Le Van A"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-background border-2 border-border focus:border-cyan focus:ring-0 transition-colors duration-300"
                  placeholder="levana@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-background border-2 border-border focus:border-cyan focus:ring-0 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan to-magenta hover:from-magenta hover:to-cyan text-white font-semibold py-6 rounded-lg transition-all duration-300 hover:scale-105 glow-cyan"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
