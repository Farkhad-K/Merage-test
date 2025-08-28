import { useState, useEffect } from 'react';

export function VideoTest() {
  const [videoError, setVideoError] = useState<string | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

 const handleVideoError = (e) => {
  console.log('Video error occurred:', e);
  setVideoError('Video failed to load');
};


  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
    setVideoLoaded(true);
  };

  return (
    <div className="relative min-h-screen bg-nippon-black flex flex-col items-center justify-center">
      {/* Debug Info */}
      <div className="absolute top-4 right-4 z-50 bg-nippon-gold text-nippon-black p-4 rounded">
        <div className="text-sm space-y-2">
          <div>Video Status: {videoLoaded ? 'Loaded' : 'Loading...'}</div>
          {videoError && <div className="text-red-600">Error: {videoError}</div>}
        </div>
      </div>

      {/* Video Test */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={handleVideoError}
          onLoadedData={handleVideoLoad}
          style={{
            filter: 'brightness(0.7) contrast(1.1) saturate(1.1)',
          }}
        >
          {/* Test with a reliable video source */}
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          
          {/* Fallback message */}
          Your browser does not support the video tag.
        </video>

        {/* Fallback background */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1650921906719-d163a7970a95?w=1920&q=80')`,
            filter: 'brightness(0.75) contrast(1.1) saturate(1.2)',
          }}
        />

        {/* Overlay for text visibility */}
        <div className="absolute inset-0 bg-nippon-black/50" />
        
        {/* Test Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-nippon-warm-white">
            <h1 className="text-luxury-6xl font-serif mb-8">
              Video Background Test
            </h1>
            <p className="text-luxury-xl font-sans mb-4">
              Testing video playback capabilities
            </p>
            {videoLoaded && (
              <p className="text-nippon-gold font-sans">
                ✓ Video is playing successfully
              </p>
            )}
            {videoError && (
              <p className="text-red-400 font-sans">
                ✗ Video failed to load - showing fallback image
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}