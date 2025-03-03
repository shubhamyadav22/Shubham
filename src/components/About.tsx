
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedText from './AnimatedText';
import { GraduationCap, Briefcase, Heart, Code } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="w-full py-24 relative">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="order-2 lg:order-1" ref={ref}>
            <div className="sticky top-28">
              <div className="rounded-full px-3 py-1 border border-border bg-secondary inline-flex mb-4">
                <span className="text-xs font-medium">About Me</span>
              </div>

              <AnimatedText
                text="Developer, designer, and problem solver"
                className="text-3xl md:text-4xl font-display font-semibold mb-6 tracking-tight"
                animation="fade-in"
              />

              <div className="space-y-6 text-muted-foreground">
                <p className={`transform transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
                  I'm a passionate developer with a strong foundation in both frontend and backend technologies. 
                  My approach combines technical expertise with an eye for design, creating applications that are 
                  not only functional but also intuitive and visually appealing.
                </p>
                
                <p className={`transform transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
                  With a background in computer science and years of hands-on experience, I've developed a 
                  deep understanding of modern web technologies and best practices in software development.
                </p>

                <p className={`transform transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '300ms' }}>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing my knowledge through blog posts and community engagement.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className={`glass-panel p-6 transform transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
              <div className="flex items-start gap-4">
                <div className="bg-secondary rounded-full p-3 text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Education</h3>
                  <p className="text-muted-foreground mb-4">
                    Bachelor of Science in Computer Science
                    <br />
                    University of Technology, 2018-2022
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Data Structures and Algorithms</li>
                    <li>Web Development</li>
                    <li>Database Systems</li>
                    <li>Software Engineering</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`glass-panel p-6 transform transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '500ms' }}>
              <div className="flex items-start gap-4">
                <div className="bg-secondary rounded-full p-3 text-primary">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Work Experience</h3>
                  <p className="text-muted-foreground mb-4">
                    Software Developer at Tech Innovations
                    <br />
                    2022 - Present
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Developing responsive web applications</li>
                    <li>Optimizing application performance</li>
                    <li>Collaborating with design and product teams</li>
                    <li>Implementing modern frontend frameworks</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`glass-panel p-6 transform transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '600ms' }}>
              <div className="flex items-start gap-4">
                <div className="bg-secondary rounded-full p-3 text-primary">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Interests</h3>
                  <p className="text-muted-foreground mb-2">
                    Beyond coding, I'm passionate about these areas:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>UI/UX Design</li>
                    <li>Open Source Contribution</li>
                    <li>Tech Community Engagement</li>
                    <li>Continuous Learning</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`glass-panel p-6 transform transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '700ms' }}>
              <div className="flex items-start gap-4">
                <div className="bg-secondary rounded-full p-3 text-primary">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Certifications</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                    <li>AWS Certified Developer - Associate</li>
                    <li>React Advanced Concepts</li>
                    <li>Modern JavaScript Development</li>
                    <li>UI/UX Design Fundamentals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
