const VideoGrid = () => {
    const videos = [
      '/images/video1.mp4', // Cambia esto por la ruta a tu video
      '/images/video2.mp4',
      '/images/video3.mp4',
      '/images/video4.mp4',
      '/images/video5.mp4',
      '/images/video6.mp4',
    ];
  
    return (
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((src, index) => (
            <div key={index} className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <video
                src={src}
                controls
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default VideoGrid;
  