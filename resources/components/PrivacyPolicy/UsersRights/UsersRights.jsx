import style from "./UsersRights.module.css";
import arrow_down from "./../../../assets/arrow_down.svg";
import arrow_up from "./../../../assets/arrow_up.svg";
import { useState } from "react";

const UsersRights = () => {
  const [descriptionState, setDescriptionState] = useState(false);
  const onClickHandler = () => {
    setDescriptionState((prev) => !prev);
  };

  return (
    <div className={style["block"]}>
      <div className={style["cross-line"]} />
      <div className={style["title-block"]}>
        <span className={style["title"]}>
          Prawa Użytkowników związane z przetwarzaniem danych osobowych
        </span>
        <button className={style["button"]} onClick={onClickHandler}>
          <img src={descriptionState ? arrow_up : arrow_down} alt="" />
        </button>
      </div>
      {descriptionState && (
        <div className={style["description-block"]}>
          <div>
            Serwis gromadzi i przetwarza dane Użytkowników na podstawie:
          </div>
          <ul>
            <li style={{ fontWeight: 700 }}>
              Prawo dostępu do danych osobowych
            </li>
          </ul>
          <div>
            Użytkownikom przysługuje prawo uzyskania dostępu do swoich danych
            osobowych, realizowane na żądanie złożone do Administratora
          </div>
          <ul>
            <li style={{ fontWeight: 700 }}>
              Prawo do sprostowania danych osobowych
            </li>
          </ul>
          <div>
            Użytkownikom przysługuje prawo żądania od Administratora
            niezwłocznego sprostowania danych osobowych, które są nieprawidłowe
            lub / oraz uzupełnienia niekompletnych danych osobowych, realizowane
            na żądanie złożone do Administratora
          </div>
          <ul>
            <li style={{ fontWeight: 700 }}>
              Prawo do usunięcia danych osobowych
            </li>
          </ul>
          <div>
            Użytkownikom przysługuje prawo żądania od Administratora
            niezwłocznego usunięcia danych osobowych, realizowane na żądanie
            złożone do Administratora W przypadku kont użytkowników, usunięcie
            danych polega na anonimizacji danych umożliwiających identyfikację
            Użytkownika. Administrator zastrzega sobie prawo wstrzymania
            realizacji żądania usunięcia danych w celu ochrony prawnie
            uzasadnionego interesu Administratora (np. w gdy Użytkownik dopuścił
            się naruszenia Regulaminu czy dane zostały pozyskane wskutek
            prowadzonej korespondencji). W przypadku usługi Newsletter,
            Użytkownik ma możliwość samodzielnego usunięcia swoich danych
            osobowych korzystając z odnośnika umieszczonego w każdej przesyłanej
            wiadomości e-mail
          </div>
          <ul>
            <li style={{ fontWeight: 700 }}>Prawo do ograniczenia przetwarzania danych osobowych</li>
          </ul>
          <div>
            Użytkownikom przysługuje prawo ograniczenia przetwarzania danych
            osobowych w przypadkach wskazanych w art. 18 RODO, m.in.
            kwestionowania prawidłowość danych osobowych, realizowane na żądanie
            złożone do Administratora
          </div>
          <ul>
            <li style={{ fontWeight: 700 }}>Prawo do przenoszenia danych osobowych</li>
          </ul>
          <div>
            Użytkownikom przysługuje prawo uzyskania od Administratora, danych
            osobowych dotyczących Użytkownika w ustrukturyzowanym, powszechnie
            używanym formacie nadającym się do odczytu maszynowego, realizowane
            na żądanie złożone do Administratora
          </div>
          <ul>
            <li style={{ fontWeight: 700 }}>
              Prawo wniesienia sprzeciwu wobec przetwarzania danych osobowych
            </li>
          </ul>
          <div>
            Użytkownikom przysługuje prawo wniesienia sprzeciwu wobec
            przetwarzania jego danych osobowych w przypadkach określonych w art.
            21 RODO, realizowane na żądanie złożone do Administratora
          </div>
          <ul>
            <li style={{ fontWeight: 700 }}>Prawo wniesienia skargi</li>
          </ul>
          <div>
            Użytkownikom przysługuje prawo wniesienia skargi do organu
            nadzorczego zajmującego się ochroną danych osobowych
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersRights;