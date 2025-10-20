import React, { useEffect, useRef, useState } from 'react';
import { Cloud, Server, Code2, Container, GitBranch, Terminal, Shield, Database } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // 0-100
  icon?: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

const Skills: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [statsVisible, setStatsVisible] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Cloud Platforms',
      icon: <Cloud className="w-6 h-6" />,
      color: 'blue',
      skills: [
        { name: 'AWS (EC2, ECS, Lambda, S3, RDS, CloudFormation)', level: 95 },
        { name: 'Azure (VMs, AKS, App Services)', level: 75 },
        { name: 'Google Cloud Platform', level: 60 },
      ]
    },
    {
      title: 'Infrastructure as Code',
      icon: <Code2 className="w-6 h-6" />,
      color: 'purple',
      skills: [
        { name: 'Terraform', level: 95 },
        { name: 'Terragrunt', level: 90 },
        { name: 'CloudFormation', level: 85 },
        { name: 'Pulumi', level: 65 },
      ]
    },
    {
      title: 'Containers & Orchestration',
      icon: <Container className="w-6 h-6" />,
      color: 'cyan',
      skills: [
        { name: 'Kubernetes', level: 90 },
        { name: 'Docker', level: 95 },
        { name: 'Helm', level: 85 },
        { name: 'EKS / AKS', level: 88 },
      ]
    },
    {
      title: 'CI/CD & Automation',
      icon: <GitBranch className="w-6 h-6" />,
      color: 'green',
      skills: [
        { name: 'GitHub Actions', level: 92 },
        { name: 'ArgoCD', level: 88 },
        { name: 'Jenkins', level: 85 },
        { name: 'AWS CodePipeline/CodeBuild', level: 80 },
        { name: 'Azure DevOps', level: 78 },
      ]
    },
    {
      title: 'Programming & Scripting',
      icon: <Terminal className="w-6 h-6" />,
      color: 'orange',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Bash/Shell', level: 90 },
        { name: 'Go', level: 70 },
        { name: 'JavaScript/TypeScript', level: 75 },
      ]
    },
    {
      title: 'Monitoring & Observability',
      icon: <Server className="w-6 h-6" />,
      color: 'red',
      skills: [
        { name: 'Prometheus', level: 85 },
        { name: 'Grafana', level: 88 },
        { name: 'Datadog', level: 82 },
        { name: 'ELK Stack', level: 78 },
        { name: 'CloudWatch', level: 90 },
      ]
    },
    {
      title: 'Security & Compliance',
      icon: <Shield className="w-6 h-6" />,
      color: 'indigo',
      skills: [
        { name: 'AWS IAM & Security Groups', level: 90 },
        { name: 'Vault (HashiCorp)', level: 80 },
        { name: 'SOPS', level: 75 },
        { name: 'Security Best Practices', level: 88 },
      ]
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      color: 'teal',
      skills: [
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 78 },
        { name: 'MongoDB', level: 70 },
        { name: 'Redis', level: 75 },
      ]
    }
  ];

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only animate when scrolling into view (scroll down)
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleCards((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of card is visible
        rootMargin: '0px'
      }
    );

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsVisible) {
            setStatsVisible(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    // Observe each card individually
    cardRefs.current.forEach((card) => {
      if (card) {
        cardObserver.observe(card);
      }
    });

    // Observe stats section
    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          cardObserver.unobserve(card);
        }
      });
      if (statsRef.current) {
        statsObserver.unobserve(statsRef.current);
      }
    };
  }, [statsVisible]);

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; progress: string; glow: string }> = {
      blue: {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-600 dark:text-blue-400',
        progress: 'bg-blue-500 dark:bg-blue-400',
        glow: 'shadow-blue-500/50'
      },
      purple: {
        bg: 'bg-purple-100 dark:bg-purple-900/30',
        text: 'text-purple-600 dark:text-purple-400',
        progress: 'bg-purple-500 dark:bg-purple-400',
        glow: 'shadow-purple-500/50'
      },
      cyan: {
        bg: 'bg-cyan-100 dark:bg-cyan-900/30',
        text: 'text-cyan-600 dark:text-cyan-400',
        progress: 'bg-cyan-500 dark:bg-cyan-400',
        glow: 'shadow-cyan-500/50'
      },
      green: {
        bg: 'bg-green-100 dark:bg-green-900/30',
        text: 'text-green-600 dark:text-green-400',
        progress: 'bg-green-500 dark:bg-green-400',
        glow: 'shadow-green-500/50'
      },
      orange: {
        bg: 'bg-orange-100 dark:bg-orange-900/30',
        text: 'text-orange-600 dark:text-orange-400',
        progress: 'bg-orange-500 dark:bg-orange-400',
        glow: 'shadow-orange-500/50'
      },
      red: {
        bg: 'bg-red-100 dark:bg-red-900/30',
        text: 'text-red-600 dark:text-red-400',
        progress: 'bg-red-500 dark:bg-red-400',
        glow: 'shadow-red-500/50'
      },
      indigo: {
        bg: 'bg-indigo-100 dark:bg-indigo-900/30',
        text: 'text-indigo-600 dark:text-indigo-400',
        progress: 'bg-indigo-500 dark:bg-indigo-400',
        glow: 'shadow-indigo-500/50'
      },
      teal: {
        bg: 'bg-teal-100 dark:bg-teal-900/30',
        text: 'text-teal-600 dark:text-teal-400',
        progress: 'bg-teal-500 dark:bg-teal-400',
        glow: 'shadow-teal-500/50'
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-500 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise across cloud platforms, DevOps tools,
            and modern infrastructure technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            const isCardVisible = visibleCards.has(categoryIndex);
            return (
              <div
                key={category.title}
                ref={(el) => (cardRefs.current[categoryIndex] = el)}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  opacity: isCardVisible ? 1 : 0,
                  transform: isCardVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s ease-out'
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${colorClasses.bg} ${colorClasses.text}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className={`text-xs font-semibold ${colorClasses.text}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${colorClasses.progress} rounded-full transition-all duration-700 ease-out`}
                          style={{
                            width: isCardVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 50}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div ref={statsRef} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-600"
            style={{
              opacity: statsVisible ? 1 : 0,
              transform: statsVisible ? 'scale(1)' : 'scale(0.9)',
              transition: 'all 0.5s ease-out 0ms'
            }}
          >
            <div className="text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-blue-100 text-sm">Cloud Technologies</div>
          </div>
          <div
            className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-600"
            style={{
              opacity: statsVisible ? 1 : 0,
              transform: statsVisible ? 'scale(1)' : 'scale(0.9)',
              transition: 'all 0.5s ease-out 100ms'
            }}
          >
            <div className="text-3xl font-bold text-white mb-2">10+</div>
            <div className="text-purple-100 text-sm">DevOps Tools</div>
          </div>
          <div
            className="text-center p-6 bg-gradient-to-br from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-600"
            style={{
              opacity: statsVisible ? 1 : 0,
              transform: statsVisible ? 'scale(1)' : 'scale(0.9)',
              transition: 'all 0.5s ease-out 200ms'
            }}
          >
            <div className="text-3xl font-bold text-white mb-2">5+</div>
            <div className="text-green-100 text-sm">Years Experience</div>
          </div>
          <div
            className="text-center p-6 bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-600"
            style={{
              opacity: statsVisible ? 1 : 0,
              transform: statsVisible ? 'scale(1)' : 'scale(0.9)',
              transition: 'all 0.5s ease-out 300ms'
            }}
          >
            <div className="text-3xl font-bold text-white mb-2">4+</div>
            <div className="text-orange-100 text-sm">Programming Languages</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
