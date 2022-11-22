import style from "./AdministratorContact.module.css";
import arrow_down from "./../../../assets/arrow_down.svg";
import arrow_up from "./../../../assets/arrow_up.svg";
import { useState } from "react";

const AdministratorContact = () => {
  const [descriptionState, setDescriptionState] = useState(false);
  const onClickHandler = () => {
    setDescriptionState((prev) => !prev);
  };
  return (
    <div className={style["block"]}>
      <div className={style["cross-line"]} />
      <div className={style["title-block"]}>
        <span className={style["title"]}>Kontakt do Administratora</span>
        <button className={style["button"]} onClick={onClickHandler}>
          <img src={descriptionState ? arrow_up : arrow_down} alt="" />
        </button>
      </div>
      {descriptionState && <div className={style["description-block"]}>
        <div>
          Z Administratorem można skontaktować się w jeden z poniższych sposobów
        </div>
        <ul>
          <li>Adres pocztowy - N/A, N/A</li>
          <li>Adres poczty elektronicznej - N/A</li>
          <li>Połączenie telefoniczne - +48 000 000 000</li>
          <li>Formularz kontaktowy</li>
        </ul>
      </div>}
    </div>
  );
};

export default AdministratorContact;
