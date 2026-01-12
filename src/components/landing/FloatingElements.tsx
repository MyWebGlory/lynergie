import { Sun, Home, Wind, Car, Zap, Leaf } from 'lucide-react';
import { useMousePosition } from '@/hooks/useMousePosition';

const floatingIcons = [
  { Icon: Sun, className: 'top-[8%] left-[3%]', delay: '0s', size: 'lg' },
  { Icon: Home, className: 'top-[12%] right-[4%]', delay: '0.5s', size: 'md' },
  { Icon: Wind, className: 'bottom-[30%] left-[4%]', delay: '1s', size: 'md' },
  { Icon: Car, className: 'bottom-[12%] right-[3%]', delay: '1.5s', size: 'lg' },
  { Icon: Zap, className: 'top-[50%] left-[2%]', delay: '2s', size: 'sm' },
  { Icon: Leaf, className: 'top-[35%] right-[2%]', delay: '2.5s', size: 'sm' },
];

const sizeClasses = { sm: 'w-5 h-5', md: 'w-7 h-7', lg: 'w-9 h-9' };
const containerSizes = { sm: 'w-12 h-12', md: 'w-16 h-16', lg: 'w-20 h-20' };

export function FloatingElements() {
  const { normalizedX, normalizedY } = useMousePosition();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {floatingIcons.map(({ Icon, className, delay, size }, index) => (
        <div
          key={index}
          className={`absolute ${className}`}
          style={{
            transform: `translate(${normalizedX * 8}px, ${normalizedY * 8}px)`,
            transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <div 
            className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-glow-pulse" 
            style={{ animationDelay: delay }} 
          />
          <div 
            className={`relative ${containerSizes[size as keyof typeof containerSizes]} glass rounded-2xl flex items-center justify-center animate-float`}
            style={{ animationDelay: delay }}
          >
            <Icon className={`${sizeClasses[size as keyof typeof sizeClasses]} text-primary drop-shadow-lg`} />
          </div>
        </div>
      ))}

      {[...Array(12)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-primary/40 rounded-full animate-particle"
          style={{ 
            left: `${10 + (i * 7)}%`, 
            bottom: '-5%', 
            animationDelay: `${i * 1.2}s`, 
            animationDuration: `${12 + (i % 5) * 2}s` 
          }}
        />
      ))}
    </div>
  );
}
