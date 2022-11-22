import style from "./MobileMenu.module.css";
import logo from "./../../assets/logo.png";
import close_icon from "./../../assets/close_icon.svg";
import inst_icon from "./../../assets/instagram.svg";
import { Link } from "react-scroll";

const MobileMenu = (props) => {
    return (
        <div className={style["mobile-menu"]}>
            <div className={style["content"]}>
                <div className={style["menu-header"]}>
                    <div className={style["logo-block"]}>
                        <img src={logo} alt="" />
                    </div>
                    <button
                        className={style["close_button"]}
                        onClick={props.onClickMenuHandler}
                    >
                        <img src={close_icon} alt="" />
                    </button>
                </div>
            </div>
            <div className={style["link-block"]}>
                <Link
                    className={style["link-item"]}
                    onClick={props.onClickMenuHandler}
                    to="about-us"
                    smooth="true"
                    duration={500}
                >
                    O nas
                </Link>

                <Link
                    className={style["link-item"]}
                    onClick={props.onClickMenuHandler}
                    to="team"
                    smooth="true"
                    duration={500}
                >
                    Zespół
                </Link>
                <Link
                    className={style["link-item"]}
                    onClick={props.onClickMenuHandler}
                    to="study"
                    smooth="true"
                    duration={500}
                >
                    Szkolenia
                </Link>
                <Link
                    className={style["link-item"]}
                    onClick={props.onClickMenuHandler}
                    to="services"
                    smooth="true"
                    duration={500}
                >
                    Usługi
                </Link>
                <div className={style["contact-block"]}>
                    <a
                        href="tel:+48 798 600 477"
                        onClick={props.onClickMenuHandler}
                    >
                        +48 798 600 477
                    </a>
                    <a
                        href="https://www.instagram.com/puggiesbarbershop_wro/"
                        target="_blank"
                        onClick={props.onClickMenuHandler}
                    >
                        <img src={inst_icon} alt="" />
                        <span>puggiesbarbershop_wro</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
