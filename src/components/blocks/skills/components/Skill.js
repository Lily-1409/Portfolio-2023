import s from "./style.module.css";

function Skill (props) {
    return (
        <li className={s.skillsItem}>
            {props.icon}
            <span className={s.skillsName}>{props.skillName}</span>
        </li>
    )
}

export default Skill;