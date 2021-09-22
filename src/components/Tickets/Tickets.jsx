import React from "react";
import style from "./Tickets.module.css";
import Ticket from "./Ticket/Ticket";

const Tickets = () => {
    return <div className={style.wrapper}>
        <Ticket />

    </div>
}

export default Tickets;