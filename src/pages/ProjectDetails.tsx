import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from './Work';

// Images mapping for each project
const projectImages: Record<string, string[]> = {
  '1': [
    '/images/Concert/WhatsApp Image 2026-08-06 at 23.11.30 (4).jpeg',
    '/images/Concert/WhatsApp Image 2026-08-06 at 23.11.31 (3).jpeg',
    '/images/Concert/WhatsApp Image 2026-08-06 at 23.11.31 (4).jpeg',
    '/images/Concert/WhatsApp Image 2026-08-06 at 23.11.32 (11).jpeg',
    '/images/Concert/WhatsApp Image 2026-08-06 at 23.11.32 (12).jpeg',
    '/images/Concert/WhatsApp Image 2026-08-06 at 23.11.32 (3).jpeg',
    '/images/Concert/WhatsApp Image 2026-08-06 at 23.11.32 (5).jpeg',
    '/images/Concert/WhatsApp Image 2026-08-06 at 23.11.32.jpeg',
    '/images/Concert/anuvjain.jpeg',
    '/images/Concert/anuvjain_color.jpg',
    '/images/Concert/hanumankind.jpeg',
    '/images/Concert/perforer.jpeg',
    '/images/Concert/stage.jpeg',
    '/images/Concert/stage2.jpeg',
  ],
  '2': [
    '/images/Weeding/IMG_1225.JPG',
    '/images/Weeding/IMG_1231.JPG',
    '/images/Weeding/IMG_1418.JPG',
    '/images/Weeding/IMG_1421.JPG',
    '/images/Weeding/_GEN2038.JPG',
    '/images/Weeding/_GEN2047.JPG',
    '/images/Weeding/_GEN2053.JPG',
  ],
  '3': [
    '/images/Weeding/IMG_1418.JPG',
    '/images/Weeding/IMG_1421.JPG',
    '/images/Weeding/_GEN2038.JPG',
    '/images/Weeding/_GEN2047.JPG',
    '/images/Concert/WhatsApp Image 2026-08-06 at 23.11.31 (3).jpeg',
    '/images/Concert/WhatsApp Image 2026-08-06 at 23.11.32 (11).jpeg',
    '/images/Concert/WhatsApp Image 2026-08-06 at 23.11.32 (12).jpeg',
  ],
  '4': [
    '/images/Concert/WhatsApp Image 2026-08-06 at 23.11.30 (4).jpeg',
    '/images/Concert/WhatsApp Image 2026-08-06 at 23.11.31 (4).jpeg',
    '/images/Concert/WhatsApp Image 2026-08-06 at 23.11.32 (3).jpeg',
    '/images/Concert/WhatsApp Image 2026-08-06 at 23.11.32 (5).jpeg',
    '/images/Weeding/IMG_1225.JPG',
    '/images/Weeding/IMG_1231.JPG',
    '/images/Weeding/_GEN2053.JPG',
  ],
};

