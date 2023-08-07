import s from "./style.module.css";

function Contacts() {
    return (
        <div className={s.contactsWrapper} id="contacts">
            <div className={s.contactsContent}>
                <h2 className={s.contactsTitle}>Контакты</h2>
                <p className={s.contactsCaption}>Здесь можно посмотреть мои данные для связи</p>
                <ul className={s.contactsInfo}>
                    <li className={s.contactsInfoItem}>
                        <svg className={s.contactsInfoIcon} fill="currentColor" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="m58.23 70 15-24.12.11-.24a26.7 26.7 0 0 0 3.96-13.97c0-14.77-12.02-26.79-26.79-26.79S23.72 16.9 23.72 31.67a26.7 26.7 0 0 0 4.07 14.2l14.45 24.18c-11.22 1.59-18.6 6.2-18.6 11.8 0 6.93 11.79 12.37 26.83 12.37S77.3 88.78 77.3 81.84c0-5.62-7.72-10.34-19.07-11.86zM30.37 44.3a23.7 23.7 0 0 1-3.65-12.63 23.82 23.82 0 0 1 23.8-23.79A23.82 23.82 0 0 1 74.3 31.67a23.7 23.7 0 0 1-3.65 12.62c-.05.08-.1.17-.13.25L54.7 70.01c-.24.36-.29.45-.58.93l-4 6.43-19.6-32.8a1.5 1.5 0 0 0-.14-.28zm20.1 46.92c-14.04 0-23.83-4.94-23.83-9.37 0-4.02 7.37-7.8 17.29-8.98l4.87 8.15c.27.45.75.73 1.27.73h.01c.52 0 1-.27 1.28-.7l5.12-8.24c10.07 1.09 17.82 4.97 17.82 9.04 0 4.43-9.78 9.37-23.83 9.37z"/><path d="M60.21 31.67a9.75 9.75 0 0 0-19.48 0 9.75 9.75 0 0 0 19.48 0zm-16.48 0a6.75 6.75 0 1 1 13.5.02 6.75 6.75 0 0 1-13.5-.02z"/></svg>
                        <h3 className={s.contactsInfoName}>Местоположение:</h3>
                        <a className={s.contactsInfoDescription} href="https://yandex.ru/maps/-/C2Eoisb&z=10" target="_blank" rel="noopener">г. Москва
                        </a>
                    </li>
                    <li className={s.contactsInfoItem}>
                        <svg className={s.contactsInfoIcon} fill="currentColor"  width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.35 100.35"><path d="M93.09 76.22c.05-.14.08-.3.08-.45V22.63c0-.16-.03-.32-.08-.46l-.02-.06a1.5 1.5 0 0 0-.28-.46l-.01-.03-.02-.01a1.5 1.5 0 0 0-.44-.33l-.04-.02a1.48 1.48 0 0 0-.5-.12h-.06l-.05-.01H8.37a1.5 1.5 0 0 0-.52.13l-.03.02c-.17.08-.32.19-.45.33h-.01l-.02.04a1.5 1.5 0 0 0-.28.46c0 .02 0 .04-.02.06-.04.14-.08.3-.08.46v53.13c0 .16.04.32.09.46l.01.06c.07.18.17.33.28.47l.02.02.02.02.16.14.07.06.21.12.06.02c.18.08.38.13.58.13h83.2c.22 0 .42-.05.6-.12l.08-.05.18-.1.08-.07.15-.13.02-.02.02-.03c.12-.14.21-.3.28-.46l.02-.07zM9.96 26.04 35.22 49.1 9.96 72.35V26.04zm51.75 21.93c-.1.07-.21.13-.3.22l-.07.12-11.27 10.3-37.74-34.47H87.8L61.71 47.97zm-24.27 3.16 11.62 10.61a1.5 1.5 0 0 0 2.02 0l11.47-10.48 25.25 23H12.3l25.14-23.13zm27.34-1.9 25.39-23.19v46.33l-25.4-23.14z"/></svg>
                        <h3 className={s.contactsInfoName}>Электронная почта</h3>
                        <a className={s.contactsInfoDescription} href="mailto:anikinaliliyav@gmail.com">anikinaliliyav@gmail.com</a>
                    </li>
                    <li className={s.contactsInfoItem}>
                        <svg className={s.contactsInfoIcon} fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"> 
                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>
                        <h3 className={s.contactsInfoName}>Мобильный телефон</h3>
                        <a className={s.contactsInfoDescription} href="tel:+79854174517">8-985-417-45-17</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contacts;