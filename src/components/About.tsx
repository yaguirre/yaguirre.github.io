import React from 'react';
import { Code, PenTool, LineChart, Users } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { 
      name: 'Web Development', 
      icon: <Code className="w-6 h-6" />, 
      description: 'Building responsive and performant web applications using modern technologies.'
    },
    { 
      name: 'UI/UX Design', 
      icon: <PenTool className="w-6 h-6" />, 
      description: 'Creating intuitive and visually appealing user interfaces and experiences.'
    },
    { 
      name: 'Data Visualization', 
      icon: <LineChart className="w-6 h-6" />, 
      description: 'Transforming complex data into clear, interactive visual representations.'
    },
    { 
      name: 'Team Leadership', 
      icon: <Users className="w-6 h-6" />, 
      description: 'Leading development teams with effective communication and management.'
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
            I'm a passionate frontend developer with 5+ years of experience creating beautiful, 
            functional websites and applications. I love turning complex problems into simple, 
            intuitive designs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-100">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I started my career as a graphic designer before transitioning to web development. This unique background 
              allows me to approach projects with both technical expertise and an eye for design.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Throughout my career, I've collaborated with startups, agencies, and large corporations to create 
              digital experiences that are both beautiful and functional. I'm constantly learning and exploring 
              new technologies to stay at the forefront of web development.
            </p>
          </div>

          <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Education & Experience</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">2018 - Present</p>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Senior Frontend Developer</h4>
                <p className="text-gray-600 dark:text-gray-300">TechCorp Inc.</p>
              </div>
              <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">2015 - 2018</p>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">UI/UX Designer & Developer</h4>
                <p className="text-gray-600 dark:text-gray-300">DesignStudio Agency</p>
              </div>
              <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">2011 - 2015</p>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">BSc in Computer Science</h4>
                <p className="text-gray-600 dark:text-gray-300">University of Technology</p>
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