// Uneven responsive grid configurations
const gridConfigs = [
  { span: 'md:col-span-8', aspect: 'aspect-[16/9]' },
  { span: 'md:col-span-4', aspect: 'aspect-[3/4]' },
  { span: 'md:col-span-4', aspect: 'aspect-[4/5]' },
  { span: 'md:col-span-8', aspect: 'aspect-[16/10]' },
  { span: 'md:col-span-6', aspect: 'aspect-square' },
  { span: 'md:col-span-6', aspect: 'aspect-[4/3]' },
  { span: 'md:col-span-12', aspect: 'aspect-[21/9]' },
];

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const project = projectsData.find((p) => p.id === id);
  const images = projectImages[id || ''] || [];

  // Reset scroll to top when page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="w-full max-w-[1920px] mx-auto px-portfolio-margin-page pt-40 pb-40 text-center">
        <h2 className="font-portfolio-headline-lg text-portfolio-primary mb-4">Project Not Found</h2>
        <button
          onClick={() => navigate('/work')}
          className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-primary border border-portfolio-soft-graphite px-6 py-3 uppercase tracking-widest hover:bg-portfolio-primary hover:text-portfolio-background transition-colors cursor-pointer"
        >
          Back to Work
        </button>
      </div>
    );
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'translate(0px, 0px)';
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto px-portfolio-margin-page pt-32 md:pt-40 pb-portfolio-section-gap relative">
      
      {/* Symmetrical Back button and main page content container which dims */}
      <div className={`transition-all duration-300 ${selectedImage ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
        {/* Floating Symmetrical Back Button */}
        <button
          onClick={() => navigate(-1)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          aria-label="Back to Work"
          className="fixed top-8 left-4 md:left-[calc(2.5vw-28px)] z-[70] w-14 h-14 rounded-full bg-portfolio-primary text-portfolio-background flex justify-center items-center shadow-lg cursor-pointer hover:scale-110 active:scale-95 magnetic-btn menu-fab-transition"
        >
          <span className="material-symbols-outlined font-bold text-[24px]">arrow_back</span>
        </button>

        {/* Page Header */}
        <div className="w-full mb-portfolio-section-gap mt-portfolio-stack-lg border border-portfolio-soft-graphite p-8 relative bg-portfolio-surface-container-lowest flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0">
          {/* Intersection markers */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center leading-none text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
          <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center leading-none text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
          <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-4 h-4 flex items-center justify-center leading-none text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-4 h-4 flex items-center justify-center leading-none text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>

          <div>
            <span className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver block mb-2 uppercase tracking-widest">
              {project.subtext}
            </span>
            <h1 className="font-portfolio-display-hero text-[8vw] md:text-[5vw] text-portfolio-primary uppercase text-left leading-none tracking-tighter select-none">
              {project.title}
            </h1>
          </div>
          <div className="flex flex-col items-start md:items-end font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver gap-1">
            <span className="uppercase text-portfolio-primary font-bold tracking-widest">{project.category}</span>
            <span>Archive © {project.year}</span>
          </div>
        </div>

        {/* Asymmetric Responsive Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-portfolio-section-gap gap-x-portfolio-gutter items-stretch">
          {images.map((imgSrc, idx) => {
            let config = gridConfigs[idx % gridConfigs.length];
            if (imgSrc.includes('IMG_1418.JPG') || imgSrc.includes('IMG_1421.JPG')) {
              config = { span: 'md:col-span-6', aspect: 'aspect-square' };
            } else if (imgSrc.includes('_GEN2053.JPG')) {
              config = { span: 'md:col-span-6', aspect: 'aspect-[3/4]' };
            }
            return (
              <div
                key={idx}
                onClick={() => setSelectedImage(imgSrc)}
                className={`${config.span} border border-portfolio-soft-graphite p-4 relative bg-portfolio-surface-container-lowest overflow-hidden group cursor-zoom-in`}
              >
                {/* Corner Markers */}
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center leading-none text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>
                <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center leading-none text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>
                <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-4 h-4 flex items-center justify-center leading-none text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-4 h-4 flex items-center justify-center leading-none text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>

                <div className={`w-full h-full overflow-hidden ${config.aspect}`}>
                  <img
                    src={imgSrc}
                    alt={`${project.title} - Visual Frame ${idx + 1}`}
                    className="w-full h-full object-cover transition-all duration-1000 ease-in-out transform group-hover:scale-105"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Pop Modal */}
      <div
        onClick={() => setSelectedImage(null)}
        className={`fixed inset-0 z-[100] bg-portfolio-background/60 backdrop-blur-sm flex items-center justify-center cursor-zoom-out select-none p-4 transition-all duration-300 ease-in-out ${selectedImage ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div 
          className={`relative border border-portfolio-soft-graphite p-6 bg-portfolio-surface-container-lowest max-w-[90vw] max-h-[85vh] shadow-2xl transition-all duration-300 ease-in-out ${selectedImage ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}
        >
          {/* Corner Markers */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center leading-none text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
          <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center leading-none text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
          <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-4 h-4 flex items-center justify-center leading-none text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-4 h-4 flex items-center justify-center leading-none text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
          
          <img
            src={selectedImage || ''}
            alt="Expanded view"
            className="max-w-full max-h-[70vh] md:max-h-[75vh] object-contain pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
