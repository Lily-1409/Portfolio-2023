import s from "./style.module.css";

import skillsList from "./components/skillsList";
import Skill from "./components/Skill";

function Skills () {
    return (
        <div className={s.skillsWrapper}>
            <div className={s.skillsContent}>
                <h2 className={s.title}>Технические навыки и инструменты</h2>
                <ul className={s.skillsList}>
                    {skillsList.map((item) => {
                        return (
                            <Skill icon={item.icon} skillName={item.skillName} />
                        )
                    })}
                </ul>
                </div>
        </div>
    )
}

export default Skills;