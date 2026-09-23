import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export interface Project {
  id: string;
  title: string;
  category: 'Portraits' | 'Commercial' | 'Events';
  subtext: string;
  image: string;
  layoutClass: string;
  aspectClass: string;
  tags: string[];
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Concert',
    category: 'Commercial',
    subtext: '01 — Boisterous',
    image: '/images/Concert/WhatsApp Image 2026-08-06 at 23.11.32 (11).jpeg',
    layoutClass: 'md:col-span-6',
    aspectClass: 'aspect-[4/3] w-full',
    tags: ['Live Event', 'Commercial'],
  },
  {
    id: '2',
    title: 'Weeding',
    category: 'Events',
    subtext: '02 — Love Unscripted',
    image: '/images/Weeding/_GEN2053.JPG',
    layoutClass: 'md:col-span-6',
    aspectClass: 'aspect-[4/3] w-full',
    tags: ['Portrait', 'Studio'],
  },
  {
    id: '3',
    title: 'Lanscapes',
    category: 'Portraits',
    subtext: '03 — Nature and Horizons',
    image: '/images/Landscape/WhatsApp Image 2026-09-11 at 00.59.46 (1).jpeg',
    layoutClass: 'md:col-span-6',
    aspectClass: 'aspect-[4/3] w-full',
    tags: ['Editorial', 'Commercial'],
  },
  {
    id: '4',
    title: 'Performers',
    category: 'Events',
    subtext: '04 — Events / Studio',
    image:
      '/images/Concert/WhatsApp Image 2026-08-06 at 23.11.31 (3).jpeg',
    layoutClass: 'md:col-span-6',
    aspectClass: 'aspect-[4/3] w-full',
    tags: ['Events', 'Studio'],
  },
];

const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Portraits' | 'Commercial' | 'Events'>('All')

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  const filterOptions = ['All', 'Portraits', 'Commercial', 'Events'] as const;

  return (
    <div className="w-full max-w-[1920px] mx-auto px-portfolio-margin-page pt-32 md:pt-40 pb-portfolio-section-gap">
      {/* Page Header */}
      <div className="w-full mb-portfolio-section-gap mt-portfolio-stack-lg border border-portfolio-soft-graphite p-8 relative bg-portfolio-surface-container-lowest">
        {/* Intersection markers */}
        <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
        <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
        <div className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
        <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>

        <h1 className="font-portfolio-display-hero text-[10vw] md:text-portfolio-display-hero text-portfolio-primary uppercase text-left leading-none tracking-tighter select-none mb-6">
          Selected<br />Works
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full border-t border-portfolio-soft-graphite pt-6 gap-6 relative">
          <p className="font-portfolio-body-lg text-portfolio-body-lg text-portfolio-muted-silver max-w-md leading-relaxed">
            A curation of visual narratives exploring light, structure, and human connection across varying disciplines.
          </p>

          {/* Interactive Filters */}
          <div className="flex flex-wrap space-x-4 border border-portfolio-soft-graphite p-2 bg-portfolio-background relative">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setActiveFilter(option)}
                className={`font-portfolio-label-mono text-portfolio-label-mono tracking-widest px-4 py-2 cursor-pointer transition-all duration-300 uppercase border ${activeFilter === option
                  ? 'text-portfolio-primary border-portfolio-primary bg-portfolio-soft-graphite font-bold'
                  : 'text-portfolio-muted-silver border-transparent hover:text-portfolio-primary'
                  }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid (Asymmetrical) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-portfolio-section-gap gap-x-portfolio-gutter">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className={`${project.layoutClass} group cursor-pointer border border-portfolio-soft-graphite p-6 relative bg-portfolio-surface-container-lowest card-sfx block`}
          >
            {/* Corner Markers */}
            <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
            <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
            <div className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
            <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>

            <div className={`parallax-wrap w-full bg-portfolio-surface-container-low mb-portfolio-stack-md border border-portfolio-soft-graphite overflow-hidden ${project.aspectClass}`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover parallax-img transition-all duration-700 ease-in-out transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start gap-2 border-t border-portfolio-soft-graphite pt-4 mt-2">
              <div>
                <span className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver block mb-1 uppercase tracking-wider">
                  {project.subtext}
                </span>
                <h2 className="font-portfolio-headline-md text-[24px] md:text-portfolio-headline-md text-portfolio-primary group-hover:opacity-75 transition-opacity duration-300">
                  {project.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
