import React, { useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import CertificationModal from './CertificationModal';

const Certifications: React.FC = () => {
  // Use import.meta.env.BASE_URL to handle both dev and production paths
  const basePath = import.meta.env.BASE_URL;

  // Modal state
  const [selectedCertification, setSelectedCertification] = useState<typeof certifications[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCertificationClick = (cert: typeof certifications[0]) => {
    setSelectedCertification(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCertification(null), 300);
  };

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect Associate',
      logo: `${basePath}logos/aws-solutions-architect-associate.png`,
      description: 'Design and deploy scalable systems on AWS',
      detailedDescription: 'Earners of this certification have a comprehensive understanding of AWS services and technologies. They demonstrated the ability to design and deploy dynamically scalable, highly available, fault-tolerant, and reliable applications on AWS. They have the ability to select appropriate AWS services to design and deploy an application based on given requirements, and they can migrate complex multi-tier applications on AWS.',
      level: 'Associate',
      issuer: 'Amazon Web Services'
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      logo: `${basePath}logos/aws-cloud-practitioner.png`,
      description: 'Foundational understanding of AWS Cloud',
      detailedDescription: 'Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. They can identify essential AWS services necessary to set up AWS-focused projects, and have informed perspectives on AWS Cloud economics.',
      level: 'Foundational',
      issuer: 'Amazon Web Services'
    },
    {
      title: 'AWS Certified SysOps Administrator Associate',
      logo: `${basePath}logos/aws-sysops-administrator-associate.png`,
      description: 'Deploy, manage, and operate systems on AWS',
      detailedDescription: 'Earners of this certification have demonstrated the ability to deploy, manage, and operate workloads on AWS as well as implement security controls and compliance requirements. They can also perform operations using AWS Management Console and AWS CLI, implement and control the flow of data to and from AWS, and select the appropriate AWS service based on data, compute, database, or security requirements.',
      level: 'Associate',
      issuer: 'Amazon Web Services'
    },
    {
      title: 'AWS Certified Developer - Associate',
      logo: `${basePath}logos/aws-developer-associate.png`,
      description: 'Develop and maintain applications on AWS',
      detailedDescription: 'Earners of this certification have a comprehensive understanding of application lifecycle management. They demonstrated proficiency in writing applications with AWS service APIs, AWS CLI, and SDKs; using containers; and deploying with a CI/CD pipeline. Badge owners are able to develop, deploy, and debug cloud-based applications that follow AWS best practices.',
      level: 'Associate',
      issuer: 'Amazon Web Services',
      expired: true,
      expirationDate: 'June 20, 2025'
    },
    {
      title: 'AWS Certified Data Engineer',
      logo: `${basePath}logos/aws-data-engineer-associate.png`,
      description: 'Design and implement data solutions on AWS',
      detailedDescription: 'Earners of this certification have an in-depth understanding of how to use AWS services to implement data pipelines and to monitor, troubleshoot, and optimize cost and performance issues in accordance with best practices. Badge owners have technical expertise to understand the effects of volume, variety, and velocity on data ingestion. They are familiar with transformation, modeling, security, governance, privacy, schema design, and optimal data store design.',
      level: 'Associate',
      issuer: 'Amazon Web Services'
    },
    {
      title: 'CKAD: Certified Kubernetes Application Developer',
      logo: `${basePath}logos/ckad.png`,
      description: 'Design and build applications for Kubernetes',
      detailedDescription: 'The Certified Kubernetes Application Developer (CKAD) can design, build and deploy cloud-native applications for Kubernetes. A CKAD can define application resources and use Kubernetes core primitives to create/migrate, configure, expose and observe scalable applications. The exam assumes working knowledge of container runtimes and microservice architecture.',
      level: 'Professional',
      issuer: 'The Linux Foundation'
    },
    {
      title: 'Cloud Digital Leader Certification',
      logo: `${basePath}logos/google-cloud-digital-leader.png`,
      description: 'Google Cloud platform fundamentals and solutions',
      detailedDescription: 'A Cloud Digital Leader can articulate the capabilities of Google Cloud core products and services and how they benefit organizations. The Cloud Digital Leader can also describe common business use cases and how cloud solutions support an enterprise. This certification is intended for individuals who wish to demonstrate their knowledge of cloud computing basics and how Google Cloud products and services can be used to achieve an organization\'s goals.',
      level: 'Foundational',
      issuer: 'Google Cloud'
    },
    {
      title: 'KCNA: Kubernetes and Cloud Native Associate',
      logo: `${basePath}logos/kcna.png`,
      description: 'Cloud native technologies and Kubernetes fundamentals',
      detailedDescription: 'The Kubernetes and Cloud Native Associate (KCNA) demonstrates a user\'s foundational knowledge and skills in Kubernetes and the wider cloud native ecosystem. A certified KCNA will confirm conceptual knowledge of the entire cloud native ecosystem, particularly focusing on Kubernetes. The KCNA exam is intended to prepare candidates to work with cloud native technologies and pursue further CNCF credentials, including CKA, CKAD, and CKS.',
      level: 'Associate',
      issuer: 'The Linux Foundation'
    },
    {
      title: 'HashiCorp Certified: Terraform Associate (002)',
      logo: `${basePath}logos/terraform-associate.png`,
      description: 'Infrastructure as Code with Terraform',
      detailedDescription: 'Earners of the HashiCorp Certified: Terraform Associate certification know the basic concepts, skills, and use cases associated with open source HashiCorp Terraform. They understand which enterprise features exist and what can and cannot be done using the free features in Terraform Community Edition. Badge holders have experience in Terraform for production use cases beyond the professional experience.',
      level: 'Associate',
      issuer: 'HashiCorp',
      expired: true,
      expirationDate: 'April 03, 2024'
    },
  ];

  const activeCertifications = certifications.filter(cert => !cert.expired);
  const expiredCertifications = certifications.filter(cert => cert.expired);

  return (
    <>
      <CertificationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        certification={selectedCertification}
      />
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

        {/* Active Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {activeCertifications.map((cert) => (
            <button
              key={cert.title}
              onClick={() => handleCertificationClick(cert)}
              className="group bg-primary/10 backdrop-blur-sm border p-4 rounded-xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer text-left w-full border-secondary/20 hover:border-accent/50"
              aria-label={`View details for ${cert.title}`}
            >
              <div className="relative">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="flex-shrink-0 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={cert.logo}
                      alt={`${cert.title} badge`}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        {cert.level}
                      </span>
                    </div>
                    <h3 className="text-base font-bold leading-tight text-text">
                      {cert.title}
                    </h3>
                    {cert.issuer && (
                      <p className="text-xs mt-1 text-text/50">
                        {cert.issuer}
                      </p>
                    )}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-full -translate-y-2 translate-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-secondary/5 to-accent/5 rounded-full translate-y-2 -translate-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </button>
          ))}
        </div>

        {/* Expired Certifications Section */}
        {expiredCertifications.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-text/70 mb-6 text-center">Expired Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {expiredCertifications.map((cert) => (
                <button
                  key={cert.title}
                  onClick={() => handleCertificationClick(cert)}
                  className="group bg-primary/10 backdrop-blur-sm border p-4 rounded-xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer text-left w-full border-gray-400/20 hover:border-gray-400/40 opacity-60"
                  aria-label={`View details for ${cert.title}`}
                >
                  <div className="relative">
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="flex-shrink-0 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 opacity-60">
                        <img
                          src={cert.logo}
                          alt={`${cert.title} badge`}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Award className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                            {cert.level}
                          </span>
                        </div>
                        <h3 className="text-base font-bold leading-tight text-text/50">
                          {cert.title}
                        </h3>
                        {cert.issuer && (
                          <p className="text-xs mt-1 text-text/30">
                            {cert.issuer}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Expired badge with date */}
                    <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-500/10 border border-red-500/30 rounded-full">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium text-red-500">
                        Expired on {cert.expirationDate}
                      </span>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-full -translate-y-2 translate-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-secondary/5 to-accent/5 rounded-full translate-y-2 -translate-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent/20 rounded-full">
            <Award className="w-5 h-5 text-accent" />
            <span className="text-accent font-medium">
              {activeCertifications.length} Active Professional Certifications
            </span>
          </div>

          <a
            href="https://www.credly.com/users/yorman-aguirre"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-primary/20 hover:bg-primary/30 border border-secondary/30 hover:border-accent/50 rounded-full transition-all duration-300 hover:scale-105"
          >
            <span className="text-text font-medium group-hover:text-accent transition-colors">
              View All on Credly
            </span>
            <ExternalLink className="w-4 h-4 text-text/70 group-hover:text-accent transition-colors" />
          </a>
        </div>
      </div>
    </section>
    </>
  );
};

export default Certifications; 