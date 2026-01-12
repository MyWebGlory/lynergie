export function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main animated gradient */}
      <div className="absolute inset-0 bg-gradient-mesh animate-gradient-shift" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-[80vw] h-[80vw] bg-primary/30 rounded-full blur-[120px] animate-orb-1" />
      <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-secondary/20 rounded-full blur-[100px] animate-orb-2" />
      <div className="absolute top-1/2 left-1/2 w-[40vw] h-[40vw] bg-accent/20 rounded-full blur-[80px] animate-orb-3" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </div>
  );
}
