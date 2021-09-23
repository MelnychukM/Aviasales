import React from "react";
import style from "./Ticket.module.css";


const Ticket = (props) => {
    return <div className={style.wrapper}>
        <div>Price: {props.item.price}</div>
        <div>Carrier: {props.item.carrier}</div>
        {/*{props.item.segments.map(({item1, item2}) => {*/}
        {/*    return <div>*/}
        {/*        {item2.origin}*/}
        {/*        5{item1.origin}*/}
        {/*    </div>*/}
        {/*})}*/}

    </div>
}

export default Ticket;