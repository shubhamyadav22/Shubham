
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-grain">
      {/* Background gradient orbs - subtle animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] animate-pulse-subtle" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[600px] h-[600px] rounded-full bg-ring/5 blur-[100px] animate-pulse-subtle animate-delay-700" />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px] animate-pulse-subtle animate-delay-300" />
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
