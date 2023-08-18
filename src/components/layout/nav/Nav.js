import classNames from 'classnames';
import s from './style.module.css';
import Logotype from './../../common/Logotype';
import NavItem from './components/navItem/NavItem';
import navList from './components/navItem/navList.js';

function Nav ({ isOpened, onLinkClick, onOutsideClick, updateNav }) {
    return (
        <>
            <div className={classNames(s.navContent, isOpened === true && s.active)}>
                <div className={s.buttonWrapper}>
                    <Logotype className={s.logotypeMobile}/>
                </div>
                <ul className={classNames(s.navList, isOpened === true && s.visible)} onClick={onOutsideClick}>
                    {navList.map((navItem) => {
                        return (
                            <NavItem key={navItem.id} title={navItem.title} link={navItem.link} target={navItem.target} rel={navItem.rel} onLinkClick={onLinkClick}/>
                        )
                    })
                    }  
                </ul> 
            </div>
            <div className={classNames(s.overlay, isOpened === true && s.disable)} onClick={onOutsideClick}></div>
        </>
    )
}

export default Nav;