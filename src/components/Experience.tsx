import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'AI Engineer/Developer',
      company: 'Humanitarians AI',
      location: 'Boston, MA',
      period: 'June 2025 - Current',
      type: 'Full-time',
    },
    {
      title: 'Data Analyst - Admissions Assistant',
      company: 'Northeastern University',
      location: 'Boston, MA',
      period: 'Sep 2024 - April 2025',
      type: 'Part-time',
    },
    {
      title: ' Data Engineer',
      company: 'Accenture - Logistics & Parcels Data',
      location: 'Pune, India',
      period: '2021 - 2023',
      type: 'Full-time',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Professional Experience
            </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building tomorrow's data infrastructure with cutting-edge
            technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-primary-500 to-primary-300 rounded-full hidden lg:block"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-16 lg:ml-20">
                {/* Timeline dot */}
                <div className="absolute -left-24 top-8 w-8 h-8 rounded-full bg-primary-500 border-4 border-white shadow-lg hidden lg:block z-10">
                  <div className="absolute inset-2 rounded-full bg-white"></div>
                </div>

                <div className="card p-8 hover:scale-[1.02] transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {exp.title}
                        </h3>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700">
                          {exp.type}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-700 mb-2">
                        {exp.company}
                      </h4>
                    </div>

                    <div className="flex flex-col lg:text-right text-gray-500 space-y-2">
                      <div className="flex items-center lg:justify-end space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center lg:justify-end space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
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

export default Experience;
