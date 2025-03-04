
import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  direction?: 'left' | 'right';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  technologies,
  githubUrl,
  liveUrl,
  direction = 'left',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "w-full relative overflow-hidden rounded-2xl border border-border transition-all duration-500",
        isHovered ? "shadow-elevated transform -translate-y-1" : "shadow-subtle"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row md:items-stretch h-full">
        <div className="relative md:w-1/2 overflow-hidden">
          <div className="aspect-video md:aspect-auto md:h-full bg-muted">
            <img
              src={imageSrc}
              alt={title}
              className={cn(
                "object-cover w-full h-full transition-all duration-700",
                isHovered ? "scale-110 brightness-110" : "scale-100"
              )}
            />
          </div>
        </div>

        <div className="p-6 md:p-8 flex flex-col justify-between md:w-1/2">
          <div>
            <h3 className={cn(
              "font-display text-xl font-medium mb-2 transition-colors duration-300",
              isHovered ? "text-gradient" : ""
            )}>{title}</h3>
            <p className="text-muted-foreground mb-4">{description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className={cn(
                    "text-xs font-medium px-3 py-1 rounded-full transition-all duration-300",
                    isHovered 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary text-secondary-foreground"
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {githubUrl && (
              <a
                href={'https://github.com/shubhamyadav22'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
