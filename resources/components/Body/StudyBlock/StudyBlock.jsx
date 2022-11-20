import style from "./StudyBlock.module.css";
import first_image from "./../../../assets/study_first.png";
import second_image from "./../../../assets/study_second.png";

const StudyBlock = () => {
    return (
        <div className={style["study-block"]} id="study">
            <div className={style["content-block"]}>
                <span className={style["content-title"]}>Szkolenia</span>
                <span className={style["sub-title"]}>Podstawowe techniki</span>
                <div className={style["description-block"]}>
                    <img
                        className={style["first-image"]}
                        src={first_image}
                        alt=""
                    />
                    <img
                        className={style["second-image"]}
                        src={second_image}
                        alt=""
                    />
                    <div className={style["description-content"]}>
                        <span className={style["top-description"]}>
                            Znajomość technik to podstawa każdej wykonanej
                            fryzury. Zrozumienie tych technik da ci prawidłowy
                            pogląd na strukturę i budowę kształtu każdej
                            fryzury, o ile podstawą strzyżenia zawsze była, jest
                            s nadal będzie właściwie zastosowana technika. Wybór
                            jednej z nich pomoże Ci stworzyć design oraz kształt
                            fryzury na podstawie Twoich życzeń lub życzeń
                            klienta. Twoje zrozumienie stanie się jasne i
                            doprecyzowane, a nabyte umiejętności pomogą Ci
                            pewnie i komfortowo pracować.
                        </span>
                        <div className={style["bottom-block"]}>
                            <div className={style["block-item"]}>
                                <div className={style["cross-line"]} />
                                <div className={style["item-description"]}>
                                    Z pomocą tej wiedzy będziesz mógł kreatywnie
                                    łączyć formy i techniki na najprostszych
                                    fryzurach
                                </div>
                            </div>
                            <div className={style["block-item"]}>
                                <div className={style["cross-line"]} />
                                <div className={style["item-description"]}>
                                    Ten kurs jest przeznaczony dla fryzjerów,
                                    którzy posiadają już minimalną wiedzę i chcą
                                    podnieść poziom swoich umiejętności
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyBlock;
