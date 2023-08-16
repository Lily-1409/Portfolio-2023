import s from './style.module.css';
import Logotype from './../../common/Logotype';
import Nav from './../nav/Nav';
import { useState } from 'react';
import classNames from 'classnames';

function Header () {
    const [isOpened, setIsOpened] = useState(false);
    
    const updateNav = () => {
        setIsOpened(!isOpened)
    }

    const handleLinkClick = () => {
        setIsOpened(false)
    }

    const handleOutsideClick = () => {
        setIsOpened(false)
    }

    return (
        <div className={s.headerContent}>
            <Logotype />
            <Nav isOpened={isOpened} onLinkClick={handleLinkClick} onOutsideClick={handleOutsideClick}/>
            <button className={classNames(s.headerButton, isOpened === true && s.active)} onClick={updateNav}>
                <span></span>
            </button>
        </div>
    )
}

export default Header;