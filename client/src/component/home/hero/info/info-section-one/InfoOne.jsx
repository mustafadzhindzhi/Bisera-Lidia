import React from "react";
import style from "./InfoOne.module.scss";

const InfoOne = () => {
  return (
    <>
      <div className={style["info"]}>
        <div className={style["info__img"]}>
          <img src="/src/assets/images/Boris Mutafchiev.png" alt="" />
          <div className={`${style.square} ${style['top-right']}`}></div>
    <div className={`${style.square} ${style['bottom-left']}`}></div>
        </div>
        <div className={style["info__text"]}>
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
    </>
  );
};

export default InfoOne;
