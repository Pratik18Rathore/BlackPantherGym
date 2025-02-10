import React, { useState, useEffect } from 'react';
import './Reel.css';



const Reel = () => {
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll event and update scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Get the current scroll position
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up event listener
    };
  }, []);

  return (
    <div className="video-container" style={{ transform: `scale(${1 - scrollY / 1500})` }}>
      <video className="responsive-video" controls>
        <source src="/videos/your-video.mp4" type="video/mp4" />
        Sorry, your browser does not support the video tag.
      </video>

      
    </div>
  );
};

export default Reel;
