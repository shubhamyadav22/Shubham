
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useTheme } from '@/components/ThemeProvider';

const Index = () => {
  const { theme } = useTheme();
  
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-grain">
      {/* Enhanced animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Main gradient orbs with increased size and better positioning */}
        <div className="absolute top-[-10%] left-[-15%] w-[800px] h-[800px] rounded-full bg-accent/10 blur-[150px] animate-pulse-subtle" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[900px] h-[900px] rounded-full bg-ring/10 blur-[180px] animate-pulse-subtle animate-delay-700" />
        <div className="absolute top-[30%] right-[15%] w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px] animate-pulse-subtle animate-delay-300" />
        
        {/* Additional decorative elements */}
        <div className="absolute top-[15%] left-[20%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px] animate-pulse-subtle animate-delay-200" />
        <div className="absolute bottom-[25%] left-[10%] w-[400px] h-[400px] rounded-full bg-ring/8 blur-[100px] animate-pulse-subtle animate-delay-500" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-primary/10 animate-float"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>
        
        {/* Additional light effects */}
        <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-primary/5 to-transparent opacity-40" />
        
        {/* Animated gradient mesh - different for light/dark modes */}
        <div className={`absolute inset-0 opacity-30 ${theme === 'dark' ? 'bg-mesh-dark' : 'bg-mesh-light'}`} />
      </div>
      
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
