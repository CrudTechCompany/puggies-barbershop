import style from "./DefinitionsBlock.module.css";
import arrow_down from "./../../../assets/arrow_down.svg";
import arrow_up from "./../../../assets/arrow_up.svg";
import { useState } from "react";

const DefinitionsBlock = () => {
  const [descriptionBlockState, setDescriptionBlockState] = useState(false);

  const onClickHandler = () => {
    setDescriptionBlockState((prev)=> !prev);
  }

  return (
    <div className={style["block"]}>
      <div className={style["cross-line"]} />
      <div className={style["content"]}>
        <div className={style["content__title"]}>
          <span className={style["title"]}>Definicje</span>
          <button className={style["arrow-button"]} onClick={onClickHandler}>
            <img src={descriptionBlockState ? arrow_up : arrow_down} alt="" />
          </button>
        </div>
        {descriptionBlockState && 
          <ul className={style["list-block"]}>
            <li className={style["description"]}>
              <span className={style["sub-title"]}>Serwis</span> - serwis
              internetowy "N/A" działający pod adresem N/A
            </li>
            <li className={style["description"]}>
              <span className={style["sub-title"]}>Serwis zewnętrzny</span> -
              serwisy internetowe partnerów, usługodawców lub usługobiorców
              współpracujących z Administratorem
            </li>
            <li className={style["description"]}>
              <span className={style["sub-title"]}>
                Administrator Serwisu / Danych
              </span>
              - Administratorem Serwisu oraz Administratorem Danych (dalej
              Administrator) jest firma "N/A", prowadząca działalność pod
              adresem: N/A, o nadanym numerze identyfikacji podatkowej (NIP):
              N/A, świadcząca usługi drogą elektroniczną za pośrednictwem
              Serwisu
            </li>
            <li className={style["description"]}>
              <span className={style["sub-title"]}>Użytkownik</span> - osoba
              fizyczna, dla której Administrator świadczy usługi drogą
              elektroniczną za pośrednictwem Serwisu
            </li>
            <li className={style["description"]}>
              <span className={style["sub-title"]}>Urządzenie</span> -
              elektroniczne urządzenie wraz z oprogramowaniem, za pośrednictwem
              którego Użytkownik uzyskuje dostęp do Serwisu
            </li>
            <li className={style["description"]}>
              <span className={style["sub-title"]}>Cookies (ciasteczka)</span> -
              dane tekstowe gromadzone w formie plików zamieszczanych na
              Urządzeniu Użytkownika
            </li>
            <li className={style["description"]}>
              <span className={style["sub-title"]}>RODO</span> - Rozporządzenie
              Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
              2016 r. w sprawie ochrony osób fizycznych w związku z
              przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
              takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne
              rozporządzenie o ochronie danych)
            </li>
            <li className={style["description"]}>
              <span className={style["sub-title"]}>Dane osobowe</span> -
              oznaczają informacje o zidentyfikowanej lub możliwej do
              zidentyfikowania osobie fizycznej („osobie, której dane dotyczą”);
              możliwa do zidentyfikowania osoba fizyczna to osoba, którą można
              bezpośrednio lub pośrednio zidentyfikować, w szczególności na
              podstawie identyfikatora takiego jak imię i nazwisko, numer
              identyfikacyjny, dane o lokalizacji, identyfikator internetowy lub
              jeden bądź kilka szczególnych czynników określających fizyczną,
              fizjologiczną, genetyczną, psychiczną, ekonomiczną, kulturową lub
              społeczną tożsamość osoby fizycznej
            </li>
            <li className={style["description"]}>
              <span className={style["sub-title"]}>Przetwarzanie</span> -
              oznacza operację lub zestaw operacji wykonywanych na danych
              osobowych lub zestawach danych osobowych w sposób zautomatyzowany
              lub niezautomatyzowany, taką jak zbieranie, utrwalanie,
              organizowanie, porządkowanie, przechowywanie, adaptowanie lub
              modyfikowanie, pobieranie, przeglądanie, wykorzystywanie,
              ujawnianie poprzez przesłanie, rozpowszechnianie lub innego
              rodzaju udostępnianie, dopasowywanie lub łączenie, ograniczanie,
              usuwanie lub niszczenie
            </li>
            <li className={style["description"]}>
              <span className={style["sub-title"]}>
                Ograniczenie przetwarzania
              </span>{" "}
              - oznacza oznaczenie przechowywanych danych osobowych w celu
              ograniczenia ich przyszłego przetwarzania
            </li>
            <li className={style["description"]}>
              <span className={style["sub-title"]}>Profilowanie</span> - oznacza
              dowolną formę zautomatyzowanego przetwarzania danych osobowych,
              które polega na wykorzystaniu danych osobowych do oceny niektórych
              czynników osobowych osoby fizycznej, w szczególności do analizy
              lub prognozy aspektów dotyczących efektów pracy tej osoby
              fizycznej, jej sytuacji ekonomicznej, zdrowia, osobistych
              preferencji, zainteresowań, wiarygodności, zachowania, lokalizacji
              lub przemieszczania się
            </li>
            <li className={style["description"]}>
              <span className={style["sub-title"]}>Zgoda</span> - zgoda osoby,
              której dane dotyczą oznacza dobrowolne, konkretne, świadome i
              jednoznaczne okazanie woli, którym osoba, której dane dotyczą, w
              formie oświadczenia lub wyraźnego działania potwierdzającego,
              przyzwala na przetwarzanie dotyczących jej danych osobowych
            </li>
            <li className={style["description"]}>
              <span className={style["sub-title"]}>
                Naruszenie ochrony danych osobowych
              </span>
              - oznacza naruszenie bezpieczeństwa prowadzące do przypadkowego
              lub niezgodnego z prawem zniszczenia, utracenia, zmodyfikowania,
              nieuprawnionego ujawnienia lub nieuprawnionego dostępu do danych
              osobowych przesyłanych, przechowywanych lub w inny sposób
              przetwarzanych
            </li>
            <li className={style["description"]}>
              <span className={style["sub-title"]}>Pseudonimizacja</span> -
              oznacza przetworzenie danych osobowych w taki sposób, by nie można
              ich było już przypisać konkretnej osobie, której dane dotyczą, bez
              użycia dodatkowych informacji, pod warunkiem że takie dodatkowe
              informacje są przechowywane osobno i są objęte środkami
              technicznymi i organizacyjnymi uniemożliwiającymi ich przypisanie
              zidentyfikowanej lub możliwej do zidentyfikowania osobie fizycznej
            </li>
            <li className={style["description"]}>
              <span className={style["sub-title"]}>Anonimizacja</span> -
              Anonimizacja danych to nieodwracalny proces operacji na danych,
              który niszczy / nadpisuje "dane osobowe" uniemożliwiając
              identyfikację, lub powiązanie danego rekordu z konkretnym
              użytkownikiem lub osobą fizyczną.
            </li>
          </ul>
        }
      </div>
    </div>
  );
};

export default DefinitionsBlock;
