import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import {getTicket, search, getIndexNumber} from "../../redux/tickets-reducer";
import Ticket from "./Ticket/Ticket";

import style from "./Tickets.module.css"


class Tickets extends React.Component {


    componentDidMount() {
        this.props.search();

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.searchId === "") {
            this.props.getTicket(this.props.searchId)
        }
    }

    onClickIndexButton = () => {
        this.props.getIndexNumber()
    }

    render() {


        return (
            <div>
                <div className={style.wrapper}>SearchId : {this.props.searchId}</div>
                {this.props.tickets === "" ? "" :
                    this.props.tickets.map((item, index) => (
                                <div>
                                    {
                                        index <= this.props.indexNumber && <Ticket key={item} item={item}/>
                                    }
                                </div>

                        )

                    )}
                {
                    <div><button onClick={this.onClickIndexButton}>next</button></div>
                }

            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        searchId: state.ticketsData.searchId,
        tickets: state.ticketsData.tickets,
        indexNumber: state.ticketsData.indexNumber,

    }
}

export default compose(
    connect(mapStateToProps, {search, getTicket, getIndexNumber})
)(Tickets)


