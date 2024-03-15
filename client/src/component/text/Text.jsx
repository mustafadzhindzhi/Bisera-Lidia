import React, { useState, useEffect } from 'react';
import './ScrollingText.css'; // Import the CSS file for styling

const ScrollingText = () => {
  const [scrollDirection, setScrollDirection] = useState('down');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 0 && scrollTop < window.innerHeight) {
        setScrollDirection('down');
      } else if (scrollTop >= window.innerHeight) {
        setScrollDirection('up');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scrolling-text ${scrollDirection}`}>
        
      <p>Дует<br /> Бисера и Лидия <br />
      +359 88 994 3359 +359 88 849 5500

bisera.lidia@gmail.com

</p>
    </div>
  );
};

export default ScrollingText;
