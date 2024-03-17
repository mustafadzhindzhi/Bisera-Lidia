import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";
import { MdMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

export const Navitation = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
    <header className={style["navbar"]}>
      <Link to="/">
        <img
          className={style["header-logo"]}
          src="/src/assets/images/logo.png"
          alt=""
        />
      </Link>
      <nav className={style["navbar__nav"]}>
        <div className={style["navbar__products"]}>
          <ul className={style["navbar__products-ul"]}>
            {["Начало", "За Нас", "Творчество", "В Медиите", "Галерия"].map(
              (item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={
                    hoveredIndex !== null && hoveredIndex !== index
                      ? style["is-hovered"]
                      : ""
                  }
                >
                  {item}
                  {item === "Творчество" && (
                    <div className={style["extra-items"]}>
                      <ul>
                        <li>Extra 1</li>
                        <li>Extra 2</li>
                      </ul>
                    </div>
                  )}
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
      <button className={style["navbar__btn"]}>Контакти</button>
      <div
        className={`${style["app__navbar-smallscreen"]} ${
          toggleMenu ? style["slide-in"] : style["slide-out"]
        }`}
      >
        <button className={style["menu-button"]} onClick={handleMenuToggle}>
          {toggleMenu ? <FaTimes size={25} /> : <MdMenu size={25} />}
        </button>
        {toggleMenu && (
          <div
            className={`${style["app__navbar-smallscreen_overlay"]} ${
              toggleMenu ? style["slide-in"] : style["slide-out"]
            }`}
          >
            <ul className={style["app__navbar-smallscreen_links"]}>
              <li>
                <Link to="/" onClick={() => setToggleMenu(false)}>
                  <a>Начало</a>
                </Link>
              </li>
              <li>
                <Link to="" onClick={() => setToggleMenu(false)}>
                  <a>За Нас</a>
                </Link>
              </li>
              <li>
                <Link to="" onClick={() => setToggleMenu(false)}>
                  <a>Творчество</a>
                </Link>
              </li>
              <li>
                <Link to="" onClick={() => setToggleMenu(false)}>
                  <a>В Медиите</a>
                </Link>
              </li>
              <li>
                <Link to="" onClick={() => setToggleMenu(false)}>
                  <a>Галерия</a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
    <div class="overlay"></div>
    </>
  );
};

export default Navitation;
