import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import {search, ticketAction} from "../../redux/tickets-reducer";
import Ticket from "./Ticket/Ticket";


class TicketsTest extends React.Component {

    componentDidMount() {

        this.props.search();



    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.searchId === "") {
            this.props.ticketAction(this.props.searchId)
        }

    }


    render() {

        return (
            <div>
                <div>SearchId : {this.props.searchId}</div>
                {this.props.tickets === null ? "" :
                    this.props.tickets.map((item, index) => (
                        <div>
                            {
                                index < 5 && <Ticket item={item}/>
                            }
                        </div>
                    ))}


            </div>

        )
    }

}

let mapStateToProps = (state) => {

    return {
        searchId: state.ticketsData.searchId,
        tickets: state.ticketsData.tickets

    }

}

export default compose(
    connect(mapStateToProps, {search, ticketAction}
    )
)(TicketsTest)


