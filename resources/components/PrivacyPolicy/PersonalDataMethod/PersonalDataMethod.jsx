import style from "./PersonalDataMethod.module.css";
import arrow_down from "./../../../assets/arrow_down.svg";
import arrow_up from "./../../../assets/arrow_up.svg";
import { useState } from "react";

const PersonalDataMethod = () => {
  const [descriptionState, setDescriptionState] = useState(false);
  const onClickHandler = () => {
    setDescriptionState((prev) => !prev);
  };
  return (
    <div className={style["block"]}>
      <div className={style["cross-line"]} />
      <div className={style["title-block"]}>
        <span className={style["title"]}>
          Sposób przetwarzania danych osobowych
        </span>
        <button className={style["button"]} onClick={onClickHandler}>
          <img src={descriptionState ? arrow_up : arrow_down} alt="" />
        </button>
      </div>
      {descriptionState && <div className={style["description-block"]}>
        <div style={{ fontWeight: 700 }}>
          Dane osobowe podane dobrowolnie przez Użytkowników:
        </div>
        <ul>
          <li>
            Dane osobowe nie będą przekazywane poza Unię Europejską, chyba że
            zostały opublikowane na skutek indywidualnego działania Użytkownika
            (np. wprowadzenie komentarza lub wpisu), co sprawi, że dane będą
            dostępne dla każdej osoby odwiedzającej serwis
          </li>
          <li>
            Dane osobowe nie będą wykorzystywane do zautomatyzowanego
            podejmowania decyzji (profilowania)
          </li>
          <li>Dane osobowe nie będą odsprzedawane podmiotom trzecim</li>
        </ul>
        <div style={{ fontWeight: 700 }}>
          Dane anonimowe (bez danych osobowych) gromadzone automatycznie:
        </div>
        <ul>
          <li>
            Dane anonimiwe (bez danych osobowych) będą przekazywane poza Unię
            Europejską
          </li>
          <li>
            Dane anonimiwe (bez danych osobowych) nie będą wykorzystywane do
            zautomatyzowanego podejmowania decyzji (profilowania)
          </li>
          <li>
            Dane anonimiwe (bez danych osobowych) nie będą odsprzedawane
            podmiotom trzecim
          </li>
        </ul>
      </div>}
    </div>
  );
};

export default PersonalDataMethod;
