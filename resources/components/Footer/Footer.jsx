import style from "./Footer.module.css";
import logo from "./../../assets/logo.png";
import inst_icon from "./../../assets/instagram.svg";
import facebook from "./../../assets/facebook.svg";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
    const onClickFooterLinkHandler = (event) => {
        switch (event.target.text) {
            case "O nas": {
                document
                    .getElementById("about-us")
                    .scrollIntoView({ behavior: "smooth" });
                break;
            }
            case "Zespół": {
                document
                    .getElementById("team")
                    .scrollIntoView({ behavior: "smooth" });
                break;
            }
            case "Szkolenia": {
                document
                    .getElementById("study")
                    .scrollIntoView({ behavior: "smooth" });
                break;
            }
            case "Usługi": {
                document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" });
                break;
            }
        }
    };
    return (
        <footer className={style["footer"]}>
            <div className={style["footer-content"]}>
                <div className={style["content-block"]}>
                    <ScrollLink
                        style={{ width: "min-content" }}
                        to="header"
                        smooth="true"
                        duration={500}
                    >
                        <button className={style["logo-button"]}>
                            <img src={logo} alt="" />
                        </button>
                    </ScrollLink>
                    <div className={style["link-block"]}>
                        <ScrollLink to="about-us" smooth="true" duration={500}>
                            O nas
                        </ScrollLink>
                        <ScrollLink to="team" smooth="true" duration={500}>
                            Zespół
                        </ScrollLink>
                        <ScrollLink to="study" smooth="true" duration={500}>
                            Szkolenia
                        </ScrollLink>
                        <ScrollLink to="services" smooth="true" duration={500}>
                            Usługi
                        </ScrollLink>
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
                <Link
                    to={"/privacy-policy"}
                    target="_blank"
                    className={style["privacy-policy"]}
                >
                    Polityka prywatności
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
