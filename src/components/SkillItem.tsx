
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

interface SkillItemProps {
  name: string;
  level: number; // 0-100
  icon?: React.ReactNode;
  delay?: number;
}

const SkillItem: React.FC<SkillItemProps> = ({
  name,
  level,
  icon,
  delay = 0,
}) => {
  const [progress, setProgress] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgress(level);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [inView, level, delay]);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && <div className="text-primary">{icon}</div>}
          <span className="font-medium">{name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{progress}%</span>
      </div>
      
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default SkillItem;
