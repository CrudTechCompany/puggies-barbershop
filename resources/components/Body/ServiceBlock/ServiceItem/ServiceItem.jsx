import style from "./ServiceItem.module.css";

const ServiceItem = (props) => {
    return (
        <div className={style["service-item"]}>
            <div className={style["cross-line"]} />
            <div className={style["item-content"]}>
                <span className={style["service-title"]}>{props.service}</span>
                <div className={style["price-block"]}>
                    <span className={style["price"]}>{props.price}</span>
                    <a
                        href="https://booksy.com/pl-pl/157070_puggies-barber-shop_barber-shop_13750_wroclaw"
                        target="_blank"
                    >
                        <button className={style["button"]}>zapisać się</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;
