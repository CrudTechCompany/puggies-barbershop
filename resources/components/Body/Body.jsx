import AboutUsBlock from "./AboutUsBlock/AboutUsBlock";
import style from "./Body.module.css";
import LinkBlock from "./LinkBlock/LinkBlock";
import PuggiesBlock from "./PuggiesBlock/PuggiesBlock";
import ServiceBlock from "./ServiceBlock/ServiceBlock";
import StudyBlock from "./StudyBlock/StudyBlock";
import TeamBlock from "./TeamBlock/TeamBlock";

const Body = () => {
    return (
        <div className={style["body-block"]}>
            <PuggiesBlock/>
            <AboutUsBlock/>
            <ServiceBlock/>
            <TeamBlock/>
            <StudyBlock/>
            <LinkBlock/>
        </div>
    );
}

export default Body;