import s from "./style.module.css";

function SocialItem (props) {
    return (
        <li className={s.socialItem}>
            <a href={props.link} title={props.caption} target={props.target}>
                {props.iconImage}
            </a>
     </li>
    )
}

export default SocialItem;