import s from "./style.module.css";

function Skill (props) {
    return (
        <li className={s.skillsItem} key={props.id} tabIndex="0">
            {props.icon}
            <span className={s.skillsName}>{props.skillName}</span>
            <p className={s.skillsDescription}>{props.skillDescription}</p>
        </li>
    )
}

export default Skill;