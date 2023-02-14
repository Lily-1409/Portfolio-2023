import s from "./style.module.css";

import image from "assets/frontend_3.jpg";

function About () {
    return (
        <div className={s.aboutWrapper}>
            <div className={s.aboutContent}>
                <div className={s.mainImageWrapper}>
                    <img className={s.mainImage} src={image} alt="avatar2" width="516" height="450"/>
                </div>
                <div className={s.description}>
                    <h2 className={s.title}>Обо мне</h2>
                    <p className={s.description}>Люблю создавать что-то новое и видеть результат своей работы, поэтому, выбрала для себя направление IT, а именно Frontend-разработку)</p>
                    <p className={s.description}>Мой путь в качестве it-специалиста начался в 2021 году, у меня мало опыта, но я стремлюсь учиться и решать поставленные передо мной задачи!</p>
                    <p className={s.description}>Здесь можно посмотреть результаты моей работы: <a href="https://github.com/Lily-1409">https://github.com/Lily-1409</a>.</p>
                    <p className={s.description}>В данный момент я продолжаю своё обучение и сконцентрирована на JavaScript и ES6.</p>
                    <p className={s.description}>В свободное время я посещаю бассейн и провожу время с семьей и друзьями.</p>
                </div>
            </div>
       </div>
    )
}

export default About;