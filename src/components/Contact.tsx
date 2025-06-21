import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, Send, MessageCircle, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:aniketpatole.works@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'aniketpatole.works@gmail.com',
      href: 'mailto:aniketpatole.works@gmail.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      value: 'Boston, MA',
      href: '#',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/aniketpatole',
      href: 'https://www.linkedin.com/in/aniketpatole/',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: 'GitHub',
      value: 'github.com/aniket-afk',
      href: 'https://github.com/aniket-afk',
      gradient: 'from-gray-500 to-gray-700'
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-6">
            <MessageCircle className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">Let's Connect</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-display">
            Ready to Build
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Something Amazing?
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12 rounded-full"></div>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can work together on your next 
            <span className="text-purple-400 font-semibold"> data transformation project</span>
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass rounded-3xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
                <Sparkles className="h-8 w-8 text-purple-400" />
                <span>Get In Touch</span>
              </h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="group flex items-center space-x-4 p-4 rounded-2xl glass border border-white/5 hover:border-white/20 transition-all duration-300">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${method.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                          style={{backgroundImage: `linear-gradient(135deg, ${method.gradient.split(' ')[1]}, ${method.gradient.split(' ')[3]})`}}>
                        {method.title}
                      </h4>
                      {method.href !== '#' ? (
                        <a
                          href={method.href}
                          target={method.href.startsWith('mailto:') ? '_self' : '_blank'}
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors duration-200 break-all"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{method.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass rounded-3xl p-8 border border-white/10">
              <h4 className="text-xl font-semibold text-white mb-6">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 font-mono">24/7</div>
                  <div className="text-sm text-gray-400">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 font-mono">100%</div>
                  <div className="text-sm text-gray-400">Project Success</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400 font-mono">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400 font-mono">50+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-3xl p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-purple-500 focus:outline-none transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-purple-500 focus:outline-none transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-purple-500 focus:outline-none transition-all duration-200 text-white placeholder-gray-400"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-purple-500 focus:outline-none transition-all duration-200 text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="group relative w-full py-4 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Send Message</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;