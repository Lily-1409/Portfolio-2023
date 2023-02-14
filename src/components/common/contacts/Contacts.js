import s from "./style.module.css";

import ContactsItem from "./components/ContactsItem.js";
import contactsList from "components/common/contacts/components/contactsList";

function Contacts () {
    return (
        <ul className={s.contactsList}>
            {contactsList.map((contactsItem) => {
                return (
                    <ContactsItem key={contactsItem.id} caption={contactsItem.caption} link={contactsItem.link} iconImage={contactsItem.iconImage}/>
                )
            })}
        </ul>
    )
}

export default Contacts;