import React from 'react';
import { Code, Cloud, Database, Brain, BarChart, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-5 h-5" />,
      color: 'text-blue-600',
      skills: ['Python', 'SQL', 'R', 'Java', 'Scala', 'JavaScript']
    },
    {
      title: 'Big Data Technologies',
      icon: <Database className="w-5 h-5" />,
      color: 'text-purple-600',
      skills: ['Apache Spark', 'Hadoop', 'Kafka', 'Airflow', 'Databricks', 'Snowflake']
    },
    {
      title: 'Cloud Platforms',
      icon: <Cloud className="w-5 h-5" />,
      color: 'text-green-600',
      skills: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes']
    },
    {
      title: 'Machine Learning',
      icon: <Brain className="w-5 h-5" />,
      color: 'text-pink-600',
      skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'MLflow', 'Pandas', 'NumPy']
    },
    {
      title: 'Databases',
      icon: <Wrench className="w-5 h-5" />,
      color: 'text-orange-600',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB']
    },
    {
      title: 'Analytics & Visualization',
      icon: <BarChart className="w-5 h-5" />,
      color: 'text-indigo-600',
      skills: ['Tableau', 'Power BI', 'Plotly', 'Matplotlib', 'Seaborn', 'D3.js']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of cutting-edge technologies for building next-generation data solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card p-6 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg bg-gray-100 ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;