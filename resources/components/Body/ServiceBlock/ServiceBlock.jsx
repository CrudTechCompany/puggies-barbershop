import style from "./ServiceBlock.module.css";
import ServiceItem from "./ServiceItem/ServiceItem";

const ServiceBlock = () => {
    const services = [
        {
            service: "Strzyżenie włosów",
            price: "90 zł",
        },
        {
            service: "Buzz Cut + Fade",
            price: "80 zł",
        },
        {
            service: "Strzyżenie brody",
            price: "70 zł",
        },
        {
            service: "Tradycyjne golenie brody z gorącym ręcznikiem",
            price: "80 zł",
        },
        {
            service: "Strzyżenie włosów + trymowanie brody",
            price: "120 zł",
        },
        {
            service: "Strzyżenie włosów + tradycyjne golenie brody",
            price: "140 zł",
        },
        {
            service: "Strzyżenie włosów + golenie brody brzytwą",
            price: "150 zł",
        },
    ];

    return (
        <div className={style["service-block"]} id="services">
            <div className={style["content-block"]}>
                <span className={style["title"]}>Usługi</span>
                <div className={style["services"]}>
                    {services.map((el, index) => (
                        <ServiceItem
                            key={index}
                            service={el.service}
                            price={el.price}
                        />
                    ))}
                    <div className={style["cross-line"]} />
                </div>
            </div>
        </div>
    );
};

export default ServiceBlock;
