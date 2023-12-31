import s from "./style.module.css";

function NavItem ({ title, link, target, rel, onLinkClick}) {
    function handlerClickScroll (event) {
        onLinkClick()

        if(title !== "Резюме") {
            event.preventDefault();
        }

        const element = document.getElementById(link);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <li className={s.navItem}>
            <a onClick={handlerClickScroll} className={s.navLink} href={link} target={target} rel={rel} >{title}</a>
        </li>
    )
}

export default NavItem;