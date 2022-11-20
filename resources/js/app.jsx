import "./bootstrap";
import ReactDOM from "react-dom/client";
import style from "./App.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Body from "../components/Body/Body";
import { useState } from "react";
import MobileMenu from "../components/MobileMenu/MobileMenu";

const App = () => {
    const [mobileMenuState, setMobileMenuState] = useState(false);
    const onClickMenuHandler = () => {
        setMobileMenuState((prev) => !prev);
    }
    return (
        <div
            className={style["container"]}
            style={{ position: mobileMenuState ? "fixed" : "relative" }}
        >
            <Header onClickMenuHandler={onClickMenuHandler}/>
            <Body />
            <Footer />
            {mobileMenuState && <MobileMenu onClickMenuHandler={onClickMenuHandler}/>}
        </div>
    );
};

export default App;

if (document.getElementById("root")) {
    ReactDOM.createRoot(document.getElementById("root")).render(<App />);
}
