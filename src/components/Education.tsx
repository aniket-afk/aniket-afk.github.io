import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Information Systems',
      school: 'Northeastern University',
      location: 'Boston, MA',
      period: '2024 - 2026',
      status: 'Completed',
      coursework: [
        'Big Data Systems & Analytics',
        'Cloud Computing',
        'Generative AI with LLM',
        'Data Science Tool & Methods',
        'Big Data Governance',
      ],
    },
    {
      degree: 'Bachelor of Engineering',
      school: 'University of Pune',
      location: 'India',
      period: '2018 - 2022',
      status: 'Completed',
      coursework: [
        'Data Structures and Algorithms',
        'Database Management Systems',
        'Software Engineering',
        'Statistics and Probability',
        'Computer Networks',
        'Operating Systems',
      ],
    },
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Academic foundation in data science and engineering
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="card p-8 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                <div className="flex items-start space-x-4 mb-6 lg:mb-0">
                  <div className="p-4 rounded-2xl bg-primary-100 text-primary-600">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-xl font-semibold text-gray-700 mb-2">
                      {edu.school}
                    </h4>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-yellow-500" />
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          edu.status === 'In Progress'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-green-100 text-green-700'
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col lg:text-right text-gray-500 space-y-2">
                  <div className="flex items-center lg:justify-end space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{edu.period}</span>
                  </div>
                  <div className="flex items-center lg:justify-end space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Coursework */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-6">
                  Relevant Coursework:
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {edu.coursework.map((course, courseIndex) => (
                    <div
                      key={courseIndex}
                      className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                      <span className="text-gray-700 text-sm font-medium">
                        {course}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
