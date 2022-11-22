import style from "./ExternalLinks.module.css";
import arrow_down from "./../../../assets/arrow_down.svg";
import arrow_up from "./../../../assets/arrow_up.svg";
import { useState } from "react";

const ExternalLinks = () => {
  const [descriptionState, setDescriptionState] = useState(false);
  const onClickHandler = () => {
    setDescriptionState((prev) => !prev);
  };
  return (
    <div className={style["block"]}>
      <div className={style["cross-line"]} />
      <div className={style["title-block"]}>
        <span className={style["title"]}>Linki zewnętrzne</span>
        <button className={style["button"]} onClick={onClickHandler}>
          <img src={descriptionState ? arrow_up : arrow_down} alt="" />
        </button>
      </div>
      {descriptionState && (
        <div className={style["description-block"]}>
          <div>
            W Serwisie - artykułach, postach, wpisach czy komentarzach
            Użytkowników mogą znajdować się odnośniki do witryn zewnętrznych, z
            którymi Właściciel serwisu nie współpracuje. Linki te oraz strony
            lub pliki pod nimi wskazane mogą być niebezpieczne dla Twojego
            Urządzenia lub stanowić zagrożenie bezpieczeństwa Twoich danych.
            Administrator nie ponosi odpowiedzialności za zawartość znajdującą
            się poza Serwisem.
          </div>
        </div>
      )}
    </div>
  );
};

export default ExternalLinks;
