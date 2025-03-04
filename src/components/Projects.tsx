
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
      title: 'Banking Application ',
      description: 'Designed and implemented secure banking transactions with real-time balance updates, ensuring data integrity, optimized performance, and a seamless user experience.',
      imageSrc: '/src/components/banking_application.png',
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'Spring JPA', 'Thymeleaf', 'MySQL'],
      githubUrl: 'https://github.com/shubhamyadav22',
      liveUrl: '#',
    },
    {
      title: 'Daily Task Tracker ',
      description: 'Developed a full-stack To-Do List app for efficient task management, seamless user interaction, and smooth backend operations.',
      imageSrc: '/src/components/daily_task_tracker.png',
      technologies: ['React.js', 'Bootstrap', 'Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'Axios'],
      githubUrl: 'https://github.com/shubhamyadav22',
      liveUrl: '#',
    },
    {
      title: 'Customer Management System',
      description: 'Built a customer management system with CRUD operations, dynamic search, and a responsive, user-friendly interface for seamless data management.',
      imageSrc: '/src/components/customer_management_system.png',
      technologies: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
      githubUrl: 'https://github.com/shubhamyadav22',
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
            text="My Recent Work"
            className="section-heading"
            animation="fade-in"
          />

          <p className="section-subheading mx-auto">
            A selection of my recent work, showcasing my skills in Full Stack development.
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
