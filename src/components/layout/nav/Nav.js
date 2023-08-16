import classNames from 'classnames';
import s from './style.module.css';
import NavItem from './components/navItem/NavItem';
import navList from './components/navItem/navList.js';

function Nav ({ isOpened, onLinkClick, onOutsideClick, updateNav }) {
    return (
        <div className={s.navContent}>
            <ul className={classNames(s.navList, isOpened === true && s.visible)} onClick={onOutsideClick}>
                {navList.map((navItem) => {
                    return (
                        <NavItem key={navItem.id} title={navItem.title} link={navItem.link} target={navItem.target} onLinkClick={onLinkClick}/>
                    )
                })
                }  
            </ul>
            <div  className={classNames(s.overlay, isOpened === true && s.disable)} onClick={onOutsideClick}></div>
        </div>
    )
}

export default Nav;