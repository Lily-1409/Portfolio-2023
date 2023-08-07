import s from "./style.module.css";

function Footer () {
    return (
        <div className={s.footerWrapper}>
            <div className={s.footerContent}>
                <p className={s.footerCopyright}>© Copyright <span className={s.footerCopyrightName}>Аникина Лилия</span> 2023</p>
            </div>
        </div>
    )
}

export default Footer;