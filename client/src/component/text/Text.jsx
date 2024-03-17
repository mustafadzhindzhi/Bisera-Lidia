import React, { useState, useEffect } from 'react';
import './ScrollingText.css'; // Import the CSS file for styling

const ScrollingText = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > window.innerHeight * 0.5) {
        setShowText(true);
      } else {
        setShowText(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scrolling-text">
      <div className={`background-image ${showText ? 'show-text' : ''}`} />
      <div className="text-container">
        {showText && <p className="scrolling-text-content">Бисера и Лидия</p>}
      </div>
      <div className="white-background"></div> {/* White background to enable scrolling */}
    </div>
  );
};

export default ScrollingText;
