
import { useEffect, useState } from 'react';
import AnimatedText from './AnimatedText';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-pulse-subtle animate-delay-500" />
      </div>

      <div 
        className={`section-container flex flex-col items-center justify-center text-center transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="rounded-full p-1 px-3 border border-border bg-secondary inline-flex mb-8 animate-fade-in">
          <span className="text-xs font-medium">Full-Stack Developer</span>
        </div>

        <AnimatedText
          text="Creating elegant digital experiences"
          className="section-heading max-w-3xl mx-auto mb-6"
          animation="letter-reveal"
        />

        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-12 animate-fade-in animate-delay-500">
        I design and build modern web applications with a focus on performance, accessibility, and seamless user experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-700">
          <a href="#projects" className="button-primary">
            View Projects
          </a>
          <a href="#contact" className="button-secondary">
            Contact Me
          </a>
        </div>

        <a 
          href="#about" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center animate-fade-in animate-delay-1000"
        >
          <span className="text-xs font-medium mb-2 text-foreground/60">Scroll</span>
          <ArrowDown className="w-5 h-5 text-foreground/60 animate-float" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
