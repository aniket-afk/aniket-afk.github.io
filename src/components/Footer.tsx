import React from 'react';
import { Github, Linkedin, Mail, Heart, Code, Database, Brain } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/aniket-afk',
      label: 'GitHub',
      gradient: 'from-gray-500 to-gray-700'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://www.linkedin.com/in/aniketpatole/',
      label: 'LinkedIn',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: 'mailto:aniketpatole.works@gmail.com',
      label: 'Email',
      gradient: 'from-emerald-500 to-emerald-700'
    }
  ];

  const skills = [
    { icon: <Database className="h-4 w-4" />, name: 'Data Engineering' },
    { icon: <Brain className="h-4 w-4" />, name: 'Machine Learning' },
    { icon: <Code className="h-4 w-4" />, name: 'Analytics' }
  ];

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg font-mono">AP</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-display">Aniket Patole</h3>
                <p className="text-gray-400 text-sm">Data Engineer & Analytics Professional</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-4 text-sm text-gray-400">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-1">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl glass hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
            
            <div className="text-gray-400 text-sm">
              <p>Available for new opportunities</p>
              <p className="text-emerald-400 font-semibold">Boston, MA</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2 text-sm">
            © {currentYear} Aniket Patole. Crafted with
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            using React, TypeScript & Modern Web Technologies
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Transforming data into insights, one pipeline at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;