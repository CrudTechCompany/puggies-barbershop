import style from "./PersonalDataAccess.module.css";
import arrow_down from "./../../../assets/arrow_down.svg";
import arrow_up from "./../../../assets/arrow_up.svg";
import { useState } from "react";

const PersonalDataAccess = () => {
  const [descriptionState, setDescriptionState] = useState(false);
  const onClickHandler = () => {
    setDescriptionState((prev) => !prev);
  };
  return (
    <div className={style["block"]}>
      <div className={style["cross-line"]} />
      <div className={style["title-block"]}>
        <span className={style["title"]}>
          Dostęp do danych osobowych przez podmioty trzecie
        </span>
        <button className={style["button"]} onClick={onClickHandler}>
          <img src={descriptionState ? arrow_up : arrow_down} alt="" />
        </button>
      </div>
      {descriptionState && <div className={style["description"]}>
        Co do zasady jedynym odbiorcą danych osobowych podawanych przez
        Użytkowników jest Administrator. Dane gromadzone w ramach świadczonych
        usług nie są przekazywane ani odsprzedawane podmiotom trzecim. Dostęp do
        danych (najczęściej na podstawie Umowy powierzenia przetwarzania danych)
        mogą posiadać podmioty, odpowiedzialne za utrzymania infrastruktury i
        usług niezbędnych do prowadzenia serwisu
      </div>}
    </div>
  );
};

export default PersonalDataAccess;
