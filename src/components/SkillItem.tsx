
import { useState, useEffect } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);
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
    <div 
      ref={ref} 
      className="flex flex-col gap-2 p-3 -mx-2 rounded-lg transition-all duration-300 hover:bg-secondary/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && (
            <div className={`transition-all duration-500 ${isHovered ? 'text-accent scale-125' : 'text-primary'}`}>
              {icon}
            </div>
          )}
          <span className={`font-medium transition-all duration-300 ${isHovered ? 'text-gradient font-semibold' : ''}`}>
            {name}
          </span>
        </div>
        <span className={`text-sm transition-all duration-300 ${isHovered ? 'font-semibold text-accent' : 'text-muted-foreground'}`}>
          {progress}%
        </span>
      </div>
      
      <div className="skill-bar">
        <div
          className={`skill-progress ${isHovered ? 'shadow-[0_0_10px_rgba(59,130,246,0.5)]' : ''}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default SkillItem;
