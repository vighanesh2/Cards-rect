import React, { useState, useRef } from 'react';
import './Homescreen.css';
import backgroundImg from './assets/back.png'; // Path to your background image
import backgroundVideo1 from './assets/vid2.mp4'; // Path to your first background video
import backgroundVideo2 from './assets/vid3.mp4'; // Path to your second background video
import Navbar from './Navbar'; // Import Navbar component
import backgroundImage2 from './assets/backi.png';
import option1 from './assets/birthday-cake.png';
import option2 from './assets/christmas-tree.png';
import option3 from './assets/cover-letter.png';
import option4 from './assets/happy-new-year.png';
import { Link } from 'react-router-dom';

const Homescreen = () => {
  const [showContent, setShowContent] = useState(true);
  const [videoEnded1, setVideoEnded1] = useState(false);
  const [videoEnded2, setVideoEnded2] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(backgroundImg); // Change initial state for currentVideo
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // State to track mute/unmute

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const handleEnterClick = () => {
    setShowContent(false);
    setCurrentVideo(backgroundVideo1); // Set initial video
    setIsMuted(true); // Ensure video starts muted
  };

  const handleVideoEnded1 = () => {
    setVideoEnded1(true);
    setCurrentVideo(null); // Reset currentVideo after first video ends
    setIsMuted(!isMuted);

  };

  const handleContinueClick = () => {
    setVideoEnded1(false);
    setVideoEnded2(false);
    setCurrentVideo(backgroundVideo2);
    if (videoRef2.current) {
      videoRef2.current.play();
      videoRef2.current.muted = isMuted; // Set muted state when continuing to the next video
    }
  };

  const handleVideoEnded2 = () => {
    setVideoEnded2(true);
    setShowOverlay(true);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef1.current) {
      videoRef1.current.muted = !isMuted; // Toggle mute/unmute state for video 1
    }
    if (videoRef2.current) {
      videoRef2.current.muted = !isMuted; // Toggle mute/unmute state for video 2
    }
  };

  return (
    <div className={`homescreen ${showContent ? 'show-content' : ''}`} style={{ backgroundImage: `url(${showContent ? backgroundImg : currentVideo || backgroundImage2 })` }}>
      <Navbar />
      {showContent ? (
        <div className="content">
          <h1 className='text'>SENDING SMILES, <br /> ONE CARD AT A TIME</h1>
          <p>Write a card to your favorite people from your home</p>
          <button className='enter-button' onClick={handleEnterClick}>ENTER</button>
        </div>
      ) : (
        <div className="video-container">
          {currentVideo === backgroundVideo1 && (
            <video autoPlay muted loop={false} id="background-video-1" ref={videoRef1} onEnded={handleVideoEnded1}>
              <source src={backgroundVideo1} type="video/mp4" />
            </video>
          )}
          {currentVideo === backgroundVideo2 && (
            <video autoPlay muted loop={false} id="background-video-2" ref={videoRef2} onEnded={handleVideoEnded2}>
              <source src={backgroundVideo2} type="video/mp4" />
            </video>
          )}
          {videoEnded1 && (
            <button className='continue-button' onClick={handleContinueClick}>Continue</button>
          )}
          {videoEnded2 && (
            <div className='content2'>
              <h1 className='text2'>What kind of card do you wish to make?</h1>
              <div className='options'>
                <Link to="/birthday"> 
                  <div className='option1'>
                    <img className='icons' src={option1} alt="Birthday Cards" />
                    <h2>Birthday Cards</h2>
                  </div>
                </Link>
                <Link to="/christmas"> 
                  <div className='option2'>
                    <img className='icons' src={option2} alt="Christmas Cards" />
                    <h2>Christmas Cards</h2>
                  </div>
                </Link>
                <Link to="/letter"> 
                  <div className='option2'>
                    <img className='icons' src={option3} alt="Letter Cards" />
                    <h2>Letter Cards</h2>
                  </div>
                </Link>
                <Link to="/festivals"> 
                  <div className='option2'>
                    <img className='icons' src={option4} alt="Festival Cards" />
                    <h2>Festival Cards</h2>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
      <button className='bottom-button' onClick={toggleMute}>
        {isMuted ? 'Unmute Sound' : 'Mute Sound'}
      </button>
    </div>
  );
};

export default Homescreen;
