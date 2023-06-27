import React, { useRef, useState } from 'react';

const VideoCaptureComponent = ({video}) => {
  const videoRef = useRef(null);
  const imgRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const capturedImageURL = canvas.toDataURL();
    imgRef.current.src = capturedImageURL;
  };

  const handleGetInfo = () => {
    setShowVideo(true);
  };

  return (
    <div>
      <button onClick={handleCapture}>Chụp ảnh</button>
      <button onClick={handleGetInfo}>Lấy thông tin</button>
      <div>
        {showVideo && (
          <video ref={videoRef} autoPlay loop>
            <source src={video} type="video/mp4" />
          </video>
        )}
        <img ref={imgRef} alt="Captured" />
      </div>
    </div>
  );
};

export default VideoCaptureComponent;
