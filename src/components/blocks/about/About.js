import s from "./style.module.css";

import desktopImage from "assets/desktopImage.png";

function About () {
    return (
        <div className={s.aboutWrapper} id="about">
            <div className={s.aboutContent}>
                <div className={s.aboutImageWrapper}>
                    <img className={s.aboutImage} src={desktopImage} alt="avatar2" width="516" height="450"/>
                </div>
                <div className={s.aboutDescriptionWrapper}>
                    <h2 className={s.aboutTitle}>Обо мне</h2>
                    <p className={s.aboutDescription}>Люблю создавать что-то новое и видеть результат своей работы, поэтому, выбрала для себя направление IT, а именно Frontend-разработку)</p>
                    <p className={s.aboutDescription}>Мой путь в качестве it-специалиста начался в 2021 году, у меня мало опыта, но я стремлюсь учиться и решать поставленные передо мной задачи!</p>
                    <p className={s.aboutDescription}>Здесь можно посмотреть результаты моей работы: <a className={s.aboutLink} href="https://github.com/Lily-1409">https://github.com/Lily-1409</a>.</p>
                    <p className={s.aboutDescription}>В данный момент я продолжаю своё обучение и сконцентрирована на JavaScript и ES6.</p>
                    <a className={s.aboutResume} href="assets/Resume.pdf" target="_blank" rel="noreferrer">Мое резюме</a>
                </div>
            </div>
       </div>
    )
}

export default About;