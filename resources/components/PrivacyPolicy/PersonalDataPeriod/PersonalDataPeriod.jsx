import style from "./PersonalDataPeriod.module.css";
import arrow_down from "./../../../assets/arrow_down.svg";
import arrow_up from "./../../../assets/arrow_up.svg";
import { useState } from "react";

const PersonalDataPeriod = () => {
  const [descriptionState, setDescriptionState] = useState(false);
  const onClickHandler = () => {
    setDescriptionState((prev) => !prev);
  };
  return (
    <div className={style["block"]}>
      <div className={style["cross-line"]} />
      <div className={style["title-block"]}>
        <span className={style["title"]}>
          Okres przetwarzania danych osobowych
        </span>
        <button className={style["button"]} onClick={onClickHandler}>
          <img src={descriptionState ? arrow_up : arrow_down} alt="" />
        </button>
      </div>
      {descriptionState && <div className={style["description-block"]}>
        <div style={{ fontWeight: 700 }}>
          Dane osobowe podane dobrowolnie przez Użytkowników:
        </div>
        <div>
          Co do zasady wskazane dane osobowe są przechowywane wyłącznie przez
          okres świadczenia Usługi w ramach Serwisu przez Administratora. Są one
          usuwane lub anonimizowane w okresie do 30 dni od chwili zakończenia
          świadczenia usług (np. usunięcie zarejestrowanego konta użytkownika,
          wypisanie z listy Newsletter, itp.) Wyjątek stanowi sytuacja, która
          wymaga zabezpieczenia prawnie uzasadnionych celów dalszego
          przetwarzania tych danych przez Administratora. W takiej sytuacji
          Administrator będzie przechowywał wskazane dane, od czasu żądania ich
          usunięcia przez Użytkownika, nie dłużej niż przez okres 3 lat w
          przypadku naruszenia lub podejrzenia naruszenia zapisów regulaminu
          serwisu przez Użytkownika
        </div>
        <div style={{ fontWeight: 700 }}>
          Dane anonimowe (bez danych osobowych) gromadzone automatycznie:
        </div>
        <div>
          Anonimowe dane statystyczne, niestanowiące danych osobowych, są
          przechowywane przez Administratora w celu prowadzenia statystyk
          serwisu przez czas nieoznaczony
        </div>
      </div>}
    </div>
  );
};

export default PersonalDataPeriod;
