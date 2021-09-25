import {tinkerAPI} from "../api/api";

const ADD_SEARCH_ID = "ADD_SEARCH_ID";
const ADD_TICKET = "ADD_TICKET";

let initialState = {
    searchId: "", //searchId: {searchId: yghyfyrj}
    tickets: null
}

const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SEARCH_ID:
            return {
                ...state,
                searchId: action.searchId
            };
        case ADD_TICKET:
            return {
                ...state,
                tickets: action.tickets
            }
        default:
            return state;
    }
}

export const setSearch = (searchId) => ({type: ADD_SEARCH_ID, searchId})
export const setTicket = (tickets) => ({type: ADD_TICKET, tickets})

// export const search = (searchId) => (dispatch) => {
//    dispatch(setSearch(searchId.searchId))
// }

// export const ticketAction = (ticket) => (dispatch) => {
//    dispatch(setTicket(ticket.tickets))
// }

export const search = () => async (dispatch) => {
    let data = await tinkerAPI.getSearchId()
        .then(response => response.searchId
        )
    dispatch(setSearch(data))

}


export const ticketAction = (tickets) => async (dispatch, getState) => {

        let data = await tinkerAPI.getTicket(tickets)
            .then(response => response.data.tickets)

        dispatch(setTicket(data))


}



export default ticketsReducer;