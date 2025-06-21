import React from 'react';
import { Award, ExternalLink, Calendar, Shield } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: 'AWS Certified Data Engineer – Associate',
      issuer: 'AWS',
      date: 'May 2028',
      credentialId: 'feed314e248046c1838d06edfaed4a62',
      link: '',
      description:
        'Validates skills in building and managing data pipelines using Databricks platform.',
      verified: true,
    },
    {
      name: 'Databricks Certified Data Engineer Associate',
      issuer: 'Databricks',
      date: 'May 202',
      credentialId: '1caee895-c0cc-4a06-9adc-135bc34c3f85',
      link: 'https://credentials.databricks.com/1caee895-c0cc-4a06-9adc-135bc34c3f85#acc.1xiaFqdR',
      description:
        'Validates skills in building and managing data pipelines using Databricks platform.',
      verified: true,
    },
    {
      name: 'Microsoft Certified: Azure Data Engineer Associate',
      issuer: 'Microsoft',
      date: '2024',
      credentialId: '7579a8be-a6b2-4117-aa1f-5665230e0ba5',
      link: 'https://www.credly.com/badges/7579a8be-a6b2-4117-aa1f-5665230e0ba5/public_url',
      description:
        'Demonstrates expertise in Azure data services and data engineering practices.',
      verified: true,
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional certifications validating expertise in data engineering
            and cloud technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card p-8 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-2xl bg-yellow-100 text-yellow-600">
                    <Award className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {cert.name}
                      </h3>
                      {cert.verified && (
                        <div className="flex items-center space-x-1 px-2 py-1 rounded-full bg-green-100 border border-green-200">
                          <Shield className="h-3 w-3 text-green-600" />
                          <span className="text-xs font-semibold text-green-700">
                            Verified
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>Expires: {cert.date}</span>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {cert.description}
                </p>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-sm text-gray-600 mb-1">
                    <strong>Credential ID:</strong>
                  </div>
                  <div className="font-mono text-sm text-gray-800 break-all">
                    {cert.credentialId}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-500 text-white hover:bg-primary-600 transition-all duration-200 font-medium"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>View Credential</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
