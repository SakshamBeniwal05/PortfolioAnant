import React from 'react';

const About: React.FC = () => {
  return (
    <div className="w-full max-w-[1920px] mx-auto pt-32 md:pt-40 pb-24">
      {/* Hero Profile Section */}
      <section className="px-portfolio-margin-page mb-portfolio-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-portfolio-gutter items-stretch">
          {/* Image */}
          <div className="md:col-span-6 relative group overflow-hidden border border-portfolio-soft-graphite p-4 bg-portfolio-surface-container-lowest">
            {/* Corner crosses */}
            <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
            <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
            <div className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
            <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>

            <img
              src="/images/Profile/profile.png"
              alt="Anant Rana Portrait"
              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-105"
            />
          </div>
          {/* Text Bio block */}
          <div className="md:col-span-6 flex flex-col justify-between border border-portfolio-soft-graphite p-8 relative bg-portfolio-surface-container-lowest mt-8 md:mt-0">
            {/* Corner crosses */}
            <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
            <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
            <div className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
            <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>

            <div>
              <h1 className="font-portfolio-headline-lg text-[36px] md:text-portfolio-headline-lg text-portfolio-primary mb-portfolio-stack-md leading-tight">
                Visualizing the Unseen.
              </h1>
              <div className="font-portfolio-body-lg text-portfolio-body-lg text-portfolio-muted-silver space-y-4 max-w-prose">
                <p>
                  Creative and detail-oriented Photographer with over 3.5 years of experience capturing high-quality images across various styles, including portraits, events, and commercial shoots.
                </p>
                <p>
                  Skilled in camera handling, lighting techniques, and photo editing software. Passionate about storytelling through visuals and committed to delivering exceptional results that meet client expectations.
                </p>
              </div>
            </div>
            
            <div className="border-t border-portfolio-soft-graphite pt-6 mt-6 font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver flex justify-between uppercase">
              <span>Photography Portfolio</span>
              <span>IST (India)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education (Asymmetric Split) */}
      <section className="px-portfolio-margin-page mb-portfolio-section-gap border-t border-portfolio-soft-graphite pt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-portfolio-gutter">
          {/* Education Block */}
          <div className="md:col-span-6 border border-portfolio-soft-graphite p-8 relative bg-portfolio-surface-container-lowest space-y-8">
            {/* Corner crosses */}
            <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
            <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
            <div className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
            <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>

            <div>
              <span className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver uppercase block mb-6 tracking-widest border-b border-portfolio-soft-graphite pb-2">
                Education
              </span>
              <h3 className="font-portfolio-headline-md text-[24px] md:text-portfolio-headline-md text-portfolio-primary mb-2">
                Graphic Era Hill University
              </h3>
              <p className="font-portfolio-body-md text-portfolio-body-md text-portfolio-muted-silver">
                B.Sc. in Animation &amp; Gaming
              </p>
              <p className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-surface-tint mt-2">
                2022 - 2025
              </p>
            </div>
            
            <div className="border-t border-portfolio-soft-graphite pt-6">
              <h4 className="font-portfolio-headline-md text-[20px] text-portfolio-primary mb-2">
                Senior Secondary (Class XII)
              </h4>
              <p className="font-portfolio-body-md text-portfolio-body-md text-portfolio-muted-silver">
                CBSE Board
              </p>
              <p className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-surface-tint mt-2">
                Completed: 2022
              </p>
            </div>

            <div className="border-t border-portfolio-soft-graphite pt-6">
              <h4 className="font-portfolio-headline-md text-[20px] text-portfolio-primary mb-2">
                Secondary School (Class X)
              </h4>
              <p className="font-portfolio-body-md text-portfolio-body-md text-portfolio-muted-silver">
                CBSE Board
              </p>
              <p className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-surface-tint mt-2">
                Completed: 2020
              </p>
            </div>
          </div>

          {/* Experience Block */}
          <div className="md:col-span-6 border border-portfolio-soft-graphite p-8 relative bg-portfolio-surface-container-lowest space-y-8">
            {/* Corner crosses */}
            <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
            <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
            <div className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
            <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>

            <div>
              <span className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver uppercase block mb-6 tracking-widest border-b border-portfolio-soft-graphite pb-2">
                Experience
              </span>
              <h3 className="font-portfolio-headline-md text-[24px] md:text-portfolio-headline-md text-portfolio-primary mb-2">
                Digital World STUDIO
              </h3>
              <p className="font-portfolio-body-md text-portfolio-body-md text-portfolio-muted-silver">
                Professional Photographer &amp; Photo Editor
              </p>
              <p className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-surface-tint mt-2">
                2022 - PRESENT
              </p>
              
              <div className="font-portfolio-body-md text-portfolio-body-md text-portfolio-muted-silver mt-6 space-y-4 leading-relaxed border-t border-portfolio-soft-graphite pt-6">
                <p className="font-bold text-portfolio-primary uppercase text-[14px] tracking-wider mb-2">Key Competencies:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Professional photoshoots, lighting configurations, and asymmetry layouts.</li>
                  <li>Composition and visual storytelling across portraits, commercial, and events.</li>
                  <li>Advanced photo editing and retouching in Adobe Photoshop and Lightroom.</li>
                  <li>Full equipment and gear lifecycle management.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Arsenal (Bento Grid) */}
      <section className="px-portfolio-margin-page mb-portfolio-section-gap">
        <div className="border-t border-portfolio-soft-graphite pt-16">
          <div className="mb-portfolio-stack-lg flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <h2 className="font-portfolio-headline-lg text-[32px] md:text-portfolio-headline-lg text-portfolio-primary tracking-tight leading-none">
              Technical<br />Arsenal.
            </h2>
            <span className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver uppercase tracking-widest mb-2">
              Primary Gear Setup
            </span>
          </div>

          {/* Bento Grid with borders & corners */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-transparent">
            {/* Nikon Z50 Body */}
            <div className="bg-portfolio-surface-container-lowest border border-portfolio-soft-graphite p-6 flex flex-col justify-start gap-4 group min-h-[280px] relative transition-colors hover:bg-portfolio-surface-container-low duration-300 card-sfx">
              <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>
              <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>
              <div className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>
              <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>

              <div className="flex flex-col gap-10">
                <span className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-surface-tint uppercase group-hover:text-portfolio-primary transition-colors tracking-widest">
                  Primary Body
                </span>
                <h4 className="font-portfolio-headline-md text-[24px] text-portfolio-primary">Nikon Z50 &amp; D3500</h4>
              </div>
              <p className="font-portfolio-body-md text-portfolio-body-md text-portfolio-muted-silver leading-relaxed">
                Compact and high-performance bodies for diverse shooting environments.
              </p>
            </div>

            {/* Canon EOS Body */}
            <div className="bg-portfolio-surface-container-lowest border border-portfolio-soft-graphite p-6 flex flex-col justify-start gap-4 group min-h-[280px] relative transition-colors hover:bg-portfolio-surface-container-low duration-300 card-sfx">
              <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>
              <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>
              <div className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>
              <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>

              <div className="flex flex-col gap-10">
                <span className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-surface-tint uppercase group-hover:text-portfolio-primary transition-colors tracking-widest">
                  Secondary Body
                </span>
                <h4 className="font-portfolio-headline-md text-[24px] text-portfolio-primary">Canon EOS 700D &amp; 1300D</h4>
              </div>
              <p className="font-portfolio-body-md text-portfolio-body-md text-portfolio-muted-silver leading-relaxed">
                Reliable workhorses utilized for backup, education, and portrait setups.
              </p>
            </div>

            {/* Prime Lenses & Zooms */}
            <div className="bg-portfolio-surface-container-lowest border border-portfolio-soft-graphite p-6 flex flex-col justify-start gap-4 group min-h-[280px] relative transition-colors hover:bg-portfolio-surface-container-low duration-300 card-sfx">
              <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>
              <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>
              <div className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>
              <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>

              <div className="flex flex-col gap-10"> 
                <span className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-surface-tint uppercase group-hover:text-portfolio-primary transition-colors tracking-widest">
                  Lenses (Glass)
                </span>
                <h4 className="font-portfolio-headline-md text-[24px] text-portfolio-primary">Prime &amp; Zoom Setup</h4>
              </div>
              <ul className="font-portfolio-body-md text-portfolio-body-md text-portfolio-muted-silver space-y-1 font-portfolio-label-mono">
                <li>50mm Portrait Prime</li>
                <li>16-35mm Wide-Angle</li>
                <li>24-70mm Standard Zoom</li>
                <li>70-200mm Telephoto Zoom</li>
              </ul>
            </div>

            {/* Certifications & Logistics */}
            <div className="bg-portfolio-surface-container-lowest border border-portfolio-soft-graphite p-6 flex flex-col justify-start gap-4 group min-h-[280px] relative transition-colors hover:bg-portfolio-surface-container-low duration-300 card-sfx">
              <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>
              <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>
              <div className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>
              <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[10px] font-portfolio-label-mono select-none pointer-events-none">+</div>

              <div className="flex flex-col gap-10">
                <span className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-surface-tint uppercase group-hover:text-portfolio-primary transition-colors tracking-widest">
                  Certifications
                </span>
                <h4 className="font-portfolio-headline-md text-[24px] text-portfolio-primary">Professional Credentials</h4>
              </div>
              <ul className="font-portfolio-body-md text-portfolio-body-md text-portfolio-muted-silver space-y-1 font-portfolio-label-mono">
                <li>STCW Certified</li>
                <li>CDC Credentials</li>
                <li>INDOS Registered</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Proficiencies Tag List */}
      <section className="px-portfolio-margin-page border-t border-portfolio-soft-graphite pt-24">
        <div className="flex flex-col md:flex-row justify-between items-start border border-portfolio-soft-graphite p-8 relative bg-portfolio-surface-container-lowest">
          {/* Corner crosses */}
          <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
          <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
          <div className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
          <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>

          <h2 className="font-portfolio-headline-md text-[24px] md:text-portfolio-headline-md text-portfolio-primary mb-6 md:mb-0 w-full md:w-1/3">
            Core Proficiencies
          </h2>
          <div className="w-full md:w-2/3 flex flex-wrap gap-4">
            {[
              'DSLR & Mirrorless',
              'Portrait & Event',
              'Adobe Photoshop',
              'Adobe Lightroom',
              'Retouching',
              'Color Correction',
              'Studio Lighting',
              'Asymmetry Composition',
              'Animation & Gaming Context'
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 border border-portfolio-soft-graphite font-portfolio-label-mono text-portfolio-label-mono text-portfolio-primary uppercase hover:bg-portfolio-soft-graphite hover:border-portfolio-primary transition-colors duration-300 cursor-default card-sfx"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
