const ADD_TICKET = "ADD_TICKET";

let initialState = {
    ticket: [
        {id: 1, message: "Hey, hove old do?"},
        {id: 2, message: "Hey,like "},
        {id: 3, message: "Bilabial "},
        {id: 4, message: "Bilabial "},
    ]
    // dialogsData: [
    //     {id: 1, name: "Nasty"},
    //     {id: 2, name: "Denis"},
    //     {id: 3, name: "Nikita"},
    //     {id: 4, name: "Nazar"},
    //     {id: 5, name: "Misha"},
    //     {id: 6, name: "Andrey"}
    // ],
    // messagesData: [
    //     {id: 1, message: "Hi"},
    //     {id: 2, message: "How is your likes?"},
    //     {id: 3, message: "Hi, how are you"},
    //     {id: 4, message: "Like your brother"},
    //     {id: 5, message: "Yo"},
    //     {id: 6, message: "Yo"}
    // ]

}

const ticketsReducer = (state = initialState, action) => {


    switch (action.type) {

        case ADD_TICKET:
            let newPost = {
                id: 5,
                message: action.newPostText,
                numberLike: 5
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        default:
            return state;
    }
}



export default ticketsReducer;