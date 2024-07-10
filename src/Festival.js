import React, { useState, useRef } from 'react';
import './Festival.css';
import Navbar from './Navbar'; // Import Navbar component
import Card4 from './assets/card4.png';
import Letter4 from './assets/letter4.png';
import Arrow from './assets/arrow.png';
import html2canvas from 'html2canvas'; // Import html2canvas library
import { Link } from 'react-router-dom';

const BirthdayCards = () => {
  const [showLetter, setShowLetter] = useState(false);
  const [editableText, setEditableText] = useState('');
  const [showInitialText, setShowInitialText] = useState(true);
  const cardRef = useRef(null);

  const handleContinueClick = () => {
    setShowLetter(true);
    setShowInitialText(false);
  };

  const handleArrowClick = () => {
    setShowLetter(false); // Hide the letter and textarea
    setShowInitialText(true); // Show the initial h1 text
    setEditableText(''); // Reset the textarea content
  };

  const handleTextChange = (event) => {
    setEditableText(event.target.value);
  };

  const handleSaveClick = () => {
    if (cardRef.current) {
      captureCardImage(cardRef.current);
    }
  };

  const captureCardImage = (element) => {
    const canvas = document.createElement('canvas');
    canvas.width = element.offsetWidth;
    canvas.height = element.offsetHeight;
    const ctx = canvas.getContext('2d');

    // Scale to account for HDPI screens
    const ratio = window.devicePixelRatio;
    canvas.width *= ratio;
    canvas.height *= ratio;
    ctx.scale(ratio, ratio);

    // Draw the element on the canvas
    html2canvas(element).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'birthday_card.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className='Birthday'>
      <Navbar />
      <div className='content-container'>
        <div className='content3' ref={cardRef}>
          <div className='card' >
            <img src={Card4} alt='Birthday Card' className='card-image' />
            <div className={`letter-container ${showLetter ? 'fly-in' : ''}`}>
              <img
                src={Letter4}
                alt='Letter'
                className={`letter-image ${showLetter ? 'fly-in' : ''}`}
              />
              {showLetter && (
                <div className='text-overlay'>
                  <p className='letter-text'>{editableText}</p>
                </div>
              )}
              {showLetter && (
                <textarea
                  value={editableText}
                  onChange={handleTextChange}
                  className='editable-text fly-in'
                  placeholder='Enter your message...'
                  style={{
                    height: `${Math.min(editableText.split('\n').length * 20, 200)}px`,
                  }}
                  maxLength={200}
                />
              )}
            </div>
          </div>
          <div className='texting'>
          <div className='texts'>
          <h1 className={`text ${showInitialText ? 'show' : 'hide'}`}>
                Hi!<br />
                Wish your friends<br />
                and family a happy <br></br>DIWALI
              </h1>
              <h1 className={`text ${!showInitialText ? 'show' : 'hide'}`}>
                Write<br />
                something<br />
                beautiful
              </h1>
          </div>
          
            <div className='buttons'>
            <Link to="/options"> 
                          <button className='custom-button'>
                <img src={Arrow} alt='Arrow' className='arrow-icon' />
                Take me back
              </button>
              </Link>
              <div className='two-buttons'>
                <button className='custom-button2' onClick={handleArrowClick}>
                  <img src={Arrow} alt='Arrow' className='arrow-icon' />
                </button>
                <button className='custom-button2' onClick={handleContinueClick}>
                  Continue
                  <img src={Arrow} alt='Arrow' className='arrow-icon2' />
                </button>
                <button className='custom-button2' onClick={handleSaveClick}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCards;
