// InfoThree.js

import React, { useState } from 'react';
import style from './InfoThree.module.scss';

const InfoThree = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
                  <a href="#" className={style["read-more"]}>
                    Прочети Повече <span className="sr-only"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={style.icon} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
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
