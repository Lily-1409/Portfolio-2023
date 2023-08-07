import s from "./style.module.css";

function NavItem (props) {
    function handlerClickScroll (event) {
        if(props.title !== "Резюме") {
            event.preventDefault();
        }

        const element = document.getElementById(props.link);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <li className={s.navItem}>
            <a onClick={handlerClickScroll} className={s.navLink} href={props.link} target={props.target}>{props.title}</a>
        </li>
    )
}

export default NavItem;