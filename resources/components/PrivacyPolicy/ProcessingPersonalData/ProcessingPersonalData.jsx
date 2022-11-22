import style from "./ProcessingPersonalData.module.css";
import arrow_down from "./../../../assets/arrow_down.svg";
import arrow_up from "./../../../assets/arrow_up.svg";
import { useState } from "react";

const ProcessingPersonalData = () => {
  const [descriptionState, setDescriptionState] = useState(false);
  const onClickHandler = () => {
    setDescriptionState((prev) => !prev);
  };
  return (
    <div className={style["block"]}>
      <div className={style["cross-line"]} />
      <div className={style["title-block"]}>
        <span className={style["title"]}>
          Cele przetwarzania danych osobowych
        </span>
        <button className={style["button"]} onClick={onClickHandler}>
          <img src={descriptionState ? arrow_up : arrow_down} alt="" />
        </button>
      </div>
      {descriptionState && (
        <div className={style["description-block"]}>
          <div>
            Dane osobowe dobrowolnie podane przez Użytkowników są przetwarzane w
            jednym z następujących celów:
          </div>
          <ul className={style["list-block"]}>
            <li>Realizacji usług elektronicznych</li>
            <li>
              Usługi udostępniania informacji o treści umieszczonych w Serwisie
              w serwisach społecznościowych lub innych witrynach
            </li>
            <li>
              Komunikacji Administratora z Użytkownikami w sprawach związanych z
              Serwisem oraz ochrony danych
            </li>
            <li>Zapewnienia prawnie uzasadnionego interesu Administratora</li>
          </ul>
          <div>
            Dane o Użytkownikach gromadzone anonimowo i automatycznie są
            przetwarzane w jednym z następujących celów:
          </div>
          <ul className={style["list-block"]}>
            <li>Prowadzenie statystyk</li>
            <li>Remarketing</li>
            <li>Serwowanie reklam dostosowanych do preferencji</li>
            <li>Użytkowników Obsługi programów afiliacyjnych</li>
            <li>Zapewnienia prawnie uzasadnionego interesu Administratora</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProcessingPersonalData;
