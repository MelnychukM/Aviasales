import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import {getIndexNumber, getTicketFast, search} from "../../redux/tickets-reducer";
import Ticket from "./Ticket/Ticket";


class Tickets extends React.Component {
    componentDidMount() {
        this.props.search();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.tickets === "") {
            this.props.getTicketFast(this.props.searchId)
        }
    }

    onClickIndexButton = () => {
        this.props.getIndexNumber()
    }

    render() {

        return (
            <div>
                {/*<div>SearchId : {this.props.searchId}</div>*/}
                {this.props.tickets === "" ? "" :
                    this.props.tickets.map((item, index) => (
                        <div>
                            {
                                index <= this.props.indexNumber && <Ticket key={item}item={item}/>
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
        tickets: state.ticketsData.ticketsFast,
        indexNumber: state.ticketsData.indexNumber,
    }
}

export default compose(
    connect(mapStateToProps, {search, getTicketFast,getIndexNumber})
)(Tickets)


