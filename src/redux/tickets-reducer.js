import {tinkerAPI} from "../api/api";

const ADD_SEARCH_ID = "ADD_SEARCH_ID";
const ADD_TICKET = "ADD_TICKET";
const ADD_TICKET_PRICE = "ADD_TICKET_PRICE";

let initialState = {
    searchId: "", //searchId: {searchId: "....."}
    tickets: "", //tickets: [{...},{...},...]
    price: "", //price: [...,...,...]
    carrier: "",
    segmentsFirst: [],
    segmentsSecond: [],
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
                tickets: action.tickets,
                price: action.tickets.map(item => item.price),
                carrier: action.tickets.map(item => item.carrier),
                segmentsFirst: action.tickets.map(item => item.segments[0]),
                segmentsSecond: action.tickets.map(item => item.segments[1]),
                durationFirst: action.tickets.map(item => item.segments[0]).map(item => item.duration),
                durationSecond: action.tickets.map(item => item.segments[1]).map(item => item.duration)

            }
            // case ADD_TICKET_PRICE:
            // return {
            //     ...state,
            //     price: action.price
            // }
        default:
            return state;
    }
}

export const setSearch = (searchId) => ({type: ADD_SEARCH_ID, searchId})
export const setTicket = (tickets) => ({type: ADD_TICKET, tickets})
// export const setTicketPrice = (price) => ({type: ADD_TICKET_PRICE, price})


export const search = () => async (dispatch) => {
    let data = await tinkerAPI.getSearchId()
        .then(response => response.searchId)
    dispatch(setSearch(data))
}

export const ticketAction = (tickets) => async (dispatch, getState) => {
        let data = await tinkerAPI.getTicket(tickets)
            .then(response => response.data.tickets)
        dispatch(setTicket(data))
}

// export const getPrice = () => (dispatch,getState) => {
//     let state = getState().tickets.map((item, key=item.id) =>  item.price)
//     dispatch(setTicketPrice(state))
// }

export default ticketsReducer;