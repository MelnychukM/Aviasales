import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";

import {getFilterTickets, getTicket} from "../../redux/tickets-reducer"

import style from "./Filter.module.css"

import FilterBar from "./Filter";



const FilterContainer = (props) => {

    let filterTickets = (data, field, value) => {

        let filterData = []

        if (value.allStops) {
            filterData = data.filter(function (field) {
                return field.segments[0].stops.length < 3
            });
        }

        if (value.withoutStops) {

            filterData = filterData.concat(data.filter(function (field) {
                return field.segments[0].stops.length < 1
            }))
        }

        if (value.oneStops) {
            filterData = filterData.concat(data.filter(function (field) {
                return field.segments[0].stops.length === 1
            }))
        }

        if (value.twoStops) {
            filterData = filterData.concat(data.filter(function (field) {
                return field.segments[0].stops.length === 2
            }))
        }
        if (value.threeStops) {
            filterData = filterData.concat(data.filter(function (field) {
                return field.segments[0].stops.length === 3
            }))

        }

        return filterData
    }

    let returnFilter = (filterTicketsFormData) => {
        if (props.tickets || props.ticketsCheap ||props.ticketsFast) {
            let filtredTickets = filterTickets(props.tickets|| props.ticketsCheap ||props.ticketsFast, "stops", filterTicketsFormData)
            props.getFilterTickets(filtredTickets)
        }
    }

    return (
        <div>
            <FilterBar returnFilter={returnFilter}/>
        </div>
    )
}

let mapStateToProps = (state) => ({
    searchId: state.ticketsData.searchId,
    tickets: state.ticketsData.tickets,
    ticketsCheap: state.ticketsData.ticketsCheap,
    ticketsFast: state.ticketsData.ticketsFast,
    filterTickets: state.ticketsData.filterTickets
})


export default compose(
    connect(mapStateToProps, {getFilterTickets, getTicket})
)(FilterContainer)