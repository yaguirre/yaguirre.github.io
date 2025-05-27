import React from 'react';
import { Award } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect Associate',
      icon: <Award className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      icon: <Award className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    },
    {
      title: 'AWS Certified SysAdmin Associate',
      icon: <Award className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    },
    {
      title: 'AWS Certified Developer - Associate',
      icon: <Award className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    },
    {
      title: 'AWS Certified Data Engineer',
      icon: <Award className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="relative inline-block">
              AWS Certifications
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 dark:bg-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications demonstrating expertise in Amazon Web Services technologies and solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;