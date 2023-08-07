import s from "./style.module.css";

import SocialItem from "./components/SocialItem.js";
import socialList from "components/common/social/components/socialList";

function Social() {
    return (
        <ul className={s.socialList}>
            {socialList.map((socialItem) => {
                return (
                    <SocialItem key={socialItem.id} caption={socialItem.caption} link={socialItem.link} iconImage={socialItem.iconImage} target={socialItem.target}/>
                )
            })}
        </ul>
    )
}

export default Social;