import classNames from 'classnames';
import s from './style.module.css';
import NavItem from './components/navItem/NavItem';
import navList from './components/navItem/navList.js';

function Nav ({ isOpened }) {
    return (
        <ul className={classNames(s.navList, isOpened === true && s.visible)}>
            {navList.map((navItem) => {
                return (
                    <NavItem key={navItem.id} title={navItem.title} link={navItem.link} target={navItem.target}/>
                )
            })
            }  
        </ul>
    )
}

export default Nav;