import { LucideIcon } from 'lucide-react';

interface FloatingIcon {
  Icon: LucideIcon;
  position: string;
  delay: string;
  color: 'primary' | 'accent';
  size?: 'sm' | 'md';
}

interface SectionFloatingIconsProps {
  icons: FloatingIcon[];
}

export function SectionFloatingIcons({ icons }: SectionFloatingIconsProps) {
  const sizeClasses = { sm: 'w-4 h-4', md: 'w-5 h-5' };
  const containerSizes = { sm: 'w-8 h-8', md: 'w-10 h-10' };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map(({ Icon, position, delay, color, size = 'sm' }, index) => (
        <div
          key={index}
          className={`absolute ${position} animate-float opacity-20`}
          style={{ animationDelay: delay, animationDuration: `${8 + index * 2}s` }}
        >
          <div className={`${containerSizes[size]} rounded-xl ${color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} flex items-center justify-center`}>
            <Icon className={`${sizeClasses[size]} ${color === 'primary' ? 'text-primary/60' : 'text-accent/60'}`} />
          </div>
        </div>
      ))}
    </div>
  );
}
