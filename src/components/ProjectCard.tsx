import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  layout: 'left' | 'right';
}

const ProjectCard = ({ title, description, image, layout }: ProjectCardProps) => {
  return (
    <div
      className={`glass-card p-8 md:p-12 flex flex-col ${
        layout === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-8 items-center hover:border-primary/30 transition-all duration-500 group`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/10 aspect-[4/3] flex items-center justify-center">
        <div className="w-full h-full bg-gradient-to-br from-muted/30 to-secondary/50 flex items-center justify-center">
          <span className="text-6xl opacity-20">{title.charAt(0)}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="btn-secondary flex items-center gap-2">
            Learn More
          </button>
          <button className="btn-primary flex items-center gap-2">
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
