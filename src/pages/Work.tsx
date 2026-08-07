import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  category: 'Portraits' | 'Commercial' | 'Events';
  subtext: string;
  image: string;
  year: string;
  layoutClass: string;
  aspectClass: string;
}

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Nocturne',
    category: 'Commercial',
    subtext: '01 — Commercial / Architecture',
    image: '/images/Data/stage2.jpeg',
    year: '2023',
    layoutClass: 'md:col-span-6',
    aspectClass: 'aspect-[4/3] w-full',
  },
  {
    id: '2',
    title: 'Silence',
    category: 'Portraits',
    subtext: '02 — Portraits / Studio',
    image: '/images/Data/hanumankindcolor.png',
    year: '2024',
    layoutClass: 'md:col-span-6',
    aspectClass: 'aspect-[4/3] w-full',
  },
  {
    id: '3',
    title: 'Visions',
    category: 'Portraits',
    subtext: '03 — Portraits / Editorial',
    image: '/images/Data/anuvjain_color.jpg',
    year: '2024',
    layoutClass: 'md:col-span-6',
    aspectClass: 'aspect-[4/3] w-full',
  },
  {
    id: '4',
    title: 'Performers',
    category: 'Events',
    subtext: '04 — Events / Studio',
    image: '/images/Data/perforer.jpeg',
    year: '2024',
    layoutClass: 'md:col-span-6',
    aspectClass: 'aspect-[4/3] w-full',
  },
];

const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Portraits' | 'Commercial' | 'Events'>('All');

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = 'translate(0px, 0px)';
  };


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
          <article
            key={project.id}
            className={`${project.layoutClass} group cursor-pointer border border-portfolio-soft-graphite p-6 relative bg-portfolio-surface-container-lowest card-sfx`}
          >
            {/* Corner Markers */}
            <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
            <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
            <div className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
            <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>

            <div className={`parallax-wrap w-full bg-portfolio-surface-container-low mb-portfolio-stack-md border border-portfolio-soft-graphite ${project.aspectClass}`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover parallax-img grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start pt-2 gap-2 border-t border-portfolio-soft-graphite pt-4 mt-2">
              <div>
                <span className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver block mb-1 uppercase tracking-wider">
                  {project.subtext}
                </span>
                <h2 className="font-portfolio-headline-md text-[24px] md:text-portfolio-headline-md text-portfolio-primary group-hover:opacity-75 transition-opacity duration-300">
                  {project.title}
                </h2>
              </div>
              <span className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver mt-1">
                {project.year}
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Load More CTA */}
      <div className="w-full flex justify-center mt-portfolio-section-gap border border-portfolio-soft-graphite py-16 relative bg-portfolio-surface-container-lowest">
        <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
        <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
        <div className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
        <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
        <Link
          to="/work"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="magnetic-btn font-portfolio-nav-link text-portfolio-nav-link uppercase text-portfolio-primary border border-portfolio-soft-graphite px-8 py-4 hover:bg-portfolio-primary hover:text-portfolio-background transition-colors tracking-widest inline-flex items-center gap-2"
        >
          Load More Works
        </Link>
      </div>
    </div>
  );
};

export default Work;
