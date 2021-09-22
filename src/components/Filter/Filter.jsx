import React from "react";
import style from "./Filter.module.css"

const Filter = () => {
    return <div className={style.wrapper}>
        <div><p>КОЛИЧЕСТВО ПЕРЕСАДОК</p></div>
        <div><input type="checkbox"/> Все</div>
        <div><input type="checkbox"/> Без пересадок</div>
        <div><input type="checkbox"/> 1 пересадка</div>
        <div><input type="checkbox"/> 2 пересадки</div>
        <div><input type="checkbox"/> 3 пересадки</div>

    </div>
}

export default Filter;
