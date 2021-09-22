import React from "react";
import style from "./Tabs.module.css"

const Tabs = () => {
    return <div className={style.wrapper}>
    <div className={`${style.button} ${style.active}`}>САМЫЙ ДЕШЕВЫЙ</div>
    <div className={style.button}>САМЫЙ БЫСТРЫЙ</div>
    <div className={style.button}>ОПТИМАЛЬНЫЙ</div>
    </div>

}

export default Tabs;