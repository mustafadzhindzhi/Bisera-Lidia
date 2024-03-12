import React from "react";
import style from "./Hero.module.scss";

export const Hero = () => {
  return (
    <>
      <div className={style["hero"]}>
        <div className={style["hero__image-1"]}>
          <div className={style["line-vertical-right"]} />
          <div className={style["line-horizontal-bottom"]} />
          <img src="/src/assets/images/B&L_coverclean_BoyanHristov.jpg" alt="" />
        </div>
        <div className={style["hero__text"]}>
          <h2>Бисера <br /> и <br /> Лидия </h2>
          <h3>Двете лица на българския фолклор</h3>
          <button className={style["hero__text-btn"]}>Научете Повече</button>
        </div>
        <div className={style["hero__image-2"]}>
          <div className={style["line-vertical-left"]} />
          <div className={style["line-horizontal-top"]} />
          <img src="/src/assets/images/285B0721-1129-4224-B3FB-AF7C22940654.jpeg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
