import React from "react";
import style from "./Ticket.module.css";


const Ticket = (props) => {

    let dataOne = new Date(props.item.segments[0].date);
    let dataSecond = new Date(props.item.segments[1].date);
    let durationOne = props.item.segments[0].duration;
    let durationOneHourse = Math.floor(durationOne / 60);
    let durationOneMinutes = Math.floor(durationOne) - (durationOneHourse * 60);
    let durationSecond = props.item.segments[1].duration;
    let durationSecondHourse = Math.floor(durationSecond / 60);
    let durationSecondMinutes = Math.floor(durationSecond) - (durationSecondHourse * 60);
    let sumDataOne = (dataOne.getUTCHours() * 60 * 60) + (dataOne.getUTCMinutes() * 60);
    let dataPlusDurationOne = (sumDataOne) + (durationOne * 60);
    let dataSecondOne = 0;
    //
    // const dataSecondNumberOne = (dataPlusDurationOne) => {
    //     if (dataPlusDurationOne <= 24) {
    //         dataSecondOne = Math.floor(dataPlusDurationOne / 60 / 60);
    //     } else {
    //         dataSecondOne = Math.floor((dataPlusDurationOne - 86400) / 60 / 60)
    //     }
    //
    // }

    return <div className={style.wrapper}>
        <div className={style.price}>Price: {props.item.price}</div>
        <div className={style.originOne}>{props.item.segments[0].origin} - {props.item.segments[0].destination} </div>
        <div className={style.dateOne}>{dataOne.getUTCHours()} : {dataOne.getUTCMinutes()}
            - {dataPlusDurationOne}</div>
        <div className={style.durationOne}>{durationOneHourse}ч {durationOneMinutes}м</div>
        <div className={style.originSecond}>{props.item.segments[1].origin} - {props.item.segments[1].destination}</div>

        <div className={style.dateOne}>{dataSecond.getUTCHours()} : {dataSecond.getUTCMinutes()}</div>
        <div className={style.durationOne}>{durationSecondHourse}ч {durationSecondMinutes}м</div>


    </div>
}

export default Ticket;