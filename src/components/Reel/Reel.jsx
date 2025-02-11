import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPlay, FaPause } from "react-icons/fa"; 
import "./Reel.css";

gsap.registerPlugin(ScrollTrigger);

const Reel = () => {
  const videoRef = useRef(null);
  const reelRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    gsap.fromTo(
      reelRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: reelRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="reel-container" ref={reelRef}>
      {/* Video */}
      <video
        className="reel-video"
        ref={videoRef}
        loop
        playsInline
        onClick={togglePlay}
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play Button - Only Visible When Paused */}
      {!isPlaying && (
        <button className="play-button" onClick={togglePlay}>
          <FaPlay />
        </button>
      )}
    </div>
  );
};

export default Reel;
