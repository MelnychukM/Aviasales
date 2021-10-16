import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import {getFilterTickets, getIndexNumber, getTicketCheap, search} from "../../redux/tickets-reducer";
import Ticket from "./Ticket/Ticket";


class TicketsCheap extends React.Component {

    filterBy = (data, field, value) => {
        return data.filter(item => item[field] < value)
    }

    sortedHigher = (data) => {
        return data.sort(function (a, b) {
            return a.price - b.price
        })
    }

    sorted = () => {
        let sortedTickets = this.sortedHigher(this.props.ticketsCheap)
        this.props.getFilterTickets(sortedTickets)
        this.forceUpdate()
    }

    returnFiltredTickets = (filterTicketsFormData) => {
        let priceLower = this.filterBy(this.props.ticketsCheap, 'price', filterTicketsFormData.priceToSort)
        this.props.getFilterTickets(priceLower)
    }

    componentDidMount() {
        this.props.search();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.ticketsCheap === "") {
            this.props.getTicketCheap(this.props.searchId)
        }
debugger
        if (this.props.ticketsCheap != "" && this.props.ticketsCheap != prevProps.ticketsCheap) {
            let filter = this.filterBy(this.props.ticketsCheap, 'price', 100000);
            this.props.getFilterTickets(filter)
        }
    }

    onClickIndexButton = () => {
        this.props.getIndexNumber()
    }

    render() {

        return (
            <div>
                ку
                {this.props.filterTickets === "" ? "" :
                    this.props.filterTickets.map((item, index) => (
                        <div>
                            {
                                index <= this.props.indexNumber && <Ticket key={item} item={item}/>
                            }
                        </div>
                    )
                    )}
                <div>
                    <button onClick={this.onClickIndexButton}>next</button>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        searchId: state.ticketsData.searchId,
        ticketsCheap: state.ticketsData.ticketsCheap,
        indexNumber: state.ticketsData.indexNumber,
        filterTickets: state.ticketsData.filterTickets
    }
}

export default compose(
    connect(mapStateToProps, {search, getTicketCheap, getIndexNumber,getFilterTickets})
)(TicketsCheap)


