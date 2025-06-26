import React from 'react';
import {
  Github,
  ExternalLink,
  Flag,
  Database,
  Brain,
  BarChart3,
  Users,
} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Paddock Pal - Formula 1 Regulation Assistant 🏎️',
      description:
        'AI-powered F1 regulation assistant enabling semantic search, real-time data access, and scalable deployment across AWS.',
      tech: [
        'Python',
        'Streamlit',
        'FastAPI',
        'AWS EC2',
        'AWS S3',
        'Pinecone',
        'Snowflake',
        'PostgreSQL (RDS)',
        'Airflow',
        'Semantic Search',
        'LangChain',
        'Multi-Agent Systems',
      ],
      github: 'https://github.com/BigDataIA-Fall2024-TeamA5/Final-Project',
      icon: <Flag className="h-8 w-8" />,
      color: 'text-red-600',
      stats: { Scale: '190 PDFs', agents: '3+', accuracy: '70%' },
    },
    {
      title: 'End-to-End Data Pipeline',
      description:
        'Scalable data pipeline for real-time processing, transformation, and loading with comprehensive monitoring and 99.9% reliability.',
      tech: ['Apache Spark', 'Kafka', 'AWS', 'Docker', 'Python', 'Kubernetes'],
      github: 'https://github.com/aniket-afk/End-to-End-Data-Pipeline',
      icon: <Database className="h-8 w-8" />,
      color: 'text-green-600',
      stats: { throughput: '1M records', uptime: '98%', latency: '<5s' },
    },
    {
      title: 'Multi-Agent Document Vector Search',
      description:
        'Advanced document search system using vector embeddings and multi-agent architecture for intelligent information retrieval with 95% accuracy.',
      tech: ['Python', 'Vector DB', 'LangChain', 'FastAPI', 'Docker', 'Redis'],
      github:
        'https://github.com/aniket-afk/Multi-Agent-Document-Vector-Search',
      icon: <Brain className="h-8 w-8" />,
      color: 'text-purple-600',
      stats: { performance: '95%', scale: '90 PDFs', speed: '<100ms' },
    },
    {
      title: 'Hospital Data Analysis System',
      description:
        'Comprehensive healthcare analytics platform analyzing patient data, treatment outcomes, and operational efficiency for 500+ hospitals.',
      tech: [
        'Python',
        'Pandas',
        'PostgreSQL',
        'Tableau',
        'Apache Airflow',
        'AWS',
      ],
      github: 'https://github.com/aniket-afk/Hospital-Data-Analysis-System',
      icon: <BarChart3 className="h-8 w-8" />,
      color: 'text-blue-600',
      stats: { hospitals: '500+', insights: '40+', efficiency: '+30%' },
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Innovative data solutions spanning engineering, machine learning,
            and analytics platforms
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card p-8 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-2xl bg-gray-100 ${project.color}`}
                  >
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(project.stats).map(
                  ([key, value], statIndex) => (
                    <div
                      key={statIndex}
                      className="text-center p-3 bg-gray-50 rounded-xl"
                    >
                      <div className="text-lg font-bold text-gray-900 mb-1">
                        {value}
                      </div>
                      <div className="text-xs text-gray-600 capitalize">
                        {key}
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200 font-medium"
                >
                  <Github className="h-4 w-4" />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
