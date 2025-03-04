
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
                text="Developer | Designer | Problem Solver"
                className="text-3xl md:text-4xl font-display font-semibold mb-6 tracking-tight"
                animation="fade-in"
              />

              <div className="space-y-6 text-muted-foreground">
                <p className={`transform transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
                Enthusiastic Java Developer skilled in building scalable web applications using Spring Boot, Hibernate, and React.js. Passionate about backend optimization, database management, and writing clean, efficient code. Seeking an opportunity to contribute and grow in a dynamic tech environment.
                </p>
                
                <p className={`transform transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
                With a strong background in computer science and extensive hands-on experience, I have developed a deep expertise in modern web technologies and best practices in software development.
                </p>

                <p className={`transform transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '300ms' }}>
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing my knowledge through blog posts and community engagement.
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
                    Master of Computer Applications 
                    <br />
                    Ajay Kumar Garg Engineering College 
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Data Structures and Algorithms</li>
                    <li>Java , Spring MVC , Spring Boot</li>
                    <li>JavaScript , React Js</li>
                    <li>MySQL</li>
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
                  <h3 className="font-medium text-lg mb-2">Internship Experience</h3>
                  <p className="text-muted-foreground mb-4">
                    Full Stack Java Developer at CETPA Infotech Pvt Ltd
                    <br />
                    July-2024 to January-2025
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Developed RESTful APIs with Spring Boot, enhancing system communication and reducing response time.</li>
                    <li>Implemented secure authentication mechanisms to safeguard user data, ensuring compliance with industry stan-
                    dards.</li>
                    <li>Integrated a responsive front-end using React, improving user experience and engagement.</li>
                    <li>Automated build and deployment with Maven, streamlining the deployment process.</li>
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
                  Beyond coding, I'm passionate about innovation, design, and problem-solving.
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Continuous Learning</li>
                    <li>Web Developement</li>
                    <li>Tech Community Engagement</li>
                    {/* <li>Open Source Contribution</li> */}
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
                    <li> Java Full Stack Development CETPA INFOTECH</li>
                    <li>Java Full Stack Development MSME</li>
                    <li>Data Structures and Algorithms using JAVA</li>
                    {/* <li>UI/UX Design Fundamentals</li> */}
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
