import style from "./DataStorage.module.css";
import arrow_down from "./../../../assets/arrow_down.svg";
import arrow_up from "./../../../assets/arrow_up.svg";
import { useState } from "react";

const DataStorage = () => {
  const [descriptionState, setDescriptionState] = useState(false);
  const onClickHandler = () => {
    setDescriptionState((prev) => !prev);
  };

  return (
    <div className={style["block"]}>
      <div className={style["cross-line"]} />
      <div className={style["title-block"]}>
        <span className={style["title"]}>
          Bezpieczeństwo składowania danych
        </span>
        <button className={style["button"]} onClick={onClickHandler}>
          <img src={descriptionState ? arrow_up : arrow_down} alt="" />
        </button>
      </div>
      {descriptionState && (
        <ul className={style["list-block"]}>
          <li>
            <span >Mechanizmy składowania i odczytu plików Cookie</span> - Mechanizmy
            składowania, odczytu i wymiany danych pomiędzy Plikami Cookies
            zapisywanymi na Urządzeniu Użytkownika a Serwisem są realizowane
            poprzez wbudowane mechanizmy przeglądarek internetowych i nie
            pozwalają na pobieranie innych danych z Urządzenia Użytkownika lub
            danych innych witryn internetowych, które odwiedzał Użytkownik, w
            tym danych osobowych ani informacji poufnych. Przeniesienie na
            Urządzenie Użytkownika wirusów, koni trojańskich oraz innych robaków
            jest także praktycznie niemożliwe
          </li>
          <li>
            <span >Cookie wewnętrzne</span> - zastosowane przez Administratora pliki Cookie są
            bezpieczne dla Urządzeń Użytkowników i nie zawierają skryptów,
            treści lub informacji mogących zagrażać bezpieczeństwu danych
            osobowych lub bezpieczeństwu Urządzenia z którego korzysta
            Użytkownik
          </li>
          <li>
            <span style={{fontWeight:700}}>Cookie zewnętrzne</span> - Administrator dokonuje wszelkich możliwych
            działań w celu weryfikacji i doboru partnerów serwisu w kontekście
            bezpieczeństwa Użytkowników. Administrator do współpracy dobiera
            znanych, dużych partnerów o globalnym zaufaniu społecznym. Nie
            posiada on jednak pełnej kontroli nad zawartością plików Cookie
            pochodzących od zewnętrznych partnerów. Za bezpieczeństwo plików
            Cookie, ich zawartość oraz zgodne z licencją wykorzystanie przez
            zainstalowane w serwisie Skrypty, pochodzących z Serwisów
            zewnętrznych, Administrator nie ponosi odpowiedzialności na tyle na
            ile pozwala na to prawo. Lista partnerów zamieszczona jest w dalszej
            części Polityki Prywatności
          </li>
          <li>
            <span style={{fontWeight:700}}>Kontrola plików Cookie</span>
            <ul>
              <li>
                Użytkownik może w dowolnym momencie, samodzielnie zmienić
                ustawienia dotyczące zapisywania, usuwania oraz dostępu do
                danych zapisanych plików Cookies przez każdą witrynę internetową
              </li>
              <li>
                Informacje o sposobie wyłączenia plików Cookie w
                najpopularniejszych przeglądarkach komputerowych dostępne są na
                stronie: jak wyłączyć cookie lub u jednego ze wskazanych
                dostawców:
                <ul>
                  <li>Zarządzanie plikami cookies w przeglądarce Chrome</li>
                  <li>Zarządzanie plikami cookies w przeglądarce Opera</li>
                  <li>Zarządzanie plikami cookies w przeglądarce FireFox</li>
                  <li>Zarządzanie plikami cookies w przeglądarce Edge</li>
                  <li>Zarządzanie plikami cookies w przeglądarce Safari</li>
                  <li>
                    Zarządzanie plikami cookies w przeglądarce Internet Explorer
                    11
                  </li>
                </ul>
              </li>
              <li>
                Użytkownik może w dowolnym momencie usunąć wszelkie zapisane do
                tej pory pliki Cookie korzystając z narzędzi Urządzenia
                Użytkownika, za pośrednictwem którego Użytkownik korzysta z
                usług Serwisu
              </li>
            </ul>
          </li>
          <li>
            Zagrożenia po stronie Użytkownika - Administrator stosuje wszelkie
            możliwe środki techniczne w celu zapewnienia bezpieczeństwa danych
            umieszczanych w plikach Cookie. Należy jednak zwrócić uwagę, że
            zapewnienie bezpieczeństwa tych danych zależy od obu stron w tym
            działalności Użytkownika. Administrator nie bierze odpowiedzialności
            za przechwycenie tych danych, podszycie się pod sesję Użytkownika
            lub ich usunięcie, na skutek świadomej lub nieświadomej działalność
            Użytkownika, wirusów, koni trojańskich i innego oprogramowania
            szpiegującego, którymi może jest lub było zainfekowane Urządzenie
            Użytkownika. Użytkownicy w celu zabezpieczenia się przed tymi
            zagrożeniami powinni stosować się do zasad zwiększających ich
            cyberbezpieczeństwo
          </li>
          <li>
            Przechowywanie danych osobowych - Administrator zapewnia, że
            dokonuje wszelkich starań, by przetwarzane dane osobowe wprowadzone
            dobrowolnie przez Użytkowników były bezpieczne, dostęp do nich był
            ograniczony i realizowany zgodnie z ich przeznaczeniem i celami
            przetwarzania. Administrator zapewnia także, że dokonuje wszelkich
            starań w celu zabezpieczenia posiadanych danych przed ich utratą,
            poprzez stosowanie odpowiednich zabezpieczeń fizycznych jak i
            organizacyjnych
          </li>
        </ul>
      )}
    </div>
  );
};

export default DataStorage;
