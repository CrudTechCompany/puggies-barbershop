import style from "./TeamBlock.module.css";
import jurek from "./../../../assets/jurek.png";
import mikolaj from "./../../../assets/mikolaj.png";
import dima from "./../../../assets/dima.png";
import slava from "./../../../assets/slava.png";
import inst_icon from "./../../../assets/instagram.svg";

const TeamBlock = () => {
    return (
        <div className={style["team-block"]} id="team">
            <div className={style["title-block"]}>
                <span className={style["title"]}>Zespół</span>
                <span className={style["description"]}>
                    W jednym miejscu udało nam się zebrać jednych z najlepszych
                    przedstawicieli tego zawodu, którzy lubią swoją pracę i są
                    całkowicie oddani swojemu zawodowi. Każdy z nas ma duże
                    doświadczenie i umiejętność pracy z każdym rodzajem włosów.
                    Dlatego każda nasza usługa zostanie wykonana bezbłędnie,
                    przejrzyście i odpowiedzialnie. Cenimy indywidualność każdej
                    osoby, która do nas przychodzi. Prostota, szczerość i
                    profesjonalizm to trzy podstawowe elementy naszego zespołu.
                </span>
            </div>
            <div className={style["content-block"]}>
                <div className={style["content-item"]}>
                    <img className={style["item-image"]} src={jurek} alt="" />
                    <div className={style["item-social"]}>
                        <span>Jurek</span>
                        <img src={inst_icon} alt=""/>
                    </div>
                </div>
                <div className={style["content-item"]}>
                    <img className={style["item-image"]} src={mikolaj} alt="" />
                    <div className={style["item-social"]}>
                        <span>Mikołaj</span>
                        <img src={inst_icon} alt=""/>
                    </div>
                </div>
                <div className={style["content-item"]}>
                    <img className={style["item-image"]} src={dima} alt="" />
                    <div className={style["item-social"]}>
                        <span>Dima</span>
                        <img src={inst_icon} alt=""/>
                    </div>
                </div>
                <div className={style["content-item"]}>
                    <img className={style["item-image"]} src={slava} alt="" />
                    <div className={style["item-social"]}>
                        <span>Slava</span>
                        <img src={inst_icon} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamBlock;
