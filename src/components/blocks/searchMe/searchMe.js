import Social from "components/common/social/Social";
import s from "./style.module.css";

function SearchMe() {
    return (
        <div className={s.searchWrapper}>
            <div className={s.searchContent}>
                <h2 className={s.searchTitle}>Где меня можно найти</h2>
                <Social />
            </div>
        </div>
    )
}

export default SearchMe;