# Project Rule: Audio Interface Restoration

When the user asks to **"audio interface website"** or requests to re-enable sound effects and the startup preloader, execute the following implementation plan to attach these back to the current layout component.

---

## 🛠️ Instructions for Re-attachment

Restore the following blocks of code inside [Layout.tsx](file:///d:/codes/codes/WEB%20development/Vaidh%20Stuff/Anant%20Portfolio/src/components/Layout.tsx) to reactivate preloading, entry blocking, and spatial audio events:

### 1. Add Preloader & Audio States & Hooks
Add these states and hooks back inside the `Layout` component function body, before other standard states:

```typescript
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [fadeExit, setFadeExit] = useState(false);
  const [isReadyToEnter, setIsReadyToEnter] = useState(false);

  // Preload Images and SFX Audio assets
  useEffect(() => {
    const imagesToPreload = [
      '/images/hero_bg.jpg',
      '/images/profile.jpg',
      '/images/Data/stage2.jpeg',
      '/images/Data/hanumankindcolor.png',
      '/images/Data/anuvjain_color.jpg',
      '/images/Data/perforer.jpeg',
    ];

    const audioToPreload = [
      '/Sfx/pop.mp3',
      '/Sfx/hover.mp3',
      '/Sfx/cardhover.mp3',
    ];

    let loadedCount = 0;
    const totalAssets = imagesToPreload.length + audioToPreload.length;

    const incrementProgress = () => {
      loadedCount++;
      const progress = Math.round((loadedCount / totalAssets) * 100);
      setLoadingProgress(progress);
      
      if (loadedCount >= totalAssets) {
        setTimeout(() => {
          setIsReadyToEnter(true);
        }, 600);
      }
    };

    // Preload Images
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = incrementProgress;
      img.onerror = incrementProgress;
    });

    // Preload Audio
    audioToPreload.forEach((src) => {
      const audio = new Audio();
      audio.src = src;
      audio.addEventListener('canplaythrough', incrementProgress, { once: true });
      audio.addEventListener('error', incrementProgress, { once: true });
      audio.load();
    });
  }, []);

  const handleEnter = () => {
    const audio = new Audio('/Sfx/pop.mp3');
    audio.volume = 0.4;
    audio.play().catch(() => {});
    
    setFadeExit(true);
    setTimeout(() => {
      setAssetsLoaded(true);
    }, 500);
  };
```

### 2. Add Audio SFX Hooks
Add these interaction-driven sound listeners before the mouse-move handling coordinates:

```typescript
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
```

### 3. Add Preloader UI Overlay Markup
Insert the preloader HTML right inside the return wrapper before the blueprint lines:

```tsx
      {/* Startup Preloader Overlay */}
      {!assetsLoaded && (
        <div className={`fixed inset-0 z-[100] bg-portfolio-background flex flex-col justify-between p-portfolio-margin-page font-portfolio-label-mono text-portfolio-primary select-none transition-all duration-500 ease-in-out ${fadeExit ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100'}`}>
          {/* Corner crosses */}
          <div className="absolute top-8 left-8 text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
          <div className="absolute top-8 right-8 text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
          <div className="absolute bottom-8 left-8 text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
          <div className="absolute bottom-8 right-8 text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>

          {/* Top Bar */}
          <div className="flex justify-between items-center w-full border-b border-portfolio-soft-graphite pb-4">
            <span>ANANT RANA</span>
            <span className="animate-pulse">INITIALIZING ARCHIVE</span>
          </div>

          {/* Middle Progress / Enter Archive Button */}
          <div className="flex flex-col items-center justify-center flex-grow py-20">
            {isReadyToEnter ? (
              <button
                onClick={handleEnter}
                className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-primary border border-portfolio-soft-graphite px-12 py-5 uppercase tracking-widest hover:bg-portfolio-primary hover:text-portfolio-background transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 animate-fade-in"
              >
                Enter Archive
              </button>
            ) : (
              <div className="flex flex-col items-center justify-center w-full">
                <div className="text-[14vw] md:text-[8vw] font-bold tracking-tighter leading-none mb-8">
                  {loadingProgress}%
                </div>
                
                {/* Brutalist Loading Bar */}
                <div className="w-full max-w-[400px] h-[3px] border border-portfolio-soft-graphite p-[1px] relative bg-portfolio-surface-container-lowest">
                  <div 
                    className="h-full bg-portfolio-primary transition-all duration-300 ease-out"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>
                
                <span className="text-portfolio-muted-silver text-[10px] uppercase tracking-widest mt-6">
                  Preloading Media &amp; Audio Assets
                </span>
              </div>
            )}
          </div>

          {/* Bottom Bar */}
          <div className="flex justify-between items-center w-full border-t border-portfolio-soft-graphite pt-4 text-portfolio-muted-silver">
            <span>&copy; 2026</span>
            <span>STANDBY</span>
          </div>
        </div>
      )}
```
