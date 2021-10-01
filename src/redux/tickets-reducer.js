import {tinkerAPI} from "../api/api";

const ADD_SEARCH_ID = "ADD_SEARCH_ID";
const ADD_TICKET = "ADD_TICKET";
const ADD_TICKET_PRICE = "ADD_TICKET_PRICE";
const ADD_TICKET_FAST = "ADD_TICKET_FAST";


let initialState = {
    searchId: "", //searchId: "....."
    tickets: "", //tickets: [{...},{...},...]
    ticketsCheap: "", //ticketsCheap: [{...},{...},...]
    ticketsFast: ""

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
            case ADD_TICKET_PRICE:
            return {
                ...state,
                ticketsCheap: action.ticketsCheap.sort(function(a, b) {
                    return parseFloat(a.price) - parseFloat(b.price);
                })
            }
            case ADD_TICKET_FAST:
            return {
                ...state,
                ticketsFast: action.ticketsFast.sort(function(a, b) {
                    return parseFloat(a.segments[0].duration) - parseFloat(b.segments[0].duration);
                })
            }
        default:
            return state;
    }
}

export const setSearch = (searchId) => ({type: ADD_SEARCH_ID, searchId})
export const setTicket = (tickets) => ({type: ADD_TICKET, tickets})
export const setTicketPrice = (ticketsCheap) => ({type: ADD_TICKET_PRICE, ticketsCheap})
export const setTicketFast = (ticketsFast) => ({type: ADD_TICKET_FAST, ticketsFast})


export const search = () => async (dispatch) => {
    let data = await tinkerAPI.getSearchId()
        .then(response => response.searchId)
    dispatch(setSearch(data))
}

export const getTicket = (tickets) => async (dispatch, getState) => {
        let data = await tinkerAPI.getTicket(tickets)
            .then(response => response.data.tickets)
        dispatch(setTicket(data))
}

export const getTicketCheap = (ticketsCheap) => async (dispatch, getState) => {
        let data = await tinkerAPI.getTicket(ticketsCheap)
            .then(response => response.data.tickets)
        dispatch(setTicketPrice(data))
}

export const getTicketFast = (ticketsFast) => async (dispatch, getState) => {
        let data = await tinkerAPI.getTicket(ticketsFast)
            .then(response => response.data.tickets)
        dispatch(setTicketFast(data))
}


export default ticketsReducer;