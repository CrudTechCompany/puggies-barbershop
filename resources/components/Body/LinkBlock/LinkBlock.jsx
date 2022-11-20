import style from "./LinkBlock.module.css";
import inst_icon from "./../../../assets/instagram.svg";
import image_1 from "./../../../assets/image_1.png";
import image_2 from "./../../../assets/image_2.png";
import image_3 from "./../../../assets/image_3.png";
import logo from "./../../../assets/logo.png";

const LinkBlock = () => {
    return (
        <div className={style["link-block"]}>
            <div className={style["title-block"]}>
                <div className={style["title"]}>
                    <img src={inst_icon} alt="" />
                    <span>puggiesbarbershop_wro</span>
                </div>
                <div className={style["content-block"]}>
                    <img src={image_1} alt="" />
                    <img src={image_2} alt="" />
                    <div>
                        <img src={logo} alt=""/>
                    </div>
                    <img src={image_3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default LinkBlock;
