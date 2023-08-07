import s from "./style.module.css";
import frontendMen from "assets/frontend-developer.png";

function Intro () {
    return (
        <div className={s.introWrapper} id="intro">
            <div className={s.introContent}>
                <div className={s.introDescriptionWrapper}>
                    <h1 className={s.introTitle}> Привет, <span className={s.introName}>Меня зовут Лилия!</span></h1>
                    <p className={s.introCaption}>Фронтенд-разработчик</p>
                    <a className={s.introConnect} href="https://telegram.me/Liliya_Anikina" target="_blank" rel="noreferrer">Начать беседу</a>
                </div>
                <div className={s.introImageWrapper}>
                    <img className={s.introImage} src={frontendMen} alt="frontendMen" width="315" height="352"/>
                </div>
            </div>
        </div>
    )
}

export default Intro;