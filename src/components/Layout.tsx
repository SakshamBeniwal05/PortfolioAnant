import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [localTime, setLocalTime] = useState('00:00:00 LOCAL');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Listen to scroll events to trigger floating menu icon
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update IST time (Dehradun is in India, so IST UTC+5:30)
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      try {
        const timeString = new Intl.DateTimeFormat('en-US', options).format(new Date());
        setLocalTime(`${timeString} IST`);
      } catch (e) {
        // Fallback
        const now = new Date();
        setLocalTime(now.toLocaleTimeString() + ' LOCAL');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Play sound when menu FAB appears
  const isFABVisible = scrolled || menuOpen;
  const lastFABVisible = useRef(false);

  useEffect(() => {
    if (isFABVisible && !lastFABVisible.current) {
      const audio = new Audio('/Sfx/pop.mp3');
      audio.volume = 0.3;
      audio.play().catch(() => {});
    }
    lastFABVisible.current = isFABVisible;
  }, [isFABVisible]);

  // Global hover sound effect for all interactive elements
  useEffect(() => {
    let currentInteractive: Element | null = null;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], .magnetic-btn, .cursor-pointer, .card-sfx');
      
      if (interactive) {
        if (interactive !== currentInteractive) {
          currentInteractive = interactive;
          
          if (interactive.closest('.card-sfx')) {
            const audio = new Audio('/Sfx/cardhover.mp3');
            audio.volume = 0.2; // soft card hover volume
            audio.play().catch(() => {});
          } else {
            const audio = new Audio('/Sfx/hover.mp3');
            audio.volume = 0.15; // subtle hover volume
            audio.play().catch(() => {});
          }
        }
      } else {
        currentInteractive = null;
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = 'translate(0px, 0px)';
  };

  const navLinks = [
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="bg-portfolio-background text-portfolio-primary font-portfolio-body-md min-h-screen flex flex-col selection:bg-portfolio-primary selection:text-portfolio-background overflow-x-hidden antialiased relative">

      {/* Fixed Vertical Structural Grid Lines (Blueprint Layout) */}
      <div className="fixed top-0 bottom-0 left-[5vw] w-px bg-portfolio-soft-graphite pointer-events-none z-30" />
      <div className="fixed top-0 bottom-0 right-[5vw] w-px bg-portfolio-soft-graphite pointer-events-none z-30" />

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        aria-label="Toggle Menu"
        className={`fixed top-8 right-[calc(5vw+8px)] z-[70] w-14 h-14 rounded-full bg-portfolio-primary flex flex-col justify-center items-center shadow-lg cursor-pointer hover:scale-110 active:scale-95 magnetic-btn menu-fab-transition ${scrolled || menuOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-0 opacity-0 pointer-events-none'
          }`}
      >
        <span className={`w-6 h-[2px] bg-portfolio-background transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[4px]' : 'mb-[6px]'}`}></span>
        <span className={`w-6 h-[2px] bg-portfolio-background transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`}></span>
      </button>

      {/* Fullscreen Navigation Menu Overlay */}
      <div
        className={`fixed inset-0 bg-portfolio-deep-obsidian z-[60] flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <nav className="flex flex-col items-center space-y-6 md:space-y-10">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="font-portfolio-display-hero text-[10vw] md:text-[6vw] leading-none text-portfolio-primary hover:text-portfolio-muted-silver transition-colors duration-300"
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="font-portfolio-display-hero text-[10vw] md:text-[6vw] leading-none text-portfolio-primary hover:text-portfolio-muted-silver transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Header Navigation (Transparent, Absolute on page top) */}
      <header className="absolute top-0 left-0 w-full z-40 bg-transparent flex justify-between items-center px-portfolio-margin-page py-8">
        <Link
          to="/"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="font-portfolio-body-md text-portfolio-body-md text-portfolio-primary hover:opacity-80 transition-opacity tracking-wider p-2 magnetic-btn inline-block"
        >
          &copy; Anant Rana
        </Link>

        {/* Desktop Nav Links */}
        <div className="flex gap-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className={({ isActive }) =>
                `magnetic-btn inline-block p-2 text-portfolio-primary font-portfolio-nav-link text-portfolio-nav-link uppercase transition-all duration-300 tracking-widest pb-1 border-b ${isActive
                  ? 'border-portfolio-primary opacity-100 font-bold'
                  : 'border-transparent text-portfolio-muted-silver hover:text-portfolio-primary hover:border-portfolio-muted-silver opacity-80'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </header>

      {/* Main Content Area (No top-padding here, pages take full screen) */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Shared Footer */}
      <footer className="relative bg-portfolio-deep-obsidian flex flex-col items-start px-portfolio-margin-page w-full space-y-portfolio-stack-lg pt-20 pb-0 bg-portfolio-surface-container-lowest border-t border-portfolio-soft-graphite transition-all duration-500 ease-in-out overflow-hidden">
        {/* Footer Grid Intersections (+ Cross-hairs) */}
        <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] font-portfolio-label-mono text-[14px] text-portfolio-muted-silver z-50 pointer-events-none select-none leading-none">
          +
        </div>
        <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] font-portfolio-label-mono text-[14px] text-portfolio-muted-silver z-50 pointer-events-none select-none leading-none">
          +
        </div>

        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-portfolio-gutter pb-portfolio-stack-lg border-b border-portfolio-soft-graphite">
          <div className="flex flex-col gap-4">
            <Link to="/" className="font-portfolio-headline-lg text-[42px] md:text-[64px] text-portfolio-primary tracking-tighter hover:opacity-80 transition-opacity">
              ANANT RANA
            </Link>
            <p className="font-portfolio-body-md text-portfolio-body-md text-portfolio-muted-silver max-w-md leading-relaxed">
              Professional photography portfolio focusing on editorial minimalism and brutalist aesthetics.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-start md:items-end">
            <p className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver uppercase tracking-widest">Socials</p>
            <div className="flex flex-col gap-2 items-start md:items-end">
              <a
                href="https://www.instagram.com/anantrana1213/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-portfolio-body-md text-portfolio-body-md text-portfolio-muted-silver hover:text-portfolio-primary underline decoration-1 underline-offset-4 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/anant-rana-59213a33b/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-portfolio-body-md text-portfolio-body-md text-portfolio-muted-silver hover:text-portfolio-primary underline decoration-1 underline-offset-4 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:anantrana112@gmail.com"
                className="font-portfolio-body-md text-portfolio-body-md text-portfolio-muted-silver hover:text-portfolio-primary underline decoration-1 underline-offset-4 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center pt-4 gap-4 pb-20 md:pb-28">
          <p className="font-portfolio-body-md text-portfolio-body-md text-portfolio-muted-silver text-center md:text-left">
            &copy; {new Date().getFullYear()} ANANT RANA. ALL RIGHTS RESERVED.
          </p>
          <div className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span id="local-time">{localTime}</span>
          </div>
        </div>

      </footer>
    </div>
  );
};

export default Layout;
