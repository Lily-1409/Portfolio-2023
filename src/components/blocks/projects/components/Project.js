import s from "./style.module.css";

function Project (props) {
    return (
        <li className={s.projectsItem}>
            <div className={s.projectsImage}>
                <img src={props.cover} alt={props.alt} width="570" height="300"/>
            </div>
            <div className={s.projectDescription}>
                <h3 className={s.projectTitle}>Описание:</h3>
                <p className={s.projectGoal}> {props.description}</p>
                <h3 className={s.projectTitle}>Используемые технологии:</h3>
                <ul className={s.enumeration}>
                    <li className={s.enumerationItem}>HTML</li>
                    <li className={s.enumerationItem}>CSS</li>
                </ul>
                <h3 className={s.projectTitle}>Посмотреть проект:</h3>
                <div className={s.enumeration}>
                    <a className={s.enumerationLink} href={props.GitHub} target={props.target}>GitHub</a>
                    <a className={s.enumerationLink} href={props.LiveSite}>Live Site</a>
                </div>
            </div>
        </li>
    )
}

export default Project;