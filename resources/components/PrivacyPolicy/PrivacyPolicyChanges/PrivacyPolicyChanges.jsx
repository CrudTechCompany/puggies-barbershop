import style from "./PrivacyPolicyChanges.module.css";
import arrow_down from "./../../../assets/arrow_down.svg";
import arrow_up from "./../../../assets/arrow_up.svg";
import { useState } from "react";

const PrivacyPolicyChanges = () => {
  const [descriptionState, setDescriptionState] = useState(false);
  const onClickHandler = () => {
    setDescriptionState((prev) => !prev);
  };
  return (
    <div className={style["block"]}>
      <div className={style["cross-line"]} />
      <div className={style["title-block"]}>
        <span className={style["title"]}>Zmiany w Polityce Prywatności</span>
        <button className={style["button"]} onClick={onClickHandler}>
          <img src={descriptionState ? arrow_up : arrow_down} alt="" />
        </button>
      </div>
      {descriptionState && (
        <div className={style["description-block"]}>
          <ul>
            <li>
              Administrator zastrzega sobie prawo do dowolnej zmiany niniejszej
              Polityki Prywatności bez konieczności informowania o tym
              Użytkowników w zakresie stosowania i wykorzystywania danych
              anonimowych lub stosowania plików Cookie
            </li>
            <li>
              Administrator zastrzega sobie prawo do dowolnej zmiany niniejszej
              Polityki Prywatności w zakresie przetwarzania Danych Osobowych, o
              czym poinformuje Użytkowników posiadających konta użytkownika lub
              zapisanych do usługi newsletter, za pośrednictwem poczty
              elektronicznej w terminie do 7 dni od zmiany zapisów. Dalsze
              korzystanie z usług oznacza zapoznanie się i akceptację
              wprowadzonych zmian Polityki Prywatności. W przypadku w którym
              Użytkownik nie będzie się zgadzał z wprowadzonymi zmianami, ma
              obowiązek usunąć swoje konto z Serwisu lub wypisać się z usługi
              Newsletter
            </li>
            <li>
              Wprowadzone zmiany w Polityce Prywatności będą publikowane na tej
              podstronie Serwisu. Wprowadzone zmiany wchodzą w życie z chwilą
              ich publikacji
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicyChanges;
