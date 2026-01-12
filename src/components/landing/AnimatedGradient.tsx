export function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main animated gradient mesh */}
      <div className="absolute inset-0 bg-gradient-mesh animate-gradient-shift" />
      
      {/* Gradient orbs with slow animations */}
      <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-primary/20 rounded-full blur-[120px] animate-orb-1" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-accent/15 rounded-full blur-[100px] animate-orb-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[80px] animate-orb-3" />
      
      {/* Subtle accent orb */}
      <div className="absolute top-[30%] right-[20%] w-[25vw] h-[25vw] bg-accent/10 rounded-full blur-[60px] animate-orb-2" style={{ animationDelay: '-5s' }} />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Noise texture for depth */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
    </div>
  );
}
