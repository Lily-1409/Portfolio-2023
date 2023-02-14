import s from "./style.module.css";
import Logotype from "components/common/Logotype";
import Nav from "../nav/Nav";
import Contacts from "components/common/contacts/Contacts";

function Footer () {
    return (
        <div className={s.footerWrapper}>
            <div className={s.footerContent}>
                <Logotype />
                <Nav />
                <Contacts />
            </div>
        </div>
    )
}

export default Footer;