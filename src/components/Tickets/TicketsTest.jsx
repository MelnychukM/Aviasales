import React from "react";
import {connect} from "react-redux";
import {search} from "../../redux/tickets-reducer";
import {compose} from "redux";

class TicketsTest extends React.Component {

    componentDidMount() {
        this.props.search();
    }

    render() {
        return (
            <div>
                {this.props.searchId.searchId}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        searchId:state.ticketsData.searchId
    }
}

export default compose(
    connect(mapStateToProps,{search}
    )
)(TicketsTest)


