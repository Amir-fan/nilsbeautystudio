interface OrganicHeroMaskProps {
  imageSrc: string;
  imageAlt?: string;
  className?: string;
}

export function OrganicHeroMask({
  imageSrc,
  imageAlt = 'Nils Beauty Studio',
  className = '',
}: OrganicHeroMaskProps) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* SVG Definitions for responsive clip-path & metallic gradients */}
      <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
        <defs>
          {/* Responsive organic clip path (0 to 1 coordinates) */}
          <clipPath id="heroOrganicClip" clipPathUnits="objectBoundingBox">
            <path
              d="M 0.24,0
                 C 0.16,0.12 0.06,0.24 0.11,0.40
                 C 0.16,0.54 0.24,0.62 0.10,0.80
                 C 0.04,0.88 0.01,0.95 0,1
                 L 1,1
                 L 1,0
                 Z"
            />
          </clipPath>

          {/* Champagne gold metallic linear gradient */}
          <linearGradient id="champagneGoldGrad" x1="0%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#DFBF95" />
            <stop offset="25%" stopColor="#C69A6A" />
            <stop offset="50%" stopColor="#FFF1D6" />
            <stop offset="75%" stopColor="#B08555" />
            <stop offset="100%" stopColor="#C69A6A" />
          </linearGradient>

          {/* Subtle drop shadow for the gold highlight edge */}
          <filter id="goldEdgeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="-1" dy="2" stdDeviation="2.5" floodColor="#694026" floodOpacity="0.25" />
          </filter>
        </defs>
      </svg>

      {/* The clipped image container */}
      <div
        className="w-full h-full relative"
        style={{
          clipPath: 'url(#heroOrganicClip)',
          WebkitClipPath: 'url(#heroOrganicClip)',
        }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-700 hover:scale-[1.04]"
        />
        {/* Subtle warm ambient vignette inside the portrait */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 85% 15%, transparent 40%, rgba(36,20,14,0.3) 100%)',
          }}
        />
      </div>

      {/* Champagne Gold Highlight Boundary Overlay */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ filter: 'url(#goldEdgeGlow)' }}
      >
        <path
          d="M 24,0
             C 16,12 6,24 11,40
             C 16,54 24,62 10,80
             C 4,88 1,95 0,100"
          fill="none"
          stroke="url(#champagneGoldGrad)"
          strokeWidth="0.85"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

