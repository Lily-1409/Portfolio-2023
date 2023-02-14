import s from './style.module.css';

import NavItem from './components/navItem/NavItem';
import navList from './components/navItem/navList.js';

function Nav () {
    return (
        <div className={s.nav}>
            <ul className={s.list}>
                {navList.map((navItem) => {
                    return (
                        <NavItem key={navItem.id} title={navItem.title} link={navItem.link} target={navItem.target}/>
                    )
                })
                }  
            </ul>
        </div>
    )
}

export default Nav;