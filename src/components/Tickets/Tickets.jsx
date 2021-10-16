import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import {getTicket, search, getIndexNumber, getFilterTickets} from "../../redux/tickets-reducer";
import Ticket from "./Ticket/Ticket";

import style from "./Tickets.module.css"


class Tickets extends React.Component {

    filterBy = (data, field, value) => {
        return data.filter(item => item[field] < value)
    }

    componentDidMount() {
        this.props.search();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.searchId != this.props.searchId) {
            this.props.getTicket(this.props.searchId)
        }

        if (this.props.tickets !="" && this.props.tickets != prevProps.tickets) {
            let filter = this.filterBy(this.props.tickets, 'price', 100000);
            this.props.getFilterTickets(filter)
        }
    }

    onClickIndexButton = () => {
        this.props.getIndexNumber()
    }

    render() {
        return (
            <div>
                {this.props.filterTickets === "" ? "" :
                    this.props.filterTickets.map((item, index) => (
                                <div>
                                    {index <= this.props.indexNumber && <Ticket key={item} item={item}/>}
                                </div>
                        ))}
                {<div><button onClick={this.onClickIndexButton}>next</button></div>}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        searchId: state.ticketsData.searchId,
        tickets: state.ticketsData.tickets,
        indexNumber: state.ticketsData.indexNumber,
        filterTickets: state.ticketsData.filterTickets

    }
}

export default compose(
    connect(mapStateToProps, {search, getTicket, getIndexNumber,getFilterTickets})
)(Tickets)


