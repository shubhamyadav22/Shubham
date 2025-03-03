
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import SkillItem from './SkillItem';
import AnimatedText from './AnimatedText';
import { 
  Code, Database, Server, Layout, 
  PaintBucket, Cpu, Workflow, GitBranch
} from 'lucide-react';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout className="w-5 h-5" />,
      skills: [
        { name: 'React', level: 90, delay: 100 },
        { name: 'TypeScript', level: 85, delay: 200 },
        { name: 'HTML/CSS', level: 95, delay: 300 },
        { name: 'Next.js', level: 80, delay: 400 },
      ],
    },
    {
      title: 'Backend',
      icon: <Server className="w-5 h-5" />,
      skills: [
        { name: 'Node.js', level: 85, delay: 150 },
        { name: 'Express', level: 80, delay: 250 },
        { name: 'Python', level: 75, delay: 350 },
        { name: 'GraphQL', level: 70, delay: 450 },
      ],
    },
    {
      title: 'Database',
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: 'MongoDB', level: 85, delay: 200 },
        { name: 'PostgreSQL', level: 80, delay: 300 },
        { name: 'Firebase', level: 75, delay: 400 },
        { name: 'Redis', level: 65, delay: 500 },
      ],
    },
    {
      title: 'Design',
      icon: <PaintBucket className="w-5 h-5" />,
      skills: [
        { name: 'Figma', level: 85, delay: 250 },
        { name: 'Tailwind CSS', level: 90, delay: 350 },
        { name: 'UI/UX', level: 80, delay: 450 },
        { name: 'Responsive Design', level: 95, delay: 550 },
      ],
    },
    {
      title: 'DevOps',
      icon: <Workflow className="w-5 h-5" />,
      skills: [
        { name: 'Git', level: 90, delay: 300 },
        { name: 'Docker', level: 75, delay: 400 },
        { name: 'CI/CD', level: 80, delay: 500 },
        { name: 'AWS', level: 70, delay: 600 },
      ],
    },
    {
      title: 'Other',
      icon: <Cpu className="w-5 h-5" />,
      skills: [
        { name: 'Testing', level: 80, delay: 350 },
        { name: 'Performance Optimization', level: 85, delay: 450 },
        { name: 'Accessibility', level: 75, delay: 550 },
        { name: 'SEO', level: 70, delay: 650 },
      ],
    },
  ];

  return (
    <section id="skills" className="w-full py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="rounded-full px-3 py-1 border border-border bg-secondary inline-flex mb-4">
            <span className="text-xs font-medium">Technical Skills</span>
          </div>

          <AnimatedText
            text="My Expertise"
            className="section-heading"
            animation="fade-in"
          />

          <p className="section-subheading mx-auto">
            I've developed a diverse set of technical skills throughout my career.
            Here's an overview of my capabilities and expertise.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          ref={ref}
        >
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`glass-panel p-6 transform transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-secondary rounded-full p-2 text-primary">
                  {category.icon}
                </div>
                <h3 className="font-display font-medium text-lg">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <SkillItem
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={skill.delay}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
