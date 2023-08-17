import s from './style.module.css';
import Logotype from './../../common/Logotype';
import Nav from './../nav/Nav';
import { useEffect, useState } from 'react';
import ButtonMenu from 'components/common/buttonMenu/ButtonMenu';

function Header () {
    const [isOpened, setIsOpened] = useState(false);

    useEffect(()=> {
        if(isOpened) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'visible';
        }
    }, [isOpened])
    
    const updateNav = () => {
        setIsOpened(!isOpened);
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
            <Nav isOpened={isOpened} updateNav={updateNav} onLinkClick={handleLinkClick} onOutsideClick={handleOutsideClick}/>
            <ButtonMenu updateNav={updateNav} isOpened={isOpened}/>
        </div>
    )
}

export default Header;