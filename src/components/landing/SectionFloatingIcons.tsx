import { LucideIcon } from 'lucide-react';

interface FloatingIcon {
  Icon: LucideIcon;
  position: string;
  delay: string;
  color: 'primary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
}

interface SectionFloatingIconsProps {
  icons: FloatingIcon[];
  opacity?: number;
}

export function SectionFloatingIcons({ icons, opacity = 0.3 }: SectionFloatingIconsProps) {
  const sizeMap = { 
    sm: { icon: 16, container: 40 }, 
    md: { icon: 24, container: 56 }, 
    lg: { icon: 32, container: 72 } 
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map(({ Icon, position, delay, color, size = 'md' }, index) => {
        const { icon: iconSize, container: containerSize } = sizeMap[size];
        const isPrimary = color === 'primary';
        
        return (
          <div
            key={index}
            className={`absolute ${position} animate-float`}
            style={{ 
              animationDelay: delay, 
              animationDuration: `${10 + index * 3}s`,
              opacity 
            }}
          >
            <div 
              className="rounded-2xl backdrop-blur-sm flex items-center justify-center"
              style={{
                width: containerSize,
                height: containerSize,
                background: isPrimary 
                  ? 'linear-gradient(135deg, hsl(var(--primary)/0.2), hsl(var(--primary)/0.08))' 
                  : 'linear-gradient(135deg, hsl(var(--accent)/0.2), hsl(var(--accent)/0.08))',
                border: `1px solid ${isPrimary ? 'hsl(var(--primary)/0.25)' : 'hsl(var(--accent)/0.25)'}`,
                boxShadow: isPrimary 
                  ? '0 8px 32px -8px hsl(var(--primary)/0.2)' 
                  : '0 8px 32px -8px hsl(var(--accent)/0.2)'
              }}
            >
              <Icon 
                style={{ width: iconSize, height: iconSize }}
                className={isPrimary ? 'text-primary/60' : 'text-accent/60'} 
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
