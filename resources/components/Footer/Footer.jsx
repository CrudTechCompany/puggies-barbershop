import style from "./Footer.module.css";
import logo from "./../../assets/logo.png";
import inst_icon from "./../../assets/instagram.svg";
import facebook from "./../../assets/facebook.svg";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <footer className={style["footer"]}>
            <div className={style["footer-content"]}>
                <div className={style["content-block"]}>
                    <Link to="header" smooth={true} duration={500}>
                        <button className={style["logo-button"]}>
                            <img src={logo} alt="" />
                        </button>
                    </Link>

                    <div className={style["link-block"]}>
                        <Link to="about-us" smooth={true} duration={500}>
                            <span>O nas</span>
                        </Link>
                        <Link to="team" smooth={true} duration={500}>
                            <span>Zespół</span>
                        </Link>
                        <Link to="study" smooth={true} duration={500}>
                            <span>Szkolenia</span>
                        </Link>
                        <Link to="services" smooth={true} duration={500}>
                            <span>Usługi</span>
                        </Link>
                    </div>
                    <div className={style["address-block"]}>
                        <span>gen. Romualda Traugutta 71</span>
                        <span>50-417, Wrocław</span>
                        <span>Polska</span>
                    </div>
                    <div className={style["social-block"]}>
                        <a href="tel:+48 798 600 477">+48 798 600 477</a>
                        <div className={style["link"]}>
                            <a
                                href="https://www.instagram.com/puggiesbarbershop_wro/"
                                target="_blank"
                            >
                                <img src={inst_icon} alt="" />
                            </a>
                            <a
                                href="https://www.facebook.com/puggiesbarbershop"
                                target="_blank"
                            >
                                <img src={facebook} alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={style["cross-line"]} />
                <a className={style["privacy-policy"]}>Polityka prywatności</a>
            </div>
        </footer>
    );
};

export default Footer;
