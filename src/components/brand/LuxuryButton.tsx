import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';

interface LuxuryButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  showArrow?: boolean;
}

export const LuxuryButton = forwardRef<HTMLButtonElement, LuxuryButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon,
      showArrow = true,
      className,
      ...props
    },
    ref
  ) => {
    const base =
      'inline-flex items-center gap-3 font-sans font-medium rounded-full transition-all duration-200 select-none cursor-pointer';

    const variants = {
      primary:
        'bg-walnut text-ivory hover:bg-walnut-dark shadow-brand active:scale-[0.98]',
      outline:
        'border border-brand-border text-brand-text hover:border-walnut hover:text-walnut bg-transparent',
      ghost: 'text-brand-text-secondary hover:text-walnut',
    };

    const sizes = {
      sm: 'px-5 py-2.5 text-sm',
      md: 'px-7 py-3.5 text-sm',
      lg: 'px-8 py-4 text-base',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {showArrow && (
          <motion.span
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            className="shrink-0"
          >
            <ArrowRight size={15} strokeWidth={1.5} />
          </motion.span>
        )}
      </motion.button>
    );
  }
);

LuxuryButton.displayName = 'LuxuryButton';
