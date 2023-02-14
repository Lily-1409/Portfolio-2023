import s from "./style.module.css";

function ContactsItem (props) {
    return (
        <li className={s.contactItem}>
            <a href={props.link} title={props.caption}>
                {props.iconImage}
            </a>
     </li>
    )
}

export default ContactsItem;