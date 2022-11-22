import style from "./LegalBasis.module.css";
import arrow_down from "./../../../assets/arrow_down.svg";
import arrow_up from "./../../../assets/arrow_up.svg";
import { useState } from "react";

const LegalBasis = () => {
  const [descriptionState, setDescriptionState] = useState(false);
  const onClickHandler = () => {
    setDescriptionState((prev) => !prev);
  };
  return (
    <div className={style["block"]}>
      <div className={style["cross-line"]} />
      <div className={style["title-block"]}>
        <span className={style["title"]}>
          Podstawy prawne przetwarzania danych osobowych
        </span>
        <button className={style["button"]} onClick={onClickHandler}>
          <img src={descriptionState ? arrow_up : arrow_down} alt="" />
        </button>
      </div>
      {descriptionState && <div className={style["description-block"]}>
        <div>Serwis gromadzi i przetwarza dane Użytkowników na podstawie:</div>
        <ul>
          <li>
            Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia
            27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
            przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
            takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne
            rozporządzenie o ochronie danych)
          </li>
        </ul>
        <div>- art. 6 ust. 1 lit. a</div>
        <div>
          osoba, której dane dotyczą wyraziła zgodę na przetwarzanie swoich
          danych osobowych w jednym lub większej liczbie określonych celów
        </div>
        <div>- art. 6 ust. 1 lit. b</div>
        <div>
          przetwarzanie jest niezbędne do wykonania umowy, której stroną jest
          osoba, której dane dotyczą, lub do podjęcia działań na żądanie osoby,
          której dane dotyczą, przed zawarciem umowy
        </div>
        <div>- art. 6 ust. 1 lit. f</div>
        <div>
          przetwarzanie jest niezbędne do celów wynikających z prawnie
          uzasadnionych interesów realizowanych przez administratora lub przez
          stronę trzecią
        </div>
        <ul>
          <li>
            Ustawa z dnia 10 maja 2018 r. o ochronie danych osobowych (Dz.U.
            2018 poz. 1000)
          </li>
          <li>
            Ustawa z dnia 16 lipca 2004 r. Prawo telekomunikacyjne (Dz.U. 2004
            nr 171 poz. 1800)
          </li>
          <li>
            Ustawa z dnia 4 lutego 1994 r. o prawie autorskim i prawach
            pokrewnych (Dz. U. 1994 Nr 24 poz. 83)
          </li>
        </ul>
      </div>}
    </div>
  );
};

export default LegalBasis;
