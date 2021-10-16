

const ADD_SEARCH_ID = "ADD_SEARCH_ID";


let initialState = {
    checked: false

}

const filterReducer = (state = initialState, action) => {
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

// export const setSearch = (searchId) => ({type: ADD_SEARCH_ID, searchId})
//
// export const getIndexNumber = () => (dispatch, getState) => {
//     const IndexNumberState = getState().ticketsData.indexNumber
//         let data = IndexNumberState  + 5;
//         dispatch(setIndexNumber(data))
// }


export default filterReducer;