import React from "react";
import style from "./barcode.scss";

export const Barcode = () => {
  return (
    <>
      <div className={["barcode"]}>
        <div className={`${["barcode__image-1"]} ${["barcode_img"]}`}>
          <img src="/src/assets/images/Картина1.png" alt="Duet Bisera and Lidia" />
        </div>
        <div className={["barcode__image-2"]}>
          {/* Add your second image here if needed */}
        </div>
        <div className={["barcode__text"]}>
          <h2>Дует Бисера и Лидия</h2>
          <p>+359 88 994 3359 | +359 88 849 5500</p>
          <p>bisera.lidia@gmail.com</p>
          <button className={["barcode-btn"]}>Позвънете</button>
        </div>
      </div>
    </>
  );
};

export default Barcode;
