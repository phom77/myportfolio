import {  Github, Keyboard, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-light border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
              Made  by{" "}
              <span className="text-gradient-primary font-semibold">Bùi Duy Khánh</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              © {currentYear} All rights reserved
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/phom77"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-card border-2 border-lime hover:bg-lime/10 transition-all duration-300 hover:scale-110 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-lime" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/khanh-duy-764bb5362/"
              className="p-2 rounded-lg bg-card border-2 border-cyan hover:bg-cyan/10 transition-all duration-300 hover:scale-110 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-cyan" />
            </a>

            <a
              href="https://leetcode.com/u/23120281/"
              className="p-2 rounded-lg bg-card border-2 border-cyan hover:bg-cyan/10 transition-all duration-300 hover:scale-110 group"
              aria-label="LinkedIn"
            >
              <Keyboard className="w-5 h-5 text-cyan" />
            </a>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
