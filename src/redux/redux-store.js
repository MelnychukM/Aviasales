import thunkMiddleware from "redux-thunk"
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import ticketsReducer from "./tickets-reducer";

let reducers = combineReducers({
    tickets: ticketsReducer

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;