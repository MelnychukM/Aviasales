const ADD_SEARCH_ID = "ADD_SEARCH_ID";

let initialState = {
    searchId: ['']
}

const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SEARCH_ID:
            return {
                ...state,
                searchId: action.searchId
            };
        default:
            return state;
    }
}

export const setSearch = (searchId) => ({type: ADD_SEARCH_ID, searchId})

export const search = (searchId) => (dispatch) => {
   dispatch(setSearch(searchId.searchId))
}

export default ticketsReducer;