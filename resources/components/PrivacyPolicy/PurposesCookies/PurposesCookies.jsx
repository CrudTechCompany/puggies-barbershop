import style from "./PurposesCookies.module.css";
import arrow_up from "./../../../assets/arrow_up.svg";
import arrow_down from "./../../../assets/arrow_down.svg";
import { useState } from "react";

const PurposesCookies = () => {
  const [descriptionState, setDescriptionState] = useState(false);
  const onClickHandler = () => {
    setDescriptionState((prev) => !prev);
  };
  return (
    <div className={style["block"]}>
      <div className={style["cross-line"]} />
      <div className={style["title-block"]}>
        <span className={style["title"]}>
          Cele do których wykorzystywane są pliki Cookie
        </span>
        <button className={style["button"]} onClick={onClickHandler}>
          <img src={descriptionState ? arrow_up : arrow_down} alt="" />
        </button>
      </div>
      {descriptionState && (
        <ul className={style["list-block"]}>
          <li>Usprawnienie i ułatwienie dostępu do Serwisu</li>
          <li>Personalizacja Serwisu dla Użytkowników</li>
          <li>Marketing, Remarketing w serwisach zewnętrznych</li>
          <li>Usługi serwowania reklam</li>
          <li>Usługi afiliacyjne</li>
          <li>
            Prowadzenie statystyk (użytkowników, ilości odwiedzin, rodzajów
            urządzeń, łącze itp.)
          </li>
          <li>Serwowanie usług multimedialnych</li>
          <li>Świadczenie usług społecznościowych</li>
        </ul>
      )}
    </div>
  );
};

export default PurposesCookies;
