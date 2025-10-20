import React from 'react';
import { Award, Cloud, Database, Settings, Code, Shield, Container, Globe, Layers } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect Associate',
      icon: <Cloud className="w-8 h-8" />,
      description: 'Design and deploy scalable systems on AWS',
      level: 'Associate',
      color: 'from-orange-400 to-orange-600'
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      icon: <Shield className="w-8 h-8" />,
      description: 'Foundational understanding of AWS Cloud',
      level: 'Foundational',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'AWS Certified SysAdmin Associate',
      icon: <Settings className="w-8 h-8" />,
      description: 'Deploy, manage, and operate systems on AWS',
      level: 'Associate',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'AWS Certified Developer - Associate',
      icon: <Code className="w-8 h-8" />,
      description: 'Develop and maintain applications on AWS',
      level: 'Associate',
      color: 'from-purple-400 to-purple-600',
      expired: true
    },
    {
      title: 'AWS Certified Data Engineer',
      icon: <Database className="w-8 h-8" />,
      description: 'Design and implement data solutions on AWS',
      level: 'Associate',
      color: 'from-red-400 to-red-600'
    },
    {
      title: 'CKAD: Certified Kubernetes Application Developer',
      icon: <Container className="w-8 h-8" />,
      description: 'Design and build applications for Kubernetes',
      level: 'Professional',
      color: 'from-indigo-400 to-indigo-600',
      issuer: 'The Linux Foundation'
    },
    {
      title: 'Cloud Digital Leader Certification',
      icon: <Globe className="w-8 h-8" />,
      description: 'Google Cloud platform fundamentals and solutions',
      level: 'Foundational',
      color: 'from-blue-500 to-blue-700',
      issuer: 'Google'
    },
    {
      title: 'KCNA: Kubernetes and Cloud Native Associate',
      icon: <Layers className="w-8 h-8" />,
      description: 'Cloud native technologies and Kubernetes fundamentals',
      level: 'Associate',
      color: 'from-cyan-400 to-cyan-600',
      issuer: 'The Linux Foundation'
    },
    {
      title: 'HashiCorp Certified: Terraform Associate (002)',
      icon: <Settings className="w-8 h-8" />,
      description: 'Infrastructure as Code with Terraform',
      level: 'Associate',
      color: 'from-violet-400 to-violet-600',
      issuer: 'HashiCorp',
      expired: true
    },
  ];

  const activeCertifications = certifications.filter(cert => !cert.expired);

  return (
    <section className="py-20 px-6 bg-primary/5 transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">
            <span className="relative inline-block">
              Professional Certifications
              <span className="absolute bottom-0 left-0 w-full h-1 bg-accent transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-text/70 max-w-2xl mx-auto">
            Professional certifications demonstrating expertise in cloud technologies, DevOps, and modern infrastructure solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`group bg-primary/10 backdrop-blur-sm border p-8 rounded-2xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl animate-on-scroll opacity-0 ${
                cert.expired 
                  ? 'border-gray-400/20 hover:border-gray-400/40 opacity-60' 
                  : 'border-secondary/20 hover:border-accent/50'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br ${cert.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                    cert.expired ? 'opacity-60' : ''
                  }`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-accent" />
                      <span className={`text-xs font-semibold uppercase tracking-wider ${
                        cert.expired ? 'text-gray-400' : 'text-accent'
                      }`}>
                        {cert.expired ? 'Expired' : cert.level}
                      </span>
                    </div>
                    <h3 className={`text-lg font-bold leading-tight ${
                      cert.expired ? 'text-text/50' : 'text-text'
                    }`}>
                      {cert.title}
                    </h3>
                    {cert.issuer && (
                      <p className={`text-xs mt-1 ${
                        cert.expired ? 'text-text/30' : 'text-text/50'
                      }`}>
                        Issued by {cert.issuer}
                      </p>
                    )}
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${
                  cert.expired ? 'text-text/40' : 'text-text/60'
                }`}>
                  {cert.description}
                </p>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-full -translate-y-2 translate-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-secondary/5 to-accent/5 rounded-full translate-y-2 -translate-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent/20 rounded-full">
            <Award className="w-5 h-5 text-accent" />
            <span className="text-accent font-medium">
              {activeCertifications.length} Active Professional Certifications
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 