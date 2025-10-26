import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Rocket, Users, Workflow, Container, ChevronDown, ChevronUp } from 'lucide-react';

const About: React.FC = () => {
  // Use import.meta.env.BASE_URL to handle both dev and production paths
  const basePath = import.meta.env.BASE_URL;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const experiences = [
    {
      date: '2025 - Present',
      title: 'Site Reliability Engineer',
      company: 'Yum Brands! (Contractor)',
      logo: `${basePath}logos/companies/yum-brands.png`,
      type: 'work',
      responsibilities: []
    },
    {
      date: '09/2022 - 04/2025',
      title: 'Senior Systems Engineer',
      company: 'EPAM Systems',
      logo: `${basePath}logos/companies/epam.png`,
      type: 'work',
      responsibilities: [
        'Configure and deploy Helm Chart applications on Kubernetes clusters using ArgoCD to streamline continuous delivery',
        'Design, implement, and maintain robust CI/CD pipelines with GitHub Actions',
        'Deploy and manage infrastructure services with Terragrunt, ensuring modular, repeatable, and secure infrastructure provisioning',
        'Work closely with cross-functional teams to integrate DevOps best practices, improving system reliability and accelerating development cycle',
        'Continuously monitor and optimize cloud deployments, ensuring high availability, scalability, and adherence to security standards'
      ]
    },
    {
      date: '07/2021 - 09/2022',
      title: 'DevOps Engineer',
      company: 'Globant',
      logo: `${basePath}logos/companies/globant.png`,
      type: 'work',
      responsibilities: [
        'Oversaw the operation and maintenance of Kubernetes clusters while providing support for cross-functional teams leveraging AWS services',
        'Designed and implemented end-to-end CI/CD pipelines on AWS using CodePipeline and CodeBuild to streamline application delivery',
        'Created modular, reusable Terraform modules that simplified and standardized infrastructure provisioning across multiple projects',
        'Automated the provisioning of Infrastructure-as-Code resources on AWS with Terraform, enhancing efficiency and reducing manual errors',
        'Led the deployment of applications across Development, Staging, and Production environments, ensuring consistent performance and reliability'
      ]
    },
    {
      date: '01/2019 - 07/2021',
      title: 'DevOps Engineer',
      company: 'BTG Pactual S.A',
      logo: `${basePath}logos/companies/btg-pactual.png`,
      type: 'work',
      responsibilities: [
        'Develop solutions over AWS with HA, Scalability and Maintainability',
        'Define and implement CI/CD pipelines using Azure DevOps & Jenkins',
        'Support and help IT teams defining architectures for internal projects',
        'Define and explain standards for working with DevOps tools'
      ]
    },
    {
      date: '01/2015 - 11/2019',
      title: 'Computer Science Degree',
      company: 'EAFIT University',
      logo: `${basePath}logos/companies/eafit.png`,
      type: 'education',
      responsibilities: []
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-primary/5 transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">
            <span className="relative inline-block">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-accent transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
          <div className="bg-primary/10 backdrop-blur-sm border border-secondary/20 rounded-xl p-3 md:p-4 text-center hover:border-accent/50 transition-all duration-300 hover:scale-105">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-1">6+</div>
            <div className="text-xs md:text-sm text-text/70">Years Experience</div>
          </div>
          <div className="bg-primary/10 backdrop-blur-sm border border-secondary/20 rounded-xl p-3 md:p-4 text-center hover:border-accent/50 transition-all duration-300 hover:scale-105">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-1">7</div>
            <div className="text-xs md:text-sm text-text/70">Active Certifications</div>
          </div>
          <div className="bg-primary/10 backdrop-blur-sm border border-secondary/20 rounded-xl p-3 md:p-4 text-center hover:border-accent/50 transition-all duration-300 hover:scale-105">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-1">4</div>
            <div className="text-xs md:text-sm text-text/70">Companies</div>
          </div>
          <div className="bg-primary/10 backdrop-blur-sm border border-secondary/20 rounded-xl p-3 md:p-4 text-center hover:border-accent/50 transition-all duration-300 hover:scale-105">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-1">3</div>
            <div className="text-xs md:text-sm text-text/70">Cloud Providers</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-100">
            <h3 className="text-2xl font-semibold mb-6 text-text flex items-center gap-2">
              <Rocket className="w-6 h-6 text-accent" />
              My Journey
            </h3>
            <p className="text-text/80 mb-6 leading-relaxed">
              My journey in tech has been focused on building and maintaining resilient, high-availability solutions.
            </p>

            {/* Key Highlights */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 group">
                <div className="mt-1 p-1.5 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Award className="w-4 h-4 text-accent flex-shrink-0" />
                </div>
                <div>
                  <h4 className="font-semibold text-text mb-1">CI/CD Excellence</h4>
                  <p className="text-sm text-text/70">Implementing pipelines with GitHub Actions, ArgoCD, AWS CodePipeline, Azure DevOps, and Jenkins</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="mt-1 p-1.5 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Rocket className="w-4 h-4 text-accent flex-shrink-0" />
                </div>
                <div>
                  <h4 className="font-semibold text-text mb-1">Infrastructure as Code</h4>
                  <p className="text-sm text-text/70">Specializing in Terraform and Terragrunt for modular, reusable infrastructure provisioning</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="mt-1 p-1.5 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Container className="w-4 h-4 text-accent flex-shrink-0" />
                </div>
                <div>
                  <h4 className="font-semibold text-text mb-1">Kubernetes & Microservices</h4>
                  <p className="text-sm text-text/70">Managing and upgrading Kubernetes clusters, deploying and orchestrating microservices and tooling at scale</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="mt-1 p-1.5 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Workflow className="w-4 h-4 text-accent flex-shrink-0" />
                </div>
                <div>
                  <h4 className="font-semibold text-text mb-1">Automation & Workflows</h4>
                  <p className="text-sm text-text/70">Developing automation workflows using platforms like Port and Temporal for scalable orchestration</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="mt-1 p-1.5 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Users className="w-4 h-4 text-accent flex-shrink-0" />
                </div>
                <div>
                  <h4 className="font-semibold text-text mb-1">Cross-Functional Leadership</h4>
                  <p className="text-sm text-text/70">Supporting teams in adopting DevOps best practices to improve reliability and accelerate development</p>
                </div>
              </div>
            </div>

            <p className="text-text/70 text-sm leading-relaxed">
              I'm committed to continuous learning and staying at the forefront of cloud and DevOps technologies,
              dedicated to achieving excellence in cloud infrastructure development and management.
            </p>
          </div>

          <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-300">
            <h3 className="text-2xl font-semibold mb-6 text-text flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-accent" />
              Education & Experience
            </h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => {
                const isExpanded = expandedIndex === index;
                const hasResponsibilities = exp.responsibilities.length > 0;

                return (
                  <div
                    key={index}
                    className="group relative border-l-2 border-accent/30 hover:border-accent pl-6 pb-4 last:pb-0 transition-all duration-300"
                  >
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-2 border-background group-hover:scale-125 transition-transform duration-300"></div>

                    <button
                      onClick={() => hasResponsibilities && toggleExpand(index)}
                      className={`w-full text-left ${hasResponsibilities ? 'cursor-pointer' : 'cursor-default'}`}
                      disabled={!hasResponsibilities}
                    >
                      <div className="flex items-start gap-4">
                        {/* Company Logo */}
                        <div className="flex-shrink-0 mt-1">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-16 h-16 object-contain"
                          />
                        </div>
                        {/* Experience Details */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <div className="flex items-start gap-2">
                              {exp.type === 'work' ? (
                                <Briefcase className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                              ) : (
                                <GraduationCap className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                              )}
                              <p className="text-sm text-accent font-semibold">{exp.date}</p>
                            </div>
                            {hasResponsibilities && (
                              <div className="flex-shrink-0">
                                {isExpanded ? (
                                  <ChevronUp className="w-5 h-5 text-accent transition-transform duration-300" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-accent transition-transform duration-300" />
                                )}
                              </div>
                            )}
                          </div>
                          <h4 className="text-lg font-semibold text-text mb-1">{exp.title}</h4>
                          <p className="text-text/70 text-sm">{exp.company}</p>
                        </div>
                      </div>
                    </button>

                    {/* Collapsible Responsibilities */}
                    {hasResponsibilities && (
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="ml-20 space-y-2">
                          <h5 className="text-sm font-semibold text-text/90 mb-3">Key Responsibilities:</h5>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-text/70">
                                <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                                <span>{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;