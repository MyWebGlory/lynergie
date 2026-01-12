import { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  isShort?: boolean;
  className?: string;
}

export function YouTubeEmbed({ videoId, title, isShort = false, className = '' }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const aspectRatio = isShort ? 'aspect-[9/16]' : 'aspect-video';

  const handleClick = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl ${aspectRatio} ${className} group`}>
      {!isLoaded ? (
        <button
          onClick={handleClick}
          className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          aria-label={`Lire la vidéo: ${title}`}
        >
          {/* Thumbnail */}
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/20 transition-colors" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-secondary rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300 group-hover:shadow-secondary/50">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-secondary-foreground ml-1" fill="currentColor" />
            </div>
          </div>

          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/90 to-transparent">
            <p className="text-white text-sm md:text-base font-medium line-clamp-2">{title}</p>
          </div>
        </button>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  );
}
