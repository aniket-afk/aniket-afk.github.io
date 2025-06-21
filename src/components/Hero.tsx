import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import profileImage from '../Profile.jpeg';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src={profileImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6 animate-slide-up">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              Aniket Patole
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light animate-slide-up">
            Data Engineer & Analytics Professional
          </p>

          {/* Description */}
          <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            I transform raw data into actionable insights through cutting-edge
            engineering solutions, advanced machine learning, and scalable
            analytics platforms. Currently pursuing my Master's degree while
            building the future of data intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
            <button
              onClick={scrollToNext}
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-200 font-medium"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-slide-up">
            {[
              {
                icon: <Github className="w-6 h-6" />,
                href: 'https://github.com/aniket-afk',
                label: 'GitHub',
              },
              {
                icon: <Linkedin className="w-6 h-6" />,
                href: 'https://www.linkedin.com/in/aniketpatole/',
                label: 'LinkedIn',
              },
              {
                icon: <Mail className="w-6 h-6" />,
                href: 'mailto:aniketpatole.works@gmail.com',
                label: 'Email',
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-all duration-200 hover:scale-105"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
