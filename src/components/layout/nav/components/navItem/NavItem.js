import s from "./style.module.css";

function NavItem (props) {
    return (
        <li className={s.item}>
            <a className={s.link} href={props.link} target={props.target}>{props.title}</a>
        </li>
    )
}

export default NavItem;