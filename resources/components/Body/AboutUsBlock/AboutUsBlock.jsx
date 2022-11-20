import style from "./AboutUsBlock.module.css";
import block_image from "./../../../assets/about_us_first.png";
import description_image from "./../../../assets/about_us_second.png";

const AboutUsBlock = () => {
    return (
        <div className={style["about-block"]} id="about-us">
            <div className={style["content-block"]}>
                <span className={style["content-title"]}>O nas</span>
                <div className={style["description-block"]}>
                    <img src={block_image} alt="" />
                    <div className={style["description-content"]}>
                        <span>
                            PUGGIES to coś więcej niż po prostu męski salon! To
                            miejsce, które łączy proste ludzkie wartości z
                            profesjonalnym podejściem.To miejsce siły, które
                            szanuje przyjęte tradycje zawodu BARBER z nowoczesną
                            szkołą fryzjerstwa męskiego. Dla nas to coś więcej
                            niż praca! To jest styl życia.
                        </span>
                        <img src={description_image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsBlock;
