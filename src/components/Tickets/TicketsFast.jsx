import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import {getTicketFast, search} from "../../redux/tickets-reducer";
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

    render() {

        return (
            <div>
                <div>SearchId : {this.props.searchId}</div>
                <div>Привет</div>
                {this.props.tickets === "" ? "" :
                    this.props.tickets.map((item, index) => (
                        <div>
                            {
                                index < 5 && <Ticket key={item}item={item}/>
                            }
                        </div>
                    )
                    )}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        searchId: state.ticketsData.searchId,
        tickets: state.ticketsData.ticketsFast
    }
}

export default compose(
    connect(mapStateToProps, {search, getTicketFast})
)(Tickets)


