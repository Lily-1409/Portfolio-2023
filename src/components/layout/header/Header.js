import s from './style.module.css';
import Logotype from './../../common/Logotype';
import Nav from './../nav/Nav';

function Header () {
    return (
        <div className={s.headerWrapper}>
            <div className={s.headerContent}>
                <Logotype />
                <Nav />
            </div>
        </div>
    )
}

export default Header;