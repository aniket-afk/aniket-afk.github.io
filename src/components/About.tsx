import React from 'react';
import { Code, Database, Brain, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Data Engineering',
      description:
        'Building robust, scalable data pipelines that process terabytes of data daily',
      color: 'text-blue-600',
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Machine Learning',
      description:
        'Developing intelligent models that drive business decisions and automate processes',
      color: 'text-purple-600',
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Software Architecture',
      description:
        'Creating scalable applications and distributed systems for enterprise solutions',
      color: 'text-green-600',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Analytics & BI',
      description:
        'Transforming complex data into actionable insights and strategic recommendations',
      color: 'text-orange-600',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about transforming data into meaningful insights that
            drive business success
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a{' '}
              <span className="font-semibold text-primary-600">
                passionate Data Engineer
              </span>{' '}
              and Analytics Professional with expertise in designing and
              implementing
              <span className="font-semibold text-primary-600">
                {' '}
                scalable data solutions
              </span>{' '}
              that drive business transformation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey spans across{' '}
              <span className="font-semibold text-primary-600">
                modern data stack technologies
              </span>
              , cloud platforms, and machine learning frameworks, enabling
              organizations to unlock the true potential of their data.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently pursuing my{' '}
              <span className="font-semibold text-primary-600">
                Master's degree
              </span>{' '}
              while continuously innovating in the evolving data landscape, I'm
              passionate about leveraging cutting-edge technology to solve
              complex problems and create meaningful impact.
            </p>
          </div>
          
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Aniket Patole - Professional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;