import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import ticketsReducer from './tickets-reducer'


let reducers = combineReducers({
    ticketsData: ticketsReducer,

})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

window.store = store