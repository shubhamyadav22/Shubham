
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  animation?: 'typewriter' | 'fade-in' | 'fade-in-up' | 'letter-reveal';
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  once = true,
  tag = 'h1',
  animation = 'typewriter',
  delay = 0,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.disconnect();
          }
        } else {
          if (!once && hasAnimated) {
            setIsInView(false);
          }
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`animated-text-${text.substring(0, 10)}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [text, once, hasAnimated]);

  useEffect(() => {
    if (isInView && animation === 'typewriter') {
      setDisplayText('');
      let currentText = '';
      const interval = setInterval(() => {
        if (currentText.length < text.length) {
          currentText = text.substring(0, currentText.length + 1);
          setDisplayText(currentText);
        } else {
          clearInterval(interval);
          setHasAnimated(true);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isInView, text, animation]);

  const getAnimationClass = () => {
    if (!isInView) return '';
    switch (animation) {
      case 'fade-in':
        return 'animate-fade-in';
      case 'fade-in-up':
        return 'animate-fade-in';
      case 'letter-reveal':
        return 'opacity-100';
      default:
        return '';
    }
  };

  const renderLetterAnimation = () => {
    if (animation !== 'letter-reveal') return null;
    
    return text.split('').map((letter, index) => (
      <span
        key={index}
        className={`inline-block transition-all duration-300 opacity-0 transform translate-y-2`}
        style={{
          animationDelay: `${delay + index * 30}ms`,
          animation: isInView ? `fade-in 0.5s forwards ${delay + index * 30}ms` : 'none',
        }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ));
  };

  const TagName = tag as keyof JSX.IntrinsicElements;

  return (
    <TagName
      id={`animated-text-${text.substring(0, 10)}`}
      className={cn(className, getAnimationClass())}
      style={delay > 0 ? { animationDelay: `${delay}ms` } : {}}
    >
      {animation === 'typewriter' ? displayText : animation === 'letter-reveal' ? renderLetterAnimation() : text}
    </TagName>
  );
};

export default AnimatedText;
