import "./bootstrap";
import ReactDOM from "react-dom/client";
import style from "./App.module.css";
import Body from "../components/Body/Body";
import React, { useState } from "react";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainPage = (props) => {
    return (
        <React.Fragment>
            <Header onClickMenuHandler={props.onClickMenuHandler} />
            <Body />
            <Footer />
        </React.Fragment>
    );
};

const App = () => {
    const [mobileMenuState, setMobileMenuState] = useState(false);

    const onClickMenuHandler = () => {
        setMobileMenuState((prev) => !prev);
    };

    return (
        <div
            className={style["container"]}
            style={{ position: mobileMenuState ? "fixed" : "relative" }}
        >
            <Routes>
                <Route
                    path="/"
                    element={
                        <MainPage onClickMenuHandler={onClickMenuHandler} />
                    }
                ></Route>
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
            {mobileMenuState && (
                <MobileMenu
                    onClickMenuHandler={onClickMenuHandler}
                />
            )}
        </div>
    );
};

if (document.getElementById("root")) {
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
}
