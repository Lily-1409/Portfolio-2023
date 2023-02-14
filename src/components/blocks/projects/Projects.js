import s from "./style.module.css";

import projects from "./components/projectsList";
import Project from "./components/Project";

function Projects () {
    return (
        <div className={s.projectsWrapper}>
            <div className={s.projectsContent}>
                <h2 className={s.title}>Проекты</h2>
                <ul>
                    {projects.map((item) => {
                        return(
                            <Project  image={item.cover} 
                                      description={item.description}
                                      title={item.title}
                                      cover={item.cover}
                                      GitHub={item.GitHub}
                                      LiveSite={item.LiveSite}
                                      alt={item.alt}
                                      target={item.target} />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Projects;