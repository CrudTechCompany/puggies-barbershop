import style from "./WebsiteRequirements.module.css";
import arrow_down from "./../../../assets/arrow_down.svg";
import arrow_up from "./../../../assets/arrow_up.svg";
import { useState } from "react";

const WebsiteRequirements = () => {
  const [descriptionState, setDescriptionState] = useState(false);
  const onClickHandler = () => {
    setDescriptionState((prev) => !prev);
  };
  return (
    <div className={style["block"]}>
      <div className={style["cross-line"]} />
      <div className={style["title-block"]}>
        <span className={style["title"]}>Wymagania Serwisu</span>
        <button className={style["button"]} onClick={onClickHandler}>
          <img src={descriptionState ? arrow_up : arrow_down} alt="" />
        </button>
      </div>
      {descriptionState && (
        <div className={style["description-block"]}>
          <ul>
            <li>
              Ograniczenie zapisu i dostępu do plików Cookie na Urządzeniu
              Użytkownika może spowodować nieprawidłowe działanie niektórych
              funkcji Serwisu
            </li>
            <li>
              Administrator nie ponosi żadnej odpowiedzialności za nieprawidłowo
              działające funkcje Serwisu w przypadku gdy Użytkownik ograniczy w
              jakikolwiek sposób możliwość zapisywania i odczytu plików Cookie
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default WebsiteRequirements;
