import React from "react";
import style from "./InfoTwo.module.scss";

const InfoTwo = () => {
  return (
    <>
      <div className={style["info"]}>
        <div className={style["info__text"]}>
          <h2>Магията на двугласа</h2>
          <p>
            Гласовете на двете певици са много различни по отделно, но заедно се
            допълват до едно цяло – мелодия и хармония. Цялата тази магия,
            изпратена от сцената към публиката, осмисля всяка минута положен
            труд и напомня за мисията да се предава българщината и традицията
            във всичките ѝ форми.
          </p>
        </div>
        <div className={style["info__img"]}>
          <img src="/src/assets/images/B&L (1).jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default InfoTwo;
