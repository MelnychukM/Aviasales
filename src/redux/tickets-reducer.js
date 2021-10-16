import {tinkerAPI} from "../api/api";

const ADD_SEARCH_ID = "ADD_SEARCH_ID";
const ADD_TICKET = "ADD_TICKET";
const ADD_TICKET_PRICE = "ADD_TICKET_PRICE";
const ADD_TICKET_FAST = "ADD_TICKET_FAST";
const ADD_INDEX_NUMBER = "ADD_INDEX_NUMBER";
const SET_FILTER_TICKETS = "SET_FILTER_TICKETS";

let initialState = {
    searchId: "", //searchId: "....."
    tickets: "", //tickets: [{...},{...},...,{...}]
    ticketsCheap: "",
    ticketsFast: "",
    indexNumber: 4,
    filterTickets: ""

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
                ticketsCheap: action.ticketsCheap.sort(function (a, b) {
                    return parseFloat(a.price) - parseFloat(b.price);
                })
            }
        case ADD_TICKET_FAST:
            return {
                ...state,
                ticketsFast: action.ticketsFast.sort(function (a, b) {
                    return parseFloat(a.segments[0].duration) - parseFloat(b.segments[0].duration);
                })
            }
        case ADD_INDEX_NUMBER:
            return {
                ...state,
                indexNumber: action.indexNumber
            }
        case SET_FILTER_TICKETS:
            return {
                ...state,
                filterTickets: action.data
            }
        default:
            return state;
    }
}

export const setSearch = (searchId) => ({type: ADD_SEARCH_ID, searchId})
export const setTicket = (tickets) => ({type: ADD_TICKET, tickets})
export const setTicketPrice = (ticketsCheap) => ({type: ADD_TICKET_PRICE, ticketsCheap})
export const setTicketFast = (ticketsFast) => ({type: ADD_TICKET_FAST, ticketsFast})
export const setIndexNumber = (indexNumber) => ({type: ADD_INDEX_NUMBER, indexNumber})
export const setFilterTickets = (data) => ({type: SET_FILTER_TICKETS, data})


export const search = () => async (dispatch) => {
    let data = await tinkerAPI.getSearchId()
        .then(response => response.searchId)
    dispatch(setSearch(data))
}

export const getTicket = (tickets) => async (dispatch) => {
    let data = await tinkerAPI.getTicket(tickets)
        .then(response => response.data.tickets)
    dispatch(setTicket(data))
}

export const getTicketCheap = (ticketsCheap) => async (dispatch) => {
    let data = await tinkerAPI.getTicket(ticketsCheap)
        .then(response => response.data.tickets)
    dispatch(setTicketPrice(data))
}

export const getTicketFast = (ticketsFast) => async (dispatch) => {
    let data = await tinkerAPI.getTicket(ticketsFast)
        .then(response => response.data.tickets)
    dispatch(setTicketFast(data))
}

export const getIndexNumber = () => (dispatch, getState) => {
    const IndexNumberState = getState().ticketsData.indexNumber
    let data = IndexNumberState + 5;
    dispatch(setIndexNumber(data))
}

export const getFilterTickets = (data) => {
    debugger
    return (dispatch) => {
        dispatch(setFilterTickets(data))
    }

}


export default ticketsReducer;