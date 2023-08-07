import s from './style.module.css';
import Logotype from './../../common/Logotype';
import Nav from './../nav/Nav';
import { useState } from 'react';

function Header () {
    const [isOpened, setIsOpened] = useState(false);
    
    const updateNav = () => {
        setIsOpened(!isOpened)
    }

    return (
        <div className={s.headerContent}>
            <Logotype />
            <Nav isOpened={isOpened}/>
            <button className={s.headerButton} onClick={updateNav}>
                <svg className={s.headerButtonIcon} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20">
                    <path fill="currentColor" fillRule="evenodd" d="M18 5a1 1 0 1 0 0-2H2a1 1 0 0 0 0 2h16zm0 4a1 1 0 1 0 0-2H2a1 1 0 1 0 0 2h16zm1 3a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1zm-1 5a1 1 0 1 0 0-2H2a1 1 0 1 0 0 2h16z"/>
                </svg>
            </button>
        </div>
    )
}

export default Header;