import React from "react";
import {NavLink} from "react-router-dom";

import style from "./Tabs.module.css"

const Tabs = () => {
    return <div className={style.wrapper}>
    {/*<button  className={`${style.button} ${style.active}`}>Самый дешевый</button>*/}
    {/*<button className={style.button}>САМЫЙ БЫСТРЫЙ</button>*/}

        <div className={style.button}>
            <NavLink className={style.button} to="/ticket/cheap" activeClassName={style.active}>Самый дешевый</NavLink>
        </div>
        <div className={style.button}>
            <NavLink className={style.button} to="/ticket/fast" activeClassName={style.active}>Самый быстрый</NavLink>
        </div>
</div>

}

export default Tabs;