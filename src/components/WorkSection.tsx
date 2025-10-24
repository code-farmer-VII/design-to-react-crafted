import { useState } from 'react';
import ProjectCard from './ProjectCard';

const WorkSection = () => {
  const [activeFilter, setActiveFilter] = useState('UI/UX Design [8]');

  const filters = [
    'All Work [20]',
    'UI/UX Design [8]',
    'Digital Marketing [5]',
    'Branding [5]'
  ];

  const projects: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
    layout: 'left' | 'right';
  }> = [
    {
      id: 1,
      title: 'Flintstone Homes',
      description: 'Created a digital presence that builds trust and connects with homebuyers.',
      image: 'project1',
      layout: 'left'
    },
    {
      id: 2,
      title: 'Meneshaye',
      description: 'Designed a playful brand experience that inspires imagination and learning in kids.',
      image: 'project2',
      layout: 'right'
    },
    {
      id: 3,
      title: 'Jenboro Real Estate',
      description: 'Developed a refined brand identity that mirrors modern urban living.',
      image: 'project3',
      layout: 'left'
    },
    {
      id: 4,
      title: 'Khilx Academy',
      description: 'Enhanced online presence with creative curriculums that engage and educate aspiring learners.',
      image: 'project4',
      layout: 'right'
    }
  ];

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our <span className="text-primary">Work</span>
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(0,180,216,0.4)]'
                  : 'bg-secondary/30 text-muted-foreground border border-white/10 hover:border-primary/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
