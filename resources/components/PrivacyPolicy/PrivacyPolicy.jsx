import style from "./PrivacyPolicy.module.css";
import privacy_image from "./../../assets/privacy_block.png";
import DefinitionsBlock from "./DefinitionsBlock/DefinitionsBlock";
import DataProtectionOfficer from "./DataProtectionOfficer/DataProtectionOfficer";
import TypesOfCookies from "./TypesOfCookies/TypesOfCookies";
import DataStorage from "./DataStorage/DataStorage";
import PurposesCookies from "./PurposesCookies/PurposesCookies";
import ProcessingPersonalData from "./ProcessingPersonalData/ProcessingPersonalData";
import ExternalWebsites from "./ExternalWebsites/ExternalWebsites";
import TypesOfData from "./TypesOfData/TypesOfData";
import PersonalDataAccess from "./PersonalDataAccess/PersonalDataAccess";
import PersonalDataMethod from "./PersonalDataMethod/PersonalDataMethod";
import LegalBasis from "./LegalBasis/LegalBasis";
import PersonalDataPeriod from "./PersonalDataPeriod/PersonalDataPeriod";
import UsersRights from "./UsersRights/UsersRights";
import AdministratorContact from "./AdministratorContact/AdministratorContact";
import WebsiteRequirements from "./WebsiteRequirements/WebsiteRequirements";
import ExternalLinks from "./ExternalLinks/ExternalLinks";
import PrivacyPolicyChanges from "./PrivacyPolicyChanges/PrivacyPolicyChanges";

const PrivacyPolicy = () => {
    return (
        <div className={style["privacy-block"]}>
            <div className={style["image-block"]}>
                <img className={style["image"]} src={privacy_image} alt="" />
                <span className={style["image-title"]}>
                    Polityka Prywatności
                </span>
            </div>
            <div className={style["content"]}>
                <div className={style["content__title"]}>
                    Polityka prywatności
                </div>
                <span className={style["content__description"]}>
                    Poniższa Polityka Prywatności określa zasady zapisywania i
                    uzyskiwania dostępu do danych na Urządzeniach Użytkowników
                    korzystających z Serwisu do celów świadczenia usług drogą
                    elektroniczną przez Administratora oraz zasady gromadzenia i
                    przetwarzania danych osobowych Użytkowników, które zostały
                    podane przez nich osobiście i dobrowolnie za pośrednictwem
                    narzędzi dostępnych w Serwisie. Poniższa Polityka
                    Prywatności jest integralną częścią Regulaminu Serwisu,
                    który określa zasady, prawa i obowiązki Użytkowników
                    korzystających z Serwisu.
                </span>
            </div>
            <DefinitionsBlock />
            <DataProtectionOfficer />
            <TypesOfCookies />
            <DataStorage />
            <PurposesCookies />
            <ProcessingPersonalData />
            <ExternalWebsites />
            <TypesOfData />
            <PersonalDataAccess />
            <PersonalDataMethod />
            <LegalBasis />
            <PersonalDataPeriod />
            <UsersRights />
            <AdministratorContact />
            <WebsiteRequirements />
            <ExternalLinks />
            <PrivacyPolicyChanges />
        </div>
    );
};

export default PrivacyPolicy;
