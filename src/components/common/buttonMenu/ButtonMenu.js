import React from 'react';
import s from './style.module.css';
import classNames from 'classnames';


function ButtonMenu ({isOpened, updateNav}) { 
    return (
        <button className={classNames(s.headerButton, isOpened === true && s.active)} onClick={updateNav}>
            <span></span>
        </button>
    )
}

export default ButtonMenu;