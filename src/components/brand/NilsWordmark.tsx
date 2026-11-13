import { cn } from '@/lib/utils';

interface NilsWordmarkProps {
  variant?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function NilsWordmark({ variant = 'dark', className, size = 'md' }: NilsWordmarkProps) {
  const textColor = variant === 'light' ? '#FAF5F0' : '#24140E';
  const subColor = variant === 'light' ? 'rgba(250,245,240,0.75)' : '#694026';

  const sizes = {
    sm: { nils: 26, studio: 8 },
    md: { nils: 36, studio: 9.5 },
    lg: { nils: 52, studio: 12 },
  };

  const s = sizes[size];

  return (
    <div className={cn('flex flex-col select-none', className)}>
      <span
        className="font-serif font-medium leading-none tracking-[-0.02em]"
        style={{ fontSize: s.nils, color: textColor }}
      >
        Nils
      </span>
      <span
        className="uppercase tracking-[0.24em] font-sans font-semibold"
        style={{ fontSize: s.studio, color: subColor, marginTop: 3 }}
      >
        BEAUTY STUDIO
      </span>
    </div>
  );
}
