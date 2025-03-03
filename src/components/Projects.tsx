
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import AnimatedText from './AnimatedText';

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment processing, user accounts, and inventory management.',
      imageSrc: 'https://images.unsplash.com/photo-1621768216848-c4d375ce4102?auto=format&fit=crop&q=80&w=2574',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and team collaborations with real-time updates.',
      imageSrc: 'https://images.unsplash.com/photo-1585675100414-add2e465a136?auto=format&fit=crop&q=80&w=2564',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Firestore'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Finance Dashboard',
      description: 'Interactive dashboard for visualizing financial data with customizable charts and reporting features.',
      imageSrc: 'https://images.unsplash.com/photo-1660751767174-063d76afd7e0?auto=format&fit=crop&q=80&w=2680',
      technologies: ['React', 'TypeScript', 'D3.js', 'GraphQL', 'Prisma'],
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  return (
    <section id="projects" className="w-full py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="rounded-full px-3 py-1 border border-border bg-white inline-flex mb-4">
            <span className="text-xs font-medium">Projects</span>
          </div>

          <AnimatedText
            text="Featured Projects"
            className="section-heading"
            animation="fade-in"
          />

          <p className="section-subheading mx-auto">
            A selection of my recent work, showcasing my skills in frontend and backend development.
          </p>
        </div>

        <div className="space-y-16" ref={ref}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${index * 100 + 100}ms` }}
            >
              <ProjectCard
                {...project}
                direction={index % 2 === 0 ? 'left' : 'right'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
