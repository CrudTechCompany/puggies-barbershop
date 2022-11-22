import style from "./TypesOfData.module.css";
import arrow_down from "./../../../assets/arrow_down.svg";
import arrow_up from "./../../../assets/arrow_up.svg";
import { useState } from "react";

const TypesOfData = () => {
  const [descriptionState, setDescriptionState] = useState(false);
  const onClickHandler = () => {
    setDescriptionState((prev) => !prev);
  };
  return (
    <div className={style["block"]}>
      <div className={style["cross-line"]} />
      <div className={style["title-block"]}>
        <span className={style["title"]}>Rodzaje gromadzonych danych</span>
        <button className={style["button"]} onClick={onClickHandler}>
          <img src={descriptionState ? arrow_up : arrow_down} alt="" />
        </button>
      </div>
      {descriptionState && <div className={style["description-block"]}>
        <div>
          Serwis gromadzi dane o Użytkownikach. Cześć danych jest gromadzona
          automatycznie i anonimowo, a część danych to dane osobowe podane
          dobrowolnie przez Użytkowników w trakcie zapisywania się do
          poszczególnych usług oferowanych przez Serwis.{" "}
          <div style={{ fontWeight: 700 }}>
            Anonimowe dane gromadzone automatycznie:
          </div>
        </div>
        <ul className={style["list-block"]}>
          <li>Adres IP</li>
          <li>Typ przeglądarki</li>
          <li>Rozdzielczość ekranu</li>
          <li>Przybliżona lokalizacja</li>
          <li>Otwierane podstrony serwisu</li>
          <li>Czas spędzony na odpowiedniej podstronie serwisu</li>
          <li>Rodzaj systemu operacyjnego</li>
          <li>Adres poprzedniej podstrony</li>
          <li>Adres strony odsyłającej</li>
          <li>Język przeglądarki</li>
          <li>Prędkość łącza internetowego</li>
          <li>Dostawca usług internetowych</li>
          <li>Dane demograficzne (wiek, płeć)</li>
        </ul>
        <div style={{ fontWeight: 700 }}>Dane gromadzone podczas rejestracji:</div>
        <ul className={style["list-block"]}>
          <li>Adres e-mail</li>
          <li>Adres IP (zbierane automatycznie)</li>
        </ul>
        <div style={{ fontWeight: 700 }}>Dane gromadzone podczas zapisu do usługi Newsletter</div>
        <ul className={style["list-block"]}>
          <li>Adres e-mail</li>
        </ul>
        <div>
          Część danych (bez danych identyfikujących) może być przechowywana w
          plikach cookies. Cześć danych (bez danych identyfikujących) może być
          przekazywana do dostawcy usług statystycznych.
        </div>
      </div>}
    </div>
  );
};

export default TypesOfData;
