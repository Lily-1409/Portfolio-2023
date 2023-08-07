import s from "./style.module.css";

import projects from "./components/projectsList";
import Project from "./components/Project";

function Projects () {
    return (
        <div className={s.projectsWrapper} id="projects">
            <div className={s.projectsContent}>
                <h2 className={s.projectsTitle}>Проекты</h2>
                <p className={s.projectsCaption}>Здесь можно посмотреть мои проекты</p>
                <ul className={s.projectsList}>
                    {projects.map((item) => {
                        return(
                            <Project  image={item.cover} 
                                      description={item.description}
                                      title={item.title}
                                      cover={item.cover}
                                      GitHub={item.GitHub}
                                      LiveSite={item.LiveSite}
                                      alt={item.alt}
                                      target={item.target}
                                      technology={item.technology}
                                      key={item.id} />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Projects;