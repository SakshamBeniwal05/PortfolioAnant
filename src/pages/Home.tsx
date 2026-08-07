import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
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

  const projects = [
    {
      id: '1',
      title: 'Nocturne',
      year: '2023',
      image: '/images/Data/stage2.jpeg',
      tags: ['Architecture', 'Editorial'],
    },
    {
      id: '2',
      title: 'Silence',
      year: '2024',
      image: '/images/Data/hanumankindcolor.png',
      tags: ['Portrait', 'Studio'],
    },
    {
      id: '3',
      title: 'Visions',
      year: '2024',
      image: '/images/Data/anuvjain_color.jpg',
      tags: ['Editorial', 'Commercial'],
    },
    {
      id: '4',
      title: 'Performers',
      year: '2024',
      image: '/images/Data/perforer.jpeg',
      tags: ['Events', 'Studio'],
    },
  ];

  // Duplicate the list once to allow a seamless infinite scroll
  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="h-[90vh] md:h-screen w-full flex flex-col justify-end px-portfolio-margin-page pb-portfolio-stack-lg relative overflow-hidden border-b border-portfolio-soft-graphite">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 bg-portfolio-deep-obsidian">
          <div
            className="w-full h-full bg-cover bg-center opacity-70  transition-all duration-1000 ease-in-out transform scale-100 hover:scale-105"
            style={{ backgroundImage: "url('/images/Profile/profile.png')" }}
          />
        </div>
        
        {/* Subheaders */}
        <div className="z-10 w-full flex justify-between items-end border-b border-portfolio-soft-graphite pb-4 mb-portfolio-stack-md relative">
          <div className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[10px] select-none font-portfolio-label-mono">+</div>
          <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[10px] select-none font-portfolio-label-mono">+</div>
          <p className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver uppercase tracking-widest">
            Photographer
          </p>
          <p className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver uppercase tracking-widest">
            Visual Storyteller
          </p>
        </div>

        {/* Display Hero Title */}
        <h1 className="font-portfolio-display-hero text-[14vw] md:text-portfolio-display-hero text-portfolio-primary z-10 w-full text-center tracking-tighter select-none leading-none pb-4">
          ANANT RANA
        </h1>
      </section>

      {/* Work Section (Horizontal Scrolling Marquee) */}
      <section className="pt-[10rem] pb-12 w-full relative overflow-hidden">
        {/* Section Header */}
        <div className="mx-portfolio-margin-page mb-portfolio-stack-lg flex justify-between items-end border-b border-portfolio-soft-graphite pb-4 relative">
          <div className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[10px] select-none font-portfolio-label-mono">+</div>
          <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[10px] select-none font-portfolio-label-mono">+</div>
          
          <h2 className="font-portfolio-headline-lg text-[32px] md:text-portfolio-headline-lg text-portfolio-primary tracking-tight">
            Recent Work
          </h2>
          <span className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver uppercase tracking-widest mb-2">
            Selected Archives
          </span>
        </div>

        {/* Marquee Track (Aligned to vertical grid lines and clipping content outside) */}
        <div className="mx-[5vw] overflow-hidden border border-portfolio-soft-graphite py-10 bg-portfolio-surface-container-lowest relative">
          <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
          <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
          <div className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
          <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>

          <div className="flex animate-marquee-ltr gap-8">
            {duplicatedProjects.map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                className="w-[300px] md:w-[420px] shrink-0 scale-90 border border-portfolio-soft-graphite p-6 relative bg-portfolio-background hover:border-portfolio-primary transition-all duration-300"
              >
                {/* Card Corners */}
                <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>
                <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>
                <div className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>
                <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>

                <Link to="/work" className="card-sfx">
                  <div className="flex justify-between items-center mb-portfolio-stack-sm">
                    <h3 className="font-portfolio-headline-md text-[20px] md:text-[24px] text-portfolio-primary hover:opacity-80 transition-opacity">
                      {project.title}
                    </h3>
                    <span className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver">{project.year}</span>
                  </div>
                  <div className="parallax-wrap w-full aspect-[4/3] bg-portfolio-surface-container-low mb-portfolio-stack-md border border-portfolio-soft-graphite">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover parallax-img grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-portfolio-label-mono text-[10px] md:text-portfolio-label-mono border border-portfolio-soft-graphite px-3 py-1 text-portfolio-muted-silver tracking-widest uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="mx-portfolio-margin-page flex justify-center py-portfolio-stack-lg border border-portfolio-soft-graphite mt-12 relative bg-portfolio-surface-container-lowest">
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
            View Full Archive
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
              arrow_right_alt
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
