import React from "react";
import style from "./Ticket.module.css";


const Ticket = (props) => {
    return <div className={style.wrapper}>
        {props.search}
    </div>
}

export default Ticket;