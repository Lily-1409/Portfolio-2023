import s from "./style.module.css";
import avatar from "assets/avatar.jpeg";

function Main () {
    return (
        <div className={s.mainWrapper}>
            <div className={s.mainContent}>
                <div className={s.mainDescription}>
                    <h1 className={s.title}>Привет! Меня зовут <span className={s.name}>Лилия</span></h1>
                    <span className={s.caption}>И я начинающий фронтенд-разработчик</span>
                </div>
                <div className={s.mainImageWrapper}>
                    <img className={s.mainImage} src={avatar} alt="avatar" width="387" height="421"/>
                </div>
            </div>
        </div>
    )
}

export default Main;