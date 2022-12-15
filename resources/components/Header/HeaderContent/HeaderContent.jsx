import style from "./HeaderContent.module.css";
import logo from "./../../../assets/logo.png";
import inst_icon from "./../../../assets/instagram.svg";
import menu_icon from "./../../../assets/burger_menu.png";
import { Link } from "react-scroll";

const HeaderContent = (props) => {
    return (
        <div className={style["header-content"]}>
            <div className={style["nav-block"]}>
                <Link
                    className={style["header-content__item"]}
                    to="about-us"
                    smooth="true"
                    duration={500}
                >
                    O nas
                </Link>
                <Link
                    className={style["header-content__item"]}
                    to="team"
                    smooth="true"
                    duration={500}
                >
                    Zespół
                </Link>
                <Link
                    className={style["header-content__item"]}
                    to="study"
                    smooth="true"
                    duration={500}
                >
                    Szkolenia
                </Link>
            </div>
            <button className={style["logo-button"]}>
                <img src={logo} alt="" />
            </button>
            <div className={style["social-block"]}>
                <Link
                    className={style["header-content__item"]}
                    to="services"
                    smooth="true"
                    duration={500}
                >
                    Usługi
                </Link>
                <a
                    className={style["header-content__item"]}
                    href="tel:+48 798 600 477"
                >
                    +48 798 600 477
                </a>
                <a
                    href="https://www.instagram.com/puggiesbarbershop_wro/"
                    target="_blank"
                >
                    <button className={style["social-block__button"]}>
                        <img src={inst_icon} alt="" />
                    </button>
                </a>
            </div>
            <button
                className={style["menu-button"]}
                onClick={props.onClickMenuHandler}
            >
                <img src={menu_icon} alt="" />
            </button>
        </div>
    );
};

export default HeaderContent;
