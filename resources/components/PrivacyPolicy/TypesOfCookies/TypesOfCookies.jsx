import style from "./TypesOfCookies.module.css";
import arrow_down from "./../../../assets/arrow_down.svg";
import arrow_up from "./../../../assets/arrow_up.svg";
import { useState } from "react";

const TypesOfCookies = () => {
  const [descriptionBlockState, setDescriptionBlockState] = useState(false);

  const onClickHandler = () => {
    setDescriptionBlockState((prev) => !prev);
  };

  return (
    <div className={style["block"]}>
      <div className={style["cross-line"]} />
      <div className={style["title-block"]}>
        <span className={style["title"]}>Rodzaje plików Cookies</span>
        <button className={style["button"]} onClick={onClickHandler}>
          <img src={descriptionBlockState ? arrow_up : arrow_down} alt="" />
        </button>
      </div>
      {descriptionBlockState && (
        <ul className={style["description"]}>
          <li>
            <span style={{fontWeight:700}}>Cookies wewnętrzne</span> - pliki zamieszczane i odczytywane z
            Urządzenia Użytkownika przez system teleinformatyczny Serwisu
          </li>
          <li>
            <span style={{fontWeight:700}}>Cookies zewnętrzne</span> - pliki zamieszczane i odczytywane z
            Urządzenia Użytkownika przez systemy teleinformatyczne Serwisów
            zewnętrznych. Skrypty Serwisów zewnętrznych, które mogą umieszczać
            pliki Cookies na Urządzeniach Użytkownika zostały świadomie
            umieszczone w Serwisie poprzez skrypty i usługi udostępnione i
            zainstalowane w Serwisie
          </li>
          <li>
            <span style={{fontWeight:700}}>Cookies sesyjne</span> - pliki zamieszczane i odczytywane z
            Urządzenia Użytkownika przez Serwis podczas jednej sesji danego
            Urządzenia. Po zakończeniu sesji pliki są usuwane z Urządzenia
            Użytkownika
          </li>
          <li>
            <span style={{fontWeight:700}}>Cookies trwałe</span> - pliki zamieszczane i odczytywane z
            Urządzenia Użytkownika przez Serwis do momentu ich ręcznego
            usunięcia. Pliki nie są usuwane automatycznie po zakończeniu sesji
            Urządzenia chyba że konfiguracja Urządzenia Użytkownika jest
            ustawiona na tryb usuwanie plików Cookie po zakończeniu sesji
            Urządzenia
          </li>
        </ul>
      )}
    </div>
  );
};

export default TypesOfCookies;
