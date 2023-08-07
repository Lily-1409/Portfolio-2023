import s from "./style.module.css";import React, {useState} from 'react';
import classNames from 'classnames';

function ArrowScrollUp () {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      };

      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth',
        });
      };
      window.addEventListener('scroll', toggleVisible);

    return (
        <button onClick={scrollToTop} className={classNames(s.buttonScrollUp, visible === true && s.buttonScrollUpActive)} >
        </button>
    )
}

export default ArrowScrollUp;