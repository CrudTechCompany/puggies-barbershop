import style from "./DataProtectionOfficer.module.css";
import arrow_down from "./../../../assets/arrow_down.svg";
import arrow_up from "./../../../assets/arrow_up.svg";
import { useState } from "react";

const DataProtectionOfficer = () => {
  const [descriptionBlockState, setDescriptionBlockState] = useState(false);
  const onClickHandler = () => {
    setDescriptionBlockState((prev) => !prev);
  };

  return (
    <div className={style["block"]}>
      <div className={style["cross-line"]} />
      <div className={style["title-block"]}>
        <span className={style["title"]}>Inspektor ochrony danych</span>
        <button className={style["button"]} onClick={onClickHandler}>
          <img src={descriptionBlockState ? arrow_up : arrow_down} alt="" />
        </button>
      </div>
      {descriptionBlockState && <div className={style["description-block"]}>
        Na podstawie Art. 37 RODO, Administrator nie powołał Inspektora Ochrony
        Danych. W sprawach dotyczących przetwarzania danych, w tym danych
        osobowych, należy kontaktować się bezpośrednio z Administratorem.
      </div>}
    </div>
  );
};

export default DataProtectionOfficer;
