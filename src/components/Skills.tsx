import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import SkillItem from './SkillItem';
import AnimatedText from './AnimatedText';
import { Code, Database, Server, Layout, PaintBucket } from 'lucide-react';

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const skillCategories = [
    { title: 'Frontend', icon: <Layout className="w-5 h-5" />, skills: [
        { name: 'React Js', level: 80, delay: 100 },
        { name: 'TypeScript', level: 60, delay: 100 },
        { name: 'HTML/CSS', level: 95, delay: 100 },
      ]
    },
    { title: 'Backend', icon: <Server className="w-5 h-5" />, skills: [
        { name: 'Java', level: 85, delay: 100 },
        { name: 'Spring MVC', level: 70, delay: 100 },
        { name: 'Spring Boot', level: 70, delay: 100 },
      ]
    },
    { title: 'Database', icon: <Database className="w-5 h-5" />, skills: [
        { name: 'MySQL', level: 80, delay: 100 },
        { name: 'PostgreSQL', level: 60, delay: 100 },
        { name: 'MongoDB', level: 50, delay: 100 },
      ]
    },
    { title: 'Design', icon: <PaintBucket className="w-5 h-5" />, skills: [
        { name: 'Bootstrap', level: 80, delay: 100 },
        { name: 'Tailwind CSS', level: 60, delay: 100 },
        { name: 'Responsive Design', level: 80, delay: 100 },
      ]
    }
  ];

  return (
    <section id="skills" className="w-full py-24">
      <div className="section-container text-center mb-16">
        <div className="rounded-full px-3 py-1 border border-border bg-secondary inline-flex mb-4">
          <span className="text-xs font-medium">Technical Skills</span>
        </div>
        <AnimatedText text="My Expertise" className="section-heading" animation="fade-in" />
        <p className="section-subheading mx-auto">
          I've built a strong and diverse technical skill set, showcasing my expertise across various domains.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-2 lg:gap-12" ref={ref}>
        {skillCategories.map((category, index) => (
          <div key={category.title} 
            className={`glass-panel p-6 transform transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ transitionDelay: `${index * 100}ms` }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-secondary rounded-full p-2 text-primary">{category.icon}</div>
              <h3 className="font-display font-medium text-lg">{category.title}</h3>
            </div>
            <div className="space-y-5">
              {category.skills.map(skill => (
                <SkillItem key={skill.name} name={skill.name} level={skill.level} delay={skill.delay} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;