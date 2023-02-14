import s from './style.module.css';

function Logotype () {
   return (
    <a className={s.logotype} href="/">
        <div className={s.content}>
            <span className={s.title}>LA</span>
            <span className={s.caption}>Frontend-developer</span>
        </div>
    </a>
    )
}

export default Logotype;