import { Sun, Home, Wind, Car, Zap, Leaf } from 'lucide-react';
import { useMousePosition } from '@/hooks/useMousePosition';

const floatingIcons = [
  { Icon: Sun, className: 'top-[15%] left-[10%]', delay: 0, size: 'lg' },
  { Icon: Home, className: 'top-[25%] right-[15%]', delay: 0.5, size: 'md' },
  { Icon: Wind, className: 'bottom-[30%] left-[20%]', delay: 1, size: 'sm' },
  { Icon: Car, className: 'bottom-[20%] right-[10%]', delay: 1.5, size: 'md' },
  { Icon: Zap, className: 'top-[60%] left-[5%]', delay: 2, size: 'sm' },
  { Icon: Leaf, className: 'top-[40%] right-[25%]', delay: 2.5, size: 'lg' },
];

const sizeClasses = {
  sm: 'w-8 h-8 md:w-10 md:h-10',
  md: 'w-10 h-10 md:w-14 md:h-14',
  lg: 'w-12 h-12 md:w-16 md:h-16',
};

const containerSizes = {
  sm: 'w-14 h-14 md:w-20 md:h-20',
  md: 'w-18 h-18 md:w-24 md:h-24',
  lg: 'w-22 h-22 md:w-28 md:h-28',
};

export function FloatingElements() {
  const { normalizedX, normalizedY } = useMousePosition();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingIcons.map(({ Icon, className, delay, size }, index) => (
        <div
          key={index}
          className={`absolute ${className} ${containerSizes[size]} flex items-center justify-center`}
          style={{
            transform: `translate(${normalizedX * 20 * (index % 2 === 0 ? 1 : -1)}px, ${normalizedY * 20 * (index % 2 === 0 ? -1 : 1)}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <div
            className="relative animate-float"
            style={{ animationDelay: `${delay}s` }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-secondary/30 rounded-full blur-xl scale-150" />
            
            {/* Glass container */}
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 md:p-4 shadow-2xl">
              <Icon className={`${sizeClasses[size]} text-secondary drop-shadow-lg`} />
            </div>
          </div>
        </div>
      ))}

      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 md:w-2 md:h-2 bg-secondary/40 rounded-full animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}
