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
    let dataOneHours = dataOne.getUTCHours();
    let dataOneMinutes = dataOne.getUTCMinutes();
    let dataPlusDurationHourseMinusDayOne = dataPlusDurationHourseOne - 24;

    // Second voyage
    let dataSecond = new Date(props.item.segments[1].date);
    let durationSecond = props.item.segments[1].duration;
    let durationSecondHourse = Math.floor(durationSecond / 60);
    let durationSecondMinutes = Math.floor(durationSecond) - (durationSecondHourse * 60);
    let secondsDataSecond = (dataSecond.getUTCHours() * 60 * 60) + (dataSecond.getUTCMinutes() * 60);
    let dataPlusDurationHourseSecond = Math.floor(((secondsDataSecond) + (durationSecond * 60)) / 60 / 60);
    let dataPlusDurationMinutesSecond = Math.floor(((((secondsDataSecond) + (durationSecond * 60)) / 60 / 60)
        - dataPlusDurationHourseSecond) * 60);
    let dataSecondHours = dataSecond.getUTCHours();
    let dataSecondMinutes = dataSecond.getUTCMinutes();
    let dataPlusDurationHourseMinusDaySecond = dataPlusDurationHourseSecond - 24;

    return <div className={style.wrapper}>
        <div className={style.price}>{props.item.price} Р</div>
        {/* First voyage*/}
        <div className={style.WrapperOneVoyage}>
            <div className={style.origin}>
                <div>
                    {props.item.segments[0].origin} - {props.item.segments[0].destination}
                </div>
                <div>
                    {dataOneHours.toString().length === 2 ? dataOneHours : `0${dataOneHours}`}:
                    {dataOneMinutes.toString().length === 2 ? dataOneMinutes
                        : `0${dataOneMinutes}`} - {dataPlusDurationHourseOne >= 24
                    ? `${dataPlusDurationHourseMinusDayOne.toString().length === 2 ? dataPlusDurationHourseMinusDayOne
                        : `0${dataPlusDurationHourseMinusDayOne}`}`
                    : `${dataPlusDurationHourseOne.toString().length === 2 ? dataPlusDurationHourseOne
                        : `0${dataPlusDurationHourseOne}`}`}:{`${dataPlusDurationMinutesOne.toString().length === 2 ? dataPlusDurationMinutesOne : `0${dataPlusDurationMinutesOne}`}`}
                </div>
            </div>

            <div className={style.duration}>
                <div>В пути</div>
                <div >{durationHourseOne}ч {durationMinutesOne}м</div>
            </div>

            <div className={style.stops}>
                <div>{props.item.segments[0].stops.length} {props.item.segments[0].stops.length === 0 && "пересадок"}
                    {props.item.segments[0].stops.length === 1 && "пересадка"}
                    {props.item.segments[0].stops.length === 2 && "пересадки"}
                    {props.item.segments[0].stops.length === 3 && "пересадки"}
                </div>
                <div>
                    <span>{props.item.segments[0].stops[0]} {props.item.segments[0].stops.length === 2 && ","
                    || props.item.segments[0].stops.length === 3 && ","} {props.item.segments[0].stops[1]} {
                        props.item.segments[0].stops.length === 3 && ","} {props.item.segments[0].stops[2]}</span>
                </div>
            </div>
        </div>

         {/*Second voyage*/}
        <div className={style.WrapperOneVoyage}>
            <div className={style.origin}>
                <div>
                    {props.item.segments[1].origin} - {props.item.segments[1].destination}
                </div>
                <div>
                    {dataSecondHours.toString().length === 2 ? dataSecondHours : `0${dataSecondHours}`}:
                    {dataSecondMinutes.toString().length === 2 ? dataSecondMinutes
                        : `0${dataSecondMinutes}`} - {dataPlusDurationHourseSecond >= 24
                    ? `${dataPlusDurationHourseMinusDaySecond.toString().length === 2 ? dataPlusDurationHourseMinusDaySecond
                        : `0${dataPlusDurationHourseMinusDaySecond}`}`
                    : `${dataPlusDurationHourseSecond.toString().length === 2 ? dataPlusDurationHourseSecond
                        : `0${dataPlusDurationHourseSecond}`}`}:{dataPlusDurationMinutesSecond}
                </div>
            </div>

            <div className={style.duration}>
                <div>В пути</div>
                <div >{durationSecondHourse}ч {durationSecondMinutes}м</div>
            </div>

            <div className={style.stops}>
                <div>{props.item.segments[1].stops.length} {props.item.segments[1].stops.length === 0 && "пересадок"}
                    {props.item.segments[1].stops.length === 1 && "пересадка"}
                    {props.item.segments[1].stops.length === 2 && "пересадки"}
                    {props.item.segments[1].stops.length === 3 && "пересадки"}
                </div>
                <div>
                    <span>{props.item.segments[1].stops[0]} {props.item.segments[1].stops.length === 2 && ","
                    || props.item.segments[1].stops.length === 3 && ","} {props.item.segments[1].stops[1]} {
                        props.item.segments[1].stops.length === 3 && ","} {props.item.segments[1].stops[2]}</span>
                </div>
            </div>
        </div>
    </div>
}

export default Ticket;