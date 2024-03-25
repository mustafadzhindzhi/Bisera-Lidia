// InfoThree.js

import React, { useState } from 'react';
import style from './InfoThree.module.scss';

const InfoThree = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleButtonClick = () => {
    // Redirect to the desired URL
    window.location.href = "https://example.com"; // Replace "https://example.com" with your desired URL
  };
  const articles = [
    {
      image: "/src/assets/images/285B0721-1129-4224-B3FB-AF7C22940654.jpeg",
      title: "Новина 1",
      content: "Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas."
    },
    {
      image: "/src/assets/images/Boris Mutafchiev.png",
      title: "Новина 2",
      content: "Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas."
    },
    {
      image: "/src/assets/images/B&L_coverclean_BoyanHristov.jpg",
      title: "Новина 3",
      content: "Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas."
    },
    {
        image: "/src/assets/images/B&L_coverclean_BoyanHristov.jpg",
        title: "Новина 4",
        content: "Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas."
      },
    // Add more articles here
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(articles.length - 1, prevIndex + 1));
  };

  return (
    <>
 
      <div className={style["news"]}>
      <h1 className={style.heading}>Важни и интересни новини свързани с нас</h1>
        <section className={style.articles}>
          {articles.slice(currentIndex, currentIndex + 3).map((article, index) => (
            <article key={currentIndex + index} className={style.article}>
              <div className={style["article-wrapper"]}>
                <figure>
                  <img src={article.image} alt="" />
                </figure>
                <div className={style["article-body"]}>
                  <h2>{article.title}</h2>
                  <p>{article.content}</p>
                  <button className={style["button"]} onClick={handleButtonClick}>
        <span className={style["button-text"]}>Прочети Повече</span>
        <div className={style["fill-container"]}></div>
      </button>
                </div>
              </div>
            </article>
          ))}
          {/* Add more articles here */}
        </section>
        {currentIndex > 0 && (
          <button className={style.prevButton} onClick={handlePrev}>
            &lt;
          </button>
        )}
        {currentIndex < articles.length - 3 && (
          <button className={style.nextButton} onClick={handleNext}>
            &gt;
          </button>
        )}
      </div>
    </>
  );
};

export default InfoThree;
