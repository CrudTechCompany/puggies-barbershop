import style from "./ExternalWebsites.module.css";
import arrow_down from "./../../../assets/arrow_down.svg";
import arrow_up from "./../../../assets/arrow_up.svg";
import { useState } from "react";

const ExternalWebsites = () => {
  const [descriptionState, setDescriptionState] = useState(false);
  const onClickHandler = () => {
    setDescriptionState((prev) => !prev);
  };
  return (
    <div className={style["block"]}>
      <div className={style["cross-line"]} />
      <div className={style["title-block"]}>
        <span className={style["title"]}>
          Pliki Cookies Serwisów zewnętrznych
        </span>
        <button className={style["button"]} onClick={onClickHandler}>
          <img src={descriptionState ? arrow_up : arrow_down} alt="" />
        </button>
      </div>
      {descriptionState && (
        <div className={style["description-block"]}>
          <div>
            Administrator w Serwisie wykorzystuje skrypty javascript i
            komponenty webowe partnerów, którzy mogą umieszczać własne pliki
            cookies na Urządzeniu Użytkownika. Pamiętaj, że w ustawieniach
            swojej przeglądarki możesz sam decydować o dozwolonych plikach
            cookies jakie mogą być używane przez poszczególne witryny
            internetowe. Poniżej znajduje się lista partnerów lub ich usług
            zaimplementowanych w Serwisie, mogących umieszczać pliki cookies:
          </div>
          <ul>
            <li style={{ fontWeight: 700 }}>Usługi multimedialne</li>
            <li style={{ fontWeight: 700 }}>
              Usługi społecznościowe / łączone (Rejestracja, Logowanie,
              udostępnianie treści, komunikacja, itp.)
            </li>
          </ul>
          <div>
            Usługi świadczone przez podmioty trzecie są poza kontrolą
            Administratora. Podmioty te mogą w każdej chwili zmienić swoje
            warunki świadczenia usług, polityki prywatności, cel przetwarzania
            danych oraz sposów wykorzystywania plików cookie.
          </div>
        </div>
      )}
    </div>
  );
};

export default ExternalWebsites;
