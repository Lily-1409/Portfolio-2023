import s from "./style.module.css";

import skillsList from "./components/skillsList";
import Skill from "./components/Skill";

function Skills () {
    return (
        <div className={s.skillsWrapper} id="skills">
            <div className={s.skillsContent}>
                <h2 className={s.skillsTitle}>Технологии</h2>
                {/* <h2 className={s.skillsTitle}>Технические навыки и инструменты</h2> */}
                <p className={s.skillsCaption}>Здесь можно посмотреть мои навыки</p>
                <ul className={s.skillsList}>
                    {skillsList.map((item) => {
                        return (
                            <Skill icon={item.icon} skillName={item.skillName} skillDescription={item.skillDescription} key={item.id} />
                        )
                    })}
                </ul>
                </div>
        </div>
    )
}

export default Skills;