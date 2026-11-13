interface OrganicDividerProps {
  fromColor?: string;
  toColor?: string;
  className?: string;
  flip?: boolean;
}

export function OrganicDivider({
  fromColor = '#F4EAE0',
  toColor = '#382116',
  className = '',
  flip = false,
}: OrganicDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height: 120, marginBottom: -1, transform: flip ? 'scaleX(-1)' : undefined }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 L0,60 C120,100 240,20 360,55 C480,90 600,10 720,45 C840,80 960,15 1080,50 C1200,85 1320,30 1440,65 L1440,0 Z"
          fill={fromColor}
        />
        <path
          d="M0,120 L0,60 C120,100 240,20 360,55 C480,90 600,10 720,45 C840,80 960,15 1080,50 C1200,85 1320,30 1440,65 L1440,120 Z"
          fill={toColor}
        />
        {/* Champagne gold highlight edge */}
        <path
          d="M0,60 C120,100 240,20 360,55 C480,90 600,10 720,45 C840,80 960,15 1080,50 C1200,85 1320,30 1440,65"
          fill="none"
          stroke="rgba(198,154,106,0.5)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
