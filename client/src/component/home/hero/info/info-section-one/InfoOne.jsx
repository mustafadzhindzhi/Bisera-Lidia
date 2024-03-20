import React, { useEffect, useRef, useState } from "react";
import style from "./InfoOne.module.scss";

const InfoOne = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [delayTime, setDelayTime] = useState(0.5); // Initial delay
  const infoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = infoRef.current;
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const scrollPosition = window.scrollY;

      // Adjusting the threshold for visibility
      const isSectionVisible = elementTop < window.innerHeight - 100 && elementBottom >= 0;

      // Adjusting the delay based on scroll position
      let delay = 0.5; // Initial delay
      if (scrollPosition > 200) {
        delay = 2; // Delay when scrolled down
      }

      setIsVisible(isSectionVisible);
      setDelayTime(delay);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call it initially to check visibility

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
    ref={infoRef}
    className={`${style.info} ${isVisible ? style.fadeIn : ""}`}
>
    <div className={style.info__img}>
        <img
            src="/src/assets/images/Boris Mutafchiev.png"
            alt=""
            style={{ animationDelay: `${delayTime}s` }} // Set animation-delay inline
        />
        <div className={`${style.square} ${style["top-right"]}`}></div>
        <div className={`${style.square} ${style["bottom-left"]}`}></div>
    </div>
    <div className={style.info__text}>
        <h2>Различните лица на фолклора</h2>
        <p>
            Бисера и Лидия са един от най-популярните млади дуети в народната
            музика. Носители са на награди от престижни фолклорни конкурси, а
            начинът, по който умеят да вплитат гласовете си, впечатлява както
            публиката, така и големите имена в музиката не само в България, но и
            в чужбина. Със сърце и душа излизат на музикалната сцена, запазвайки
            традициите и налагайки новаторство във фолклорната музика.
        </p>
    </div>
</div>


  );
};

export default InfoOne;
