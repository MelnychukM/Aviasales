import React from "react";

import style from "./Ticket.module.css";


const Ticket = (props) => {

    // First voyage
    let dataOne = new Date(props.item.segments[0].date);
    let durationOne = props.item.segments[0].duration;
    let durationHourseOne = Math.floor(durationOne / 60);
    let durationMinutesOne = Math.floor(durationOne) - (durationHourseOne * 60);
    let secondsDataOne = (dataOne.getUTCHours() * 60 * 60) + (dataOne.getUTCMinutes() * 60);
    let dataPlusDurationHourseOne = Math.floor(((secondsDataOne) + (durationOne * 60)) / 60 / 60);
    let dataPlusDurationMinutesOne = Math.floor(((((secondsDataOne) + (durationOne * 60)) / 60 / 60) - dataPlusDurationHourseOne) * 60);

    // Second voyage
    let dataSecond = new Date(props.item.segments[1].date);
    let durationSecond = props.item.segments[1].duration;
    let durationSecondHourse = Math.floor(durationSecond / 60);
    let durationSecondMinutes = Math.floor(durationSecond) - (durationSecondHourse * 60);
    let secondsDataSecond = (dataSecond.getUTCHours() * 60 * 60) + (dataSecond.getUTCMinutes() * 60);
    let dataPlusDurationHourseSecond = Math.floor(((secondsDataSecond) + (durationSecond * 60)) / 60 / 60);
    let dataPlusDurationMinutesSecond = Math.floor(((((secondsDataSecond) + (durationSecond * 60)) / 60 / 60) - dataPlusDurationHourseSecond) * 60);


    return <div className={style.wrapper}>
        <div className={style.price}>Price: {props.item.price}</div>
        <div className={style.originOne}>{props.item.segments[0].origin} - {props.item.segments[0].destination} </div>
        <div className={style.dateOne}>{dataOne.getUTCHours()} :
            {dataOne.getUTCMinutes()} - {dataPlusDurationHourseOne >= 24 ? ((dataPlusDurationHourseOne - 24))
                : (dataPlusDurationHourseOne)} : {dataPlusDurationMinutesOne}</div>
        <div className={style.durationOne}>{durationHourseOne}ч {durationMinutesOne}м</div>
        <div className={style.originSecond}>{props.item.segments[1].origin} - {props.item.segments[1].destination}</div>

        <div className={style.dateSecond}> {dataSecond.getUTCHours()} :
            {dataSecond.getUTCMinutes()} - {dataPlusDurationHourseSecond >= 24 ? ((dataPlusDurationHourseSecond - 24))
                : (dataPlusDurationHourseSecond)} : {dataPlusDurationMinutesSecond}</div>
        <div className={style.durationOne}>{durationSecondHourse}ч {durationSecondMinutes}м</div>




    </div>
}

export default Ticket;