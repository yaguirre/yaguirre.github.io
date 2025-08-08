import React from 'react';
import { Code, PenTool, LineChart, Users } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { 
      name: 'Cloud Infrastructure Management (AWS)', 
      icon: <Code className="w-6 h-6" />, 
      description: 'Managing and optimizing scalable cloud infrastructures on AWS for high availability and security.'
    },
    { 
      name: 'Infrastructure as Code (IaC)', 
      icon: <PenTool className="w-6 h-6" />, 
      description: 'Automating infrastructure provisioning using Terraform and Terragrunt for modular and repeatable deployments.'
    },
    { 
      name: 'Kubernetes & Containerization', 
      icon: <LineChart className="w-6 h-6" />, 
      description: 'Deploying and orchestrating containerized applications on Kubernetes clusters with Helm and Docker.'
    },
    { 
      name: 'CI/CD Implementation & Automation', 
      icon: <Users className="w-6 h-6" />, 
      description: 'Implementing robust CI/CD pipelines with tools like GitHub Actions and ArgoCD to streamline delivery.'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="relative inline-block">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 dark:bg-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I'm a passionate and experienced Senior Cloud/DevOps Engineer with a strong background in designing, 
            implementing, and managing robust cloud infrastructure and CI/CD pipelines.  
            I thrive on leveraging cloud technologies, particularly AWS services, to drive innovation, efficiency,
            and scalability in complex systems. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-100">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              My journey in tech has been focused on building and maintaining resilient, high-availability solutions. 
              I have a proven track record of success in implementing CI/CD pipelines using tools like GitHub Actions,
              ArgoCD, AWS CodePipeline, CodeBuild, Azure DevOps, and Jenkins.  I specialize in Infrastructure as Code,
              utilizing Terraform and Terragrunt to create modular, reusable, and standardized infrastructure provisioning.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Throughout my career, I've had the opportunity to work with cross-functional teams, supporting them in adopting
              DevOps best practices to improve system reliability and accelerate development cycles.  I'm committed to continuous
              learning and staying at the forefront of cloud and DevOps technologies.
              I'm enthusiastic about tackling challenges in service scalability and maintainability, and I'm dedicated to achieving
              excellence in cloud infrastructure development and management. 
            </p>
          </div>

          <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Education & Experience</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">2025 - Present</p>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Site Reliability Engineer</h4>
                <p className="text-gray-600 dark:text-gray-300">Yum Brands! (Contractor)</p>
              </div>
              <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">09/2022 - 04/2025</p>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Senior Systems Engineer</h4>
                <p className="text-gray-600 dark:text-gray-300">EPAM Systems</p>
              </div>
              <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">07/2021 - 09/2022</p>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">DevOps Engineer</h4>
                <p className="text-gray-600 dark:text-gray-300">Globant</p>
              </div>
              <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">01/2019 - 07/2021</p>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">DevOps Engineer</h4>
                <p className="text-gray-600 dark:text-gray-300">BTG Pactual S.A</p>
              </div>
              <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">01/2015 - 11/2019</p>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Computer Science Degree</h4>
                <p className="text-gray-600 dark:text-gray-300">EAFIT University</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white">My Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-on-scroll opacity-0"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mb-4">
                {skill.icon}
              </div>
              <h4 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">{skill.name}</h4>
              <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;