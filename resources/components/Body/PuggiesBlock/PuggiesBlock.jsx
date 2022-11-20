import style from "./PuggiesBlock.module.css";
import puggies_logo from "./../../../assets/puggies.svg";
import block_image from "./../../../assets/puggies_block.png";

const PuggiesBlock = () => {
    return (
        <div className={style["puggies-block"]}>
            <div className={style["puggies-content"]}>
                <img
                    className={style["puggies-logo"]}
                    src={puggies_logo}
                    alt=""
                />
                <span className={style["puggies-title"]}>
                    CUT x SHAVE x VIBE
                </span>
                <button className={style["puggies-button"]}>Nasze Usługi</button>
            </div>
            <img className={style["block-image"]} src={block_image} alt="" />
        </div>
    );
};

export default PuggiesBlock;
